addEventListener("DOMContentLoaded",kuvat)
function kuvat(){
    if(localStorage.getItem("kiva")=="juusto"){
     document.getElementById("kuvaa").src= "uploads/juusto-pizza.jpg"
    }
    if(localStorage.getItem("kiva")=="pepperoni"){
     document.getElementById("kuvaa").src= "uploads/pepperoni-pizza.jpg"
    }
    if(localStorage.getItem("kiva")=="kinkku"){
     document.getElementById("kuvaa").src= "uploads/kinkku-pizza.jpg"
    }
    if(localStorage.getItem("kiva")=="tonni"){
     document.getElementById("kuvaa").src= "uploads/tonnikala-pizza.jpg"
    }
    if(localStorage.getItem("kiva")=="kebab"){
     document.getElementById("kuvaa").src= "uploads/kebab-pizza.jpg"
    }
    if(localStorage.getItem("kiva")=="vege"){
     document.getElementById("kuvaa").src= "uploads/vegaani-pizza.jpg"
    }
    if(localStorage.getItem("kiva")=="jauhe"){
     document.getElementById("kuvaa").src= "uploads/jauheliha-pizza.jpg"
    }
}