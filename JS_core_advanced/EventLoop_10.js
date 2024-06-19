function callAfterDelay(callback) {
    setTimeout(callback, 2000);
}

callAfterDelay(() => {
    console.log("Callback вызван спустя 2 секунды!");
});
