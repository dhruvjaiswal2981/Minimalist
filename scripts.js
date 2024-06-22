document.addEventListener('DOMContentLoaded', function() {
    function openPopup(popupId) {
        let popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'block';
        }
    }

    function closePopup(popupId) {
        let popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'none';
        }
    }

    // Expose functions to global scope
    window.openPopup = openPopup;
    window.closePopup = closePopup;
});