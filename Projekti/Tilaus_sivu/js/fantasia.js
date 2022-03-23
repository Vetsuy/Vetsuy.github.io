
function koko(){       
    var ele = document.getElementsByName('koko');
    const kokoja = ["small","medium","large"]
    for (i = 0; i <= ele.length; i++) {
        if (ele[i].checked) {
            localStorage.setItem("fantasia",kokoja[i])
            break;
        }
    }
    var ela = document.getElementsByName('pohja');
    const pohjia = ["norm","gluteeniton"]
    for (i = 0; i <= ela.length; i++) {
        if (ela[i].checked) {
            let a = [localStorage.getItem("fantasia"),pohjia[i]]
            localStorage.setItem("fantasia",a)
            break;
        }
    }
    var eli = document.getElementsByName('kastike');
    const kastikkeita = ["valkosipuli","ilman"]
    for (i = 0; i <= eli.length; i++) {
        if (eli[i].checked) {
            let a = [localStorage.getItem("fantasia"),kastikkeita[i]]
            localStorage.setItem("fantasia",a)
            break;
        }
    }
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
