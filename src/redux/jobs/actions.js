//declaring action types
export const ACTIONS = {
    FETCH_JOBS: 'FETCH_JOBS',
    ROLE_UPDATE: 'ROLE_UPDATE',
    EMPLOYEE_NUMBER_UPDATE: 'EMPLOYEE_NUMBER_UPDATE',
    EXPERIENCE_UPDATE: 'EXPERIENCE_UPDATE',
    LOCATIONS_UPDATE: 'LOCATIONS_UPDATE',
    TECH_STACK_UPDATE: 'TECH_STACK_UPDATE',
    BASE_PAY_UPDATE: 'BASE_PAY_UPDATE',
    COMPANY_NAME_UPDATE: 'COMPANY_NAME_UPDATE',
    CLEAR_ALL: 'CLEAR_ALL'
};

//set jobs fetched from api
export const updateJobs = (items) => {
    return {
        type: ACTIONS.FETCH_JOBS,
        payload: items
    }
}

//roles selected via multiselect filter
export const updateRoles = (role) => {
    return {
        type: ACTIONS.ROLE_UPDATE,
        payload: role
    }
}

//employee selected via multiselect filter
export const updateEmployeeNumbers = (employeeNumber) => {
    return {
        type: ACTIONS.EMPLOYEE_NUMBER_UPDATE,
        payload: employeeNumber
    }
}

//experience selected via multiselect filter
export const updateExperience = (experience) => {
    return {
        type: ACTIONS.EXPERIENCE_UPDATE,
        payload: experience
    }
}

//location selected via multiselect filter
export const updateLocations = (location) => {
    return {
        type: ACTIONS.LOCATIONS_UPDATE,
        payload: location
    }
}

//techstack selected via multiselect filter
export const updateTechStacks = (techStack) => {
    return {
        type: ACTIONS.TECH_STACK_UPDATE,
        payload: techStack
    }
}

//basepay selected via multiselect filter
export const updateBasePay = (experience) => {
    return {
        type: ACTIONS.BASE_PAY_UPDATE,
        payload: experience
    }
}

//company selected via filter
export const updateCompanyName = (companyName) => {
    return {
        type: ACTIONS.COMPANY_NAME_UPDATE,
        payload: companyName
    }
}


//clearing the whole filter
export const clearFilter = (filterName, filterVal) => {
    return{
        type: ACTIONS.CLEAR_ALL,
        payload: {
            filterName,
            filterVal
        }
    }
}