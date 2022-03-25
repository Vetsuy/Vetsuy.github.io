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
function muokkaus(){
    localStorage.setItem("toimii","ee")
    let a = localStorage.getItem("kuva")
    localStorage.setItem("yes","e")
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
    for (let i = 0; i < 4; i++) {
        if (ela[i].checked) {
            localStorage.setItem(a,pohjia[i])
            localStorage.setItem("yes","ye")
            localStorage.setItem("toimii","kylla")
            break;
        }
        else if(i==ela.length){
            window.alert("et valinnut pohjaa")
            break
        }
        
    }
    window.alert("et valinnut pohjaa")
    if(localStorage.getItem("yes")!=="ye"){
        window.alert("et valinnut pohjaa")
    }
    let poh = localStorage.getItem(a)
    var elo = document.getElementsByName('tayte');
    const taytteet = ["pepperoni","kinkku","ananas","kana","tonnikala","jauheliha"]
    for (let i = 0; i < elo.length; i++) {
        
        if (elo[i].checked) {
            localStorage.setItem("tayte","kylla")
        }
    }
    
    let hinta = 10
    if(kok=="small"){
        hinta -= 2
    }else if(kok=="medium"){
        hinta = 15
    }else if(kok="large"){
        hinta += 2
    }
    if(poh=="norm"){
        hinta = hinta
    }else if(poh=="gluteeniton"){
        hinta += 2
    }
    let h = a
    let j = "summa"
    let p = h+j
    localStorage.setItem(a,hinta )
    localStorage.setItem(p,1)
    if(localStorage.getItem("toimii")=="kylla"){
    window.location.href="https://vetsuy.github.io/Projekti/Tilaus_sivu/ostoskori.html"
    }
}
function finale(){
    localStorage.setItem("toimii","e")
    let a = localStorage.getItem("kuva")
    localStorage.setItem("yes","e")
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
    for (let i = 0; i < ela.length; i++) {
        if (ela[i].checked) {
            localStorage.setItem(a,pohjia[i])
            localStorage.setItem("yes","ye")
            break;
        }
        else if(i==ela.length){
            window.alert("et valinnut ")
            break
        }
        
    }
    if(localStorage.getItem("yes")!=="ye"){
        window.alert("et valinnut pohjaa")
    }
    let poh = localStorage.getItem(a)
    var elo = document.getElementsByName('tayte');
    const taytteet = ["pepperoni","kinkku","ananas","kana","tonnikala","jauheliha"]
    for (let i = 0; i < elo.length; i++) {
        
        if (elo[i].checked) {
            localStorage.setItem("tayte","kylla")
        }
    }
    let ab = [kok,poh]
    if(ab.length==2){
        localStorage.setItem("toimii","kylla")
    }
    let hinta = 10
    if(kok=="small"){
        hinta -= 2
    }else if(kok=="medium"){
        hinta = 15
    }else if(kok="large"){
        hinta += 2
    }
    if(poh=="norm"){
        hinta = hinta
    }else if(poh=="gluteeniton"){
        hinta += 2
    }
    let h = a
    let j = "summa"
    let p = h+j
    localStorage.setItem(a,hinta )
    localStorage.setItem(p,1)
    if(localStorage.getItem("toimii")=="kylla"){
    window.location.href="https://vetsuy.github.io/Projekti/Tilaus_sivu/tilausprosessi.html"
    }
}