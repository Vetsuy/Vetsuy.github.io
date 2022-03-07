document.addEventListener("DOMContentLoaded", onkoKirjautunut);
document.addEventListener("DOMContentLoaded", kirjauduUlos);

function onkoKirjautunut(){
    if (localStorage.getItem("kirjautunut") === "kylla") {
        document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("kirjaudu_ulos").style.display = "true";
    }
    else {
        document.getElementById("kirjautumis_lomake").style.display = "true";
        document.getElementById("kirjaudu_ulos").style.display = "none";
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}

function kirjauduUlos(){
    localStorage.clear();
}