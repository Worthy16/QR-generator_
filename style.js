document.addEventListener("DOMContentLoaded", function() {
  const registerButton = document.getElementById("registerButton");
  const modal = document.getElementById("registerModal");
  const closeModal = document.getElementsByClassName("close")[0];

  // Show the modal when "Register" button is clicked
  registerButton.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Close the modal when the close button (X) is clicked
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle form submission
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registration Successful!");
    modal.style.display = "none";
  });
});

// QR code functionality
const qrCodeCanvas = document.getElementById('qr-code-canvas');
const qrTextInput = document.getElementById('qr-text');
const generateButton = document.getElementById('generate-button');
const downloadButton = document.getElementById('download-png');
const foregroundColor = document.getElementById('foreground-color');
const backgroundColor = document.getElementById('background-color');
const eyeShape = document.getElementById('eye-shape');

// Populate eye shape options (example options; customize as needed)
eyeShape.innerHTML = `
  <option value="square">Square</option>
  <option value="circle">Circle</option>
`;

// Function to generate the QR code
generateButton.addEventListener('click', () => {
  qrCodeCanvas.innerHTML = ''; // Clear previous QR code

  const options = {
    text: qrTextInput.value || 'https://brightqr.com', // Default text if input is empty
    width: 200,
    height: 200,
    colorDark: foregroundColor.value,
    colorLight: backgroundColor.value,
    correctLevel: QRCode.CorrectLevel.H
  };

  // Create QR code
  const qr = new QRCode(qrCodeCanvas, options);

  // Customize eye shape if supported by the QR code library
  // Here we are simulating customization. Actual customization
  // might require a specialized QR library
  if (eyeShape.value === 'circle') {
    const dots = qrCodeCanvas.querySelectorAll('rect');
    dots.forEach(dot => {
      dot.setAttribute('rx', '10');
      dot.setAttribute('ry', '10');
    });
  }
});

// Download QR code as PNG
downloadButton.addEventListener('click', () => {
  const canvas = qrCodeCanvas.querySelector('canvas');
  if (canvas) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'brightqr-code.png';
    link.click();
  }
});
  
  