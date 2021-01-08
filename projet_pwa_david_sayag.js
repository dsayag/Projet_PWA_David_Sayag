$(document).ready(function () {
    $.ajax({
        url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d1030811149f403c87b3d56c2abff1dd',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            for (i = 0; i < data.articles.length; i++) {  // Cette boucle récupère toutes les informations de l'API.
                $("#mainDiv").append("<div class=\"item\"><img src = " + data.articles[i].urlToImage + ">" + "<h4>" + data.articles[i].title + "</h4>" + "<p>" + data.articles[i].description + "</p>" + " <a class=\"monBouton\" href=" + data.articles[i].url + ">Voir l'article</a></div>");
            }
        },

        error: function (result, status, error) {  // Ce code affichera le message d'erreur, ici Message d'erreur.
            alert(result.responseText);
        },
    });
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register("serviceWorker.js")  
    .then(({ installing, waiting, active }) => {
        let serviceWorker
        if (installing) {
          serviceWorker = installing
          document.querySelector('#kind').textContent = 'installé'
        } else if (waiting) {
          serviceWorker = waiting
          document.querySelector('#kind').textContent = 'en attente'
        } else if (active) {
          serviceWorker = active
          document.querySelector('#kind').textContent = 'actif'
        }
        if (serviceWorker) {
          // logState(serviceWorker.state);
          serviceWorker.addEventListener('statechange', (e) => {
            // logState(e.target.state);
          })
        }
      })
      .catch((error) => {
        // L'enregistrement s'est mal déroulé. Le fichier service-worker.js
        // est peut-être indisponible ou contient une erreur.
      })
  } else {
    // Le navigateur ne supporte pas les service workers.
  }