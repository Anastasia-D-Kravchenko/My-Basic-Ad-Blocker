# My Basic Ad Blocker

A lightweight, custom Google Chrome extension that blocks common ad networks and trackers. Built using modern Chrome Manifest V3 standards and the `declarativeNetRequest` API for fast, privacy-respecting ad blocking.

## Features

* **Manifest V3 Compliant:** Uses modern, efficient background APIs.
* **Domain Blocking:** Pre-configured to block requests from major ad networks (e.g., Doubleclick, Google AdServices, Taboola).
* **Interactive UI:** Includes a popup menu to easily toggle the ad blocker ON and OFF without opening extension settings.
* **Lightweight:** No heavy background scripts; relies purely on static JSON rule sets for zero-latency browsing.

## File Structure

* `manifest.json`: The core configuration file for the Chrome extension.
* `rules.json`: The list of domains and subdomains the extension is programmed to block.
* `popup.html`: The HTML structure for the extension's user interface.
* `popup.css`: The styling to make the popup menu look clean and modern.
* `popup.js`: The logic that handles toggling the ruleset on and off.

## Installation Instructions

Since this is a custom extension, you will need to load it into Chrome locally using Developer Mode.

1. Download or clone this project folder to your computer.
2. Open Google Chrome and type `chrome://extensions/` into the address bar.
3. In the top right corner, toggle **Developer mode** to ON.
4. Click the **Load unpacked** button in the top left corner.
5. Select the folder containing your extension files.
6. The extension is now installed! 

## Usage

1. Click the "puzzle piece" icon in the top right of your Chrome browser.
2. Find "My Basic Ad Blocker" and click the "pin" icon to keep it visible.
3. Click the extension icon to open the popup menu.
4. Use the button to toggle the ad blocker ON or OFF as needed.

## Customization

You can easily add new ad domains to block by editing the `rules.json` file. Simply copy an existing block, increment the `"id"` number, and change the `"urlFilter"` to the domain you want to block (using `||` before the domain name to include subdomains).