const form = document.querySelector('form');
const search = document.getElementById('search');
const API_KEY = 'e8a274ecec5aef4119743958ceb224ba';
const weather = document.getElementById("weather")

const getWeather = async  (city)=> {

   const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch (url);
    console.log(response);

    const data = await response.json();
    console.log(data);
    showWeather(data);
};

    const showWeather = (data) =>{
            
        console.log('inside showWeather', data);

        if(data.cod == 404){
            weather.innerHTML = `<h2>Oops city not found</h2>`
            return;
        }

        weather.innerHTML = 
        `<div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather png">
        </div>
        <div>
        <h2>${data.main.temp}</h2>
        <h4>${data.weather[0].main}</h4>
        </div>`;
    };


form.addEventListener('submit', function (event){
    //to get the user input in search box
    console.log('City Name', search.value); //FETCH THE USER INPUT

    //get the weather details of the city given by the user
    getWeather(search.value); //city name   
    event.preventDefault();

});