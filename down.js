function affichage() {
    var name= document.getElementById('nom').value;
    console.log(name);
    document.getElementById('affichage').innerHTML = name;
}