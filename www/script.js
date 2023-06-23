// Load the button data from the button-data.json file
fetch('urls.json')
  .then(response => response.json())
  .then(data => {
    // Define the urls array
    const urls = data.urls;

    // Loop through the urls array and load each URL
    let currentUrlIndex = 0;
    const loadNextUrl = function() {
      if (currentUrlIndex >= urls.length) {
        currentUrlIndex = 0; // Reset the index to loop forever
      }

      const iframe = document.createElement("iframe");
      document.getElementById("iframes-container").appendChild(iframe);

      iframe.onload = function() {
        setTimeout(function() {
          iframe.parentNode.removeChild(iframe);
          currentUrlIndex++;
          loadNextUrl();
        }, 90000);
      };

      iframe.setAttribute("src", urls[currentUrlIndex]);
    };

    // Load the first URL
    loadNextUrl();
  });
