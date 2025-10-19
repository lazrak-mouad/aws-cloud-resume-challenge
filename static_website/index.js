const counter = document.querySelector('.counter-number');
async function updateCounter() {
    let response = await fetch('https://6s6guzxn6t6o5yep54c3d67hru0uodhd.lambda-url.us-east-1.on.aws/');
    let data = await response.json();
    counter.innerHTML = ` Views ${data}`;
}
updateCounter();