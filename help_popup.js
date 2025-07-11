var is_gmail = false;
var is_zoom = false;
var is_youtube = false;
document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const status = document.getElementById('status');
        if (tabs.length === 0) {
            status.textContent = 'No active tab found.';
            return;
        }



        const url = tabs[0].url || '';
        if (url.includes('zoom.com' ) || url.includes('zoom.us')) {
            status.textContent = 'This tab is a Zoom page!';
            is_zoom = true;
        } else if (url.includes('mail.google.com')) {
            is_gmail = true
            status.textContent = 'This tab is a Gmail page!';

        } else if (url.includes('youtube.com')) {
            is_youtube = true
            status.textcontent = 'This tab is a youtube Page'
        } else {
            status.textContent = 'There is not a guide available for this website page.';
        }
    });

    const myButton = document.getElementById('loadTutorial');
    if (!myButton) {
        console.error('Button element not found');
        return;
    }

    myButton.addEventListener('click', loadHelp);
    chrome.runtime.connect({ name: "popup" });

});


function loadHelp() {

    if (is_gmail) {
        fetch(chrome.runtime.getURL('gmail_tutorial.html'))
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            });
    } else if (is_zoom) {
        fetch(chrome.runtime.getURL('zoom_tutorial.html'))
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            });
    }else if (is_youtube) {
        fetch(chrome.runtime.getURL('youtube_tutorial.html'))
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            });
    }else {
        alert('There is no tutorial available for this website. Please open a different website. You can also view all the available tutorials with the other button');
    }
}
