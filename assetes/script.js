
    function toggleFAQ(num) {
        let content = document.getElementById("faq" + num);
        let icon = document.getElementById("icon" + num);

        // Toggle display
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            icon.classList.add("rotate");
            icon.classList.replace(" bi-plus", " ");
        } else {
            content.style.display = "none";
            icon.classList.remove("rotate");
            icon.classList.replace(" ", " bi-plus");
        }
    }
