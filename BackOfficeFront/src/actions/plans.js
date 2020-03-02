export const GET_PLANS = 'GET_PLANS';
export const GET_PLANS_SUCCESS = 'GET_PLANS_SUCCESS';
export const GET_PLANS_FAILED = 'GET_PLANS_FAILED';

export function getPlans() {
  return { type: GET_PLANS };
}