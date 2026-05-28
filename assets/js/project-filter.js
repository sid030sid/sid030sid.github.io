document.addEventListener('DOMContentLoaded', function() {
  // Initialize the filter
  const urlParams = new URLSearchParams(window.location.search);
  const selectedTopic = urlParams.get('topic');
  
  const filterSelect = document.getElementById('project-topic-filter');
  if (filterSelect && selectedTopic) {
    filterSelect.value = selectedTopic;
  }
  
  // Apply filter on page load
  applyFilter();
  
  // Add change event listener
  if (filterSelect) {
    filterSelect.addEventListener('change', function() {
      const selectedValue = this.value;
      if (selectedValue) {
        // Update URL with topic parameter
        const newUrl = window.location.pathname + '?topic=' + encodeURIComponent(selectedValue);
        window.history.pushState({ topic: selectedValue }, '', newUrl);
      } else {
        // Remove query parameter if "All" is selected
        window.history.pushState({}, '', window.location.pathname);
      }
      applyFilter();
    });
  }
});

function applyFilter() {
  const filterSelect = document.getElementById('project-topic-filter');
  const selectedTopic = filterSelect ? filterSelect.value : '';
  const projectItems = document.querySelectorAll('.project-item');
  
  projectItems.forEach(item => {
    const topics = item.getAttribute('data-topics');
    const shouldDisplay = !selectedTopic || (topics && topics.includes(selectedTopic));
    
    if (shouldDisplay) {
      item.style.display = '';
      // Show the <br> tag that follows this item
      const nextBr = item.nextElementSibling;
      if (nextBr && nextBr.tagName === 'BR') {
        nextBr.style.display = '';
      }
    } else {
      item.style.display = 'none';
      // Hide the <br> tag that follows this item
      const nextBr = item.nextElementSibling;
      if (nextBr && nextBr.tagName === 'BR') {
        nextBr.style.display = 'none';
      }
    }
  });
}
