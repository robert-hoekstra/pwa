
// Code gevonden op 30-maart-2020 van https://stackoverflow.com/questions/189430/// detect-the-internet-connection-is-offline

// Detect offline/online mode in simple way.
window.addEventListener('online', () => console.log('came online'));
window.addEventListener('offline', () => console.log('came offline'));
// To learn more, follow on this post:
// https://medium.com/simplejs/how-to-enable-offline-detection-using-simple-browser-apis-398b4989605a