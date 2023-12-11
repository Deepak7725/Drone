document.addEventListener("DOMContentLoaded", function () {
    // var navbar = document.getElementById("mainNavbar");

    // // Add a scroll event listener to the window
    // window.addEventListener("scroll", function () {
    //     // Check the scroll position
    //     var scrollPosition = window.scrollY;

    //     // Add or remove classes based on the scroll position
    //     if (scrollPosition > 50) {
    //         navbar.classList.remove("primarybg");
    //         navbar.classList.add("bg-white", "shadow-sm");
    //     } else {
    //         navbar.classList.remove("bg-white", "shadow-sm");
    //         navbar.classList.add("primarybg");
    //     }
    // });
    $('.custom-card').hover(
        function () {
            $(this).removeClass('shadow-sm').addClass('shadow-lg');
        },
        function () {
            $(this).removeClass('shadow-lg').addClass('shadow-sm');
        }
    );
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show the button when the user scrolls down 20px
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    // Smooth scrolling to the top when the button is clicked
    scrollToTopBtn.addEventListener('click', function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    var buttons = document.querySelectorAll('.nav-item button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Remove 'secondarybg' class from all buttons
            buttons.forEach(function (btn) {
                btn.classList.remove('secondarybg');
            });

            // Add 'secondarybg' class to the clicked button
            button.classList.add('secondarybg');
        });
    });

    var toggleIcon = document.getElementById('toggleIcon');
    var landingPage = document.getElementById('landing-page');
    var videoSection = document.getElementById('video-section');
    var innerDiv = videoSection.querySelector('#inner-div');
    var videoSectionHeading = videoSection.querySelector('h2');
    var videoSectionParagraph = videoSection.querySelector('p');
    var primarybgElements = document.querySelectorAll('.primarybg');
    var landingPageHeading = landingPage.querySelector('h1');
    var landingPageParagraph = landingPage.querySelector('p');
    var videoSectionInnerHeading = videoSection.querySelector('.text-black');
    var cardSection = document.getElementById('cardsection');
    var cardSectionParagraphs = cardSection.querySelectorAll('p');
    var footerSection = document.getElementById('footer');
    var footerSectionParagraphs = footerSection.querySelectorAll('p');
    // Assuming you have an element with id 'mainHeader'
    var mainHeader = document.querySelector('#mainHeader');
    const toggler = document.getElementById('toggler');

    // Assuming you have an element with id 'mainNavbar'
    var mainNavbar = document.querySelector('#mainNavbar');
    var linkItems = document.querySelectorAll('.navbar-nav li a');
    toggleIcon.addEventListener('click', function () {
        // Toggle between sun and moon icons
        if (toggleIcon.classList.contains('bi-moon-stars')) {
            toggleIcon.classList.remove('bi-moon-stars');
            toggleIcon.classList.add('bi-sun');
            toggleIcon.classList.add('text-warning');
            // Update header and navbar classes to dark theme
            mainHeader.classList.remove('bg-white');
            mainHeader.classList.add('bg-black');

            mainNavbar.classList.remove('bg-white');
            mainNavbar.classList.add('bg-black');
            // Update toggler class
            toggler.classList.remove('text-black');
            toggler.classList.add('text-white');
            setTheme('dark');
            // Remove primarybg and add bg-dark-subtle for the specified elements
            landingPage.classList.remove('primarybg');
            landingPage.classList.add('bg-dark');
            // Update heading and paragraph classes to text-white
            landingPageHeading.classList.remove('text-black');
            landingPageHeading.classList.add('text-white');
            videoSectionInnerHeading.classList.remove('text-black');
            videoSectionInnerHeading.classList.add('text-white');
            landingPageParagraph.classList.remove('text-black-50');
            landingPageParagraph.classList.add('text-white-50');
            // Update heading and paragraph classes to text-white
            videoSectionHeading.classList.remove('text-black');
            videoSectionHeading.classList.add('text-white');
            videoSectionParagraph.classList.remove('text-black-50');
            videoSectionParagraph.classList.add('text-white-50');
            innerDiv.classList.remove('primarybg');
            innerDiv.classList.add('bg-dark-subtle');
            // Update the class of <a> tags inside <li>
            updateLinkItemsClass('text-black-50', 'text-white-50');
            // Update all paragraphs inside footer to text-white-50
            footerSectionParagraphs.forEach(function (paragraph) {
                paragraph.classList.remove('text-black-50');
                paragraph.classList.add('text-white-50');
            });
            // Update all paragraphs inside cardsection to text-white-50
            cardSectionParagraphs.forEach(function (paragraph) {
                paragraph.classList.remove('text-black-50');
                paragraph.classList.add('text-white-50');
            });
            // Loop through primarybgElements and update their classes
            primarybgElements.forEach(function (element) {
                element.classList.remove('primarybg');
                element.classList.add('bg-dark-subtle');
            });
        } else {
            toggleIcon.classList.remove('bi-sun');
            toggleIcon.classList.add('bi-moon-stars');
            toggleIcon.classList.remove('text-warning');
            // Revert header and navbar classes to light theme
            mainHeader.classList.remove('bg-black');
            mainHeader.classList.add('bg-white');

            mainNavbar.classList.remove('bg-black');
            mainNavbar.classList.add('bg-white');

            // Update toggler class
            toggler.classList.remove('text-white');
            toggler.classList.add('text-black');
            innerDiv.classList.remove('bg-dark-subtle');
            innerDiv.classList.add('primarybg');
            setTheme('light');
            // Update the class of <a> tags inside <li>
            updateLinkItemsClass('text-white-50', 'text-black-50');
            // Remove bg-dark-subtle and add primarybg for the specified elements
            landingPage.classList.remove('bg-dark');
            landingPage.classList.add('primarybg');
            // Revert heading and paragraph classes to text-black
            landingPageHeading.classList.remove('text-white');
            landingPageHeading.classList.add('text-black');
            videoSectionInnerHeading.classList.remove('text-white');
            videoSectionInnerHeading.classList.add('text-black');
            landingPageParagraph.classList.remove('text-white-50');
            landingPageParagraph.classList.add('text-black-50');
            // Revert heading and paragraph classes to text-black
            videoSectionHeading.classList.remove('text-white');
            videoSectionHeading.classList.add('text-black');
            videoSectionParagraph.classList.remove('text-white-50');
            videoSectionParagraph.classList.add('text-black-50');
            // Revert all paragraphs inside footer to text-black-50
            footerSectionParagraphs.forEach(function (paragraph) {
                paragraph.classList.remove('text-white-50');
                paragraph.classList.add('text-black-50');
            });
            // Revert all paragraphs inside cardsection to text-black-50
            cardSectionParagraphs.forEach(function (paragraph) {
                paragraph.classList.remove('text-white-50');
                paragraph.classList.add('text-black-50');
            });
            // Loop through primarybgElements and update their classes
            primarybgElements.forEach(function (element) {
                element.classList.remove('bg-dark-subtle');
                element.classList.add('primarybg');
            });
        }
    });
    function updateLinkItemsClass(fromClass, toClass) {
        linkItems.forEach(function (link) {
            if (link.classList.contains(fromClass)) {
                link.classList.remove(fromClass);
                link.classList.add(toClass);
            }
        });
    }
    function setTheme(theme) {
        // Set data-bs-theme attribute value
        document.documentElement.setAttribute('data-bs-theme', theme);
    }

});
