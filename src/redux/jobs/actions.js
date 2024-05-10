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

export const updateJobs = (items) => {
    return {
        type: ACTIONS.FETCH_JOBS,
        payload: items
    }
}

export const updateRoles = (role) => {
    return {
        type: ACTIONS.ROLE_UPDATE,
        payload: role
    }
}

export const updateEmployeeNumbers = (employeeNumber) => {
    return {
        type: ACTIONS.EMPLOYEE_NUMBER_UPDATE,
        payload: employeeNumber
    }
}

export const updateExperience = (experience) => {
    return {
        type: ACTIONS.EXPERIENCE_UPDATE,
        payload: experience
    }
}

export const updateLocations = (location) => {
    return {
        type: ACTIONS.LOCATIONS_UPDATE,
        payload: location
    }
}

export const updateTechStacks = (techStack) => {
    return {
        type: ACTIONS.TECH_STACK_UPDATE,
        payload: techStack
    }
}

export const updateBasePay = (experience) => {
    return {
        type: ACTIONS.BASE_PAY_UPDATE,
        payload: experience
    }
}

export const updateCompanyName = (companyName) => {
    return {
        type: ACTIONS.COMPANY_NAME_UPDATE,
        payload: companyName
    }
}

export const clearFilter = (filterName, filterVal) => {
    return{
        type: ACTIONS.CLEAR_ALL,
        payload: {
            filterName,
            filterVal
        }
    }
}