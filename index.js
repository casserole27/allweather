/****** VARIABLES ******/

// DATA 
const warmWeatherArray = ['long pants', 'top', 'warm layer', 'socks', 'shoes', 'sun hat']
const coldWeatherArray = ['base pants', 'base layer top', 'mid layer pants', 'mid layer top', 'wool socks', 'boots', 'hat']

const tempEl = document.getElementById('temp-el')
const gearEl = document.getElementById('gear')
const infoBtn = document.getElementById('info-btn')
const resetBtn = document.getElementById('reset-btn')

//API call for current temps and forecast
const temperature = 70;

/****** FUNCTIONS ******/

let feed = '';
function renderGear() {
     if (temperature < 50) {
        for (item of coldWeatherArray) {
            feed += `<li>${item}</li>`
        }
        document.getElementById('gear').innerHTML = feed
    } else if (temperature > 50) {
           for (item of warmWeatherArray) {
            feed += `<li>${item}</li>`
        }
        gearEl.innerHTML = feed
    }
};


/****** EVENT LISTENERS ******/

infoBtn.addEventListener('click', () => {
    tempEl.textContent = `${temperature} degrees`;
     renderGear();
 })
 
 resetBtn.addEventListener('click', () => {
     tempEl.textContent = 'Current Temperature'
     gearEl.textContent = ''
     feed = ''
     
 })