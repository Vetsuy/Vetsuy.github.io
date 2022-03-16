document.addEventListener("DOMContentLoaded",hide)
function hide(){
    let c =["pep","juu","kin","jau","keb","ton","veg"]
    let b = ["pepe","juus","kink","jauh","kebab","tonn","vega"]
   document.getElementById("pepe").style.display="none"
   document.getElementById("juus").style.display="none"
   document.getElementById("kink").style.display="none"
   document.getElementById("jauh").style.display="none"
   document.getElementById("kebab").style.display="none"
   document.getElementById("tonn").style.display="none"
   document.getElementById("vega").style.display="none"
   document.getElementById("fan").style.display="none"
   if(localStorage.getItem("pep")!=="0"){
       document.getElementById("pepe").style.display="block"
   }
   if(localStorage.getItem("juu")!=="0"){
    document.getElementById("juus").style.display="block"
}
if(localStorage.getItem("kin")!=="0"){
    document.getElementById("kink").style.display="block"
}
if(localStorage.getItem("jau")!=="0"){
    document.getElementById("jauh").style.display="block"
}
if(localStorage.getItem("keb")!=="0"){
    document.getElementById("kebab").style.display="block"
}
if(localStorage.getItem("ton")!=="0"){
    document.getElementById("tonn").style.display="block"
}
if(localStorage.getItem("veg")!=="0"){
    document.getElementById("vegg").style.display="block"
}
}