import routes from "./modules/routes.js";

/*** Fetching data -> refactor into module later ***/
// const main = document.querySelector('main');

async function fetchData(){
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
let query = window.location.hash.substring(1);
// query = query.substring(1)
const key = '76f45dfa187d66be5fd6af05573eab04';
const secret = '2cb15758acac08d6ebe6f5ac7a293d69';
const detail = 'Default';
const refine = 'false'
const facet = 'language(dut)'
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json&p=jeugd&refine=${refine}&facet=${facet}`;

const config = {
  Authorization: `Bearer ${secret}`
};




const response = await fetch(url, config)

const jsonData = await response.json()

console.log(jsonData)
return jsonData


// fetch(url, config)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data)
//     localStorage.setItem("Tolkien", JSON.stringify(data))

//     // render(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

}

routes.SetRoutes()
// }
export default {fetchData}