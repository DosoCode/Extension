

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('Selection');
    
    let browserSelection=0
    chrome.storage.local.get(["browserSelection"]).then((result) => {
        console.log("Value is " + result.browserSelection);
        browserSelection = result.browserSelection;


        
        if (!select) {
            console.error('selection not picked');
            return;
        }
        select.value = browserSelection
    });


 
    select.addEventListener('change', saveTheSettings);
  
});

function saveTheSettings() {

    const save = document.getElementById('Selection')
    alert(save.value);

    chrome.storage.local.set({ browserSelection: save.value }).then(() => {
        console.log("Value is set");

    });

}



function filterGuides(){
    const select = document.getElementById('Selection');

};
