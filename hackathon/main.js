chrome.webRequest.onBeforeRequest.addListener(function (details) {
    console.log(details.url);
    alert(details.url === "http://www.google.com/");
    if (!(/^[^:]*:(?:\/\/)?(?:[^\/]*\.)?harrisoncramer.me\/.*$/.test(details.url))) {
        return {
            redirectUrl: "https://harrisoncramer.me" 
        };
    }
}, {
    urls: ['<all_urls>'] 
}, ["blocking"]); 

