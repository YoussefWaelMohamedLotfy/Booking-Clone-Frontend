const queryString = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

// Navigate to reservation page after a random period of time
// to simulate loading page from server
window.onload = function () {
    var randomTime = Math.random() * 4000
    
    setTimeout(function () {
        // handle logic to navigate without keeping history
        
    }, randomTime)
}