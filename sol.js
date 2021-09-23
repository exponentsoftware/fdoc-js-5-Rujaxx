fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then((data) => {
    numOfLangs(data)
      })
  .catch(err => console.log('err',err))


function numOfLangs(countriesData){
  let countries = countriesData;
  let newArr = []
  countries.forEach((country) => {
    let lang = country.languages
    lang.forEach((name) =>{
      let x = name.name;
      if(!newArr.includes(x)){
          newArr.push(x)
    }
    })
  })
  console.log(newArr.length)
}

  fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then((data) => {
    numOfLangs(data)
      })
  .catch(err => console.log('err',err))


function numOfLangs(countriesData){
  const counts = {};
  let countries = countriesData;
  countries.forEach((country) => {
    let lang = country.languages
    lang.forEach((name) =>{
     let x = name.name
      counts[x] = (counts[x] || 0) + 1;      
    })

  })
  let entries = Object.entries(counts);
  let sorted = entries.sort((a, b) => b[1] - a[1]);
  console.log(sorted.slice(0,15))
}

fetch('https://restcountries.com/v2/all')
.then(response => response.json())
.then((data) => {
  numOfLangs(data)
    })
.catch(err => console.log('err',err))


function numOfLangs(countriesData){
let x = []
let countries = countriesData;
countries.forEach((country)=>{
  if(country.area){
  x.push([country.name,country.area])
  }
})
let sort = x.sort(function(a, b) {
  return b[1] - a[1];}).splice(0,10)
console.log(sort)
}
