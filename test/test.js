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
    assertTrue(e.currentPlateau("a1") === "white");
};

PalettoTestCase.prototype.test4 = function () {
    assertTrue(e.getBilleNumber() === 1);
};

PalettoTestCase.prototype.test5 = function () {
    assertTrue(e.rotateTopLeft("clockwise") === true);
};

PalettoTestCase.prototype.test6 = function () {
    assertTrue(e.currentPlayer() === "black");
};

PalettoTestCase.prototype.test7 = function () {
    assertTrue(e.putBille('a1') === true);
    assertTrue(e.currentPlateau("a1") === "black");
    assertTrue(e.getBilleNumber() === 2);
};

PalettoTestCase.prototype.test8 = function () {
    assertTrue(e.rotateTopLeft("anticlockwise") === true);
    assertTrue(e.getBilleNumber() === 2);
    assertTrue(e.currentPlateau("a1") === "white");

    /* Test Affichage
    console.log("a1 : " + e.currentPlateau("a1"));
    console.log("a3 : " + e.currentPlateau("a3"));
    console.log(e.getPlateau());
    */

};


PalettoTestCase.prototype.test9 = function () {
    assertTrue(e.putBille("a1") === false);
    assertTrue(e.currentPlayer() === "white");
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

    assertTrue(e.getBilleNumber() === 8);

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

PalettoTestCase.prototype.test11 = function () {
    assertTrue(e.currentPlayer() === "white");
    e.putBille("e1");

    assertTrue(e.currentPlayer() === "black");
    e.putBille("e3");

    console.log(e.win());

    console.log(e.getPlateau());
};
