export const newsReducer = (state = [{url: 'https://udin.us', title: 'lalal'}], action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return action.payload
    default:
      return state
  }
}
