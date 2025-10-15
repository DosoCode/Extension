function injectBanner() {
  if (document.getElementById('dl-toolkit-banner')) return; // Prevent duplicates

  const banner = document.createElement('div');
  banner.id = 'dl-toolkit-banner';
  banner.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #f1f8e9;
    color: #222;
    z-index: 9999;
    display: flex;
    align-items: center;
    padding: 8px 16px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.08);
    font-family: Arial, sans-serif;
    font-size: 15px;
  `;

  const text = document.createElement('span');
  text.textContent = 'Need help? Click the extension icon in your browser toolbar for a guided tutorial.';

  banner.appendChild(text);

  // Add a close button
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.style.cssText = `
  background-image: url("${chrome.runtime.getURL('close_button.png')}");
    align-content: start;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #888;
  `;
  closeBtn.onclick = () => banner.remove();
  banner.appendChild(closeBtn);

  document.body.prepend(banner);
}

// Ask background if popup is open
chrome.runtime.sendMessage({ type: "isPopupOpen" }, (response) => {
  if (!response?.popupOpen) {
    injectBanner();
  }
});