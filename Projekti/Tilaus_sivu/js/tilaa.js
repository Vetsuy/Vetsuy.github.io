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