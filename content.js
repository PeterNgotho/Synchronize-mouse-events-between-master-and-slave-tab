// Variables to store the master and slave tab IDs
let masterTabId = null;
let slaveTabIds = [];

// Listen for messages from the background or popup script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'setMaster') {
    // Mark this tab as the master tab
    masterTabId = sender.tab.id;
    console.log(`This tab is now the master tab: ${masterTabId}`);
    alert('This tab is now the master tab!');
  }

  if (message.type === 'setSlave') {
    // Mark this tab as a slave tab
    const slaveTabId = sender.tab.id;
    if (!slaveTabIds.includes(slaveTabId)) {
      slaveTabIds.push(slaveTabId);
      console.log(`This tab is now a slave tab: ${slaveTabId}`);
      alert('This tab is now a slave tab!');
    }
  }
});
