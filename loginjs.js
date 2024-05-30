const toggle = document.getElementById('toggle');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

const loginErrorMessage = document.querySelector('.flip-card__front .error-message');
const signupErrorMessage = document.querySelector('.flip-card__back .error-message');

toggle.addEventListener('change', () => {
  const cardFront = document.querySelector('.flip-card__front');
  const cardBack = document.querySelector('.flip-card__back');
  cardFront.classList.toggle('flip');
  cardBack.classList.toggle('flip');
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(loginForm); // More robust way to get form data

  // Implement login logic here, e.g., fetch data from backend or simulate local storage
  // For this example, we'll simulate basic validation (replace with real authentication)
  const email = formData.get('email');
  const password = formData.get('password');

  if (email === 'user@example.com' && password === 'secret') {
    // Login successful (replace with redirect to appropriate page)
    alert('Login successful!'); // Temporary alert for demonstration
  } else {
    loginErrorMessage.textContent = 'Invalid email or password.';
  }
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(signupForm); // More robust way to get form data

  // Implement signup logic here, e.g., send data to backend or simulate local storage
  // For this example, we'll simulate basic validation
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  if (name && email && password) {
    // Signup successful (replace with redirect or success message)
    alert('Signup successful!'); // Temporary alert for demonstration
  } else {
    signupErrorMessage.textContent = 'Please fill in all fields.';
  }
});
