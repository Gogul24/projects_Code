const apiKey = 'f266130552b3e0ee9d739596a78d20a0';
const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');

weatherForm.addEventListener('submit',async(event)=>{
    event.preventDefault();

    const city = cityInput.value;
    if(city){
        try {
            const weatherData = await getWeatherData(city);
            displayWeather(weatherData);
        } 
        catch (error) {
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError(`Please enter a city`)
    }
})

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error (`Could not fetch weather data`);
    } 
    return await response.json();
}

function displayWeather(data){
    const {name:city,
            main:{temp,humidity},
            weather:[{description,id}]} = data;

    card.textContent = "";
    card.style.display = 'flex';

    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descriptionDisplay = document.createElement('h4');
    const weatherEmojiDisplay = document.createElement('p');

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp-273.15).toFixed(1)}°C`
    humidityDisplay.textContent = `Humidity : ${humidity} %`
    descriptionDisplay.textContent = description;
    weatherEmojiDisplay.textContent = weatherEmoji(id)

    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.classList.add('humidityDisplay');
    descriptionDisplay.classList.add('descriptionDisplay');
    weatherEmojiDisplay.classList.add('weatherEmojiDisplay');

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descriptionDisplay);
    card.appendChild(weatherEmojiDisplay);


}

function weatherEmoji(id){
    switch (true) {
        case (id>=200 && id <300): 
            return '⛈';
        case (id>=300 && id <400): 
            return '🌧';            
        case (id>=500 && id <600): 
            return '🌧';     
        case (id>=600 && id <700): 
            return '❄';            
        case (id>=700 && id <800): 
            return '🌫';
        case (id === 800): 
            return '☀';
        case (id>=801 && id <810): 
            return '☁';            
        default:
            return '❓';
    }
}

function displayError(message){
    const errorMessage= document.createElement("p");
    errorMessage.textContent = message;
    errorMessage.classList.add("errorMessageDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorMessage);
}