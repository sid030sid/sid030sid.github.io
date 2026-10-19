document.addEventListener('DOMContentLoaded', function() {
  const topicFilter = document.getElementById('project-topic-filter');
  const typeFilter = document.getElementById('project-type-filter');

  function restoreFiltersFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    if (topicFilter) {
      topicFilter.value = urlParams.get('topic') || '';
    }
    if (typeFilter) {
      typeFilter.value = (urlParams.get('type') || '').toLowerCase();
    }
    applyFilter();
  }

  function updateUrlFromFilters() {
    const url = new URL(window.location.href);
    const topic = topicFilter ? topicFilter.value : '';
    const type = typeFilter ? typeFilter.value : '';

    if (topic) {
      url.searchParams.set('topic', topic);
    } else {
      url.searchParams.delete('topic');
    }
    if (type) {
      url.searchParams.set('type', type);
    } else {
      url.searchParams.delete('type');
    }

    window.history.pushState({ topic: topic, type: type }, '', url);
    applyFilter();
  }

  [topicFilter, typeFilter].forEach(function(filter) {
    if (filter) {
      filter.addEventListener('change', updateUrlFromFilters);
    }
  });

  window.addEventListener('popstate', restoreFiltersFromUrl);
  restoreFiltersFromUrl();
});

function applyFilter() {
  const topicFilter = document.getElementById('project-topic-filter');
  const typeFilter = document.getElementById('project-type-filter');
  const selectedTopic = topicFilter ? topicFilter.value : '';
  const selectedType = typeFilter ? typeFilter.value : '';
  const projectItems = document.querySelectorAll('.project-item');
  
  projectItems.forEach(item => {
    const topics = item.getAttribute('data-topics') || '';
    const projectType = item.getAttribute('data-type') || '';
    const shouldDisplay = (!selectedTopic || topics.includes(selectedTopic))
      && (!selectedType || projectType === selectedType);
    
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
