//                                   Euclidean Distance Program

//         EUCLIDEAN DISTANCE FORMULA: d([x1,y1],[x2,y2]) => sqrt((x1 - x2)**2 + (y1-y2)**2)

//----------------------------------------------PROGRAM-TEST-DATA----------------------------------------------------------------
//Initiate Array's holding x and y co-ordinates (DATA-POINTS)
const arrayX = [
  // x-co-ordinates
  81, 138, 127, 76, 21, 110, 79, 150, 80, 3, 127, 90, 122, 33, 37, 53, 68, 4,
  35, 73, 92, 80, 62, 147, 66, 87, 27, 76, 95, 21, 108, 14, 67, 36, 136, 72, 29,
  77, 61, 54, 128, 12, 17, 69, 66, 146, 150, 90, 24, 38,
];
const arrayY = [
  // y-co-ordinates
  10, 95, 150, 83, 143, 93, 103, 17, 38, 132, 56, 106, 49, 122, 88, 140, 76,
  147, 10, 20, 116, 35, 51, 8, 100, 102, 16, 22, 11, 52, 20, 48, 26, 13, 79, 19,
  18, 98, 45, 23, 78, 119, 77, 107, 61, 82, 107, 134, 118, 35,
];
//Centroid 1 | Co - ordinates (x|y co-ordinates)
const cX2 = 23;
const cY2 = 34;
//Centroid 2 | Co - ordinates (x|y co-ordinates)
const cX3 = 23;
const cY3 = 45;
//-------------------------------------------------------------------------------------------------------------
//Initiate empty lists for holding specific sequential calculations of the program | CENTROID-1 Calculations
let emptyArrA = [];
let emptyArrB = [];
let emptyArrC = [];
let sQrT = []; //this empty-List will hold the square root values of the final calculations
//CENTROID-2 Calculations
let emptyArrA2 = [];
let emptyArrB2 = [];
let emptyArrC2 = [];
let sQrT2 = []; //this empty-List will hold the square root values of the final calculations
//-------------------------------------------------------------------------------------------------------------

/*
//                               Euclidean Distance Program
for (let i = 0; i < arrayX.length; i++) {
  // for loop inititiation - initial value of counter; logical condition evaluated before each iteration of the for loop
  emptyArrA.push((arrayX[i] - cX2) ** 2); //push() method adds new items to the end of an array
  emptyArrB.push((arrayY[i] - cY2) ** 2);
  emptyArrC.push(emptyArrA[i] + emptyArrB[i]);
  sQrT.push(Math.sqrt(emptyArrC[i])); //Math.sqrt() method returns the square root of a number
}
console.log(`Euclidean-Distance-Calculations-Centorid-1`);
console.log(sQrT);
for (let i = 0; i < arrayY.length; i++) {
  emptyArrA2.push((arrayX[i] - cX3) ** 2);
  emptyArrB2.push((arrayY[i] - cY3) ** 2);
  emptyArrC2.push(emptyArrA2[i] + emptyArrB2[i]);
  sQrT2.push(Math.sqrt(emptyArrC2[i]));
}
console.log(`Euclidean-Distance-Calculations-Centroid-2`);
console.log(sQrT2);
*/

//                              EUCLIDEAN DISTANCE PROGRAM / FUNCTION
const euclideanDistance = function (X, Y) {
  // X&Y will represent arrays that will be passed into FUNCTION paramaeters (X,Y)
  for (let i = 0; i < X.length; i++) {
    // for loop inititiation - initial value of counter; logical condition evaluated before each iteration of the for loop
    emptyArrA.push((X[i] - cX2) ** 2); //push() method adds new items to the end of an array
    emptyArrB.push((Y[i] - cY2) ** 2);
    emptyArrC.push(emptyArrA[i] + emptyArrB[i]);
    sQrT.push(Math.sqrt(emptyArrC[i])); //Math.sqrt() method returns the square root of a number
  }
  console.log(`Euclidean-Distance-Calculations-Centorid-1 ${sQrT}`);
  for (let i = 0; i < Y.length; i++) {
    emptyArrA2.push((X[i] - cX3) ** 2);
    emptyArrB2.push((Y[i] - cY3) ** 2);
    emptyArrC2.push(emptyArrA2[i] + emptyArrB2[i]);
    sQrT2.push(Math.sqrt(emptyArrC2[i]));
  }
  console.log(`Euclidean-Distance-Calculations-Centroid-2 ${sQrT2}`);
};
//FUNCTION TESTING
console.log("Euclidean-Distance-Function-Testing");
console.log(euclideanDistance(arrayX, arrayY));
