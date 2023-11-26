function changeColor() {
    const button = document.getElementById('Like');
    button.style.backgroundColor = 'rgb(237, 83, 83)'; // Temporary color
    setTimeout(() => {
        button.style.backgroundColor = 'rgb(223, 70, 70)'; // Initial color
    }, 100);
}

document.addEventListener("DOMContentLoaded", function () {
    const shareButton = document.getElementById("share-button");
    const shareIcons = document.querySelector(".share-icons");

    shareButton.addEventListener("click", function (event) {
        event.stopPropagation();
        shareIcons.style.display = shareIcons.style.display === "block" ? "none" : "block";
    });

    shareIcons.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("click", function () {
        shareIcons.style.display = "none";
    });

    const socialMediaLinks = {
        facebook: "https://www.facebook.com/sharer/sharer.php?u=",
        instagram: "https://www.instagram.com/accounts/login/?hl=en",
        whatsApp: "https://api.whatsapp.com/send?text=http%3A%2F%2F127.0.0.1%3A5500%2Fshar.htmlhttp%3A%2F%2F127.0.0.1%3A5500%2Fbutton.html",
    };

    const platformButtons = document.querySelectorAll(".share-icons a");
    platformButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const platform = button.id.replace("-share", "");
            const url = encodeURIComponent(window.location.href);
            window.open(socialMediaLinks[platform] + url, "_blank");
        });
    });
});

function printPage() {
    window.print();
    const button = document.getElementById('saveFile');
    button.style.backgroundColor = 'rgb(237, 83, 83)'; // Temporary color
    setTimeout(() => {
        button.style.backgroundColor = 'rgb(223, 70, 70)'; // Initial color
    }, 100);
}