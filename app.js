// calling API with arrow function
const loadData = () => {
    document.getElementById('phone-card').innerHTML = '';
    const inputField = document.getElementById('input-field').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputField}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
           //   error-msg-handling
            if (data.data.slice(0, 20).length < 20) { 
                document.getElementById('found').innerHTML = `<h1 class="text-center text-danger"> This Model Not Available Right Now</h1>`;
            }
            else {
                document.getElementById('found').innerHTML = ``;
                displayData(data.data.slice(0, 20));
            }
        });
}

// show phone sector using (arrow function & forEach loop)
const displayData = phones => {
    const phoneCard = document.getElementById('phone-card');
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.innerHTML = `<div class="row ">
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <img class=" mx-auto" src="${phone.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h4 class="card-title">  ${phone.phone_name}</h4>
                                <h6 class="card-title "> Brand Name :${phone.brand}</h6>  
                                <button onclick="loadDetails('${phone.slug}')" class="btn btn-outline-secondary" type="button" id="search-button">Details</button>  
                            </div>
                        </div>
                    </div>`;
        phoneCard.appendChild(div);
        const inputField = document.getElementById('input-field');
        inputField.value = '';

    });
}

// calling API with arrow function to display details of phone
const loadDetails = details => {
    const url = `https://openapi.programming-hero.com/api/phone/${details}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayDetails(data.data)
        });
}

// show phone details sector using arrow function & object
const displayDetails = info => {
    let other = JSON.stringify(info.others).split('"').join("&quot;")
    document.getElementById('more-details').innerHTML = '';
    if (info.releaseDate == '') {
        var temp = "no date found";
    }
    else {
        var temp = info.releaseDate;
    }
    console.log(info.releaseDate);
    const moreDetails = document.getElementById('more-details')
    moreDetails.innerHTML = `<div class="col-md-12">
                            <div class=" card rounded-3  mb-3 p-4 w-50 mx-auto border-0 " style ="background :rgb(245, 240, 231)" >
                                <img class="w-25  mx-auto" src="${info.image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h4 class="card-title ">${info.name}</h4>
                                <h5 class="card-title">Release Date : ${temp}</h5>                      
                                <h5 class="card-title "> Main Features :-</h5> 
                                <ul>
                                    <li> ChipSet: ${info.mainFeatures.chipSet} </li>
                                    <li> Display: Size${info.mainFeatures.displaySize}</li>
                                    <li> Memory: ${info.mainFeatures.memory}</li>
                                    <li> Storage: ${info.mainFeatures.storage}</li>
                                </ul>
                                <button onclick="sensor('${info.mainFeatures.sensors}')" class="btn btn-outline-secondary " type="button"> Sensor info </button>
                                <button onclick="{others(${other})}" class="btn btn-outline-secondary" type="button"> Others info</button>        
                                </div>
                                </div>
                                </div>`;

}

// sensor information section
const sensor = sensorData => {
    const sensorInfo = document.getElementById('sensor-info');
    sensorInfo.innerHTML = `<div class="col-md-12">
                                <div class=" card rounded-3  mb-3 p-4 w-50 mx-auto border-0 " style ="background :rgb(234, 255, 255)" >
                                    <div class="card-body">                  
                                       <h5 class="card-title "> sensor information :-</h5> 
                                    <ul>
                                        <li>${sensorData}</li>                         
                                    </ul>
                                    </div>
                                </div>
                                </div>`;
}

// others information section
const others = othersData => {
    const othersInfo = document.getElementById('others-info');
    console.log(othersData);
    othersInfo.innerHTML = `<div class="col-md-12">
                                <div class=" card rounded-3  mb-3 p-4 w-50 mx-auto border-0 " style ="background :rgb(234, 255, 255)" >
                                    <div class="card-body">                  
                                       <h5 class="card-title "> Others information :-</h5> 
                                    <ul>
                                    </ul>
                                    </div>
                                    <li>Bluetooth : ${othersData.Bluetooth}</li>                                                                                
                                    <li> GPS : ${othersData.GPS}</li>                                                                                
                                    <li> WLAN : ${othersData.WLAN}</li>                                                                                
                                    <li> NFC : ${othersData.NFC}</li>                                                                                
                                    <li> RADIO : ${othersData.Radio}</li>                                                                                
                                    <li> USB : ${othersData.USB}</li>                                                                                
                                </div>
                                </div>`;
}


