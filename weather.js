const API_KEY = "9efb08f4a3b841291777d104657bd1c8";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response)=> response.json())
        .then((data)=> {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} /${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const id = document.getElementById("weather");
id.style.color = "white";
id.style.fontSize = "2.5em";
id.style.fontWeight = "bold";
id.style.display = "flex";
id.style.alignItems = "center";
id.style.justifyContent = "center";