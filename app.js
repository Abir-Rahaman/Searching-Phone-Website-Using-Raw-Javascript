const loadData = () =>{
    const inputField =document.getElementById('input-field').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputField}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))

}

