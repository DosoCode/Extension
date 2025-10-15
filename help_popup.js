var is_gmail = false;
var is_zoom = false;
var is_youtube = false;
var is_outlook = false;

document.addEventListener('DOMContentLoaded', () => {

    // this array defines the different tutorial pages and their corresponding identifiers
    const tutorialPages = [
        {id: 'mail.google', file: 'gmail_tutorial.html'},
        {id: 'zoom', file: 'zoom_tutorial.html'},
        {id: 'youtube', file: 'youtube_tutorial.html'},
        {id: 'outlook', file: 'outlook_tutorial.html'},
        {id: 'excel', file: 'excel_tutorial.html'},
        {id: 'facebook', file: 'facebook_tutorial.html'},
        {id: 'amazon', file: 'amazon_tutorial.html'},
        {id: 'wikipedia', file: 'wikipedia_tutorial.html'}
    ];

    let matchedPage = null; // Store the matched tutorial page
    const myButton = document.getElementById('loadTutorial');
    if (!myButton) {
        console.error('Button element not found');
        return;
    }
    myButton.disabled = true; // Disable button until ready

    //gets current active tab in the browser
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const status = document.getElementById('status'); //creates a variable called status and assigns its value to the id called status in my help_popup.html doc

        if (tabs.length === 0) {
            status.textContent = 'No active tab found.';
            return;
        }

        const url = tabs[0].url || '';

        // Find the first matching tutorial page
        matchedPage = tutorialPages.find(page => url.includes(page.id));
        if (matchedPage) {
            status.textContent = 'This tab is a ' + matchedPage.id + ' page!';
        } else {
            status.textContent = 'There is not a guide available for this website page.';
        }
        myButton.disabled = false; // Enable button after matchedPage is set
    });

    myButton.addEventListener('click', loadHelp2);
    chrome.runtime.connect({ name: "popup" });

    function loadHelp2() {
        if (matchedPage) {
            fetch(chrome.runtime.getURL('tutorials/' + matchedPage.file))
                .then(response => response.text())
                .then(html => {
                    document.getElementById('content').innerHTML = html;
                });
        } else {
            alert('There is no tutorial available for this website. Please open a different website. You can also view all the available tutorials with the other button');
        }
    }

});


function loadHelp() {

    if (is_gmail) {
        fetch(chrome.runtime.getURL('tutorials/gmail_tutorial.html'))
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            });
    } else if (is_zoom) {
        fetch(chrome.runtime.getURL('tutorials/zoom_tutorial.html'))
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            });
    }else if (is_youtube) {
        fetch(chrome.runtime.getURL('tutorials/youtube_tutorial.html'))
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            });
    }else if (is_outlook) {
        fetch(chrome.runtime.getURL('tutorials/outlook_tutorial.html'))
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            });
    }else {
        alert('There is no tutorial available for this website. Please open a different website. You can also view all the available tutorials with the other button');
    }
}

