let months=["January" ,"February","March" , "April","May" ,"June","July" ,
            "August"  ,"September","October", "November", "December" ]

let Days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

let date= new Date();
let dateOfDay= date.getDay()
let dateOfMounth= date.getMonth()
let numOfDay= date.getDate()
let currentcity="cairo"
const iconsrc="https:"
//search input 

let searchInput=document.getElementById("search");
searchInput.addEventListener("keyup",function(){
currentcity=searchInput.value;
displayData()
})
/* variale of today */
const todayName=document.getElementById("todayname");
const  todayNum=document.getElementById("todaynum");
const city=document.getElementById("city");
const Degree=document.getElementById("degree");
const todayIcon=document.getElementById("todayIcon");
const statusToday=document.getElementById("statustoday")
const wind=document.getElementById("wind")
const rain=document.getElementById("rain");
const compass=document.getElementById("compass");
/* variale of tomorrow */
const tomrrowName=document.getElementById("tomrrowName");
const tomrrowIcon=document.getElementById("tomrrowIcon");
const tomMaxDeg=document.getElementById("tomMaxDeg")
const tomMinDeg=document.getElementById("tomMinDeg")
const statusTomrrow=document.getElementById("statusTomrrow")
/* variale of nextday */
const nextdayName=document.getElementById("nextdayName");
const nextdayIcon=document.getElementById("nextdayIcon");
const nextMaxDeg=document.getElementById("nextMaxDeg")
const nextMinDeg=document.getElementById("nextMinDeg")
const statusNextday=document.getElementById("statusNextday")
/* Api data for weather */
let responeData
displayData()
// get dat from api
async function getApi(){
    let weatherResponse=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e15223b1ea584452958122835222904&q=${currentcity}&days=3`);
    responeData  = await weatherResponse.json();
   
}


async function displayData(){
await getApi();
await getTodayData()
await tomrrowData();
await nextdayData();
}


/* display data [today -- tomorrow -- next day] */

function getTodayData(){
todayName.innerHTML= Days[dateOfDay];
todayNum.innerHTML=`${ numOfDay} ${months[dateOfMounth]}`;
city.innerHTML=responeData.location.name;
Degree.innerHTML=responeData.current.temp_c;
todayIcon.setAttribute("src",`${iconsrc}${responeData.current.condition.icon}`);
statusToday.innerHTML=responeData.current.condition.text;
rain.innerHTML=responeData.current.humidity+' %';
wind.innerHTML=responeData.current.wind_kph+' Km/h';
compass.innerHTML=responeData.current.wind_dir;
}

function tomrrowData(){
let nextdaynum
if(dateOfDay==6){
    nextdaynum  =0
}else{
    nextdaynum=dateOfDay+1
}


tomrrowName.innerHTML=Days[nextdaynum];
tomrrowIcon.setAttribute('src',`${iconsrc}${responeData.forecast.forecastday[1].day.condition.icon}`);
tomMaxDeg.innerHTML=responeData.forecast.forecastday[1].day.maxtemp_c;
tomMinDeg.innerHTML=responeData.forecast.forecastday[1].day.mintemp_c;
statusTomrrow.innerHTML=responeData.forecast.forecastday[1].day.condition.text;
}
function nextdayData(){
    let nextdaynum
    if(dateOfDay==6){
        nextdaynum  =1
    }else{
        nextdaynum=dateOfDay+2
    }
nextdayName.innerHTML=Days[nextdaynum];
nextdayIcon.setAttribute('src',`${iconsrc}${responeData.forecast.forecastday[2].day.condition.icon}`);
nextMaxDeg.innerHTML=responeData.forecast.forecastday[2].day.maxtemp_c;
nextMinDeg.innerHTML=responeData.forecast.forecastday[2].day.mintemp_c;
statusNextday.innerHTML=responeData.forecast.forecastday[2].day.condition.text;
}
