var apps = document.querySelectorAll(".app");
var modals_close = document.querySelectorAll(".s-modal-close");
var html_doc = document.documentElement;

// MaterializeCss initializers

var elem = document.querySelectorAll('.scrollspy');
elem.forEach((el, index) => {
    M.ScrollSpy.init(el, { throttle: 1 });
});

// Hide the scrollbars after enlarging a picture.
function hideScrollbar() {
    html_doc.style.overflowY = 'hidden';
}

elem = document.querySelectorAll('.materialboxed');
elem.forEach((el, index) => {
    M.Materialbox.init(el, { onCloseEnd: hideScrollbar, onOpenEnd: hideScrollbar });
});

// Custom Modals

// Really should extract a function out of these bad guys.

apps.forEach((app, index) => {
    app.addEventListener("click", () => {
        var modalId = app.getAttribute('modal-id');
        if (modalId) {
            var modal = document.querySelector("#" + modalId);
            modal.style.display = '';
            html_doc.style.overflowY = 'hidden';
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
                html_doc.style.overflowY = 'auto';
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
                html_doc.style.overflowY = 'auto';
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
                html_doc.style.overflowY = 'auto';
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
        var email = document.querySelector(".email");
        var emailBody = document.querySelector(".subject");
        Email.send(email.value,
            "mohamednagy2015@outlook.com",
            "Portofolio, " + email.value + " would like an Android app!",
            emailBody.value,
            {
                token: "b44232e5-62c2-4c89-a4f4-6f901bd76ba7",
                callback: (message) => {
                    if (message == 'OK') {
                        M.toast({ html: "Email sent successfully, please wait for my reply." })
                        email.value = '';
                        emailBody.value = '';
                    }
                    else {
                        M.toast({ html: message, classes: 'yellow-bg' })
                    }
                    console.log(message)
                }
            });
    });
}

document.querySelectorAll('ul').forEach((el, index) => {
    el.classList.add('browser-default');
})