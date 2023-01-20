const serviceWorkerRegister = async () => {
  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register('../sw.js');
    console.log('SW registered: ');
    return;
  }
  console.log('Service worker not supported in this browser');
};

export default serviceWorkerRegister;
