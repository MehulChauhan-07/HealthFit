// dashboard.js
// Redirect to login if not authenticated (simple check for user in localStorage)
if (!localStorage.getItem('userEmail')) {
    window.location.href = 'login.html';
}

// Fetch user info and display name
window.onload = function() {
    const userNameSpan = document.getElementById('userName');
    // In production, fetch user info from backend using stored email or token
    const userEmail = localStorage.getItem('userEmail');
    fetch(`/api/user?email=${encodeURIComponent(userEmail)}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.full_name) {
                userNameSpan.textContent = data.full_name;
            }
        });
};

document.getElementById('logoutBtn').onclick = function() {
    localStorage.removeItem('userEmail');
    window.location.href = 'login.html';
};
