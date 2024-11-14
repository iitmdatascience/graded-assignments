document.addEventListener("DOMContentLoaded", function() {
  const loadingScreen = document.getElementById("loading-screen");

  function showLoadingScreen() {
    loadingScreen.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function hideLoadingScreen() {
    loadingScreen.style.display = "none";
    document.body.style.overflow = "auto";
  }

  function handleLinkClick(event) {
    const link = event.target;
    if (link.href && link.href !== window.location.href) {
      event.preventDefault();
      showLoadingScreen();
      setTimeout(() => {
        window.location.href = link.href;
      }, 3000);
    }
  }

  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', handleLinkClick);
  });

  window.addEventListener('load', function() {
    hideLoadingScreen();
  });

  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      hideLoadingScreen();
    }
  });
});
function checkPasskey() {
    // Check for element existence before accessing style properties
    const passkeyInput = document.getElementById("passkey");
    const restrictedContent = document.getElementById("restricted-content");
    const passkeyForm = document.getElementById("passkey-form");

    if (!passkeyInput || !restrictedContent || !passkeyForm) {
        console.error("One or more elements are missing.");
        return;
    }
function showCustomAlert(message) {
      // Use innerHTML to allow HTML tags (like <br>) to be rendered
      document.getElementById("alert-message").innerHTML = message;
      document.getElementById("custom-alert").style.display = "block";
      document.getElementById("overlay").style.display = "block";
  }

    const enteredPasskey = passkeyInput.value;
    const correctPasskey = "5318008"; // Set your passkey here

    if (enteredPasskey === correctPasskey) {
        restrictedContent.style.display = "block";
        passkeyForm.style.display = "none";
    }else {
      // Show custom alert for incorrect passkey
      showCustomAlert("Incorrect password <br> Spy detected!");
      passkeyInput.value = ""; // Clear the input field
  }
}
function showCustomAlert(message) {
  // Set the message
  document.getElementById("alert-message").innerText = message;

  // Show the custom alert and overlay
  document.getElementById("custom-alert").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeAlert() {
  // Hide the custom alert and overlay
  document.getElementById("custom-alert").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Example usage: Show the custom alert
// Uncomment this to trigger the custom alert
// showCustomAlert("This is a styled alert message!");
