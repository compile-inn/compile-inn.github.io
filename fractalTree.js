// Thanks to iTS FOSS for this great article: 
// https://itsfoss.gitlab.io/post/coding-a-fractal-tree-with-javascript-and-html5/ 

const canvas = document.getElementById("tree");
const ctx = canvas.getContext("2d");

// this function is used to reset the trees color in lightSwitch.js
function getContext() {
    return ctx
}

// solves the pixel ratio issue when displayed on smartphones.
const dpr = window.devicePixelRatio || 1;
// set canvas area
canvas.width = window.innerWidth * 0.7 * dpr; // 80% of viewport width
canvas.height = window.innerHeight * 0.4 * dpr; // 70% of viewport height

// tree parameters
const xA = canvas.width / 2;
const yA = canvas.height - (canvas.height * 0.1); // 90
const trunkLength = canvas.height / 5;  //70
const trunkAngle = Math.PI / 2; // value in radians (PI = 180º so, PI/2 = 90 degrees)
const branchAngle = Math.PI / 6; // value in radians (30 degrees)
const treeMaxDepth = 10;

// Get current theme text color.
const r = document.documentElement;
const treeColor = getComputedStyle(r).getPropertyValue("--txtColor");

ctx.lineWidth = 2;
ctx.strokeStyle = treeColor;

function grow(xA, yA, length, angle, depth, alpha = 1, treeColor) {
    if (depth > treeMaxDepth) {
        return;
    }

    if (alpha!= 1) {
        
        const currentColorRGB = treeColor.match(/\d+/g); // returns a string array
        if (currentColorRGB != null) {

            let newRed = parseInt(currentColorRGB[0], 10); // changes string into a base10 int.
            let newGreen = parseInt(currentColorRGB[1], 10);
            let newBlue = parseInt(currentColorRGB[2], 10);

            //newRed = Math.ceil(newRed * colorIntensity);
            //newGreen = Math.ceil(newGreen * colorIntensity);
            //newBlue = Math.ceil(newBlue * colorIntensity);

            const newTreeColor = `rgba(${newRed}, ${newGreen}, ${newBlue}, ${alpha})`;
            ctx.strokeStyle = newTreeColor;
        } else {
            ctx.strokeStyle = treeColor;
        }
    }


    /*
     Calculate the end point B of the AB vector - the new branch -
     using its coordinates.
     length is the triangle hypothenuse, 
     Sinus of an angle is opposite side / hypothenuse. 
     So sinus of the angle * hypothenuse give us the y coordinate (the opposite side). 
     */
    const xB = xA + length * Math.cos(angle);
    const yB = yA - length * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(xA, yA);
    ctx.lineTo(xB, yB);
    ctx.stroke();
    
    // Parameters for recursive calls
    const newLength = length * 0.75; // Branches get shorter
    const newLineWidth = ctx.lineWidth * 0.8; // Branches get thinner

    ctx.save(); // save current drawing before recursive calls

    // Set new styles for the sub-branches
    ctx.lineWidth = newLineWidth;
    
    // 0º is to the right,
    // so angles increase to the left.
    const leftBranchAngle = angle + branchAngle; 
    const rightBranchAngle = angle - branchAngle; 

    // left branch call
    grow(xB, yB, newLength, leftBranchAngle, depth + 1);
    // right branch call
    grow(xB, yB, newLength, rightBranchAngle, depth + 1);
    // middle branch call
    grow(xB, yB, newLength, angle, depth + 1);
    
    ctx.restore() 	// Restores the previously saved state and attributes
}


ctx.lineWidth = 2;
ctx.strokeStyle = treeColor;

// the little forest parameters
const xA1 = canvas.width / 2.7;
const yA1 = canvas.height - (canvas.height * 0.2); // 90
const trunkLength1 = trunkLength * 0.8; // 40

const xA2 = canvas.width / 1.5;
const yA2 = canvas.height - (canvas.height * 0.2); //130

const xA3 = canvas.width / 3.5;
const yA3 = canvas.height - (canvas.height * 0.2); // 140
const trunkLength3 = trunkLength * 0.7; // 30

const xA4 = canvas.width / 1.3;
const yA4 = canvas.height - (canvas.height * 0.3); // 130
const trunkLength4 = trunkLength * 0.6; //20

export function ohMyTrees() {
    const treeColor = getComputedStyle(r).getPropertyValue("--txtColor");
    ctx.strokeStyle = treeColor;

    ctx.reset();
    grow(xA1, yA1, trunkLength1, trunkAngle, 0, 0.3, treeColor);
    grow(xA2, yA2, trunkLength1, trunkAngle, 0, 0.2, treeColor);
    grow(xA3, yA3, trunkLength3, trunkAngle, 0, 0.1, treeColor);
    grow(xA4, yA4, trunkLength4, trunkAngle, 0, 0.05, treeColor);
    grow(xA, yA, trunkLength, trunkAngle, 0, 0.5, treeColor);
}

ohMyTrees();
//grow(xA, yA, trunkLength, reflectTrunkAngle, 0);
// const reflectTrunkAngle = Math.PI * 1.7;

// use loop to make trees until trunk length arrives at a mininum value.
// each new tree color has less opacity
// each new tree is higher and to the right of the precedent.