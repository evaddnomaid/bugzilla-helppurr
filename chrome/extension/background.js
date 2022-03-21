// background.js
let color = '#3aa757'; // green
// let color = '#ffff00'; // yellow

chrome.runtime.onInstalled.addListener(() => {
   chrome.storage.sync.set({ color });
   console.log('Default bg color set to %cgreen', `color: ${color}`);
});
