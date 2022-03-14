const blockquote = document.getElementById('quote');


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


// AJAX CALL
const xhttp = new XMLHttpRequest();

xhttp.open('GET', 'https://thatsthespir.it/api', true);
xhttp.send();

xhttp.onload = write = () => {
    console.log('write function is ok');

    // console.log(this);   // return window not the value
    // console.log(this.responseText);     // undefined

    // let inJson = JSON.parse(this.responseText);
    // console.log(inJson);

    // if(this.status === 200){
    //     console.log('ok');
    // }else if(this.status === 403){
    //     console.log('forbidden');
    // }else if(this.status === 404){
    //     console.log('page not found');
    // }    // no status taken in account

    // blockquote.textContent = this.responseText;      // nada

    console.log('end of the write function');
};

xhttp.onerror = error = () => {
    console.log('ERROR, request failed !');
};