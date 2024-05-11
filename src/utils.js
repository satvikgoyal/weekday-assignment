export const removeSuffix = (value, suffix) => {
    // Check if the value ends with the specified suffix
    if (value.endsWith(suffix)) {
      // Remove the suffix by slicing the string from the beginning to the second-to-last character
      return value.slice(0, -suffix.length);
    } else {
      // Return the original value if it doesn't end with the specified suffix
      return value;
    }
};

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

export function filterOptions(mainArray, filterArray) {
    // Filter out options from mainArray that are present in filterArray
    return mainArray.filter(option => !filterArray.includes(option.value));
}

export function filterJobs({
    roles,
    experience,
    basePay,
    companyName,
    items
}){
    let newItems = [...items];

    if(companyName){
      newItems =  newItems.filter((item) => companyName.toLowerCase() === item.companyName.toLowerCase())
    }

    if(roles.length){
      newItems =  newItems.filter((item) => roles.includes(item.jobRole))
    }

    if(experience.length){
        experience.forEach((exp) => {
            newItems = newItems.filter(item => item.minExp >= exp || item.maxExp >= exp || 0 <= exp)
        })
    }

    if(basePay.length){
        basePay.forEach((pay) => {
            newItems = newItems.filter(item => {
                return convertUSDToINRLPA(item.minJdSalary) >= removeSuffix(pay, 'L') || convertUSDToINRLPA(item.maxJdSalary) >= removeSuffix(pay, 'L');
            })
        })
    }

    return newItems;
}