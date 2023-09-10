const buttons = document.querySelector('button')
let clock = document.querySelector('.clock')
setInterval(()=>{
    let date = new Date();
let newdate = date.toLocaleTimeString()
clock.innerHTML = newdate
},1000)
buttons.addEventListener('click',(val)=>{
    const ans1 = parseInt(document.querySelector('#hight').value )
    const ans2 = parseInt(document.querySelector('#waight').value )
    const result = document.querySelector('#result')
    const bmi = (ans2/((ans1*ans1)/1000)).toFixed(2)
    result.innerHTML = bmi
})


