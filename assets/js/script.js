const api = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'

fetch(api)
  .then(response => response.json())
  .then(result => {
 
    result.forEach(function(element) {

     document.getElementById('allcards').innerHTML += `
          <div class="col">
               <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src='${element.photo}'>
                    <div class="card-body">
                         <h5 class="card-title">Diária R$ ${element.price}</h5>
                         <b class="card-text">${element.property_type}</b>
                         <p>${element.name.toLowerCase()}</p>
                    </div>
               </div>
          </div>
     `
     });
});