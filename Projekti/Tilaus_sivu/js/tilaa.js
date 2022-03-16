document.addEventListener("DMContentLoaded")
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
function tilaa(){
    let pep = document.getElementById("pep").textContent
    if(pep>0){
        localStorage.setItem("pep", document.getElementById("pep").textContent)
    }
    let  juu = document.getElementById("juu").textContent
    if(juu>0){
        localStorage.setItem("juu", document.getElementById("juu").textContent)
    }
}