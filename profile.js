document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('dailyGoalChart').getContext('2d');
    var dailyGoalChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Daily Goal',
                data: [0, 0, 20, 100, 200, 20, 200],
                borderColor: '#00aaff',
                backgroundColor: 'rgba(255,165,0,0.2)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 200
                }
            }
        }
    });
});
