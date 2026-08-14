/* =====================================================
   FLEX IT — MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "nav-open"
            );

        }
    );


    /* Close menu after clicking a link */

    navLinks
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "nav-open"
                    );

                }
            );

        });

}



/* =====================================================
   SUPPORT FORM — FORMSPREE
===================================================== */

const ticketForm =
    document.getElementById("ticketForm");

const formMessage =
    document.getElementById("formMessage");


if (ticketForm) {

    ticketForm.addEventListener(
        "submit",
        async function (event) {

            /*
               IMPORTANT:
               Prevent normal page reload.
               Form data will be sent to Formspree
               using fetch().
            */

            event.preventDefault();


            /* =================================================
               GET FORM VALUES
            ================================================= */

            const customerName =
                document
                    .getElementById("customerName")
                    .value
                    .trim();


            const customerEmail =
                document
                    .getElementById("customerEmail")
                    .value
                    .trim();


            const company =
                document
                    .getElementById("company")
                    .value
                    .trim();


            const category =
                document
                    .getElementById("category")
                    .value;


            const priority =
                document
                    .getElementById("priority")
                    .value;


            const subject =
                document
                    .getElementById("subject")
                    .value
                    .trim();


            const description =
                document
                    .getElementById("description")
                    .value
                    .trim();



            /* =================================================
               BASIC VALIDATION
            ================================================= */

            if (
                customerName === "" ||
                customerEmail === "" ||
                company === "" ||
                subject === "" ||
                description === ""
            ) {

                formMessage.style.color =
                    "#d62828";

                formMessage.textContent =
                    "Please fill in all required fields.";

                return;

            }



            /* =================================================
               EMAIL VALIDATION
            ================================================= */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(
                    customerEmail
                )
            ) {

                formMessage.style.color =
                    "#d62828";

                formMessage.textContent =
                    "Please enter a valid email address.";

                return;

            }



            /* =================================================
               SUBMIT BUTTON
            ================================================= */

            const submitButton =
                ticketForm.querySelector(
                    ".submit-btn"
                );


            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.innerHTML =
                    "Sending Request...";

            }


            formMessage.textContent = "";



            /* =================================================
               SEND TO FORMSPREE
            ================================================= */

            try {

                const formData =
                    new FormData(ticketForm);


                const response =
                    await fetch(
                        ticketForm.action,
                        {
                            method: "POST",
                            body: formData,
                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                /* =================================================
                   SUCCESS
                ================================================= */

                if (response.ok) {

                    formMessage.style.color =
                        "#218844";

                    formMessage.textContent =
                        "Support request sent successfully! We will contact you soon.";


                    ticketForm.reset();


                }


                /* =================================================
                   ERROR FROM FORMSPREE
                ================================================= */

                else {

                    const data =
                        await response.json()
                            .catch(
                                function () {
                                    return {};
                                }
                            );


                    if (
                        data.errors &&
                        data.errors.length
                    ) {

                        formMessage.textContent =
                            data.errors
                                .map(
                                    function (error) {
                                        return error.message;
                                    }
                                )
                                .join(", ");

                    }
                    else {

                        formMessage.textContent =
                            "Unable to send your request. Please try again.";

                    }


                    formMessage.style.color =
                        "#d62828";

                }


            }


            /* =================================================
               CONNECTION ERROR
            ================================================= */

            catch (error) {

                console.error(
                    "Formspree Error:",
                    error
                );


                formMessage.style.color =
                    "#d62828";

                formMessage.textContent =
                    "Unable to send your request. Please check your internet connection and try again.";

            }


            /* =================================================
               RESTORE BUTTON
            ================================================= */

            if (submitButton) {

                submitButton.disabled =
                    false;

                submitButton.innerHTML =
                    'Submit Support Request <span>→</span>';

            }

        }
    );

}



/* =====================================================
   COPYRIGHT YEAR
===================================================== */

const copyright =
    document.getElementById(
        "copyright"
    );


if (copyright) {

    const currentYear =
        new Date().getFullYear();


    copyright.textContent =
        `© ${currentYear} Flex IT. All Rights Reserved.`;

}



/* =====================================================
   SMOOTH SCROLL
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    /* Ignore empty # links */

                    if (
                        targetId === "#" ||
                        targetId === ""
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    /* Get navbar height */

                    const navbar =
                        document.querySelector(
                            ".navbar"
                        );


                    const navbarHeight =
                        navbar
                            ? navbar.offsetHeight
                            : 0;


                    /* Calculate position */

                    const targetPosition =
                        target
                            .getBoundingClientRect()
                            .top +
                        window.scrollY -
                        navbarHeight;


                    /* Smooth scroll */

                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }
            );

        }
    );



/* =====================================================
   SIMPLE SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        `
        .service-card,
        .process-item,
        .contact-card,
        .about-content,
        .about-visual,
        .support-form,
        .support-content,
        .cta,
        .hero-content,
        .hero-visual
        `
    );


/* Check if browser supports IntersectionObserver */

if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );



    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );


            revealObserver.observe(
                element
            );

        }
    );

}



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(
        ".navbar"
    );


if (navbar) {

    window.addEventListener(
        "scroll",
        function () {

            if (
                window.scrollY > 50
            ) {

                navbar.classList.add(
                    "navbar-scrolled"
                );

            }
            else {

                navbar.classList.remove(
                    "navbar-scrolled"
                );

            }

        }
    );

}



/* =====================================================
   FLEX IT READY
===================================================== */

console.log(
    "Flex IT website loaded successfully."
);