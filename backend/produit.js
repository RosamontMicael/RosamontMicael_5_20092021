let fetchValue = [];
let content = document.getElementById("content");
let fetchContent = fetch(
  "http://localhost:3000/api/cameras/:_5be1ef211c9d44000030b062"
)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    console.log(value.length);
    console.log(value);

    console.log(fetchValue.length);
    fetchValue = value;
    console.log(fetchValue.length);
    console.log(fetchValue);

    console.log(`contenue de l'API-CAMERA: ${fetchValue.length}`);

    for (let i = 0; i < value.length; i++) {
      let product;

      product = value[i];
      content.innerHTML +=
        '<div class="produit  col-12 col-lg-4 text-center">' +
        '<a class="produit_lien" href="2_produit.html"> ' +
        '<div class="produit_img card">' +
        '<img class="card-img-top" src="' +
        product.imageUrl +
        '"' +
        ' alt="camera 1">' +
        '<div class="card-body">' +
        '<h5 class="card-title">Produit ' +
        i +
        "</h5>" +
        '<p class="card-text">Texte coucou ' +
        i +
        "</p>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</div>";
    }
  })
  .catch(function (err) {
    // Une erreur est survenue
  });
