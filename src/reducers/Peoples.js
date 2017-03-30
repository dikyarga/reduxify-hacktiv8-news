export const peopleReducer = (state = [{name: 'Lalala'}], action) => {
  switch (action.type) {
    case 'GET_PEOPLES':
      return action.payload
    default:
      return state
  }
}
