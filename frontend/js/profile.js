// profile.js
if (!localStorage.getItem('userEmail')) {
    window.location.href = 'login.html';
}

window.onload = function() {
    const profileInfo = document.getElementById('profileInfo');
    const userPlans = document.getElementById('userPlans');
    const userEmail = localStorage.getItem('userEmail');
    fetch(`/api/user?email=${encodeURIComponent(userEmail)}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.full_name) {
                profileInfo.innerHTML = `<p><strong>Name:</strong> ${data.full_name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Gender:</strong> ${data.gender}</p>
                <p><strong>Date of Birth:</strong> ${data.dob}</p>
                <p><strong>Goals:</strong> ${data.goals}</p>`;
                if (data.selectedDietPlan || data.selectedWorkoutPlan) {
                    userPlans.innerHTML = `<h3>Selected Plans</h3>`;
                    if (data.selectedDietPlan) {
                        userPlans.innerHTML += `<p><strong>Diet Plan:</strong> ${data.selectedDietPlan.title}</p>`;
                    }
                    if (data.selectedWorkoutPlan) {
                        userPlans.innerHTML += `<p><strong>Workout Plan:</strong> ${data.selectedWorkoutPlan.title}</p>`;
                    }
                }
            }
        });
};

document.getElementById('logoutBtn').onclick = function() {
    localStorage.removeItem('userEmail');
    window.location.href = 'login.html';
};
