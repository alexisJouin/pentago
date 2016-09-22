"use strict";

var plateau = new Array(6);
var tmpPlateau = new Array(6);
var i, j;
var lineAdd, columnAdd = 0;

for (i = 0; i < 6; i++) {
    plateau[i] = new Array(6);
    tmpPlateau[i] = new Array(6);
    for (j = 0; j < 6; j++) {
        plateau[i][j] = "empty";
        tmpPlateau[i][j] = "empty";
    }
}

var billeNumber;
var turn = 1;
var player;

var charcodeA = parseInt("a".charCodeAt(0), 0);

function emptyPlateau() {
    billeNumber = 0;
    return billeNumber;
}

function currentPlayer() {
    if (turn % 2 === 1) {
        player = "white";
    } else {
        player = "black";
    }
    return player;
}

function putBille(position) {
    var line, column;
    line = parseInt(position.charAt(1), 0) - 1;
    column = parseInt(position.charCodeAt(0), 0) - charcodeA;

    if (plateau[line][column] === "empty") {
        plateau[line][column] = currentPlayer();
        billeNumber++;
        return true;
    }
    return false;
}

function billeOnPlateau() {
    return billeNumber;
}

function currentPlateau() {
    var line, column;
    line = parseInt(position.charAt(1), 0) - 1;
    column = parseInt(position.charCodeAt(0), 0) - charcodeA;

    for (line ; line < plateau.length; line++) {
        for (var column = 0; column < plateau.length; column++) {
            if(plateau[line][column] !== null || plateau[line][column] !== "" || plateau[line][column] !== 0){
                return plateau[line][column];
            }
        }

    }
}

function replacePlateau() {
    for (i = 0; i < 6; i++) {
        for (j = 0; j < 6; j++) {
            plateau[i][j] = tmpPlateau[i][j];
        }
    }
}


//Rotation
function rotate(l, c) {
    lineAdd = l;
    columnAdd = c;
    tmpPlateau[lineAdd][2 + columnAdd] = plateau[lineAdd][columnAdd];
    tmpPlateau[1 + lineAdd][2 + columnAdd] = plateau[lineAdd][1 + columnAdd];
    tmpPlateau[2 + lineAdd][2 + columnAdd] = plateau[lineAdd][2 + columnAdd];
    tmpPlateau[2 + lineAdd][1 + columnAdd] = plateau[1 + lineAdd][2 + columnAdd];//000000000000000000000
    tmpPlateau[2 + lineAdd][columnAdd] = plateau[2 + lineAdd][2 + columnAdd];
    tmpPlateau[1 + lineAdd][columnAdd] = plateau[2 + lineAdd][1 + columnAdd];
    tmpPlateau[lineAdd][columnAdd] = plateau[2 + lineAdd][columnAdd];
    tmpPlateau[lineAdd][1 + columnAdd] = plateau[1 + lineAdd][columnAdd];
}

function rotateInverse(l, c) {
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
}

function rotateTopLeft(direction) {
    if (direction === "clockwise") {
        rotateInverse(0, 0);
    } else {
        rotate(0, 0);
    }
    replacePlateau();
    turn++;
    return true;
}

function rotateTopRight(direction) {
    if (direction === "clockwise") {
        rotateInverse(0, 3);
    } else {
        rotate(0, 3);
    }
    replacePlateau();
    turn++;
    return true;
}
