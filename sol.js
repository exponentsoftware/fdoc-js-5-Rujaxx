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
      let { name : x } = name;
      if(!newArr.includes(x)){
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
  const counts = {name};
  let countries = countriesData;
  let newArr = []
  countries.forEach((country) => {
    let lang = country.languages
    lang.forEach((name) =>{
      let { name : x } = name;
      counts[x] = (counts[x] || 0) + 1;      
    })

  })

  console.log(counts)
}
