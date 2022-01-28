//b3b917e5d9f5877d4cbe4167d56f1ec4 - api key 

            




let tempBlock = document.querySelector('#temp');
let cityBlock = document.querySelector('#city');
let imgBlock = document.querySelector('.img-block')
let updateDate = document.querySelector('#update-date');
let localDate = document.querySelector('#local-date');
let search = document.querySelector('.search1');

 
let date = new Date();
localDate.innerHTML = `<span> ${getZero(date.getHours())}:${getZero(date.getMinutes())}:${getZero(date.getSeconds())}</span>`;


setInterval(() => {

        let date = new Date();
        localDate.innerHTML = `<span> ${getZero(date.getHours())}:${getZero(date.getMinutes())}:${getZero(date.getSeconds())}</span>`
},1000);

function getZero(num) {
    if (num >= 0 && num <= 9){
        return '0' + num;
    }else{
        return num;
    }
}

console.log(search.value)

let cityName = 'Maykop';

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        let value = search.value;
        if(!value) return false
        cityName = value
        init();
        search.value = '';
        
    }
})
function init() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b3b917e5d9f5877d4cbe4167d56f1ec4`)
            .then(function(resp) {
                return resp.json()
            })
            .then(function(data) {

                console.log(data);
                tempBlock.innerHTML = `${temperature()}°`
                cityBlock.innerHTML =`<span>${data.name}</span>`;
                updateDate.innerHTML = `<span>${data.weather[0].main}</span>`;
                
                
                function temperature() {

                    let getTemp = data.main.temp;
                    let tempC = Math.floor(getTemp) -273;
                    
                    return tempC;
                    
        }    
            
            })
            .catch(function() {

                
                city = 'Maykop';
                init();
                searchInp.value = '';
            });
   
}
init();

setInterval(() =>{
    init()
},1.08e+7)


let body = document.querySelector('.wheather');
let themeBtn = document.querySelector('.themeBtn');


themeBtn.addEventListener('click', themeBlck) 
function themeBlck() {
    body.classList.add('black')
    this.removeEventListener('click', themeBlck);
    themeBtn.addEventListener('click', themeWht)
} 
         
function themeWht() {
    body.classList.remove('black');
    this.removeEventListener('click', themeWht);
    themeBtn.addEventListener('click', themeBlck);
}