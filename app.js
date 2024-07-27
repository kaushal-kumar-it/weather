let inpu=document.querySelector(".city");
let input="";
let dict=document.querySelector(".dict");
let cityname=document.querySelector(".cityname");
let img1=document.querySelector(".imgg");
let temp=document.querySelector("#temp");
let ws=document.querySelector(".ws");
let hm=document.querySelector(".hm");
inpu.addEventListener("input", (event)=>{
    input=event.target.value;
    console.log(input);
})
let lat="";
let lon="";
let city="";
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
    //   let lat= await JSON.parse(data)
    lat=data[0].lat;
    lon=data[0].lon;
    city=data[0].name;
    let url1=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=fa29e132a4b9fd3fafc57d559e4b5f3e`;
    cityname.innerHTML=city;
    fetchData2(url1);
      console.log('Data:',data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async function fetchData2(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
    //   let lat= await JSON.parse(data)
    temp.innerHTML=`${data.main.temp}°C`;
    ws.innerHTML=`${data.wind.speed}km/h `;
    hm.innerHTML=`${data.main.humidity}%`;
    let imgurl=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    dict.innerHTML=data.weather[0].description;
    img1.setAttribute('src',imgurl);
      console.log('Data:',data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
let btn=document.querySelector(".button");
btn.addEventListener("click", (event)=>{
    
    let cityurl=`https://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=fa29e132a4b9fd3fafc57d559e4b5f3e`;
    fetchData(cityurl);
})