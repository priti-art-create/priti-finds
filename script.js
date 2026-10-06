const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️";
    } else {
        darkModeBtn.textContent = "🌙";
    }
});
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") {
        alert("Please enter something to search 🔍");
        return;
    }

    const pages = {
        "bags": "college-bags.html",
        "bag": "college-bags.html",
        "jewellery": "jewellery.html",
        "jewelry": "jewellery.html",
        "shoes": "shoes-styling.html",
        "outfits": "college-outfits.html",
        "outfit": "college-outfits.html",
        "fashion": "affordable-finds.html",
        "gifts": "gifts-for-girls.html",
        "gift": "gifts-for-girls.html",
        "birthday": "birthday-gifts.html",
        "budget": "budget-gifts.html",
        "study": "study-essentials.html",
        "essentials": "daily-essentials.html"
    };

    if (pages[searchText]) {
        window.location.href = pages[searchText];
    } else {
        alert("Sorry, we couldn't find that. Try bags, gifts, shoes, outfits or jewellery 🔍");
    }
});
searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        searchBtn.click();
    }

});
const favoriteBtns = document.querySelectorAll(".favorite-btn");

favoriteBtns.forEach(function (button, index) {

    const savedFavorite = localStorage.getItem("favorite-" + index);

    if (savedFavorite === "true") {
        button.textContent = "❤️ Favorited";
    }

    button.addEventListener("click", function () {

        if (button.textContent === "♡ Favorite") {

            button.textContent = "❤️ Favorited";

            localStorage.setItem("favorite-" + index, "true");

        } else {

            button.textContent = "♡ Favorite";

            localStorage.setItem("favorite-" + index, "false");

        }

    });

});