"use strict";
var Engine = function () {

    // private attributes and methods
    var plateau = new Array(6), tmpPlateau = new Array(6);
    var i, j, lineAdd, columnAdd = 0;

    for (i = 0; i < 6; i++) {
        plateau[i] = new Array(6);
        tmpPlateau[i] = new Array(6);
        for (j = 0; j < 6; j++) {
            plateau[i][j] = "vide";
            tmpPlateau[i][j] = "vide";
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
            billeNumber++;
            return true;
        }
        return false;
    };

    this.billeOnPlateau = function () {
        return billeNumber;
    };

// retourne la couleur de la position
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
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 6; j++) {
                plateau[i][j] = tmpPlateau[i][j];
            }
        }
    };


//Rotation
    this.rotate = function (l, c) {
        lineAdd = l;
        columnAdd = c;
        tmpPlateau[lineAdd][2 + columnAdd] = plateau[lineAdd][columnAdd];
        tmpPlateau[1 + lineAdd][2 + columnAdd] = plateau[lineAdd][1 + columnAdd];
        tmpPlateau[2 + lineAdd][2 + columnAdd] = plateau[lineAdd][2 + columnAdd];
        tmpPlateau[2 + lineAdd][1 + columnAdd] = plateau[1 + lineAdd][2 + columnAdd];
        tmpPlateau[2 + lineAdd][columnAdd] = plateau[2 + lineAdd][2 + columnAdd];
        tmpPlateau[1 + lineAdd][columnAdd] = plateau[2 + lineAdd][1 + columnAdd];
        tmpPlateau[lineAdd][columnAdd] = plateau[2 + lineAdd][columnAdd];
        tmpPlateau[lineAdd][1 + columnAdd] = plateau[1 + lineAdd][columnAdd];
    };

    this.rotateInverse = function (l, c) {
        lineAdd = l;
        columnAdd = c;
        tmpPlateau[lineAdd][columnAdd] = plateau[lineAdd][2 + columnAdd];
        tmpPlateau[lineAdd][1 + columnAdd] = plateau[1 + lineAdd][2 + columnAdd];
        tmpPlateau[lineAdd][2 + columnAdd] = plateau[2 + lineAdd][2 + columnAdd];
        tmpPlateau[1 + lineAdd][2 + columnAdd] = plateau[2 + lineAdd][1 + columnAdd];
        tmpPlateau[2 + lineAdd][2 + columnAdd] = plateau[2 + lineAdd][columnAdd];
        tmpPlateau[2 + lineAdd][1 + columnAdd] = plateau[1 + lineAdd][columnAdd];
        tmpPlateau[2 + lineAdd][columnAdd] = plateau[lineAdd][columnAdd];
        tmpPlateau[1 + lineAdd][columnAdd] = plateau[lineAdd][1 + columnAdd];
    };

    this.rotateTopLeft = function (direction) {
        if (direction === "clockwise") {
            this.rotateInverse(0, 0);
        } else {
            this.rotate(0, 0);
        }
        this.replacePlateau();
        turn += 1;
        return true;
    };

    this.rotateTopRight = function (direction) {
        if (direction === "clockwise") {
            this.rotateInverse(0, 3);
        } else {
            this.rotate(0, 3);
        }
        this.replacePlateau();
        turn += 1;
        return true;
    };


    this.getPlateau = function () {
        return plateau;
    };
}
