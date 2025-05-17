// diet-plans.js
if (!localStorage.getItem('userEmail')) {
    window.location.href = 'login.html';
}

window.onload = function() {
    const container = document.getElementById('dietPlansContainer');
    const userEmail = localStorage.getItem('userEmail');
    fetch(`/api/diet-plans?email=${encodeURIComponent(userEmail)}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.plans) {
                container.innerHTML = data.plans.map(plan => `
                    <div class="plan-card">
                        <h3>${plan.title}</h3>
                        <p>${plan.description}</p>
                        <button onclick="selectDietPlan('${plan._id}')">Select</button>
                    </div>
                `).join('');
            } else {
                container.innerHTML = '<p>No plans found for your goal.</p>';
            }
        });
};

function selectDietPlan(planId) {
    const userEmail = localStorage.getItem('userEmail');
    fetch('/api/select-diet-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, planId })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert('Diet plan selected!');
        }
    });
}
