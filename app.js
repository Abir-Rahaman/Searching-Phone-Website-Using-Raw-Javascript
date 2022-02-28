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
const displayData = (phones) =>{
    console.log(phones)
    const phoneCard =document.getElementById('phone-card');
    phones.forEach( phone => {
        const div = document.createElement('div');
        div.innerHTML =`<div class="row ">
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <img class=" mx-auto" src="${phone.image}" class="card-img-top" alt="...">
                            <div class="card-body ">
                                <h5 class="card-title ">  ${phone.phone_name}</h5>
                                <h6 class="card-title "> Brand Name :${phone.brand}</h6>  
                                <button onclick="" class="btn btn-outline-secondary" type="button" id="search-button">Details</button>  
                            </div>
                        </div>
                    </div>`;

        phoneCard.appendChild(div);
    });


}

 
const loadDetails = (details) => {
    const url = `https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
    .then (res => res.json())
}