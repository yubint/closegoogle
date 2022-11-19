function main() {
    let t;


    window.addEventListener('load', resettimer, true);
    var events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach((name) => {
        window.addEventListener(name, resettimer, true);
    })

    function closetab() {
        chrome.runtime.sendMessage({ removetab: 'true' });
    }

    function resettimer() {
        clearTimeout(t);
        t = setTimeout(closetab, 1000);
    }
}

main();