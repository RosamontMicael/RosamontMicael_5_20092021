//const numberOfPassengers = 10;
//for (let i = 0; i < numberOfPassengers; i++) {
//  console.log("Passager n°"+ i+" embarqué !");
//}

//console.log("Tous les passagers sont embarqués !");

let content = document.getElementById("content");


for (let i = 1; i < 6; i++) {
  content.innerHTML +=
    '<div class="produit col-12 col-lg-4 text-center">' +
    '<a class="produit_lien" href="2_produit.html"> ' +
    '<div class="produit_img card">' +
    '<img class="card-img-top" src="./images/vcam_' +
    i +
    '.jpg" alt="camera 1">' +
    '<div class="card-body">' +
    '<h5 class="card-title">Produit ' +
    i +
    "</h5>" +
    '<p class="card-text">Texte ' +
    i +
    "</p>" +
    "</div>" +
    "</div>" +
    "</a>" +
    "</div>";
}
