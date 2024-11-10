document.getElementById('set-master').addEventListener('click', () => {
    // Query the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // Send a message to the content script of the active tab to set it as master
      chrome.tabs.sendMessage(tabs[0].id, { type: 'setMaster' });
    });
  });
  
  document.getElementById('set-slave').addEventListener('click', () => {
    // Query the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // Send a message to the content script of the active tab to set it as slave
      chrome.tabs.sendMessage(tabs[0].id, { type: 'setSlave' });
    });
  });
  