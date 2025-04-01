// Tab Switching Functionality
    function switchTab(tabId) {
      // Hide all tab contents
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Remove active class from all tab items
      document.querySelectorAll('.tab-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Show the selected tab content
      document.getElementById(tabId).classList.add('active');
      
      // Add active class to the clicked tab item
      event.target.classList.add('active');
    }

    // Initialize Charts
    document.addEventListener('DOMContentLoaded', function() {
      // Pending Work Chart
      const pendingWorkCtx = document.getElementById('pendingWorkChart').getContext('2d');
      const pendingWorkChart = new Chart(pendingWorkCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Pending Tasks',
            data: [12, 19, 15, 8, 9, 4],
            backgroundColor: 'rgba(72, 149, 239, 0.2)',
            borderColor: 'rgba(72, 149, 239, 1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Performance Chart
      const performanceCtx = document.getElementById('performanceChart').getContext('2d');
      const performanceChart = new Chart(performanceCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Performance Score',
            data: [65, 72, 78, 75, 82, 88],
            backgroundColor: 'rgba(76, 201, 240, 0.8)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });

      // Completed Work Chart
      const completedWorkCtx = document.getElementById('completedWorkChart').getContext('2d');
      const completedWorkChart = new Chart(completedWorkCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Completed Tasks',
            data: [35, 42, 50, 45, 55, 60],
            backgroundColor: 'rgba(63, 55, 201, 0.2)',
            borderColor: 'rgba(63, 55, 201, 1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });

      // Notifications Chart
      const notificationsCtx = document.getElementById('notificationsChart').getContext('2d');
      const notificationsChart = new Chart(notificationsCtx, {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          datasets: [{
            label: 'Notifications',
            data: [12, 8, 15, 7, 10],
            backgroundColor: 'rgba(247, 37, 133, 0.7)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });

      // Workload Chart
      const workloadCtx = document.getElementById('workloadChart').getContext('2d');
      const workloadChart = new Chart(workloadCtx, {
        type: 'doughnut',
        data: {
          labels: ['Design', 'Development', 'Testing', 'Deployment'],
          datasets: [{
            data: [25, 45, 20, 10],
            backgroundColor: [
              'rgba(76, 201, 240, 0.8)',
              'rgba(67, 97, 238, 0.8)',
              'rgba(247, 37, 133, 0.8)',
              'rgba(248, 150, 30, 0.8)'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });

      // Project Success Chart
      const projectSuccessCtx = document.getElementById('projectSuccessChart').getContext('2d');
      const projectSuccessChart = new Chart(projectSuccessCtx, {
        type: 'pie',
        data: {
          labels: ['Success', 'Delayed', 'Failed'],
          datasets: [{
            data: [70, 20, 10],
            backgroundColor: [
              'rgba(76, 201, 240, 0.8)',
              'rgba(248, 150, 30, 0.8)',
              'rgba(247, 37, 133, 0.8)'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });

      // Task Stats Chart
      const taskStatsCtx = document.getElementById('taskStatsChart').getContext('2d');
      const taskStatsChart = new Chart(taskStatsCtx, {
        type: 'polarArea',
        data: {
          labels: ['Completed', 'In Progress', 'Pending', 'Delayed'],
          datasets: [{
            data: [28, 10, 4, 5],
            backgroundColor: [
              'rgba(76, 201, 240, 0.8)',
              'rgba(67, 97, 238, 0.8)',
              'rgba(248, 150, 30, 0.8)',
              'rgba(247, 37, 133, 0.8)'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    });

