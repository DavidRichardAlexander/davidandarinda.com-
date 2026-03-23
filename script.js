document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-nav a');
    const tabContainer = document.querySelector('.tab-content');
    
    // If there's no tab container, do nothing.
    if (!tabContainer) return;

    const tabPanels = tabContainer.querySelectorAll('section');

    function showPanel(panelId) {
        // Hide all panels
        tabPanels.forEach(panel => {
            panel.style.display = 'none';
        });

        // Show the target panel
        const panelToShow = document.getElementById(panelId);
        if (panelToShow) {
            panelToShow.style.display = 'block';
        }
    }

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const panelId = this.getAttribute('href').substring(1);
            showPanel(panelId);

            // Update active class on tabs
            tabLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Initially hide all panels, show the first one, and set the first tab to active
    if (tabLinks.length > 0 && tabPanels.length > 0) {
        tabPanels.forEach(panel => panel.style.display = 'none');
        
        const firstPanelId = tabLinks[0].getAttribute('href').substring(1);
        const firstPanel = document.getElementById(firstPanelId);
        if (firstPanel) {
            firstPanel.style.display = 'block';
        }
        tabLinks[0].classList.add('active');
    }
});
