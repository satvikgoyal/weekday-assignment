export const BASE_PAY_FILTER = {
    label: 'Min Base Pay',
    options: [
      {name: '10L', value: '10L'},
      {name: '20L', value: '20L'},
      {name: '30L', value: '30L'},
      {name: '40L', value: '40L'},
      {name: '50L', value: '50L'},
      {name: '60L', value: '60L'},
      {name: '70L', value: '70L'},
    ]
}

export const COMPANY_FILTER = {
    label: 'No Of Employees',
    options: [
      {name: '1-10', value: '1-10'},
      {name: '11-20', value: '11-20'},
      {name: '50-100', value: '50-100'},
      {name: '100-150', value: '100-150'}
    ]
}

export const EXPERIENCE_FILTER = {
    label: 'Experience',
    options: [
        {name: '1', value: '1'},
        {name: '2', value: '2'},
        {name: '3', value: '3'},
        {name: '4', value: '4'},
        {name: '5', value: '5'},
        {name: '6', value: '6'},
        {name: '7', value: '7'},
        {name: '8', value: '8'},
        {name: '9', value: '9'},
    ]
}

export const REMOTE_FILTER = {
    label: 'Remote',
    options: [
      {name: 'Hybrid', value: 'hybrid'},
      {name: 'Remote', value: 'remote'},
      {name: 'In-office', value: 'in-office'}
    ]
}

export const ROLES_FILTER = {
    label: 'Roles',
    options: [
        {name: 'Frontend', value: 'frontend'},
        {name: 'Backend', value: 'backend'},
        {name: 'Fullstack', value: 'fullstack'},
        {name: 'Android', value: 'android'},
        {name: 'Ios', value: 'ios'},
        {name: 'Tech lead', value: 'tech lead'},
    ]
}

export const TECH_STACK_FILTER = {
    label: 'Tech Stack',
    options: [
        {name: 'Java', value: 'java'},
        {name: 'Ruby', value: 'ruby'},
        {name: 'Golang', value: 'golang'},
        {name: 'Javascript', value: 'javascript'},
        {name: 'C++', value: 'c++'},
        {name: 'HTML', value: 'html'},
        {name: 'CSS', value: 'css'},
    ]
}

export const EMPLOYEE_FILTER = {
    label: 'No Of Employees',
    options: [
      {name: '1-10', value: '1-10'},
      {name: '11-20', value: '11-20'},
      {name: '50-100', value: '50-100'},
      {name: '100-150', value: '100-150'}
    ]
}

/**Threshold for scroll behaviour,
 * so that if the scroll reached the nearest threshold value,
 * api will fetch the new data again
 * */
export const SCROLL_THRESHOLD = 10;
