// Add a delay function
function delay(milliseconds) {
     return new Promise(resolve => setTimeout(resolve, milliseconds));
   }
 
   // Call the delay function before displaying content
   async function initializeWebsite() {
     // Show loading display
     document.getElementById('loading').style.display = 'flex';
 
     // Wait for 2000 milliseconds (2 seconds) before displaying content
     await delay(2000);
 
     // Hide loading display
     document.getElementById('loading').style.display = 'none';
 
     // Display the content by removing the 'hidden' class
     document.getElementById('content').classList.remove('hidden');
   }
 
   // Run the initialization function when the window has finished loading
   window.addEventListener('load', initializeWebsite);