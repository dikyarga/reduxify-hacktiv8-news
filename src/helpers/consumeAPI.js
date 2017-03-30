module.exports = {
  getPeople: () => {
    axios.get('http://swapi.co/api/people/').then((response) => {
      console.log('response : ', response.data.results);
      return response.data.results
      console.log(response.data.results);
    }).catch((error) => {
      console.log(error);
    })
  }
}
