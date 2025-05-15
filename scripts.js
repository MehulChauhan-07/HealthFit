// // Registration handler
// async function handleRegistration(event) {
//     event.preventDefault();
//     const formData = {
//         full_name: document.getElementById('fullName').value,
//         email: document.getElementById('email').value,
//         password: document.getElementById('password').value,
//         gender: document.getElementById('gender').value,
//         dob: document.getElementById('dob').value,
//         goals: document.getElementById('goals').value
//     };

//     try {
//         const response = await fetch('http://localhost:3001/api/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });

//         const data = await response.json();
//         console.log('Registration response:', data);

//         if (data.success) {
//             // Store user data and redirect
//             localStorage.setItem('userData', JSON.stringify(data.user));
//             window.location.href = data.redirect;
//         } else {
//             alert(data.message || 'Registration failed');
//         }
//     } catch (error) {
//         console.error('Registration error:', error);
//         alert('An error occurred during registration');
//     }
// }

// // Login handler
// async function handleLogin(event) {
//     event.preventDefault();
//     const formData = {
//         email: document.getElementById('email').value,
//         password: document.getElementById('password').value
//     };

//     try {
//         const response = await fetch('http://localhost:3001/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });

//         const data = await response.json();
//         console.log('Login response:', data);

//         if (data.success) {
//             // Store user data and redirect
//             localStorage.setItem('userData', JSON.stringify(data.user));
//             window.location.href = data.redirect;
//         } else {
//             alert(data.message || 'Login failed');
//         }
//     } catch (error) {
//         console.error('Login error:', error);
//         alert('An error occurred during login');
//     }
// }

// // Add event listeners
// document.addEventListener('DOMContentLoaded', () => {
//     const registerForm = document.getElementById('registerForm');
//     const loginForm = document.getElementById('loginForm');

//     if (registerForm) {
//         registerForm.addEventListener('submit', handleRegistration);
//     }

//     if (loginForm) {
//         loginForm.addEventListener('submit', handleLogin);
//     }

//     // Check if user is already logged in
//     const userData = localStorage.getItem('userData');
//     const currentPath = window.location.pathname;

//     // Only redirect if we're on the index or root page
//     if (userData && (currentPath.endsWith('index.html') || currentPath === '/' || currentPath === '/index.html')) {
//         window.location.href = 'profile.html';
//     }
// });
