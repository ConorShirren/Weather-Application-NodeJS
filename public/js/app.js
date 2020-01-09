
console.log('Client Side Javascript File is loaded.') 

const weatherForm = document.querySelector('form' )
const search = document.querySelector('input')
const msgOne = document.querySelector('#loc')
const msgTwo = document.querySelector('#for')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value 
    url = 'http://localhost:3000/weather?address=' + location
    fetch(url).then((response) => {
     response.json().then((data) => {
          if (data.error) {
              msgOne.textContent = data.error
              msgOne.textContent = ''
          } else {
              msgOne.textContent = data.location
              msgTwo.textContent = data.forecast
          }
     })
})
})

