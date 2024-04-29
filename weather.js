let cityName = document.getElementById('cityName');
let cityDetails = document.getElementById('cityDetails');
let temperature = document.getElementById('temperature')

let fetchDetails =async () => {
    if (cityName.value.length == 0) {
        alert("please enter a city name before searching")
    }
    else {
        //api fetch
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let response=await fetch(url)
        let data=await response.json()
        cityDetails.innerText=`${data.name},${data.sys.country}`
        let x=new Date()
        date.innerText=`📅${x.toDateString()}`
        // date.innerText=`📅 ${x.getDay()},${x.getMonth()},${x.getFullYear()}`
        // temperature.innerText=data.main.temp
        temperature.innerHTML=`${data.main.temp}<sup>o</sup>C`
        if(data.main.temp>30){
            temperature.innerHTML=`${data.main.temp}<sup>o</sup>C 🔥`
        }
        if(data.main.temp>=20 && data.main.temp<30){
            temperature.innerHTML=`${data.main.temp}<sup>o</sup>c 🌞`
        }
        if(data.main.temp<20 && data.main.temp>0){
            temperature.innerHTML=`${data.main.temp}<sup>o</sup>c ❄️`
        }
        if(data.main.temp<0){
            temperature.innerHTML=`${data.main.temp}<sup>o</sup>c ⛄`
        }
    }
}