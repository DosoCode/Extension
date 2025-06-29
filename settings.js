document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('Selection');
    if (!select) {
        console.error('selection not picked');
        return;
    }
    select.addEventListener('change', filterGuides);
});

function filterGuides(){
    const select = document.getElementById('Selection');
    alert(select.value);
};
