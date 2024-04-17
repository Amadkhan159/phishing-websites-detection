// Get the terms container element
const container = document.querySelector('.container');

// Add event listener to smoothly scroll to sections within the terms
container.addEventListener('click', (event) => {
  if (event.target.matches('a[href^="#"]')) {
    event.preventDefault();

    const target = document.querySelector(event.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Add animation when the terms page is loaded
window.addEventListener('DOMContentLoaded', () => {
  container.style.animation = 'slide-in 1s ease-out';
});



// Get the privacy policy container element
const privacyPolicyContainer = document.querySelector('.privacy-policy-container');

// Add event listener to smoothly scroll to sections within the privacy policy
privacyPolicyContainer.addEventListener('click', (event) => {
  if (event.target.matches('a[href^="#"]')) {
    event.preventDefault();

    const target = document.querySelector(event.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Add animation when the privacy policy is loaded
window.addEventListener('DOMContentLoaded', () => {
  privacyPolicyContainer.style.animation = 'slide-in 1s ease-out';
});
