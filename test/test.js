'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");


PalettoTestCase = TestCase("TestCase");

var e = new Engine();


PalettoTestCase.prototype.test1 = function () {
    assertTrue(e.videPlateau() === 0);
};

PalettoTestCase.prototype.test2 = function () {
    assertTrue(e.currentPlayer() === "white");
};

PalettoTestCase.prototype.test3 = function () {
    assertTrue(e.putBille("a1") === true);
};

PalettoTestCase.prototype.test4 = function () {
    assertTrue(e.billeOnPlateau() === 1);
};

PalettoTestCase.prototype.test5 = function () {
    assertTrue(e.rotateTopLeft("clockwise") === true);
};

PalettoTestCase.prototype.test6 = function () {
    assertTrue(e.currentPlayer() === "black");// Joueur actuel est le Jnoir
};

PalettoTestCase.prototype.test7 = function () {
    assertTrue(e.putBille('a1') === true); //J NOIR place une bille en a1
    assertTrue(e.billeOnPlateau() === 2); //Il doit y avoir 2 billes sur le plateau
};

PalettoTestCase.prototype.test8 = function () {
    assertTrue(e.rotateTopLeft("anticlockwise") === true); //Rotation antiHorraire
    assertTrue(e.billeOnPlateau() === 2); //Rotation antiHorraire
    assertTrue(e.currentPlateau("a1") === "white");

    /* Test Affichage
    console.log("a1 : " + e.currentPlateau("a1"));
    console.log("a3 : " + e.currentPlateau("a3"));
    console.log(e.getPlateau());
    */

};


PalettoTestCase.prototype.test9 = function () {

    assertTrue(e.putBille("a1") === false); //On ne peut pas mettre en a1 car il y'a déjà une bille
    assertTrue(e.currentPlayer() === "white"); //La main est toujours au joueur Blanc
};


PalettoTestCase.prototype.test10 = function () {

    assertTrue(e.currentPlayer() === "white");
    e.putBille("b1");
    e.rotateTopLeft("clockwise");

    assertTrue(e.currentPlayer() === "black");
    e.putBille("a2");
    e.rotateTopLeft("anticlockwise");

    assertTrue(e.currentPlayer() === "white");
    e.putBille("c1");
    e.rotateTopLeft("clockwise");

    assertTrue(e.currentPlayer() === "black");
    e.putBille("a3");
    e.rotateTopLeft("anticlockwise");

    assertTrue(e.currentPlayer() === "white");
    e.putBille("d1");
    e.rotateTopRight("anticlockwise");

    assertTrue(e.currentPlayer() === "black");
    e.putBille("f3");
    e.rotateTopRight("clockwise");

    assertTrue(e.billeOnPlateau() === 8);

    assertTrue(e.currentPlateau("a1") === "white");
    assertTrue(e.currentPlateau("b1") === "white");
    assertTrue(e.currentPlateau("c1") === "white");
    assertTrue(e.currentPlateau("d1") === "white");

    assertTrue(e.currentPlateau("a3") === "black");
    assertTrue(e.currentPlateau("b3") === "black");
    assertTrue(e.currentPlateau("c3") === "black");
    assertTrue(e.currentPlateau("d3") === "black");

    //console.log(e.getPlateau());
};
