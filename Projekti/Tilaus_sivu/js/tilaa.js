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
    let a = ["pep","juu","kin","jau","keb","ton","veg"]
    for (i=0;i<=6;i++){
        let  g = document.getElementById(a[i]).textContent
    if(g>0){
        localStorage.setItem(a[i], document.getElementById(a[i]).textContent)
    }else if(g="0"){
        localStorage.setItem(a[i],0)
    }
    }
}