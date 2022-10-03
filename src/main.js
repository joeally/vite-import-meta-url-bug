const worker = new Worker(new URL('./worker.js', import.meta.url), { type: "module" });
worker.postMessage('');
worker.addEventListener('message', (msg) => {
    console.log('message', msg.data);
})