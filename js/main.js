(function () {
  "use strict";

  /* Theme toggle */
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");
  var stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  toggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = current ? current === "dark" : prefersDark;
    var next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* Dot navigation */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main .section[id]"));
  var dotnav = document.getElementById("dotnav");

  sections.forEach(function (section, i) {
    var link = document.createElement("a");
    link.href = "#" + section.id;
    link.setAttribute("aria-label", section.id);
    if (i === 0) link.classList.add("active");
    dotnav.appendChild(link);
  });

  var dots = Array.prototype.slice.call(dotnav.querySelectorAll("a"));

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        dots.forEach(function (dot) {
          dot.classList.toggle("active", dot.getAttribute("href") === "#" + id);
        });
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
