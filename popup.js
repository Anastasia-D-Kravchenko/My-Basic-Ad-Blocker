document.addEventListener('DOMContentLoaded', async () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const statusText = document.getElementById('status');

    // This ID must match the ruleset ID in manifest.json
    const RULESET_ID = 'ruleset_1';

    // Check the current status when the popup opens
    const enabledRulesets = await chrome.declarativeNetRequest.getEnabledRulesets();
    let isEnabled = enabledRulesets.includes(RULESET_ID);

    updateUI(isEnabled);

    // Listen for button clicks
    toggleBtn.addEventListener('click', async () => {
        if (isEnabled) {
            // Turn it off
            await chrome.declarativeNetRequest.updateEnabledRulesets({
                disableRulesetIds: [RULESET_ID]
            });
        } else {
            // Turn it on
            await chrome.declarativeNetRequest.updateEnabledRulesets({
                enableRulesetIds: [RULESET_ID]
            });
        }

        // Flip the status and update the UI
        isEnabled = !isEnabled;
        updateUI(isEnabled);
    });

    // Helper function to change button colors and text
    function updateUI(enabled) {
        if (enabled) {
            statusText.innerHTML = 'Status: <span style="color: green;">ON</span>';
            toggleBtn.textContent = 'Turn OFF';
            toggleBtn.style.backgroundColor = '#d32f2f'; // Red button for turning off
        } else {
            statusText.innerHTML = 'Status: <span style="color: red;">OFF</span>';
            toggleBtn.textContent = 'Turn ON';
            toggleBtn.style.backgroundColor = '#388e3c'; // Green button for turning on
        }
    }
});