# Extension
This extension has a guided tutorial for various sites. It is geared more towards people new to using websites search engines. It is still a work in progress. The main function of detecting what site the user is on is done. UI needs to be improved and more websites will be added.



Im just gonna store the chatgpt prompt i used for the tutorials


Generate a html file for a [] tutorial geared towards a non-technical audience. I will provide a template. The tutorial should have the same format as the template. The content of the [] tutorial may be longer than the template. Include more sections and headings if needed. Use standard straight quotes and apostrophe's in the code. make sure the video embeds actually work. 


Use this outlook tutorial as a template.


Code taken out of help_poup.js

        if (url.includes('zoom.com' ) || url.includes('zoom.us')) {
            status.textContent = 'This tab is a Zoom page!';
            is_zoom = true;
        } else if (url.includes('mail.google.com')) {
            is_gmail = true
            status.textContent = 'This tab is a Gmail page!';

        } else if (url.includes('youtube.com')) {
            is_youtube = true
            status.textContent = 'This tab is a youtube Page'
        } else if (url.includes('outlook.com') || url.includes('outlook.live')) {
            is_outlook = true
            status.textContent = 'This tab is an Outlook Page'
        } else {
            status.textContent = 'There is not a guide available for this website page.';
        }