const pumpkin = {
    name: "pumpkin",
    yield: 40,
    factors: {
        sun: {
            low: -50,
            medium: 0,
            high: 50,
        },rain: {
            low: -20,
            medium: 0,
            high: 20,
        },
    },
};

const getYieldForPlant = (crop)=> {
    //For refactoring getEnvironmentFactors dynamic
    const environmentFactors = {
        sun: "low",
        ground: "medium",
        wind: "high"
    };
if (crop.factors) {
    let factors = [];
    Object.keys(crop.factors).forEach(key=> {
        // console.log(key, environmentFactors[key])
        if (environmentFactors[key]){
            let percentage = crop.factors[key][environmentFactors[key]];
       factors.push((100 + percentage)/ 100)}
    })
    let yieldCrop = crop.yield
    factors.forEach(factor => {
        if (factor === 0) {
            return}
        yieldCrop *= factor
    });
    // console.log(yieldCrop)
    return yieldCrop} else {
    return crop.yield}

}


getYieldForPlant(pumpkin)

const getYieldForCrop = (input)=> {
    return input.numCrops * getYieldForPlant(input.crop)
}
const getTotalYield = (cropsObject)=> {
    let totalYield = 0;
    cropsObject.crops.forEach(crop=> {
        totalYield += getYieldForCrop(crop)
    });
    return totalYield}

    const getCostsForCrop = (input)=> input.numCrops*input.costPerCrop

const getRevenueForCrop = (input)=>getYieldForCrop(input)*input.pricePerKg

const getProfitForCrop = (input)=> getRevenueForCrop(input) - getCostsForCrop(input)

const getTotalProfit = (cropsObject)=> {
    let totalProfit = 0
    cropsObject.crops.forEach(crop=> {
        totalProfit += getProfitForCrop(crop)
    }); return totalProfit
}


module.exports = {getYieldForPlant, getYieldForCrop,getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit  }