const no_res_btn = document.querySelector('#no_res');
const res_btn = document.querySelector('#res');

no_res_btn.addEventListener('click' , ()=>{
    let name = document.querySelector('#name1').value;
    console.log(name)
})


document.querySelector("form").addEventListener('submit', (event)=>{
let name = document.querySelector ("#name2").value
console.log("wysano dane: "+ name)

})


