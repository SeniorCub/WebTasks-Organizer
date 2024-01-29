document.addEventListener("DOMContentLoaded", function () {
     const images = document.querySelectorAll("img[data-src]");
     const progressBar = document.getElementById("progress-bar");
   
     const observer = new IntersectionObserver(
       (entries, observer) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             const img = entry.target;
             const src = img.getAttribute("data-src");
   
             img.setAttribute("src", src);
             img.removeAttribute("data-src");
             observer.unobserve(img);
           }
         });
       },
       { threshold: 0.5 }
     );
   
     images.forEach((img) => {
       observer.observe(img);
     });
   
     // Progressively show the content
     async function showContent() {
       const content = document.getElementById("content");
       content.classList.remove("hidden");
   
       // Smoothly hide the progress bar
       progressBar.style.opacity = 0;
       await delay(500);
       progressBar.style.display = "none";
     }
   
     // Progress bar indicating loading progress
     function updateProgressBar(percentage) {
       progressBar.style.width = percentage + "%";
     }
   
     // Add a delay function
     function delay(milliseconds) {
       return new Promise((resolve) => setTimeout(resolve, milliseconds));
     }
   
     // Call the delay function before displaying content
     async function initializeWebsite() {
       // Show loading display
       document.getElementById("loading").style.display = "flex";
   
       // Wait for 2000 milliseconds (2 seconds) before displaying content
       await delay(2000);
   
       // Hide loading display
       document.getElementById("loading").style.display = "none";
   
       // Display the content by removing the 'hidden' class
       document.getElementById("content").classList.remove("hidden");
   
       // Show the content progressively
       await showContent();
     }
   
     // Run the initialization function when the window has finished loading
     window.addEventListener("load", initializeWebsite);
   
     // Update the progress bar as the page loads
     document.onreadystatechange = function () {
       if (document.readyState === "interactive") {
         const totalResources = performance.getEntriesByType("resource").length;
         let loadedResources = 0;
   
         performance.getEntriesByType("resource").forEach((entry) => {
           if (entry.duration > 0) {
             loadedResources++;
           }
         });
   
         const percentage = (loadedResources / totalResources) * 100;
         updateProgressBar(percentage);
       }
     };
   });   