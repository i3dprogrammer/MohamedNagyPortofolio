// MaterializeCss initializers

var elem = document.querySelectorAll('.scrollspy');
elem.forEach((el, index) => {
    M.ScrollSpy.init(el, { throttle: 1 });
});

elem = document.querySelectorAll('.materialboxed');
elem.forEach((el, index) => {
    M.Materialbox.init(el);
});

// Custom Modals

var apps = document.querySelectorAll(".app");
var modals_close = document.querySelectorAll(".s-modal-close");

// Really should extract a function out of these bad guys.

apps.forEach((app, index) => {
    app.addEventListener("click", () => {
        var modalId = app.getAttribute('modal-id');
        if (modalId) {
            var modal = document.querySelector("#" + modalId);
            modal.style.display = '';
        }
    })
});

modals_close.forEach((mclose, index) => {
    mclose.addEventListener("click", () => {
        apps.forEach((app, index) => {
            var modalId = app.getAttribute('modal-id');
            if (modalId) {
                var modal = document.querySelector("#" + modalId);
                modal.style.display = 'none';
            }
        });
    })
})

window.addEventListener("click", (event) => {
    apps.forEach((app, index) => {
        var modalId = app.getAttribute('modal-id');
        if (modalId) {
            var modal = document.querySelector("#" + modalId);
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    });
})

window.addEventListener("keydown", (event) => {
    if (event.keyCode == 27) {
        apps.forEach((app, index) => {
            var modalId = app.getAttribute('modal-id');
            if (modalId) {
                var modal = document.querySelector("#" + modalId);
                modal.style.display = 'none';
            }
        });
    }
});

// Skills chart

Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontColor = 'white';
// Chart.defaults.global.defaultFontStyle = 'normal';

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

// Emailing

var sendButton = document.querySelector("#send-email");
if (sendButton) {
    sendButton.addEventListener("click", () => {
        var email = document.querySelector(".email").value;
        var emailBody = document.querySelector(".subject").value;
        Email.send(email,
            "mohamednagy2015@outlook.com",
            "Portofolio, " + email + " would like an Android app!",
            emailBody,
            { token: "b44232e5-62c2-4c89-a4f4-6f901bd76ba7", callback: (message) => { console.log(message)} });
    });
}