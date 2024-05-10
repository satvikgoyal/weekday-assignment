export function convertUSDToINRLPA(amountUSD) {
    // Convert USD to INR
    const amountINR = amountUSD * 1000 * 80;
    // Convert INR to LPA (Lakh Per Annum)
    const amountLPA = amountINR / 100000;

    return amountLPA;
}

export const getSalary = (item) => {
    const {minJdSalary, maxJdSalary} = item
    if(minJdSalary && maxJdSalary){
        return `${convertUSDToINRLPA(minJdSalary)}LPA - ${convertUSDToINRLPA(maxJdSalary)}LPA`
    }else if(minJdSalary){
        return `${convertUSDToINRLPA(minJdSalary)}LPA`
    }else{
        return `${convertUSDToINRLPA(maxJdSalary)}LPA`
    }
}

export const redirectToJobLink = (jdLink) => {
    window.location = jdLink
}
