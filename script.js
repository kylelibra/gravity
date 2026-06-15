/* Gravity Labs — shared behavior
   Mobile menu · gentle scroll fades */

(function () {
    'use strict';

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ----- Mobile menu ----- */
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        Array.prototype.forEach.call(mobileMenu.querySelectorAll('a'), function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    /* ----- Soft scroll fades ----- */
    var revealSelector = [
        'h2',
        '.section-intro',
        'p.large',
        '.cta-button',
        '.value',
        '.feature',
        '.model-item',
        '.model-intro',
        '.collab-item',
        '.reach-out-item',
        '.stealth-item',
        '.staff-member',
        '.portfolio-item',
        '.focus-areas',
        '.focus-category',
        '.research-nav-item',
        '.research-block-header',
        '.writing-entry',
        '.bio',
        '.advisor-section',
        '.advisor-logos'
    ].join(',');

    var targets = Array.prototype.slice.call(document.querySelectorAll(revealSelector));

    if (!reducedMotion && 'IntersectionObserver' in window && targets.length) {
        /* A whisper of stagger between siblings */
        var byParent = new Map();
        targets.forEach(function (el) {
            var list = byParent.get(el.parentElement) || [];
            list.push(el);
            byParent.set(el.parentElement, list);
        });
        byParent.forEach(function (list) {
            list.forEach(function (el, i) {
                el.classList.add('reveal');
                el.style.setProperty('--reveal-delay', ((i % 5) * 0.06) + 's');
            });
        });

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

        targets.forEach(function (el) {
            observer.observe(el);
        });
    }
})();
