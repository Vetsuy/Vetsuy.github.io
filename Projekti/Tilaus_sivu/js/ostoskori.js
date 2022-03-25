document.addEventListener("DOMContentLoaded",hide)
document.addEventListener("DOMContentLoaded",hidea)
document.addEventListener("DOMContentLoaded",hideb)
function hidea(){
    let as = Object.keys(localStorage)
    let a = ["pepperonisumma","juustosumma","kinkkusumma","jauhesumma","kebabsumma","tonnisumma","vegesumma","fmaara"]
    let c = ["count","count_ju","count_ki","count_ja","count_ke","count_to","count_ve","count_f"]
    let e = ["hinta","hinta_ju","hinta_ki","hinta_ja","hinta_ke","hinta_to","hinta_ve","hinta_f"]
    let v = ["pehinta","juhinta","kihinta","jahinta","kehinta","tohinta","vehinta","fahinta"]
    let x = ["pepperoni","juusto","kinkku","jauhe","kebab","tonni","vege","fhinta"]
    let gf = 0
    for (let i = 0;i<as.length+1;i++){
        for (u=0;u<=8;u++){
        if(as=a[u]){
            let b = localStorage.getItem(a[u])
            document.getElementById(c[u]).textContent = b
            let d = localStorage.getItem(x[u])
            document.getElementById(v[u]).textContent = d+",00€"
            d = d*parseInt(localStorage.getItem(a[u]))
            document.getElementById(e[u]).textContent = d+",00€"
            gf++;
        }
        if(gf>=as.length){
            break
        }
    }
    }
    let xx = localStorage.getItem("fsumma"); let xc = localStorage.getItem("kinkku"); let xz = localStorage.getItem("juusto"); let cx = localStorage.getItem("pepperoni");let vc = localStorage.getItem("tonni");let bv = localStorage.getItem("kebab");let oo = localStorage.getItem("vege");let op = localStorage.getItem("jauhe")
    let gg = parseInt(xx)+parseInt(xc)+parseInt(xz)+parseInt(cx)+parseInt(vc)+parseInt(bv)+parseInt(oo)+parseInt(op)
    document.getElementById("total").textContent = "Hinta "+gg+",00€"
    let g = parseInt(document.getElementById("count").textContent)+parseInt(document.getElementById("count_ju").textContent)+parseInt(document.getElementById("count_ki").textContent)+parseInt(document.getElementById("count_ja").textContent)+parseInt(document.getElementById("count_ke").textContent)+parseInt(document.getElementById("count_to").textContent)+parseInt(document.getElementById("count_ve").textContent)+parseInt(document.getElementById("count_to").textContent)+parseInt(document.getElementById("count_f").textContent)
    document.getElementById("valinta").textContent = g+" valintaa"
}
function hideb(){
    if(localStorage.getItem("pepperonisumma")!=="0"){
        document.getElementById("pepe").style.display="flex"
    }
    if(localStorage.getItem("juustosumma")!=="0"){
     document.getElementById("juus").style.display="flex"
 }
 if(localStorage.getItem("kinkkusumma")!=="0"){
     document.getElementById("kink").style.display="flex"
 }
 if(localStorage.getItem("jauhesumma")!=="0"){
     document.getElementById("jauh").style.display="flex"
 }
 if(localStorage.getItem("kebabsumma")!=="0"){
     document.getElementById("kebab").style.display="flex"
 }
 if(localStorage.getItem("tonnisumma")!=="0"){
     document.getElementById("tonn").style.display="flex"
 }
 if(localStorage.getItem("vegesumma")!=="0"){
     document.getElementById("vega").style.display="flex"
 }
 if(localStorage.getItem("fmaara")!=="0"){
    document.getElementById("fan").style.display="flex"
}
}
function hide(){
    
if(localStorage.getItem("kuljetus")=="kylla"){
    document.getElementById("koti_osoite").style.display="block"
}
if(localStorage.getItem("kysy")=="kylla"){
    document.getElementById("q").style.display="block"
    document.getElementById("oga").style.display="none"
    document.getElementById("tilaa").style.display="none"
    document.getElementById("aika").style.display="none"
}
if(localStorage.getItem("tek")=="kylla"){
    document.getElementById("teksti").style.display="block"
}
if(localStorage.getItem("aika")=="kylla"){
    document.getElementById("oga").style.display="none"
    document.getElementById("q").style.display="block"
    document.getElementById("ksy").style.display="none"
    document.getElementById("kss").style.display="none"
    document.getElementById("tilaa").style.display="none"
    let x =  parseInt(localStorage.getItem("fmaara"))*parseInt(localStorage.getItem("faika"))
    let v = parseInt(localStorage.getItem("a3"))+parseInt(localStorage.getItem("310"))+parseInt(localStorage.getItem("1020"))
    let z = v+x+ parseInt(localStorage.getItem("pepperoniaika"))+parseInt(localStorage.getItem("juustoaika"))+parseInt(localStorage.getItem("kinkkuaika"))+parseInt(localStorage.getItem("jauheaika"))+parseInt(localStorage.getItem("kebabaika"))+parseInt(localStorage.getItem("tonniaika"))+parseInt(localStorage.getItem("vegeaika"))
    document.getElementById("aika").textContent = "Toimituksessa menee "+z+" minuuttia"

}if(localStorage.getItem("vika")=="kylla"){
    document.getElementById("oga").style.display="none"
    document.getElementById("q").style.display="block"
    document.getElementById("ksy").style.display="none"
    document.getElementById("kss").style.display="none"
    document.getElementById("tilaa").style.display="none"
    let x =  parseInt(localStorage.getItem("fmaara"))*parseInt(localStorage.getItem("faika"))
    let z = x+ parseInt(localStorage.getItem("pepperoniaika"))+parseInt(localStorage.getItem("juustoaika"))+parseInt(localStorage.getItem("kinkkuaika"))+parseInt(localStorage.getItem("jauheaika"))+parseInt(localStorage.getItem("kebabaika"))+parseInt(localStorage.getItem("tonniaika"))+parseInt(localStorage.getItem("vegeaika"))
    document.getElementById("aika").textContent = "pizzaan menee "+z+" minuuttia"
}if(localStorage.getItem("ti")=="kylla"){
    document.getElementById("q").style.display="block"
    document.getElementById("aika").style.display="none"
    document.getElementById("oga").style.display="none"
}
}
function poista(h){
    localStorage.setItem(h+"summa",0)
    localStorage.setItem(h+"aika",0)
    window.location.reload();
}
function poistaf(){
    localStorage.setItem("fmaara",0)
    localStorage.setItem("faika",0)
    window.location.reload();
}
function kuljetus(){
localStorage.setItem("kuljetus", "kylla")
localStorage.setItem("nouto","ei")
window.location.reload();
}
function n(){
    let xc = parseInt(document.getElementById("count_f").textContent)
    
    localStorage.setItem("fff",xc)
localStorage.setItem("kuljetus", "ei")
localStorage.setItem("nouto","kylla")
window.location.reload();
}
function vahvista(){
if(localStorage.getItem("nouto")=="kylla"){
    localStorage.setItem("vika","kylla")
}else if(localStorage.getItem("kuljetus")=="kylla"){
    if(document.getElementById("koti_osoite").value==""){
        window.alert("jokin on pielessä")
    }else{
        localStorage.setItem("kysy","kylla")
    }
}else{
window.alert("jokin on pielessä")
}
window.location.reload();
}
function guu(){
    localStorage.setItem("kysy","e")
    localStorage.setItem("a3",5)
    localStorage.setItem("310",0)
    localStorage.setItem("1020",0)
    localStorage.setItem("ti","kylla")
    window.location.reload();
}
function gaa(){
    localStorage.setItem("kysy","e")
    localStorage.setItem("a3",0)
    localStorage.setItem("310",10)
    localStorage.setItem("1020",0)
    localStorage.setItem("ti","kylla")
    window.location.reload();
}
function gii(){
    localStorage.setItem("kysy","e")
    localStorage.setItem("a3",0)
    localStorage.setItem("310",0)
    localStorage.setItem("1020",20)
    localStorage.setItem("ti","kylla")
    window.location.reload();
}
function tiloo(){
    localStorage.setItem("kuljetus","e")
    localStorage.setItem("aika","kylla")
    localStorage.setItem("ti","ei")
    window.location.reload();
}
function kitiin(){
    localStorage.setItem("kuljetus","e")
    localStorage.setItem("kysy","e")
    localStorage.setItem("tek","e")
    localStorage.setItem("vika","e")
    localStorage.setItem("aika","e")
    localStorage.setItem("ti","e")
    localStorage.setItem("kinkkusumma","0")
    localStorage.setItem("kebabsumma","0")
    localStorage.setItem("pepperonisumma","0")
    localStorage.setItem("juustosumma","0")
    localStorage.setItem("jauhesumma","0")
    localStorage.setItem("tonnisumma","0")
    localStorage.setItem("vegesumma","0")
    localStorage.setItem("fmaara","0")
    localStorage.setItem("kinkkuaika","0")
    localStorage.setItem("kebabaika","0")
    localStorage.setItem("pepperoniaika","0")
    localStorage.setItem("juustosaika","0")
    localStorage.setItem("jauheaika","0")
    localStorage.setItem("tonniaika","0")
    localStorage.setItem("vegeaika","0")
    localStorage.setItem("faika","0")
    localStorage.setItem("kinkku","0")
    localStorage.setItem("kebab","0")
    localStorage.setItem("pepperoni","0")
    localStorage.setItem("juusto","0")
    localStorage.setItem("jauhe","0")
    localStorage.setItem("tonni","0")
    localStorage.setItem("vege","0")
    localStorage.setItem("fsumma","0")
}
