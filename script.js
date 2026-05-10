let tackeInput = document.getElementById("tackeInput");
let listeTaches = document.getElementById("listeTaches");
formulaire.addEventListener("submit",function(event) {
    event.preventDefault();
    let texteTache = tackeInput.Value;
    if (texteTache === ""){
        alert("siser une tache");
        return;
    }
let li = document.createElement("li");
li.textContent = texteTache + " ";
let boutonAccomplie = document.createElement("Button");
boutonAccomplie.textContent = "Accomplie";
let boutonSupprimer = document.createElement("Button");
boutonAccomplie.addEventListener("click",function(){
    li.classList.toggle("Accomplie");
});
boutonAccomplie.addEventListener("click",function(){
    li.remove();
});
li.appendChild(boutonAccomplie);
li.appendChild(boutonSupprime);
listeTaches.appendChild(li);
tackeInput.Value = " ";
});