// This script is not necessary for the basic functionality of the dropdown but can be used for more advanced interactions.
// For example, you could close the dropdown when clicking outside of it.

document.addEventListener("click", function(event) {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    
    if (!dropdownButton.contains(event.target)) {
      dropdownMenu.style.display = "none";
    }
  });
  