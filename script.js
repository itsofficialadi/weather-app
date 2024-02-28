const button = document.getElementById("searchButton")
const input = document.getElementById("city-input")
const cityName = document.getElementById("city-name")
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById("city-temp")


async function getData(cityInput){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=19b4b003146f45b19e3195828242802&q=${cityInput}&aqi=yes
        `
    );
    return await promise.json()
}

button.addEventListener("click",async() =>{
    const value = input.value;
    const result = await getData(value)
    console.log(result);

    cityName.innerText = `${result.location.name}, ${result.location.region}- ${result.location.country}`

    cityTime.innerText= result.location.localtime;

    cityTemp.innerText = result.current.temp_c;

})