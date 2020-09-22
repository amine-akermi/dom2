//$( ".plus" ).click(function() {
//   var plus = $(this).attr('data');
//   console.log(plus);
//   $('#input-'+plus).val($('#input-'+plus).val()+1);
// });

let plus =Array.from( document.querySelectorAll(".plus"));
let qte = document.querySelectorAll(".inp");
let minus=document.querySelectorAll(".moins")
let remove=document.querySelectorAll(".x");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
      
    qte[i].value++;
    totale()
  })};
  for (let i=0;i<minus.length;i++){
    minus[i].addEventListener("click",function(){
      if (qte[i].value>0){
        qte[i].value--;
        totale();
      }
    });
  }
  function totale() {
    let quantity = document.getElementsByClassName("inp");
    let price=document.getElementsByClassName("price")
    let sum=0;
    for(let i=0;i<price.length;i++) {
      sum=sum+quantity[i].value*price[i].innerHTML;
    
   
  }
document.getElementById("totale").innerHTML=sum
}
for (let i = 0;i< remove.length; i++) {
  remove[i].addEventListener("click",function(){
    remove[i].parentElement.parentElement.remove();
  totale();
  });
}

let Likebtn = Array.from(document.getElementsByClassName("fas fa-heart"));
for(let i=0;i<Likebtn.length;i++){
  Likebtn[i].addEventListener("click",function () {
      if( Likebtn[i].classList.contains("likedClass")){
         Likebtn[i].classList.remove("likedClass");   
      }else {
         Likebtn[i].classList.add("likedClass");
      } 
    })
   }