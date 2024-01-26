const apiKey = "d1845658f92b31c64bd94f06f7188c9c"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&q="


let temp = document.querySelector('.main_temp')
let max = document.querySelector('.max_temp')
let min = document.querySelector('.min_temp')
let weather_desc = document.querySelector('.weather_desc')

let city_name = document.querySelector('.city')
let humidity = document.querySelector('.humidity')
let wind = document.querySelector('.wind')
let weather_icon = document.querySelector('.weather_icon')

let weather = document.querySelector('.weather')
let details = document.querySelector('.details')


async function checkWeather(city)
{
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if(response.status == 404){
        document.querySelector('.error').style.display = "block"
        weather.style.display = "none"
        details.style.display = "none"
    }
    else{
        temp.innerHTML = Math.round(data.main.feels_like) + `°&#x1D9C;`
        max.innerHTML = Math.ceil(data.main.temp_max) + '°/'
        min.innerHTML = Math.floor(data.main.temp_min) + '°'
        weather_desc.innerHTML = data.weather[0].main
        city_name.innerHTML = data.name
        humidity.innerHTML = data.main.humidity + `%`
        wind.innerHTML = data.wind.speed + ` km/h`
    
        if(data.weather[0].main == "Clouds"){
            weather_icon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weather_icon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weather_icon.src = "images/mist.png"
        }
        else if(data.weather[0].main == "Snow"){
            weather_icon.src = "images/snow.png"
        }
        else if(data.weather[0].main == "Rain"){
            weather_icon.src = "images/rain.png"
        }
        else{
            weather_icon.src = "images/clear.png"
        }
    
        weather.style.display = "flex"
        details.style.display = "flex"
        document.querySelector('.error').style.display = "none"
    }

    
}


document.querySelector('button').addEventListener('click', () =>{
    let city = document.querySelector('.search_city').value
    checkWeather(city)    
})

