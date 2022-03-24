addEventListener("DOMContentLoaded",kuvat)
function kuvat(){
    if(localStorage.getItem("kuva")=="juusto"){
     document.getElementById("kuvaa").src= "uploads/juusto-pizza.jpg"
     document.getElementById("texty").textContent = "juusto Pizza"
    }
    if(localStorage.getItem("kuva")=="pepperoni"){
     document.getElementById("kuvaa").src= "uploads/pepperoni-pizza.jpg"
     document.getElementById("texty").textContent = "Pepperoni Pizza"
    }
    if(localStorage.getItem("kuva")=="kinkku"){
     document.getElementById("kuvaa").src= "uploads/kinkku-pizza.jpg"
     document.getElementById("texty").textContent = "Kinkku Pizza"
    }
    if(localStorage.getItem("kuva")=="tonni"){
     document.getElementById("kuvaa").src= "uploads/tonnikala-pizza.jpg"
     document.getElementById("texty").textContent = "Tonnikala Pizza"
    }
    if(localStorage.getItem("kuva")=="kebab"){
     document.getElementById("kuvaa").src= "uploads/kebab-pizza.jpg"
     document.getElementById("texty").textContent = "Kana Pizza"
    }
    if(localStorage.getItem("kuva")=="vege"){
     document.getElementById("kuvaa").src= "uploads/vegaani-pizza.jpg"
     document.getElementById("texty").textContent = "Vegaani Pizza"
    }
    if(localStorage.getItem("kuva")=="jauhe"){
     document.getElementById("kuvaa").src= "uploads/jauheliha-pizza.jpg"
     document.getElementById("texty").textContent = "Jauaheliha Pizza"
    }
}
function muokkaus(a){
    var ele = document.getElementsByName('koko');
    const kokoja = ["small","medium","large"]
    for (i = 0; i < ele.length; i++) {
        let tar = 0;
        if (ele[i].checked) {
            localStorage.setItem(a,kokoja[i])
            tar = 1
            localStorage.setItem("yes","y")
            break;
        }
    }
if(localStorage.getItem("yes")!=="y"){
    window.alert("et valinnut kokoa")
}
let kok = localStorage.getItem(a)
var ela = document.getElementsByName('pohja');
const pohjia = ["norm","gluteeniton"]
for (i = 0; i < ela.length+1; i++) {
    if (ela[i].checked) {
        localStorage.setItem(a,pohjia[i])
        localStorage.setItem("yes","ya")
        break;
    }
    else if(2==ela.length+1){
        window.alert("asd")
        break
    }
}
if(localStorage.getItem("yes")!=="ya"){
    window.alert("et valinnut pohjaa")
}
let poh = localStorage.getItem(a)
let ab = [kok,poh]
    if(ab.length!==2){
        window.alert("jokin on vialla")
    }
}