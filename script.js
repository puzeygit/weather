// task 1 --------------------
const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "4178fbfcfe5f46f596203aaf772b66fd"
}
function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
        .then((weather) => {
            return weather.json()
        })
        .then((data) => {
            document.querySelector('.cityName').textContent = data["name"]
            document.querySelector('.temperature').textContent = `${Math.round(data["main"].temp - 273)} \u00B0 C`;
            document.querySelector('.description').textContent = data["weather"][0]["description"]
            //https://openweathermap.org/img/wn/04d@2x.png
            document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png"></img>`
        })
}

getWeather();
document.querySelector('#city').onchange = getWeather;
////

