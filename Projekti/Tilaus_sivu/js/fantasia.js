
function koko(){       
    var ele = document.getElementsByName('koko');
    localStorage.setItem("test",ele.length)
    const kokoja = ["small","medium","large"]
    for (i = 0; i <= ele.length; i++) {
        if (ele[i].checked) {
            localStorage.setItem("innerText", "aaa")
            selectedSize = ele[i];
            localStorage.setItem("fantasia",kokoja[i])
            break;
        }
    }
};
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
