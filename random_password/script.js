let uppercase="ABCDEFGHIJKLMN";
let lowerrcase="abcdefghijklmnopqrstuvwxyz";
let number="1234567890";
let sysmbol="!@#$%^&*()_+";

let passbx=document.querySelector("#pass-box");
let lenbx=document.querySelector("#total-char");
let uppercasebx=document.querySelector("#upper-case");
let lowwercasebx=document.querySelector("#lower-case");
let numberbx=document.querySelector("#numbers");
let symbolbx=document.querySelector("#symbols");
let btn=document.querySelector("#btn");

let getrandom = (data)=>{
    return data[Math.floor(Math.random()*data.length)]
}
// console.log(getrandom(uppercase));
// let=;
let getpassword=(passwprd="")=>{
    if(uppercasebx.checked){
        passwprd+=getrandom(uppercase);
    }
    if(lowwercasebx.checked){
        passwprd+=getrandom(lowerrcase);
    }
    if(numberbx.checked){
        passwprd+=getrandom(number);
    }
    if(symbolbx.checked){
        passwprd+=getrandom(sysmbol);
    }
  
    if(passwprd.length < lenbx.value){
      return getpassword(passwprd);
    }
    // console.log(passwprd);
    passbx.innerHTML=sizepaswrd(passwprd,lenbx.value);
}
btn.addEventListener("click",function(){
    getpassword();
})
// console.log(passwprd);
function sizepaswrd(pass,num){
    if(pass.length>num){
        return  pass.substring(0, num);
    }else{
        return pass;
    }
}
