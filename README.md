Tab Synchronizer Chrome Extension
Overview
Tab Synchronizer is a Chrome extension that allows users to synchronize mouse movements across multiple tabs. By designating a Master tab and multiple Slave tabs, users can mirror mouse movements from the Master tab across all Slave tabs in real time. This can be particularly useful for demonstrations, debugging, or synchronized multi-tab browsing.

Features
Set Master Tab: Designate a tab as the source for mouse movements.
Set Slave Tabs: Choose tabs to follow and mirror the mouse events from the Master tab.
Real-Time Synchronization: Automatically replicates mouse movements from the Master tab to all Slave tabs.
Installation
Clone the repository:

bash
Copy code
git 
clone
 https://github.com/yourusername/tab-synchronizer.git
cd
 tab-synchronizer
Load the Extension in Chrome:

Go to chrome://extensions/.
Enable Developer mode in the top right corner.
Click Load unpacked and select the folder containing the cloned repository files.
Usage
Open the Tab Synchronizer Popup:

Click the Tab Synchronizer icon in the Chrome toolbar to open the popup.
Set a Master Tab:

On the tab you want to act as the Master, open the popup and click Set as Master.
Set Slave Tabs:

In other tabs that should mirror the Master’s mouse events, open the popup and click Set as Slave.
Testing Mouse Movement Synchronization:

Move your mouse around the Master tab. The mouse movements should be replicated in all Slave tabs, with a red cursor indicating the replicated position.
Project Structure
manifest.json: The extension’s configuration file, declaring permissions and files used.
background.js: Manages Master/Slave tab assignment and forwards mouse events from the Master tab to all registered Slave tabs.
content.js: Injected into each tab to listen for and replicate mouse movements.
popup.html and popup.js: The popup interface where users set the Master and Slave tabs.
Code Overview
background.js
Handles background operations, including:

Listening for Master/Slave tab setting.
Broadcasting mouse events from the Master tab to Slave tabs.
Removing tabs that are closed.
content.js
Executed in each tab to:

Listen for Master/Slave setting commands.
Capture mouse events in the Master tab and send them to the background script.
Display a cursor indicating mouse movement from the Master tab in all Slave tabs.
popup.html & popup.js
The extension’s popup interface where users can choose to set a tab as Master or Slave.

Troubleshooting
Extension Not Loading: Ensure the manifest file is in valid JSON format, and that all files are correctly named.
Mouse Movements Not Replicating: Check that you have correctly set up the Master and Slave tabs using the popup interface. Open the Chrome Developer Console (chrome://extensions/) and check the extension’s background page for errors.
Contributing
Feel free to fork the repository, open issues, and submit pull requests to improve the extension.

License
This project is licensed under the MIT License - see the
LICENSE
file for details.

Replace "https://github.com/yourusername/tab-synchronizer.git" with your actual repository link, and add or modify sections as needed based on additional features or instructions.
