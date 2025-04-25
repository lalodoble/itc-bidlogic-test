document.addEventListener('DOMContentLoaded', function() {
  // Revenue Trends Chart
  const revenueChartOptions = {
    series: [{
      name: 'Revenue',
      data: [30500, 41250, 35800, 51000, 49000, 62000, 69000, 91000, 148000, 106000, 87000, 95000]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false
      },
      fontFamily: 'inherit'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    colors: ['#3B82F6'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100]
      }
    }
  };

  // Category Chart
  const categoryChartOptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: '100%',
      height: 350,
      type: 'pie',
      fontFamily: 'inherit'
    },
    labels: ['Electronics', 'Clothing', 'Home & Garden', 'Books', 'Others'],
    colors: ['#3B82F6', '#10B981', '#F59E0B', '#6366F1', '#EC4899'],
    legend: {
      position: 'bottom'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  // Initialize charts if elements exist
  const revenueChartElement = document.getElementById('revenue-chart');
  const categoryChartElement = document.getElementById('category-chart');
  
  if (revenueChartElement) {
    const revenueChart = new ApexCharts(revenueChartElement, revenueChartOptions);
    revenueChart.render();
  }
  
  if (categoryChartElement) {
    const categoryChart = new ApexCharts(categoryChartElement, categoryChartOptions);
    categoryChart.render();
  }

  // Add event listener for the refresh button
  const refreshButton = document.querySelector('.btn-primary');
  if (refreshButton) {
    refreshButton.addEventListener('click', function() {
      // Simulate data refresh
      const randomData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100000) + 20000);
      
      if (revenueChart) {
        revenueChart.updateSeries([{
          data: randomData
        }]);
      }
    });
  }

  // Add event listener for time period selector
  const periodSelector = document.querySelector('select.select-bordered');
  if (periodSelector) {
    periodSelector.addEventListener('change', function(e) {
      const period = e.target.value;
      // In a real application, you would fetch data based on the selected period
      console.log(`Selected period: ${period}`);
    });
  }
}); 