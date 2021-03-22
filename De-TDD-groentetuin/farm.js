const getYieldForPlant = (crop)=> crop.yield
const getYieldForCrop = (input)=> {
    return input.numCrops * getYieldForPlant(input.crop)
}
const getTotalYield = (cropsObject)=> {
    let totalYield = 0;
    cropsObject.crops.forEach(crop=> {
        totalYield += getYieldForCrop(crop)
    });
    return totalYield}

    const getCostsForCrop = ()=> {}

module.exports = {getYieldForPlant, getYieldForCrop,getTotalYield, getCostsForCrop  }