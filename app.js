const colors = ['green', 'red', 'blue', 'blueviolet', 'brown', 'Rgba(133, 122, 200)', '#f15025', 'chartreuse', 'cyan']
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    // get random number between 0-3
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber(){
    return parseInt(Math.random()*colors.length) 
}