import { ACTIONS} from "./actions"

const initState = {
    items: [],
    roles: [],
    employeeNumber:[],
    experience: [],
    locations: [],
    techStack: [],
    basePay: [],
    companyName: ''
}

export const jobReducer = (state=initState, action) => {
    switch(action.type){
        case ACTIONS.FETCH_JOBS:
            return {
                ...state,
                items: [...state.items, ...action.payload]
            }
        case ACTIONS.ROLE_UPDATE:
            return{
                ...state,
                roles: [...state.roles, action.payload]
            }
        case ACTIONS.EMPLOYEE_NUMBER_UPDATE:
            return{
                ...state,
                employeeNumber: [...state.employeeNumber, action.payload]
            }
        case ACTIONS.EXPERIENCE_UPDATE:
            return{
                ...state,
                experience: [...state.experience, action.payload]
            }
        case ACTIONS.LOCATIONS_UPDATE:
            return{
                ...state,
                locations: [...state.locations, action.payload]
            }
        case ACTIONS.TECH_STACK_UPDATE:
            return{
                ...state,
                techStack: [...state.techStack, action.payload]
            }
        case ACTIONS.BASE_PAY_UPDATE:
            return{
                ...state,
                basePay: [...state.basePay, action.payload]
            }
        case ACTIONS.COMPANY_NAME_UPDATE:
            return{
                ...state,
                companyName: action.payload
            }
        case ACTIONS.CLEAR_ALL:
            return{
                ...state,
                [action.payload.filterName]: action.payload.filterVal
            }
        default:
            return state
    }
}
