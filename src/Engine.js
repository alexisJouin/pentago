"use strict";
var Engine = function () {

    var plateau = new Array(6), tmpPlateau = new Array(6);
    var ligne, colonne, ligneAdd, colonneAdd = 0;

    for (ligne = 0; ligne < 6; ligne += 1) {

        plateau[ligne] = new Array(6);
        tmpPlateau[ligne] = new Array(6);
        for (colonne = 0; colonne < 6; colonne += 1) {
            plateau[ligne][colonne] = "vide";
            tmpPlateau[ligne][colonne] = "vide";
        }
    }

    var billeNumber, turn = 1, player, charcodeA = parseInt("a".charCodeAt(0), 0);

    this.videPlateau = function () {
        billeNumber = 0;
        return billeNumber;
    };

    this.currentPlayer = function () {
        if (turn % 2 === 1) {
            player = "white";
        } else {
            player = "black";
        }
        return player;
    };

    this.putBille = function (position) {
        var line, column;
        line = parseInt(position.charAt(1), 0) - 1;
        column = parseInt(position.charCodeAt(0), 0) - charcodeA;

        if (plateau[line][column] === "vide") {
            plateau[line][column] = this.currentPlayer();
            billeNumber += 1;
            turn += 1;
            return true;
        }
        return false;
    };

    this.currentPlateau = function (position) {
        var line, column;
        line = parseInt(position.charAt(1), 0) - 1;
        column = parseInt(position.charCodeAt(0), 0) - charcodeA;

        /*
         for (line ; line < plateau.length; line++) {
         for (var column = 0; column < plateau.length; column++) {
         if(plateau[line][column] !== null || plateau[line][column] !== "" || plateau[line][column] !== 0){*/
        return plateau[line][column];

    };

    this.replacePlateau = function () {
        for (ligne = 0; ligne < 6; ligne += 1) {
            for (colonne = 0; colonne < 6; colonne += 1) {
                plateau[ligne][colonne] = tmpPlateau[ligne][colonne];
            }
        }
    };


//Rotation
    this.rotate = function (l, c) {
        ligneAdd = l;
        colonneAdd = c;
        tmpPlateau[ligneAdd][2 + colonneAdd] = plateau[ligneAdd][colonneAdd];
        tmpPlateau[1 + ligneAdd][2 + colonneAdd] = plateau[ligneAdd][1 + colonneAdd];
        tmpPlateau[2 + ligneAdd][2 + colonneAdd] = plateau[ligneAdd][2 + colonneAdd];
        tmpPlateau[2 + ligneAdd][1 + colonneAdd] = plateau[1 + ligneAdd][2 + colonneAdd];
        tmpPlateau[2 + ligneAdd][colonneAdd] = plateau[2 + ligneAdd][2 + colonneAdd];
        tmpPlateau[1 + ligneAdd][colonneAdd] = plateau[2 + ligneAdd][1 + colonneAdd];
        tmpPlateau[ligneAdd][colonneAdd] = plateau[2 + ligneAdd][colonneAdd];
        tmpPlateau[ligneAdd][1 + colonneAdd] = plateau[1 + ligneAdd][colonneAdd];
    };

    this.rotateInverse = function (l, c) {
        ligneAdd = l;
        colonneAdd = c;
        tmpPlateau[ligneAdd][colonneAdd] = plateau[ligneAdd][2 + colonneAdd];
        tmpPlateau[ligneAdd][1 + colonneAdd] = plateau[1 + ligneAdd][2 + colonneAdd];
        tmpPlateau[ligneAdd][2 + colonneAdd] = plateau[2 + ligneAdd][2 + colonneAdd];
        tmpPlateau[1 + ligneAdd][2 + colonneAdd] = plateau[2 + ligneAdd][1 + colonneAdd];
        tmpPlateau[2 + ligneAdd][2 + colonneAdd] = plateau[2 + ligneAdd][colonneAdd];
        tmpPlateau[2 + ligneAdd][1 + colonneAdd] = plateau[1 + ligneAdd][colonneAdd];
        tmpPlateau[2 + ligneAdd][colonneAdd] = plateau[ligneAdd][colonneAdd];
        tmpPlateau[1 + ligneAdd][colonneAdd] = plateau[ligneAdd][1 + colonneAdd];
    };

    this.rotateTopLeft = function (direction) {
        if (direction === "clockwise") {
            this.rotate(0, 0);
        } else {
            this.rotateInverse(0, 0);
        }
        this.replacePlateau();
        //turn += 1;
        return true;
    };

    this.rotateTopRight = function (direction) {
        if (direction === "clockwise") {
            this.rotate(0, 3);
        } else {
            this.rotateInverse(0, 3);
        }
        this.replacePlateau();
        //turn += 1;
        return true;
    };


    this.rotateBotLeft = function (direction) {
        if (direction === "clockwise") {
            this.rotate(3, 0);
        } else {
            this.rotateInverse(3, 0);
        }
        this.replaceBoard();
       //turn += 1;
        return true;
    };

    this.rotateBotRight = function (direction) {
        if (direction === "clockwise") {
            this.rotate(3, 3);
        } else {
            this.rotateInverse(3, 3);
        }
        //turn += 1;
        return true;
    };

    this.win = function () {
        ligne =  0;
        colonne =  0;
        var compteur = 0;

        for (ligne; ligne < 6; ligne += 1) {
            if ((plateau[ligne][colonne] && plateau[ligne][colonne + 1] && plateau[ligne][colonne + 2] && plateau[ligne][colonne + 3] && plateau[ligne][colonne + 4]) === this.currentPlayer()) {
                return "Player " + this.currentPlayer() + " WIN !";
            }
            for (colonne; colonne < 6; colonne += 1) {
                if ((plateau[ligne][colonne] && plateau[ligne + 1][colonne] && plateau[ligne + 2][colonne] && plateau[ligne + 3][colonne] && plateau[ligne + 4][colonne]) === this.currentPlayer()) {
                    return "Player " + this.currentPlayer() + " WIN !";
                }
            }
        }
    };




    this.getPlateau = function () {
        return plateau;
    };

    this.getBilleNumber = function () {
        return billeNumber;
    };
};
