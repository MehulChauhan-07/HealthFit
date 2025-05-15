document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
        window.location.href = 'index.html';
        return;
    }

    // Populate user profile information
    document.getElementById('userName').textContent = userData.full_name;
    document.getElementById('userEmail').textContent = userData.email;
    document.getElementById('userGender').textContent = userData.gender || 'Not specified';
    document.getElementById('userDob').textContent = userData.dob ? new Date(userData.dob).toLocaleDateString() : 'Not specified';
    document.getElementById('userGoals').textContent = userData.goals || 'Not specified';

    // Handle diet plan display
    if (userData.selectedDietPlan) {
        document.getElementById('noDietPlan').style.display = 'none';
        document.getElementById('selectedDietPlan').style.display = 'block';
        document.getElementById('dietPlanTitle').textContent = userData.selectedDietPlan.title;
        document.getElementById('dietPlanDescription').textContent = userData.selectedDietPlan.description;
    }

    // Handle workout plan display
    if (userData.selectedWorkoutPlan) {
        document.getElementById('noWorkoutPlan').style.display = 'none';
        document.getElementById('selectedWorkoutPlan').style.display = 'block';
        document.getElementById('workoutPlanTitle').textContent = userData.selectedWorkoutPlan.title;
        document.getElementById('workoutPlanDescription').textContent = userData.selectedWorkoutPlan.description;
    }

    // Handle plan change buttons
    document.getElementById('changeDietPlan').addEventListener('click', () => {
        window.location.href = 'diet-plans.html';
    });

    document.getElementById('changeWorkoutPlan').addEventListener('click', () => {
        window.location.href = 'workout-plans.html';
    });

    // Handle logout
    document.getElementById('logoutBtn').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('userData');
        window.location.href = 'index.html';
    });

    // Update progress bars (mock data for now)
    updateProgressBars();
});

function updateProgressBars() {
    // Mock progress data - in a real app, this would come from the server
    const dietProgress = 30;
    const workoutProgress = 45;
    const overallProgress = (dietProgress + workoutProgress) / 2;

    document.getElementById('dietProgress').style.width = `${dietProgress}%`;
    document.getElementById('workoutProgress').style.width = `${workoutProgress}%`;
    document.getElementById('overallProgress').style.width = `${overallProgress}%`;
} 