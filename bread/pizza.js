// This files calcules quantities for bread using yeast directly.

// const values are set by gram.
const hydrometry = 0.7;
const saltiness = 0.018;
const population = 0.005


function getRecipePizza() {
    let flour = document.getElementById("flourQty").value; // to be set by user.
    let water = Math.ceil(flour * hydrometry);
    let salt = Math.ceil(flour * saltiness * 10) / 10;
    let dryYeast = Math.ceil(flour * population);
    let oliveOil = Math.ceil(flour * 0.03 * 10) / 10; // 3 percent of the flour weight
    
    document.getElementById("flour").innerHTML = flour + " g";
    document.getElementById("water").innerHTML = water + " g";
    document.getElementById("salt").innerHTML = salt + " g";
    document.getElementById("yeast").innerHTML = dryYeast + " g";
    document.getElementById("oliveOil").innerHTML = oliveOil + " g";
}