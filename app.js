const colors = ['green', 'red', 'blue', 'blueviolet', 'brown', 'chartreuse', 'cyan']
const title = document.querySelector('#title')
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    // get random number between 0-3
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    title.style.color = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber(){
    return parseInt(Math.random()*colors.length) 
}