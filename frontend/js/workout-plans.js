// workout-plans.js
if (!localStorage.getItem('userEmail')) {
    window.location.href = 'login.html';
}

window.onload = function() {
    const container = document.getElementById('workoutPlansContainer');
    const userEmail = localStorage.getItem('userEmail');
    fetch(`/api/workout-plans?email=${encodeURIComponent(userEmail)}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.plans) {
                container.innerHTML = data.plans.map(plan => `
                    <div class="plan-card">
                        <h3>${plan.title}</h3>
                        <p>${plan.description}</p>
                        <button onclick="selectWorkoutPlan('${plan._id}')">Select</button>
                    </div>
                `).join('');
            } else {
                container.innerHTML = '<p>No plans found for your goal.</p>';
            }
        });
};

function selectWorkoutPlan(planId) {
    const userEmail = localStorage.getItem('userEmail');
    fetch('/api/select-workout-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, planId })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert('Workout plan selected!');
        }
    });
}
