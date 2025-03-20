// https://jsonplaceholder.typicode.com/todos
// fetch the data from this api


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q=Japan&appid=68efa0885519a6f01d76917c463ada68

// https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=f08a7626c251792adc79ebfa5f11527d


// can you make an api display the data in console.
let req=fetch("https://api.openweathermap.org/data/2.5/weather?q=New York&appid=68efa0885519a6f01d76917c463ada68")
req.then((data)=>data.json())
.then((res)=>{
        console.log(res)
})

//  The country -has sunsrise- and sunset -

// https://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&appid=f08a7626c251792adc79ebfa5f11527d

// Lat and Lon 

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=f08a7626c251792adc79ebfa5f11527d

// res countries

// you have the fetch the latlng from restcounties api (anyone) >> pass the latlng to the weathermap API
// want to c the output

// 2 apis >> restcountires  > latlng >> openweathermap

