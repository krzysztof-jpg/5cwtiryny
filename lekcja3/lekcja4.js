const slots = document.querySelectorAll(".slot");
slots.forEach((slot, i)=>{
    const angle = i * (360/slots.length);
    slot.style.transform = `rotate(${angle}deg) translateY(-380px) rotate(-${angle}deg)`
})

let finish = 0;
let randomNumber = document.querySelector(".randomNumber");
let btn = document.querySelector(".spin")
function pickNumber(){
    let pickedNumber = Math.floor(Math.random()*37)
    randomNumber.textContent = pickedNumber
    return randomNumber
}
btn.addEventListener('click', ()=>{
    let interval = setInterval(pickNumber, 500);
    setTimeout(()=>{
        clearInterval(interval); finish = randomNumber.textContent;
        slots.forEach((slot)=>{
            if(slot.textContent == finish){
                slot.style.border = "5px solid gold";
                slot.style.color = "gold";
            }
        })
    }, 5000)
})

pickNumber()