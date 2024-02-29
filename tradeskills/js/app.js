(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (function() {
        const textBlocks = document.querySelectorAll(".text__block, .text__block--red");
        const windowHeight = window.innerHeight;
        function checkPosition() {
            for (let block of textBlocks) {
                const positionFromTop = block.getBoundingClientRect().top;
                if (positionFromTop - windowHeight + 50 <= 0) block.classList.add("animated");
            }
        }
        window.addEventListener("scroll", checkPosition);
        checkPosition();
    }));
    document.addEventListener("DOMContentLoaded", (function() {
        const carerSection = document.querySelector(".carer");
        const windowHeight = window.innerHeight;
        function checkPosition() {
            const positionFromTop = carerSection.getBoundingClientRect().top;
            if (positionFromTop - windowHeight + 50 <= 0) {
                document.querySelector(".carer__left").classList.add("animated");
                document.querySelector(".carer__right").classList.add("animated");
            }
        }
        window.addEventListener("scroll", checkPosition);
        checkPosition();
    }));
    document.addEventListener("DOMContentLoaded", (function() {
        const courseSection = document.querySelector(".course");
        const windowHeight = window.innerHeight;
        function checkPosition() {
            const positionFromTop = courseSection.getBoundingClientRect().top;
            if (positionFromTop - windowHeight + 100 <= 0) {
                document.querySelector(".course__row").classList.add("animated");
                document.querySelectorAll(".course__item").forEach((function(item) {
                    item.classList.add("animated");
                }));
            }
        }
        window.addEventListener("scroll", checkPosition);
        checkPosition();
    }));
    document.addEventListener("DOMContentLoaded", (function() {
        const benefitsSection = document.querySelector(".benefits");
        const windowHeight = window.innerHeight;
        function checkPosition() {
            const positionFromTop = benefitsSection.getBoundingClientRect().top;
            if (positionFromTop - windowHeight + 100 <= 0) {
                document.querySelector(".benefits__left").classList.add("animated");
                document.querySelector(".benefits__right").classList.add("animated");
            }
        }
        window.addEventListener("scroll", checkPosition);
        checkPosition();
    }));
    document.addEventListener("DOMContentLoaded", (function() {
        const processSection = document.querySelector(".process");
        const windowHeight = window.innerHeight;
        function checkPosition() {
            const positionFromTop = processSection.getBoundingClientRect().top;
            if (positionFromTop - windowHeight + 50 <= 0) document.querySelector(".process__blok").classList.add("animated");
        }
        window.addEventListener("scroll", checkPosition);
        checkPosition();
    }));
    document.addEventListener("DOMContentLoaded", (function() {
        const contactsSection = document.querySelector(".contacts");
        const windowHeight = window.innerHeight;
        function checkPosition() {
            const positionFromTop = contactsSection.getBoundingClientRect().top;
            if (positionFromTop - windowHeight + 50 <= 0) {
                document.querySelector(".contacts__left").classList.add("animated");
                document.querySelector(".contacts__right").classList.add("animated");
            }
        }
        window.addEventListener("scroll", checkPosition);
        checkPosition();
    }));
    document.addEventListener("DOMContentLoaded", (function() {
        const formRows = document.querySelectorAll(".form__row");
        const windowHeight = window.innerHeight;
        function checkPosition() {
            formRows.forEach((function(row) {
                const positionFromTop = row.getBoundingClientRect().top;
                if (positionFromTop - windowHeight + 50 <= 0) row.classList.add("animated");
            }));
        }
        window.addEventListener("scroll", checkPosition);
        checkPosition();
    }));
    window["FLS"] = true;
    isWebp();
})();