// This file calculates quantities on two days to prepare poolish bread.

// const values are set by gram.
const hydrometry = 0.7;
const saltiness = 0.018;
const population = 0.005

function getRecipePoolish() {

    let flour = document.getElementById("flourQty").value; // to be set by user.
    let water = Math.ceil(flour * hydrometry);

    let waterDay1 = water / 2;
    let waterDay2 = water / 2;
    
    let flourDay1 = waterDay1;
    let flourDay2 = flour - waterDay1;    

    let dryYeast = Math.ceil(flour * population)

    let dryYeastDay1 = dryYeast * 0.125;
    let dryYeastday2 = dryYeast - dryYeastDay1;
    
    let salt = Math.ceil(flour * saltiness * 10) / 10;

    // Quantities for day 1
    document.getElementById("flourDay1").innerHTML = flourDay1 + " g";
    document.getElementById("waterDay1").innerHTML = waterDay1 + " g";
    document.getElementById("yeastDay1").innerHTML = dryYeastDay1 + " g";
    
    // Quantities for day 2
    document.getElementById("flourDay2").innerHTML = flourDay2 + " g";
    document.getElementById("waterDay2").innerHTML = waterDay2 + " g";
    document.getElementById("salt").innerHTML = salt + " g";
    document.getElementById("yeastDay2").innerHTML = dryYeastday2 + " g";
}