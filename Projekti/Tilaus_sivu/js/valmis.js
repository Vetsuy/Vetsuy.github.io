addEventListener("DOMContentLoaded",kuvat)
function kuvat(){
    if(localStorage.getItem("kuva")=="juusto"){
     document.getElementById("kuvaa").src= "uploads/juusto-pizza.jpg"
    }
    if(localStorage.getItem("kuva")=="pepperoni"){
     document.getElementById("kuvaa").src= "uploads/pepperoni-pizza.jpg"
    }
    if(localStorage.getItem("kuva")=="kinkku"){
     document.getElementById("kuvaa").src= "uploads/kinkku-pizza.jpg"
    }
    if(localStorage.getItem("kuva")=="tonni"){
     document.getElementById("kuvaa").src= "uploads/tonnikala-pizza.jpg"
    }
    if(localStorage.getItem("kuva")=="kebab"){
     document.getElementById("kuvaa").src= "uploads/kebab-pizza.jpg"
    }
    if(localStorage.getItem("kuva")=="vege"){
     document.getElementById("kuvaa").src= "uploads/vegaani-pizza.jpg"
    }
    if(localStorage.getItem("ka")=="jauhe"){
     document.getElementById("kuvaa").src= "uploads/jauheliha-pizza.jpg"
    }
}