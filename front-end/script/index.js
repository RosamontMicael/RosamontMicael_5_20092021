fetch("http://localhost:3000/api/cameras")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    let affichageFetchValue = value;
    let elt = document.getElementById('grille_produitTest');
        elt.innerHTML = `${affichageFetchValue}! <div>Elément 2</div>`;   

    console.log(value);
    let vava = "";
    for (let i of value) {
    console.log(i.imageUrl);
    vava= i.imageUrl;
    elt.innerHTML = `<div class="coco"><img   src="${vava}" alt="/"></div>`;}
    
  })
  .catch(function(err) {
    // Une erreur est survenue
  });




