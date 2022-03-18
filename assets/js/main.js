const a = document.getElementsByTagName('a')[0];
const h1 = document.getElementsByTagName('h1')[0];
const img = document.getElementsByTagName('img')[0];
const blockquote = document.getElementById('quote');
const p1 = document.getElementsByTagName('p')[2];
const p2 = document.getElementsByTagName('p')[3];
const p3 = document.getElementsByTagName('p')[4];


// AJAX CALL
const xhttp = new XMLHttpRequest();

// console.log(xhttp.readyState);

xhttp.onreadystatechange = stateIsChange = () => {
    if(xhttp.readyState == 4){
        console.log('request completed');
    }
};

xhttp.onload = write = () => {
    // console.log(xhttp.responseText);
    let response = xhttp.responseText;
    let data = JSON.parse(response);
    console.log(data);
    // console.log(data.author);

    if(data.total_quotes < 2){
        p1.textContent = `${data.total_quotes} quote`; 
    }

    h1.textContent = data.author;
    img.setAttribute('src', data.photo);
    blockquote.textContent = data.quote;
    p1.textContent = `${data.total_quotes} quotes`;
    p2.textContent = `#${data.id}`;
    p3.textContent = `#${data.id}`;
};

xhttp.open('GET', 'https://thatsthespir.it/api', true);
xhttp.send();

xhttp.onerror = error = () => {
    console.log('ERROR, request failed !');
    blockquote.textContent = 'ERROR';
};

a.addEventListener('click', () => {document.location.reload()});


// FETCH METHOD
// fetch('https://thatsthespir.it/api')
// .then(res => res.json(), err => console.log(err))
// .then(data => display(data), err => console.log(err));

// let display = (data) => {
//     console.log(data);
//     blockquote.textContent = `Quote : ${data.quote} \n Author : ${data.author} \n Number : ${data.total_quotes}`;    // <br> à effacer
// };


// ASYNC FUNCTION
// async function retrieve(){
//     let res = await fetch('https://thatsthespir.it/api');
//     let data = await res.json();
//     return data;
// }

// retrieve().then(data => display(data));

// let display = (data) => {
//     console.log(data);
//     blockquote.textContent = `Quote : ${data.quote} \n Author : ${data.author} \n Number : ${data.total_quotes}`;
// }