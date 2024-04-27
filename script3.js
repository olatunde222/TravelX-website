const bars = document.querySelector(".bar"),
    close = document.querySelector(".close"),
    menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTirggerAnimation(boxSelectors) {
    boxSelectors.forEach((boxSelector) => {
        gsap.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    })
}

function swipeAnimation(boxSelectors) {
    boxSelectors.forEach((boxSelector) => {
        gsap.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity: 1,
        });
    });
}

function galleryAnimation(boxSelectors) {
    boxSelectors.forEach((boxSelector) => {
        gsap.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}

animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search"]);

scrollTirggerAnimation([".travel .box1", ".travel .box2", ".travel .box3"]);

scrollTirggerAnimation([".feedback .label", ".feedback .heading", ".feedback .paragraph"]);

scrollTirggerAnimation([".article .label", ".article .heading"]);

swipeAnimation([".destinations .heading", ".destinations .content"])

swipeAnimation([".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"])

galleryAnimation([".destinations .gallery .box1",".destinations .gallery .box2",".destinations .gallery .box3",".destinations .gallery .box4",".destinations .gallery .box5"])

galleryAnimation([".featured .gallery .box1",".featured .gallery .box2",".featured .gallery .box3",".featured .gallery .box4"])

galleryAnimation([".feedback .voices .box1",".feedback .voices .box2",".feedback .voices .box3",".feedback .voices .box4",".feedback .voices .box5",".feedback .voices .box6"])
