// This files calcules quantities for bread using yeast directly.

// const values are set by gram.
const hydrometry = 0.7;
const saltiness = 0.018;
const population = 0.005
const weightByCm = 11.5;

function getRecipePizza() {
    var numberOfPizza = document.getElementById("numberOfPizza").value;
    var pizzaDiameter = document.getElementById("pizzaDiameter").value;
    var flour = document.getElementById("flourQty").valueAsNumber; // to be set by user.
    var doughWeight;
    var water;

    if (numberOfPizza !== "" && pizzaDiameter !== "") {
        doughWeight = numberOfPizza * pizzaDiameter * weightByCm;
        flour = Math.ceil(doughWeight / (1 + hydrometry));
        water = Math.ceil(flour * hydrometry);
        document.getElementById("flour").innerHTML = flour + " g";
        document.getElementById("water").innerHTML = water + " g";
        console.log("numberofpizza is " + numberOfPizza);
        console.log("pizzadiameter is " + pizzaDiameter);
        console.log("if");
    } else {
        water = Math.ceil(flour * hydrometry);
        console.log("else");
    };

    var salt = Math.ceil(flour * saltiness * 10) / 10;
    var dryYeast = Math.ceil(flour * population);
    var oliveOil = Math.ceil(flour * 0.03 * 10) / 10; // 3 percent of the flour weight
    var total = Math.floor(flour + water + salt + dryYeast + oliveOil);
    var weightByPizza = (numberOfPizza != "") ? Math.ceil(total / numberOfPizza) : NaN;

    console.log("flour is " + flour);
    
    document.getElementById("flour").innerHTML = flour + " g";
    document.getElementById("water").innerHTML = water + " g";
    document.getElementById("salt").innerHTML = salt + " g";
    document.getElementById("yeast").innerHTML = dryYeast + " g";
    document.getElementById("oliveOil").innerHTML = oliveOil + " g";

    document.getElementById("total").innerHTML = total + " g";
    document.getElementById("weightByPizza").innerHTML = (weightByPizza != "") ? weightByPizza + " g" : "";
}

//Flour = Dough weight / (100% of flour + 70% of water)
//Water = flour * water percentage 

// Make dough recipe from number of pizza and their diameter.
// let numberOfPizza = document.getElementById("numberOfPizza").value;
// let pizzaDiameter = document.getElementById("pizzaDiameter").value;
// let doughWeight = numberOfPizza * pizzaDiameter * 11.5;
// let flour2 = doughWeight / 1.7; // for 70% hydrometry
// let water2 = flour2 * 0.7;
// display weight by pizza for easier shaping. doughWeight / numberOfPizza