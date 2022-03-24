function koko(){  
    localStorage.setItem("toimii","e")
    localStorage.setItem("yes","e")
    var ele = document.getElementsByName('koko');
    const kokoja = ["small","medium","large"]
    for (i = 0; i < ele.length; i++) {
        let tar = 0;
        if (ele[i].checked) {
            localStorage.setItem("fantasia",kokoja[i])
            tar = 1
            localStorage.setItem("yes","y")
            break;
        }
    }
    if(localStorage.getItem("yes")!=="y"){
        window.alert("et valinnut kokoa")
    }
    let kok = localStorage.getItem("fantasia")
    var ela = document.getElementsByName('pohja');
    const pohjia = ["norm","gluteeniton"]
    for (let i = 0; i < ela.length; i++) {
        if (ela[i].checked) {
            localStorage.setItem("fantasia",pohjia[i])
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
    let poh = localStorage.getItem("fantasia")
    var eli = document.getElementsByName('kastike');
    const kastikkeita = ["valkosipuli","ilman"]
    for (let i = 0; i < eli.length; i++) {
        if (eli[i].checked) {
            localStorage.setItem("fantasia",kastikkeita[i])
            localStorage.setItem("yes","yes")
            break;
        }else if(i==eli.length){
            break
        }
    }
    if(localStorage.getItem("yes")!=="yes"){
        window.alert("et valinnut kastiketta")
    }
    let kast = localStorage.getItem("fantasia")
    let ab = [kok,poh,kast]
    if(ab.length!==3){
        window.alert("jokin on vialla")
    }
    let a = []
    let kierros = 0;
    var elo = document.getElementsByName('tayte');
    const taytteet = ["pepperoni","kinkku","jauheliha","kebab","tonnikala","herkkusieni","jalopenio","oliivi","ananas","paprika","lisajuusto","sinihome","feta","mozzarella","parmesaani"]
    for (let i = 0; i < elo.length; i++) {
        
        if (elo[i].checked) {
            a.push(taytteet[i])
            localStorage.setItem("fantasia",a)
            kierros += 1
        }
        if(i==14){
            
            if(kierros<3){
                window.alert("et ole valinnut tarpeeksi täytteitä")
                break
            }else if(kierros>5){
                window.alert("valitsit liikaa täytteitä")
                break
            }
            localStorage.setItem("toimii","kylla")
            break;
        }
    }
    let hinta = 15
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
    if(kast=="ilman"){
        hinta = hinta
    }else if(kast="valkosipuli"){
        hinta += 1
    }
    localStorage.setItem("fhinta",hinta )
    hinta = hinta*parseInt(document.getElementById("maara").textContent)
    localStorage.setItem("fsumma",hinta)
    localStorage.setItem("fmaara",document.getElementById("maara").textContent)
    if(localStorage.getItem("toimii")=="kylla"){
    window.location.href="https://vetsuy.github.io/Projekti/Tilaus_sivu/ostoskori.html"
    }
}
function pohja(){
    localStorage.setItem("pohja","e")
}
function lisaa(a){
    let summa = parseInt(document.getElementById(a).textContent)
    summa += 1   
    document.getElementById(a).textContent = summa
}
function poista(a){
    let summa = document.getElementById(a).textContent
    summa -= 1
    if(summa<0){
        summa = 0
        }
    document.getElementById(a).textContent = summa
}
function takaisin(){
    window.location.href="https://vetsuy.github.io/Projekti/Tilaus_sivu/tilausprosessi.html"
}
function jatka(){
        localStorage.setItem("toimii","e")
    localStorage.setItem("yes","e")
    var ele = document.getElementsByName('koko');
    const kokoja = ["small","medium","large"]
    for (i = 0; i < ele.length; i++) {
        let tar = 0;
        if (ele[i].checked) {
            localStorage.setItem("fantasia",kokoja[i])
            tar = 1
            localStorage.setItem("yes","y")
            break;
        }
    }
    if(localStorage.getItem("yes")!=="y"){
        window.alert("et valinnut kokoa")
    }
    let kok = localStorage.getItem("fantasia")
    var ela = document.getElementsByName('pohja');
    const pohjia = ["norm","gluteeniton"]
    for (let i = 0; i < ela.length+1; i++) {
        if (ela[i].checked) {
            localStorage.setItem("fantasia",pohjia[i])
            localStorage.setItem("yes","ye")
            break;
        }
        else if(i==ela.length+1){
            window.alert("et valinnut ")
            break
        }
        
    }
    if(localStorage.getItem("yes")!=="ye"){
        window.alert("et valinnut pohjaa")
    }
    let poh = localStorage.getItem("fantasia")
    var eli = document.getElementsByName('kastike');
    const kastikkeita = ["valkosipuli","ilman"]
    for (let i = 0; i < eli.length+1; i++) {
        if (eli[i].checked) {
            localStorage.setItem("fantasia",kastikkeita[i])
            localStorage.setItem("yes","yes")
            break;
        }else if(i==eli.length+1){
            break
        }
    }
    if(localStorage.getItem("yes")!=="yes"){
        window.alert("et valinnut kastiketta")
    }
    let kast = localStorage.getItem("fantasia")
    let ab = [kok,poh,kast]
    if(ab.length!==3){
        window.alert("jokin on vialla")
    }
    let a = []
    let kierros = 0;
    var elo = document.getElementsByName('tayte');
    const taytteet = ["pepperoni","kinkku","jauheliha","kebab","tonnikala","herkkusieni","jalopenio","oliivi","ananas","paprika","lisajuusto","sinihome","feta","mozzarella","parmesaani"]
    for (let i = 0; i < elo.length; i++) {
        
        if (elo[i].checked) {
            a.push(taytteet[i])
            localStorage.setItem("fantasia",a)
            kierros += 1
        }
        if(i==14){
            localStorage.setItem("asdasd","hsdfgg")
            if(kierros<3){
                window.alert("et ole valinnut tarpeeksi täytteitä")
                break
            }else if(kierros>5){
                window.alert("valitsit liikaa täytteitä")
                break
            }
            localStorage.setItem("toimii","kylla")
            break;
        }
    }
    let hinta = 15
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
    if(kast=="ilman"){
        hinta = hinta
    }else if(kast="valkosipuli"){
        hinta += 1
    }
    localStorage.setItem("fhinta",hinta )
    hinta = hinta*parseInt(document.getElementById("maara").textContent)
    localStorage.setItem("fsumma",hinta)
    localStorage.setItem("fmaara",document.getElementById("maara").textContent)
    if(localStorage.getItem("toimii")=="kylla"){
    window.location.href="https://vetsuy.github.io/Projekti/Tilaus_sivu/tilausprosessi.html"
    }
}