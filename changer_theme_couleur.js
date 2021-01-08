// Mode sombre //
function modeSombre() {
    let element = document.body;
    element.classList.toggle("modeSombre");

    // Supprimer Btn sombre quand je clique sur le btn sombre
    let maDivParent = document.getElementById("conteneurBtnSombreClair");
    let monBtnSombre = document.getElementById("btnSombre");    
    maDivParent.removeChild(monBtnSombre)

    // Ajouter le nouveau bouton clair
    let pBtnClair = document.createElement("p");
    maDivParent.append(pBtnClair)
    pBtnClair.innerHTML = "Thème<br/>clair"
    pBtnClair.setAttribute("id","btnClair")
    pBtnClair.setAttribute("onclick", "modeClair()") 
  }

// Mode clair //
  function modeClair() {
    let element = document.body;
    element.classList.toggle("modeClair");
    element.classList.remove("modeSombre") 

    // Ajouter le nouveau bouton sombre
    let maDivParent = document.getElementById("conteneurBtnSombreClair");
    let pBtnSombre = document.createElement("p");
    maDivParent.append(pBtnSombre)
    pBtnSombre.innerHTML = "Thème<br/>sombre"
    pBtnSombre.setAttribute("id","btnSombre")
    pBtnSombre.setAttribute("onclick", "modeSombre()") 

    // Supprimer le bouton clair
    let monBtnClair = document.getElementById("btnClair");    
    maDivParent.removeChild(monBtnClair)
}