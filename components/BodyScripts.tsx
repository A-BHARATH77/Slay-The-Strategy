// @ts-nocheck
import React from 'react';

export default function BodyScripts() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6848603da8e6ac95794b7498" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G" crossorigin="anonymous"></script>
<script src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/js/webflow.schunk.987b2589d4936dd6.js" type="text/javascript" integrity="sha384-voNYIYG7PBwk+vr0RVpCEhzDiLZiVQ14MqR18ZYVCPrc/hSbPtlMx2O6g9SRJLtC" crossorigin="anonymous"></script>
<script src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/js/webflow.f76d3b4c.fd5de2769007b345.js" type="text/javascript" integrity="sha384-jxgnCwrQg8dufpjheE5gzRfKK0n+Tahr8vu/1tRvQ48mXBUp1rIyZoEF+gFIGWfm" crossorigin="anonymous"></script>
<script src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js" type="text/javascript"></script>
<script src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js" type="text/javascript"></script>
<script src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js" type="text/javascript"></script>
<script src="https://cdn.prod.website-files.com/gsap/3.15.0/Flip.min.js" type="text/javascript"></script>
<script src="https://cdn.prod.website-files.com/gsap/3.15.0/Observer.min.js" type="text/javascript"></script>
<script src="https://cdn.prod.website-files.com/gsap/3.15.0/Draggable.min.js" type="text/javascript"></script>
<script src="https://cdn.prod.website-files.com/gsap/3.15.0/InertiaPlugin.min.js" type="text/javascript"></script>
<script src="https://cdn.prod.website-files.com/gsap/3.15.0/Physics2DPlugin.min.js" type="text/javascript"></script>
<script type="text/javascript">
        gsap.registerPlugin(ScrollTrigger, SplitText, Flip, Observer, Draggable, InertiaPlugin, Physics2DPlugin);
    </script>
<script src="https://unpkg.com/lenis@1.1.5/dist/lenis.min.js"></script>
<script>
        "use strict"; // Fix Lenis in Safari

        let lenis;

        // Initialize Lenis unconditionally in React
        const shouldDestroyLenis = document.body.hasAttribute("data-lenis-destroy");

        if (!shouldDestroyLenis) {
                // add the infinite attribute to enable infinite scroll functionality
                const isInfiniteScrollPage = document.body.hasAttribute("data-lenis-infinite");

                // Initialize Lenis with appropriate settings
                lenis = new Lenis({
                    lerp: 0.1,
                    wheelMultiplier: 0.7,
                    infinite: isInfiniteScrollPage, // Enable infinite scroll only on specific page
                    gestureOrientation: "vertical",
                    normalizeWheel: false,
                    smoothTouch: false
                });

                // Event listener for scroll events
                //lenis.on('scroll', (e) => {
                //console.log(e);
                //});

                // RAF loop for updating scroll position
                function raf(time) {
                    lenis.raf(time);
                    requestAnimationFrame(raf);
                }
                requestAnimationFrame(raf);

                // Event handlers for starting and stopping the scroll
                \$("[data-lenis-start]").on("click", function() {
                    lenis.start();
                });
                \$("[data-lenis-stop]").on("click", function() {
                    lenis.stop();
                });
                \$("[data-lenis-toggle]").on("click", function() {
                    \$(this).toggleClass("stop-scroll");
                    if (\$(this).hasClass("stop-scroll")) {
                        lenis.stop();
                    } else {
                        lenis.start();
                    }
                });

                // Integration with GSAP ScrollTrigger if needed
                function connectToScrollTrigger() {
                    lenis.on("scroll", ScrollTrigger.update);
                    gsap.ticker.add((time) => {
                        lenis.raf(time * 1000);
                    });
                    gsap.ticker.lagSmoothing(0);
                }
                // Uncomment this if using GSAP ScrollTrigger
                connectToScrollTrigger();
            }
    </script>
<script>
        document.addEventListener("DOMContentLoaded", function() {
            const videos = document.querySelectorAll("video");

            const videoObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.play();
                    } else {
                        entry.target.pause();
                        entry.target.currentTime = 0;
                    }
                });
            }, {
                threshold: 0.25
            }); // 25% van video zichtbaar voordat deze afspeelt

            videos.forEach(video => {
                videoObserver.observe(video);
            });
        });
    </script>
<script>
        function initPlayVideoHover() {
            const wrappers = document.querySelectorAll('[data-video-on-hover]');

            wrappers.forEach(wrapper => {
                const video = wrapper.querySelector('video');
                const src = wrapper.getAttribute('data-video-src') || '';
                if (!video || !src) return;

                wrapper.addEventListener('mouseenter', () => {
                    if (!video.getAttribute('src')) {
                        video.setAttribute('src', src);
                    }
                    wrapper.dataset.videoOnHover = 'active';
                    video.play().catch(err => {
                        console.warn('play on hover is blocked:', err);
                    });
                });

                wrapper.addEventListener('mouseleave', () => {
                    wrapper.dataset.videoOnHover = 'not-active';
                    setTimeout(() => {
                        video.pause();
                        video.currentTime = 0;
                    }, 200);
                });
            });
        }

        document.addEventListener("DOMContentLoaded", () => {
            initPlayVideoHover();
        });
    </script>
<script>
        gsap.registerPlugin(Observer)

        let total = 0,
            xTo,
            itemValues = []

        window.addEventListener("DOMContentLoaded", () => {

            const content = document.querySelector('.mwg_effect008 .container')
            if (!content) return;

            // 🔁 DUPLICATE ALL CMS-CARDS FOR INFINITE SCROLL EFFECT
            const originalCards = Array.from(content.children)
            originalCards.forEach(card => {
                const clone = card.cloneNode(true)
                content.appendChild(clone)
            })

            const cards = document.querySelectorAll('.mwg_effect008 .card')
            const cardsLength = cards.length / 2
            const half = content.clientWidth / 2

            const wrap = gsap.utils.wrap(-half, 0)

            xTo = gsap.quickTo(content, "x", {
                duration: 0.5,
                ease: 'power3',
                modifiers: {
                    x: gsap.utils.unitize(wrap),
                },
            })

            // 🎲 Generate random values per card for animation
            for (let i = 0; i < cardsLength; i++) {
                itemValues.push((Math.random() - 0.5) * 20)
            }

            // 🌀 Create GSAP timeline
            const tl = gsap.timeline({
                paused: true
            })
            tl.to(cards, {
                rotate: (index) => (itemValues[index % cardsLength]),
                xPercent: (index) => (itemValues[index % cardsLength]),
                yPercent: (index) => (itemValues[index % cardsLength]),
                scale: 0.95,
                duration: 0.5,
                ease: 'back.inOut(3)',
            })

            // 🎮 Activate drag & animations
            Observer.create({
                target: content,
                type: "pointer,touch",
                onPress: () => tl.play(),
                onDrag: (self) => {
                    total += self.deltaX
                    xTo(total)
                },
                onRelease: () => tl.reverse(),
                onStop: () => tl.reverse(),
            })

            // ⏱️ Auto scroll
            gsap.ticker.add(tick)
        })

        function tick(time, deltaTime) {
            total -= deltaTime / 10
            xTo(total)
        }
    </script>
<script>
        function initAdvancedFormValidation() {
            const forms = document.querySelectorAll('[data-form-validate]');

            forms.forEach((formContainer) => {
                const startTime = new Date().getTime();

                const form = formContainer.querySelector('form');
                if (!form) return;

                const validateFields = form.querySelectorAll('[data-validate]');
                const dataSubmit = form.querySelector('[data-submit]');
                if (!dataSubmit) return;

                const realSubmitInput = dataSubmit.querySelector('input[type="submit"]');
                if (!realSubmitInput) return;

                function isSpam() {
                    const currentTime = new Date().getTime();
                    return currentTime - startTime < 5000;
                }

                // Disable select options with invalid values on page load
                validateFields.forEach(function(fieldGroup) {
                    const select = fieldGroup.querySelector('select');
                    if (select) {
                        const options = select.querySelectorAll('option');
                        options.forEach(function(option) {
                            if (
                                option.value === '' ||
                                option.value === 'disabled' ||
                                option.value === 'null' ||
                                option.value === 'false'
                            ) {
                                option.setAttribute('disabled', 'disabled');
                            }
                        });
                    }
                });

                function validateAndStartLiveValidationForAll() {
                    let allValid = true;
                    let firstInvalidField = null;

                    validateFields.forEach(function(fieldGroup) {
                        const input = fieldGroup.querySelector('input, textarea, select');
                        const radioCheckGroup = fieldGroup.querySelector('[data-radiocheck-group]');
                        if (!input && !radioCheckGroup) return;

                        if (input) input.__validationStarted = true;
                        if (radioCheckGroup) {
                            radioCheckGroup.__validationStarted = true;
                            const inputs = radioCheckGroup.querySelectorAll('input[type="radio"], input[type="checkbox"]');
                            inputs.forEach(function(input) {
                                input.__validationStarted = true;
                            });
                        }

                        updateFieldStatus(fieldGroup);

                        if (!isValid(fieldGroup)) {
                            allValid = false;
                            if (!firstInvalidField) {
                                firstInvalidField = input || radioCheckGroup.querySelector('input');
                            }
                        }
                    });

                    if (!allValid && firstInvalidField) {
                        firstInvalidField.focus();
                    }

                    return allValid;
                }

                function isValid(fieldGroup) {
                    const radioCheckGroup = fieldGroup.querySelector('[data-radiocheck-group]');
                    if (radioCheckGroup) {
                        const inputs = radioCheckGroup.querySelectorAll('input[type="radio"], input[type="checkbox"]');
                        const checkedInputs = radioCheckGroup.querySelectorAll('input:checked');
                        const min = parseInt(radioCheckGroup.getAttribute('min')) || 1;
                        const max = parseInt(radioCheckGroup.getAttribute('max')) || inputs.length;
                        const checkedCount = checkedInputs.length;

                        if (inputs[0].type === 'radio') {
                            return checkedCount >= 1;
                        } else {
                            if (inputs.length === 1) {
                                return inputs[0].checked;
                            } else {
                                return checkedCount >= min && checkedCount <= max;
                            }
                        }
                    } else {
                        const input = fieldGroup.querySelector('input, textarea, select');
                        if (!input) return false;

                        let valid = true;
                        const min = parseInt(input.getAttribute('min')) || 0;
                        const max = parseInt(input.getAttribute('max')) || Infinity;
                        const value = input.value.trim();
                        const length = value.length;

                        if (input.tagName.toLowerCase() === 'select') {
                            if (
                                value === '' ||
                                value === 'disabled' ||
                                value === 'null' ||
                                value === 'false'
                            ) {
                                valid = false;
                            }
                        } else if (input.type === 'email') {
                            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
                            valid = emailPattern.test(value);
                        } else {
                            if (input.hasAttribute('min') && length < min) valid = false;
                            if (input.hasAttribute('max') && length > max) valid = false;
                        }

                        return valid;
                    }
                }

                function updateFieldStatus(fieldGroup) {
                    const radioCheckGroup = fieldGroup.querySelector('[data-radiocheck-group]');
                    if (radioCheckGroup) {
                        const inputs = radioCheckGroup.querySelectorAll('input[type="radio"], input[type="checkbox"]');
                        const checkedInputs = radioCheckGroup.querySelectorAll('input:checked');

                        if (checkedInputs.length > 0) {
                            fieldGroup.classList.add('is--filled');
                        } else {
                            fieldGroup.classList.remove('is--filled');
                        }

                        const valid = isValid(fieldGroup);

                        if (valid) {
                            fieldGroup.classList.add('is--success');
                            fieldGroup.classList.remove('is--error');
                        } else {
                            fieldGroup.classList.remove('is--success');
                            const anyInputValidationStarted = Array.from(inputs).some(input => input.__validationStarted);
                            if (anyInputValidationStarted) {
                                fieldGroup.classList.add('is--error');
                            } else {
                                fieldGroup.classList.remove('is--error');
                            }
                        }
                    } else {
                        const input = fieldGroup.querySelector('input, textarea, select');
                        if (!input) return;

                        const value = input.value.trim();

                        if (value) {
                            fieldGroup.classList.add('is--filled');
                        } else {
                            fieldGroup.classList.remove('is--filled');
                        }

                        const valid = isValid(fieldGroup);

                        if (valid) {
                            fieldGroup.classList.add('is--success');
                            fieldGroup.classList.remove('is--error');
                        } else {
                            fieldGroup.classList.remove('is--success');
                            if (input.__validationStarted) {
                                fieldGroup.classList.add('is--error');
                            } else {
                                fieldGroup.classList.remove('is--error');
                            }
                        }
                    }
                }

                validateFields.forEach(function(fieldGroup) {
                    const input = fieldGroup.querySelector('input, textarea, select');
                    const radioCheckGroup = fieldGroup.querySelector('[data-radiocheck-group]');

                    if (radioCheckGroup) {
                        const inputs = radioCheckGroup.querySelectorAll('input[type="radio"], input[type="checkbox"]');
                        inputs.forEach(function(input) {
                            input.__validationStarted = false;

                            input.addEventListener('change', function() {
                                requestAnimationFrame(function() {
                                    if (!input.__validationStarted) {
                                        const checkedCount = radioCheckGroup.querySelectorAll('input:checked').length;
                                        const min = parseInt(radioCheckGroup.getAttribute('min')) || 1;

                                        if (checkedCount >= min) {
                                            input.__validationStarted = true;
                                        }
                                    }

                                    if (input.__validationStarted) {
                                        updateFieldStatus(fieldGroup);
                                    }
                                });
                            });

                            input.addEventListener('blur', function() {
                                input.__validationStarted = true;
                                updateFieldStatus(fieldGroup);
                            });
                        });
                    } else if (input) {
                        input.__validationStarted = false;

                        if (input.tagName.toLowerCase() === 'select') {
                            input.addEventListener('change', function() {
                                input.__validationStarted = true;
                                updateFieldStatus(fieldGroup);
                            });
                        } else {
                            input.addEventListener('input', function() {
                                const value = input.value.trim();
                                const length = value.length;
                                const min = parseInt(input.getAttribute('min')) || 0;
                                const max = parseInt(input.getAttribute('max')) || Infinity;

                                if (!input.__validationStarted) {
                                    if (input.type === 'email') {
                                        if (isValid(fieldGroup)) input.__validationStarted = true;
                                    } else {
                                        if (
                                            (input.hasAttribute('min') && length >= min) ||
                                            (input.hasAttribute('max') && length <= max)
                                        ) {
                                            input.__validationStarted = true;
                                        }
                                    }
                                }

                                if (input.__validationStarted) {
                                    updateFieldStatus(fieldGroup);
                                }
                            });

                            input.addEventListener('blur', function() {
                                input.__validationStarted = true;
                                updateFieldStatus(fieldGroup);
                            });
                        }
                    }
                });

                dataSubmit.addEventListener('click', function() {
                    if (validateAndStartLiveValidationForAll()) {
                        if (isSpam()) {
                            alert('Form submitted too quickly. Please try again.');
                            return;
                        }
                        realSubmitInput.click();
                    }
                });

                form.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
                        event.preventDefault();
                        if (validateAndStartLiveValidationForAll()) {
                            if (isSpam()) {
                                alert('Form submitted too quickly. Please try again.');
                                return;
                            }
                            realSubmitInput.click();
                        }
                    }
                });
            });
        }

        // Initialize Advanced Form Validation
        document.addEventListener('DOMContentLoaded', () => {
            initAdvancedFormValidation();
        });
    </script>
<script>
        const root = document.querySelector('.mwg_effect020')
        if (root) {
            const images = []
        root.querySelectorAll('.medias img').forEach(image => {
            images.push(image.getAttribute('src'))
        })

        let incr = 0,
            oldIncrX = 0,
            oldIncrY = 0,
            resetDist = window.innerWidth / 3,
            indexImg = 0

        window.addEventListener("DOMContentLoaded", () => {
            root.addEventListener("mousemove", e => {
                oldIncrX = e.clientX
                oldIncrY = e.clientY
            }, {
                once: true
            })

            root.addEventListener("mousemove", e => {
                const valX = e.clientX
                const valY = e.clientY

                // Add the distance traveled on x + y
                incr += Math.abs(valX - oldIncrX) + Math.abs(valY - oldIncrY)

                if (incr > resetDist) {
                    incr = 0 // Reset the variable incr
                    createMedia(valX, valY - root.getBoundingClientRect().top, valX - oldIncrX, valY - oldIncrY)
                }

                // Reset after calculation to add the new delta on the next call
                // Also reset after the createMedia() function
                oldIncrX = valX
                oldIncrY = valY
            })
        }
        })


        function createMedia(x, y, deltaX, deltaY) {

            // We create an image and set its url with the current item of the images array
            const image = document.createElement("img")
            image.setAttribute('src', images[indexImg])

            // We add this image to the DOM
            root.appendChild(image)

            const tl = gsap.timeline({
                onComplete: () => {
                    // when our timeline is finished, we remove our image from the DOM
                    root.removeChild(image);
                    tl && tl.kill()
                }
            })

            tl.fromTo(image, {
                // Add some randomness
                xPercent: -50 + (Math.random() - 0.5) * 80,
                yPercent: -50 + (Math.random() - 0.5) * 10,
                scaleX: 1.3,
                scaleY: 1.3
            }, {
                scaleX: 1,
                scaleY: 1,
                ease: 'elastic.out(2, 0.6)', // Easing property responsible of the rebound effect
                duration: 0.6
            })

            tl.fromTo(image, {
                // The first and second parameters are x and y (cursor position)
                // We set the image at the current cursor position
                x,
                y,
                rotation: (Math.random() - 0.5) * 20,
            }, {
                // We add deltaX and deltaY (the third and fourth parameters of the function)
                x: '+=' + deltaX * 4,
                y: '+=' + deltaY * 4,
                rotation: (Math.random() - 0.5) * 20,
                ease: 'power4.out',
                duration: 1.5
            }, '<') // Means that the animation starts at the start of the previous tween

            tl.to(image, {
                duration: 0.3,
                scale: 0.5, // Reduce the image later
                delay: 0.1,
                ease: 'back.in(1.5)'
            })

            // Loop back to the first item when we're out of range in our images array
            indexImg = (indexImg + 1) % images.length
        }
    </script>
<script>
        // Automatically update text element with the current year
        Webflow.push(function() {
            \$('[current-year]').text(new Date().getFullYear());
        });
    </script>
<script>
        // Disabling dragging for all images
        document.querySelectorAll('img').forEach(img => {
            img.setAttribute('draggable', false);
        });
    </script>
<script>
        function onClick(e) {
            e.preventDefault();
            grecaptcha.enterprise.ready(async () => {
                const token = await grecaptcha.enterprise.execute('6LdWxXMrAAAAAKkSBXqU5r7bLwHLQ0EtDfqAjRpu', {
                    action: 'LOGIN'
                });
            });
        }
    </script>
<script>
        window.addEventListener("load", () => {
            setTimeout(() => {
                const wfIx = Webflow ? .require ? .("ix3");
                if (wfIx && typeof wfIx.emit === "function") {
                    wfIx.emit("Preloader");
                }
            }, 50); // deze delay geeft je browser iets meer ademruimte
        });
    </script>
<script>
        window.addEventListener("DOMContentLoaded", () => {

            const container = document.querySelector('.mwg_effect025 .container')
            if (!container) return;
            const containerW = container.clientWidth

            const cards = document.querySelectorAll('.results-card')
            const cardsLength = cards.length

            const cardContent = document.querySelectorAll('.results-card')

            let currentPortion = 0 // No portion hovered at the start

            cards.forEach(card => {
                gsap.set(card, {
                    xPercent: (Math.random() - 0.5) * 10,
                    yPercent: (Math.random() - 0.5) * 10,
                    rotation: (Math.random() - 0.5) * 20,
                })
            })

            container.addEventListener("mousemove", e => {
                // Cursor position relative to the left edge of the container
                const mouseX = e.clientX - container.getBoundingClientRect().left
                // Cursor’s horizontal percentage within the container
                const percentage = mouseX / containerW
                // Round the value up to get a valid index
                const activePortion = Math.ceil(percentage * cardsLength)

                // If a new portion is hovered
                if (
                    currentPortion !== activePortion &&
                    activePortion > 0 &&
                    activePortion <= cardsLength
                ) {
                    // If a portion was already hovered, reset it
                    // -1 to target the correct index in the card set
                    if (currentPortion !== 0) {
                        resetPortion(currentPortion - 1)
                    }

                    // Update the index of the new portion
                    currentPortion = activePortion
                    // -1 to target the correct index in the card set
                    newPortion(currentPortion - 1)
                }
            })

            container.addEventListener("mouseleave", () => {
                // -1 to target the correct index in the card set
                resetPortion(currentPortion - 1)
                // No portion is hovered anymore
                currentPortion = 0

                // Recenter all direct child elements of the cards
                gsap.to(cardContent, {
                    xPercent: 0,
                    ease: 'elastic.out(1, 0.75)',
                    duration: 0.8
                })
            })

            function resetPortion(index) {
                // Last active card
                gsap.to(cards[index], {
                    xPercent: (Math.random() - 0.5) * 10,
                    yPercent: (Math.random() - 0.5) * 10,
                    rotation: (Math.random() - 0.5) * 20,
                    scale: 1,
                    duration: 0.8,
                    ease: 'elastic.out(1, 0.75)',
                })
            }

            function newPortion(i) {
                gsap.to(cards[i], {
                    // Reset transformation attributes
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    duration: 0.8,
                    scale: 1.1,
                    ease: 'elastic.out(1, 0.75)' // Elastic movement at the end (out)
                })

                // For each card's child element
                cardContent.forEach((cardContent, index) => {
                    // If it's not the active card
                    if (index !== i) {
                        gsap.to(cardContent, {
                            // When index - i < 0, push left
                            // When index - i > 0, push right
                            // The further (index - i) moves from 0 in both ways, the smaller the displacement
                            xPercent: 24 / (index - i),
                            ease: 'elastic.out(1, 0.75)',
                            duration: 0.8
                        })
                        // If it is the active card
                    } else {
                        // Center its child
                        gsap.to(cardContent, {
                            xPercent: 0,
                            ease: 'elastic.out(1, 0.75)',
                            duration: 0.8
                        })
                    }
                })
            }
        })
    </script>
<script>
        function initExpertiseScrollEffect() {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to('.scroll', {
                autoAlpha: 0,
                duration: 0.2,
                scrollTrigger: {
                    trigger: '.mwg_effect031',
                    start: 'top top',
                    end: 'top top-=1',
                    toggleActions: "play none reverse none"
                }
            });

            const slides = document.querySelectorAll('.mwg_effect031 .expertise-slide');

            slides.forEach((slide, index) => {
                const isLast = index === slides.length - 1;
                const contentWrapper = slide.querySelector('.expertise-wrap');
                const content = slide.querySelector('.expertise-content');

                if (!isLast) {
                    gsap.to(content, {
                        rotationZ: (Math.random() - 0.5) * 10,
                        scale: 0.7,
                        rotationX: 40,
                        ease: 'power1.in',
                        scrollTrigger: {
                            pin: contentWrapper,
                            trigger: slide,
                            start: 'top top',
                            end: '+=' + window.innerHeight,
                            scrub: true
                        }
                    });

                    const pinDuration = window.innerHeight;

                    gsap.to(content, {
                        autoAlpha: 0,
                        ease: 'power1.inOut',
                        scrollTrigger: {
                            trigger: slide,
                            start: \`top+=\${pinDuration * 0.75} top\`,
                            end: \`top+=\${pinDuration} top\`,
                            scrub: true
                        }
                    });
                }
            });
        }

        if ('requestIdleCallback' in window) {
            setTimeout(initExpertiseScrollEffect, 1000);
        } else {
            setTimeout(initExpertiseScrollEffect, 1000);
        }
    </script>
<script>
        function initSelectedWorkScroll() {
            gsap.registerPlugin(ScrollTrigger);

            if (window.innerWidth > 478) {
                const section = document.querySelector(".section_selected-work");

                if (section) {
                    const items = section.querySelectorAll(".sw-collection .sw-item");

                    items.forEach((item, index) => {
                        let targetY;
                        if (index === 0) targetY = "0em";
                        if (index === 1) targetY = "-12em";
                        if (index === 2) targetY = "-24em";

                        if (targetY !== undefined) {
                            gsap.fromTo(item, {
                                y: "6em"
                            }, {
                                y: targetY,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: section,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: true,
                                }
                            });
                        }
                    });
                }
            }
        }

        if ('requestIdleCallback' in window) {
            setTimeout(initSelectedWorkScroll, 1000);
        } else {
            setTimeout(initSelectedWorkScroll, 1000);
        }
    </script>
<script src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498%2F66fd0e5033110309ff70869f%2F68c2c0d045b511f00b10d2cd%2Fleadinfo_trackingcode-1.1.1.js" type="text/javascript"></script>
` }} />
    </>
  );
}
