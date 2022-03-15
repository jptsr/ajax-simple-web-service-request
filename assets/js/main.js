const blockquote = document.getElementById('quote');


// AJAX CALL
const xhttp = new XMLHttpRequest();

console.log(xhttp.readyState);

xhttp.onreadystatechange = stateIsChange = () => {
    if(xhttp.readyState == 4){
        console.log('request completed');
    }
};

xhttp.onload = write = () => {
    console.log('write function is ok');

    // console.log(xhttp.responseText);
    let response = xhttp.responseText;
    let data = JSON.parse(response);
    console.log(data);
    console.log(data.author);

    let author = data.author;
    blockquote.textContent = author;

    console.log('end of the write function');
};

xhttp.open('GET', 'https://thatsthespir.it/api', true);
xhttp.send();

xhttp.onerror = error = () => {
    console.log('ERROR, request failed !');
};


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