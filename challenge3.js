
// Net Salary Calculator

function calculateNetSalary(basicSalary, benefits) {
    // constant vars to be used
    const personalRelief = 2400;
    const nssfRate = 0.06;
    const shifRate = 0.0275;
    const housingLevyRate = 0.015;

    // Gross Salary
    let grossSalary = basicSalary + benefits;

    //  NSSF Contribution
    let nssfContribution = calculateNSSF(grossSalary); //use nssf function

    // SHIF Contribution
    let shifContribution = grossSalary * shifRate;

    // Calculate PAYE (Income Tax)
    let taxableIncome = grossSalary - nssfContribution;
    let payeTax = calculatePAYE(taxableIncome) - personalRelief; //invoke paye and pass args
    payeTax = Math.max(payeTax, 0); // to avoid negative value

    // Housing Levy
    let housingLevy = grossSalary * housingLevyRate;

    // Calculate Net Salary
    let netSalary = grossSalary - (nssfContribution + shifContribution + payeTax + housingLevy);

    return {
        grossSalary,
        nssfContribution,
        shifContribution,
        payeTax,
        housingLevy,
        netSalary
    };
}

// nssf
function calculateNSSF(salary) {
    const tier1Limit = 8000;
    const maxLimit = 72000;
    const nssfRate = 0.06;

    if (salary <= tier1Limit) {
        return salary * nssfRate;
    } else {
        let tier1Contribution = tier1Limit * nssfRate;
        let tier2Contribution = (Math.min(salary, maxLimit) - tier1Limit) * nssfRate;
        return tier1Contribution + tier2Contribution;
    }
}

// paye tax
function calculatePAYE(income) {
    const taxBrackets = [
        { limit: 24000, rate: 0.1 },
        { limit: 32333, rate: 0.25 },
        { limit: 500000, rate: 0.3 },
        { limit: 800000, rate: 0.325 },
        { limit: Infinity, rate: 0.35 } //Infinity meaning any value above 800,000
    ];

    let tax = 0;
    let previousLimit = 0;

    for (let bracket of taxBrackets) {
        if (income > previousLimit) {
            let taxableAmount = Math.min(income, bracket.limit) - previousLimit;
            tax += taxableAmount * bracket.rate;
            previousLimit = bracket.limit;
        } else {
            break;
        }
    }

    return tax;
}

// test

console.log(calculateNetSalary(55000,11000));

