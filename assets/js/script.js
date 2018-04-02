var elem = document.querySelectorAll('.scrollspy');
elem.forEach((el, index) => {
    M.ScrollSpy.init(el, { throttle: 1 });
});

Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontStyle = 'normal';

var ctx = document.getElementById('skills-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["Java", "Android", "OOP", "C++", "Machine Learning"],
        datasets: [{
            label: "Skills (0 Bad > 5 Expert)",
            backgroundColor: 'rgb(239, 207, 0)',
            borderColor: 'rgb(239, 207, 0)',
            data: [4, 5, 4, 2, 1],
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                // stacked: true
                barPercentage: 0.5,
                // categoryPercentage: 0.1,
            }],
            xAxes: [{
                ticks: {
                    min: 0,
                    max: 5,
                },
            }]
        },
    }
});