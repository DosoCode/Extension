document.addEventListener('DOMContentLoaded', () => {
    
    const select = document.getElementById('slider');
 
    if (select) {
        select.addEventListener('change', saveFavorite);
    }
  
});


function saveFavorite() {

    const save = document.getElementById('slider')
    alert(save.value);

    chrome.storage.local.set({ favoriteSelection: save.value }).then(() => {
        console.log("Value is set");

    });

}
