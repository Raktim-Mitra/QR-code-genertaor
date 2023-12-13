const container=document.querySelector(".container");
const btn= document.getElementById("btn");
const text=document.getElementById("text");
const img=document.getElementById("img");
const qrcode=document.querySelector(".qr-code");
let getqr=()=>{
    qrcode.classList.remove("active");
    container.classList.remove("active1");
    if(!text.value){
        text.placeholder=`Please add your text or URL`;
    }
    else{
        img.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
        container.classList.add("active1");
        qrcode.classList.add("active");
    }
}