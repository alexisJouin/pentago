'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase = TestCase("TestCase");

PalettoTestCase.prototype.test1 = function () {
    assertTrue(videPlateau() === 0);
};

PalettoTestCase.prototype.test2 = function () {
    assertTrue(currentPlayer() === "white");
};

PalettoTestCase.prototype.test3 = function () {
    assertTrue(putBille("a1") === true);
};

PalettoTestCase.prototype.test4 = function () {
    assertTrue(billeOnPlateau() === 1);
};

PalettoTestCase.prototype.test5 = function () {
    assertTrue(rotateTopLeft("clockwise") === true);
};

PalettoTestCase.prototype.test6 = function () {
    assertTrue(currentPlayer() === "black");// Joueur actuel est le Jnoir
};

PalettoTestCase.prototype.test7 = function () {
    assertTrue(putBille('a1') === true); //J NOIR place une bille en a1
    assertTrue(billeOnPlateau() === 2); //Il doit y avoir 2 billes sur le plateau
};

PalettoTestCase.prototype.test8 = function () {
    assertTrue(rotateTopLeft("anticlockwise") === true); //Rotation antiHorraire
    assertTrue(billeOnPlateau() === 2); //Rotation antiHorraire
    //assertTrue(currentPlateau("a1") === "white");

    console.log(currentPlateau("a1"));
    console.log(currentPlateau("a3"));
    console.log(currentPlateau("c1"));

    console.log(plateau);



};



PalettoTestCase.prototype.test9 = function () {

    assertTrue(putBille("a1") === false); //On ne peut pas mettre en a1 car il y'a déjà une bille
    assertTrue(currentPlayer() === "white"); //La main est toujours au joueur Blanc
};

