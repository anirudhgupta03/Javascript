//https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
setInterval(() => {
    const date = new Date();
    document.querySelector('#clock').innerHTML = date.toLocaleTimeString(); 
}, 1000);