document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const addBar = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');
    const shortcuts = document.querySelectorAll('.shortcut');
    const customizeButton = document.querySelector('.customize');

    // Function to perform search
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }

    // Event listener for search input
    addBar.addEventListener('click', () => {
       input.value = '';
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Add focus effect to search bar
    searchInput.addEventListener('focus', function() {
        searchBar.style.boxShadow = '0 1px 6px 0 rgba(32,33,36,0.28)';
    });

    searchInput.addEventListener('blur', function() {
        searchBar.style.boxShadow = 'none';
    });

    // Add hover effect to shortcuts
    shortcuts.forEach(shortcut => {
        shortcut.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(232,234,237,0.08)';
        });

        shortcut.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // Event listener for customize button
    customizeButton.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Customize Chrome functionality would be implemented here.');
    });

    // Function to get current time
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        document.querySelector('.time').textContent = timeString;
    }

    // Update time every second
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to display time immediately

   
});