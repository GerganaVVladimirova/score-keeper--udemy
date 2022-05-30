const h1=document.querySelector("h1");
const pl1=document.querySelector("#player1");
const pl2=document.querySelector("#player2");
const reset=document.querySelector("#reset");
const max=document.querySelector("#scoreMax")
// console.log(`${h1.innerText},${pl1.innerText},${pl2.innerText},${reset.innerText},${max.value}`);
let one=document.querySelector("#pl1");
let two=document.querySelector("#pl2");
 console.log(`${one.innerText},${two.innerText}`);
 console.dir(one);
let  winningScore =1;

 max.addEventListener("change",function(){
   max.value= parseInt(max.value);
 resetF();
 });

pl1.addEventListener("click",function(e){
  one.innerText= parseInt(one.innerText)+1;
  winner(one,two);
  // if (one.innerText=== max.value){ 
  //   one.style.color="green";
  //   two.style.color="red";
  // }else{
  //   one.style.color="black";
  //   two.style.color="black";
  // }
})
pl2.addEventListener("click",function(e){
  two.innerText= parseInt(two.innerText)+1;
  winner(one,two);
})
reset.addEventListener("click",resetF)

function resetF(){
  one.innerText=0;
  two.innerText=0;
  one.style.color="black";
  two.style.color="black";
  pl1.disabled=false;
     pl2.disabled=false;
}

function winner(one,two){
  switch (max.value){
    case one.innerText:
     one.style.color="rgb(16, 169, 105)";
     two.style.color="rgb(211, 58, 70)";
     pl1.disabled=true;
     pl2.disabled=true;
    break;
    case two.innerText:
     one.style.color="rgb(211, 58, 70)";
     two.style.color="rgb(16, 169, 105)";
     pl1.disabled=true;
     pl2.disabled=true;
     break;
    
    default:
     one.style.color="black";
     two.style.color="black";
   }
}






