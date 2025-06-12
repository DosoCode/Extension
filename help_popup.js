var is_gmail = false;

document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const status = document.getElementById('status');
        if (tabs.length === 0) {
            status.textContent = 'No active tab found.';
            return;
        }



        const url = tabs[0].url || '';
        if (url.includes('zoom.com')) {
            status.textContent = 'This tab is a Zoom page!';
        } else if (url.includes('mail.google.com')) {
            is_gmail = true
            status.textContent = 'This tab is a Gmail page!';

        } else {
            status.textContent = 'This tab is NOT a Zoom or Gmail page.';
        }
    });
    const myButton = document.getElementById('loadTutorial');
    if (!myButton) {
        console.error('Button element not found');
        return;
    }

    myButton.addEventListener('click', loadGmailHelp);
    chrome.runtime.connect({ name: "popup" });
});



function loadGmailHelp() {

    if (is_gmail) {
        fetch(chrome.runtime.getURL('gmail_tutorial.html'))
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            });
    } else {
        alert('This is not a Gmail page. Please open a Gmail tab to view the help.');
    }
}