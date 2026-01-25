// This files calculates quantities for bread using yeast directly.

// const values are set by gram.
const hydration = 0.7;
const saltiness = 0.018;
const sourDoughRatio = 0.25;
const sourDoughHydration = 0.5; // 100% of hydration

function getSourDoughRecipe() {
    let flour = parseInt(document.getElementById("flourQty").value); // to be set by user.
    let sourDough = flour * sourDoughRatio;
    let flourInSourDough = sourDough * (1 - sourDoughHydration);
    let waterInSourDough = sourDough * sourDoughHydration;
    let totalFlour = flour + flourInSourDough;
    let water = Math.ceil(totalFlour * hydration - waterInSourDough);
    let salt = Math.ceil(totalFlour * saltiness * 10) / 10;
    
    document.getElementById("flour").innerHTML = flour + " g";
    document.getElementById("water").innerHTML = water + " g";
    document.getElementById("salt").innerHTML = salt + " g";
    document.getElementById("sourDough").innerHTML = sourDough + " g";
}