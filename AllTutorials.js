document.addEventListener('DOMContentLoaded', () => {
    const h2selector = document.querySelectorAll('h2');
     const Ulselector = document.querySelectorAll('ul');

    let browserSelection=0
    chrome.storage.local.get(["browserSelection"]).then((result) => {
        console.log("Value is " + result.browserSelection);
        browserSelection = result.browserSelection;
        
        h2selector.forEach(h2=>{
            if (h2.className == browserSelection || browserSelection == 'All') {
                h2.style.display = 'block';
            } else {
                h2.style.display = 'none';
            }});

            Ulselector.forEach(ul=>{
            if (ul.className == browserSelection || browserSelection == 'All') {
                ul.style.display = 'block';
            } else {
                ul.style.display = 'none';
            }});

    });
});