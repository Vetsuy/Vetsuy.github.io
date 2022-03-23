
function koko(){  
    var ele = document.getElementsByName('koko');
    const kokoja = ["small","medium","large"]
    for (i = 0; i <= ele.length; i++) {
        if (ele[i].checked) {
            localStorage.setItem("fantasia",kokoja[i])
            break;
        }
    }
    let kok = localStorage.getItem("fantasia")
    var ela = document.getElementsByName('pohja');
    const pohjia = ["norm","gluteeniton"]
    for (i = 0; i <= ela.length; i++) {
        if (ela[i].checked) {
            localStorage.setItem("fantasia",pohjia[i])
            break;
        }
    }
    let poh = localStorage.getItem("fantasia")
    var eli = document.getElementsByName('kastike');
    const kastikkeita = ["valkosipuli","ilman"]
    for (i = 0; i <= eli.length; i++) {
        if (eli[i].checked) {
            localStorage.setItem("fantasia",kastikkeita[i])
            break;
        }
    }
    let kast = localStorage.getItem("fantasia")
    let ab = [kok,poh,kast]
    let a = []
    var elo = document.getElementsByName('tayte');
    const taytteet = ["pepperoni","kinkku","jauheliha","kebab","tonnikala","herkkusieni","jalopenio","oliivi","ananas","paprika","lisajuusto","sinihome","feta","mozzarella","parmesaani"]
    for (let i = 0; i < elo.length; i++) {
        if (elo[i].checked) {
            a.push(taytteet[i])
            localStorage.setItem("fantasia",a)
        }
        if(i==15){
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
    hinta = hinta*parseInt(document.getElementById("maara").textContent)

};
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
