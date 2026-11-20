(function () {
  var SECTIONS = ["music", "production", "art"];
  var DEFAULT_SECTION = "music";
  var PHOTO_COUNT = 14;

  function show(id) {
    if (SECTIONS.indexOf(id) === -1) {
      id = DEFAULT_SECTION;
    }
    SECTIONS.forEach(function (s) {
      document.getElementById(s).classList.toggle("is-hidden", s !== id);
    });
    document.querySelectorAll("[data-section]").forEach(function (a) {
      a.classList.toggle("is-active", a.dataset.section === id);
    });
    document.getElementById("mainNav").classList.remove("is-active");
  }

  window.addEventListener("hashchange", function () {
    show(location.hash.slice(1));
  });
  show(location.hash.slice(1));

  // Mobile burger
  document.querySelectorAll(".navbar-burger").forEach(function (b) {
    b.addEventListener("click", function () {
      b.classList.toggle("is-active");
      document.getElementById(b.dataset.target).classList.toggle("is-active");
    });
  });

  // Gallery + lightbox
  var gallery = document.getElementById("gallery");
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  for (var i = 1; i <= PHOTO_COUNT; i++) {
    var img = document.createElement("img");
    img.src = "assets/img/photos/photo-" + String(i).padStart(2, "0") + ".jpg";
    img.loading = "lazy";
    img.alt = "Oliver Eve photo " + i;
    img.addEventListener("click", function (e) {
      lightboxImg.src = e.target.src;
      lightbox.classList.add("is-active");
    });
    gallery.appendChild(img);
  }
  lightbox.querySelectorAll(".modal-background, .modal-close").forEach(function (el) {
    el.addEventListener("click", function () {
      lightbox.classList.remove("is-active");
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
