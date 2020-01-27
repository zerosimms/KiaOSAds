function displayFullScreenAd(publisherId, appName, adType) {
    console.log("Displaying Fullscreen KaiAd: " + publisherId);
    console.log("Game Name: " + appName);
    getKaiAd({
        publisher: publisherId,
        app: appName,
        slot: appName,
        test: adType,
        onerror: err => console.error('Error Code:', err),
        onready: ad => {
            ad.call('display')
        }
    })
}

window.addEventListener('scroll', noScroll);

function noScroll() {
    window.scrollTo(0, 0);
}