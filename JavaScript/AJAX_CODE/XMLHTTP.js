// "https://swapi.dev/api/people/1/"

const request = new XMLHttpRequest();
request.onload = function () {
    console.log('LOADED');
    const data = JSON.parse(this.responseText);
    console.log(data.name);
    console.log(data.height);
};

request.onerror = function () {
    console.log('ERROR');
    console.log(this);
};

JSON.parse

request.open("GET", "https://swapi.dev/api/people/1/");
request.send();
