// Reusable Toast Notification Function
function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


// Smooth Scrolling and Toast Notification
document.addEventListener("DOMContentLoaded", function () {

    const bookLinks = document.querySelectorAll('a[href="#booking"]');

    bookLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const bookingSection = document.getElementById("booking");

            if (bookingSection) {

                bookingSection.scrollIntoView({
                    behavior: "smooth"
                });

                showToast("Taking you to the booking form!");
            }

        });

    });

});