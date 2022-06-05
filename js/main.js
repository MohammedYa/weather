//variable of today
var day=document.getElementById("day");
var day_date=document.getElementById("day-date");
var city=document.getElementById("city");
var degree=document.getElementById("degree");
var todayicon=document.getElementById("todayicon");
var todaystatus=document.getElementById("status");
var rain=document.getElementById("rain");
var wind=document.getElementById("wind");
var compass=document.getElementById("compass");
//variable of tomorrow
var tomorrowday=document.getElementById("tomorrowday");
var tomorrowicon=document.getElementById("tomorrowicon");
var maxdegree=document.getElementById("maxdegree");
var mindegree=document.getElementById("mindegree");
var tomstatus=document.getElementById("tomstatus");
// variable of NextDay
var nextdayday=document.getElementById("nextdayday");
var nextdayicon=document.getElementById("nextdayicon");
var maxnextday=document.getElementById("maxnextday");
var minnextday=document.getElementById("minnextday");
var statusnextday=document.getElementById("statusnextday");
//input value(search Data for any city )
let cityName="cairo";
let cityNameinput=document.getElementById("namecity");
cityNameinput.addEventListener("keyup",function(){
cityName=cityNameinput.value;
getdata();
})
//day and mounth
let Months=["Jan","Fab","Mar","Apr","May","June","July","Augs","Sep","OCT","NoV","Des"]
let days=["Sunday","Monday","Tuesday","Wendesday","Thursday","Friday","saturday"];
let date=new Date();
//weather response
let Responsedata;
getdata();
async function getdata(){
  await  getWeatherData();
  await  todayWeather();
  await tomorrowweather();
  await  Nextdayweather();
}
async function getWeatherData(){
    let weatherResponse=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e15223b1ea584452958122835222904&q=${cityName}&days=3`);
    Responsedata=await weatherResponse.json();
     


}
//display data in item1
function todayWeather(){
days[date.getDay()];
Months[date.getMonth()];
day.innerHTML=days[date.getDay()];
day_date.innerHTML=date.getDate()+' '+Months[date.getMonth()];
city.innerHTML=Responsedata.location.name;
degree.innerHTML=Responsedata.current.temp_c+`<sup> ْ </sup>C `;
todayicon.setAttribute('src',`https:${Responsedata.current.condition.icon}`);
todaystatus.innerHTML=Responsedata.current.condition.text;
rain.innerHTML=Responsedata.current.humidity+' %'
wind.innerHTML=Responsedata.current.wind_kph+' Km/h';
compass.innerHTML=Responsedata.current.wind_dir;

}
// display tomorrow weather(item2) 
function tomorrowweather(){
tomorrowday.innerHTML=days[date.getDay()+1];
tomorrowicon.setAttribute('src',`https:${Responsedata.forecast.forecastday[1].day.condition.icon}`);
maxdegree.innerHTML=Responsedata.forecast.forecastday[1].day.maxtemp_c+`<sup> ْ </sup>C `;
mindegree.innerHTML=Responsedata.forecast.forecastday[1].day.mintemp_c+`<sup> ْ </sup>C `;
tomstatus.innerHTML=Responsedata.forecast.forecastday[1].day.condition.text;
}
// display Nextday weather(item2) 
function Nextdayweather(){
nextdayday.innerHTML=days[date.getDay()+2];
nextdayicon.setAttribute('src',`https:${Responsedata.forecast.forecastday[2].day.condition.icon}`);
maxnextday.innerHTML=Responsedata.forecast.forecastday[2].day.maxtemp_c+`<sup> ْ </sup>C `;
minnextday.innerHTML=Responsedata.forecast.forecastday[2].day.mintemp_c+`<sup> ْ </sup>C `;
statusnextday.innerHTML=Responsedata.forecast.forecastday[2].day.condition.text;

}
















/*var httprequst=new XMLHttpRequest();
httprequst.open("GET","https://api.weatherapi.com/v1/forecast.json?key=e15223b1ea584452958122835222904&q=cairo&days=3");
httprequst.send();
httprequst.addEventListener("readystatechange",function(){
    if(httprequst.readyState==4){
     httpResponse=JSON.parse(httprequst.response);
    }
    
})*/
