const api = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'

/*fetch(api)
  .then(response => response.json())
  .then(result => {
 
    result.forEach(function(element) {

     document.getElementById('allcards').innerHTML += `
          <div class="cards-item">  
               <div class="img-card">
                    <img src='${element.photo}'>
                    <h2 class="title-6">Diária R$ ${element.price}</h2>
               </div>
               <h6 class="text">${element.property_type}</h6>
               <h1 class="title-6">${element.name.toLowerCase()}</h1>
          </div>       
     `
     });
});
*/




fetch(api)
  .then(response => response.json())
  .then(result => {
 
    result.forEach(function(element) {

     document.getElementById('allcards').innerHTML += `
          <div class="row">
               <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                         <img class="card-img-top" src='${element.photo}'>
                         <div class="card-body">
                              <h5 class="card-title">Diária R$ ${element.price}</h5>
                              <p class="card-text">${element.property_type}</p>
                              <h5 class="title-6">${element.name.toLowerCase()}</h5>
                         </div>
                    </div>
               </div>
          </div>
     `
     });
});