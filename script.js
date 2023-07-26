function search() {
    console.log("searching...");
    let place = cName.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`)
    .then (result=>{
        if (result.ok){
            return result.json();
        }
        else{
            throw alert ("Enter Valid Location")
        }
    })
    .then(data=>displayValues(data)).catch(error=>console.log(error.message));

}

function displayValues(data){
    // console.log(data);
    let location=data.name
    let temp=Math.round(data.main.temp)
    let humidity=data.main.humidity
    let wind=data.wind.speed
    let weather = data.weather[0].main



    document.getElementById("city").innerHTML=location
    document.getElementById("temp").innerHTML=temp+"°C"
    document.getElementById("humidity").innerHTML=humidity+"%"
    document.getElementById("wind").innerHTML=wind+"km/h"

    var img = document.getElementById('weather-icon');
    if (weather == "Clouds"){
        img.src = 'images/clouds.png';
    }
    else if  (weather == "Rain"){
        img.src = 'images/rain.png';
    }
    else if  (weather == "Clear"){
        img.src = 'images/clear.png';
    }
    else if  (weather == "Snow"){
        img.src = 'images/snow.png';
    }
    else if  (weather == "Drizzle"){
        img.src = 'images/drizzle.png';
    }
}


