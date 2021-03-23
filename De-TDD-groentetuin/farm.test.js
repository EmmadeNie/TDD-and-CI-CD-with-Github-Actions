const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 3,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },ground: {
                low: -10,
                medium: 0,
                high: 30,
            },
        },
    };

    const appel = {
        name: "corn",
        yield: 2,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(appel)).toBe(2);
    });
    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(1.5);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },ground: {
                    low: -10,
                    medium: 0,
                    high: 30,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "low",
            ground: "medium",
            wind: "high"
        };
        expect(getYieldForCrop(input)).toBe(15);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },ground: {
                    low: -10,
                    medium: 0,
                    high: 30,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
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
        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 5  },
        ];
        expect(getTotalYield({ crops })).toBe(25);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },ground: {
                    low: -10,
                    medium: 0,
                    high: 30,
                },
            },
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe ("calculate costs per crop", ()=>{
    const corn = {
        name: "corn",
        yield: 3,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },ground: {
                low: -10,
                medium: 0,
                high: 30,
            },
        },
    };
    const input = { crop: corn, costPerCrop: 2, numCrops: 10 };
    test("",()=>{
        expect(getCostsForCrop(input)).toBe(20)
    })
})

describe ("calculate revenue per crop", ()=>{
    const corn = {
        name: "corn",
        yield: 3,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },ground: {
                low: -10,
                medium: 0,
                high: 30,
            },
        },
    };
    const input = { crop: corn, costPerCrop: 2, numCrops: 10, pricePerKg: 2 };
    test("",()=>{
        expect(getRevenueForCrop(input)).toBe(30)
    })
})

describe ("calculate profit per crop", ()=>{
    const corn = {
        name: "corn",
        yield: 3,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },ground: {
                low: -10,
                medium: 0,
                high: 30,
            },
        },
    };
    const input = { crop: corn, costPerCrop: 2, numCrops: 10, pricePerKg: 2 };
    test("",()=>{
        expect(getProfitForCrop(input)).toBe(10)
    })
})



describe ("calculate tot profit with multiple crops", ()=>{
    const corn = {
        name: "corn",
        yield: 3,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },ground: {
                low: -10,
                medium: 0,
                high: 30,
            },
        },
    };
    const pumpkin = {
        name: "pumpkin",
        yield: 4,
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
    const crops = [
        { crop: corn, numCrops: 5, costPerCrop: 2,  pricePerKg: 2 },
        { crop: pumpkin, numCrops: 2 , costPerCrop: 2,  pricePerKg: 4 },
    ];
    test("",()=>{
        expect(getTotalProfit({ crops})).toBe(17)
    })
})
