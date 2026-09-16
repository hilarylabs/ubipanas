// nav-toggle.js — ubipanas.com
// Drop into assets/js/ and link before </body> in _layouts/main.html
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('nav-toggle');
    var links = document.getElementById('navbar-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is tapped
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', false);
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', false);
      }
    });
  });
})();
