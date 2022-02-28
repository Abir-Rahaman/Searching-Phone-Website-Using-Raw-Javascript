// calling API with arrow function
const loadData = () =>{ 
    document.getElementById('phone-card').innerHTML='';

    const inputField =document.getElementById('input-field').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputField}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data))
    

}

// show phone sector using (arrow function & forEach loop)
const displayData = phones =>{
    // console.log(phones)
    const phoneCard =document.getElementById('phone-card');
    phones.forEach( phone => {
        const div = document.createElement('div');
        div.innerHTML =`<div class="row ">
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <img class=" mx-auto" src="${phone.image}" class="card-img-top" alt="...">
                            <div class="card-body ">
                                <h4 class="card-title ">  ${phone.phone_name}</h4>
                                <h6 class="card-title "> Brand Name :${phone.brand}</h6>  
                                <button onclick="loadDetails('${phone.slug}')" class="btn btn-outline-secondary" type="button" id="search-button">Details</button>  
                            </div>
                        </div>
                    </div>`;

        phoneCard.appendChild(div);
    });


}

// calling API with arrow function to display details of phone
const loadDetails = details => {
    const url = `https://openapi.programming-hero.com/api/phone/${details}`
   
    fetch(url)
    .then (res => res.json())
    .then (data => displayDetails(data.data));
}

// show phone details sector using arrow function & object
const displayDetails = info =>{
    console.log(info)
    const moreDetails = document.getElementById('more-details')
    moreDetails.innerHTML = `<div class="col-md-6 ">
                            <div class=" card rounded-3  mb-3 p-4 w-50 mx-auto border-0 " style ="background :rgb(247, 241, 231)" >
                                <img class="w-25  mx-auto" src="${info.image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h4 class="card-title ">${info.name}</h4>
                                <h5 class="card-title">Release Date : ${info.releaseDate}</h5>
                                
                                <h5 class="card-title "> Main Features :- </h5> 
                                    <ul>
                                    <li> ${info.mainFeatures.chipSet} </li>
                                    <li>${info.mainFeatures.displaySize}</li>
                                    <li>${info.mainFeatures.memory}</li>
                                </ul>
                                <button onclick="" class="btn btn-outline-secondary " type="button"> Sensor info </button>
                                <button onclick="" class="btn btn-outline-secondary" type="button"> Others info</button>
                               
                                </div>
                                </div>
                                </div>`; 

}