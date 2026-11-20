(function () {
  var PHOTO_COUNT = 14;

  // Instagram posts or reels to feature. Paste each post's link, e.g.
  // "https://www.instagram.com/p/XXXXXXXXXXX/" or "https://www.instagram.com/reel/XXXXXXXXXXX/"
  var INSTAGRAM_POSTS = [
  ];

  // Old single-page links (e.g. /#production) go to the new pages
  var OLD_HASHES = { "#production": "/production/", "#art": "/art/" };
  if (OLD_HASHES[location.hash]) {
    location.replace(OLD_HASHES[location.hash]);
  }

  // Highlight the current page in the navbar
  var currentPage = document.body.dataset.page;
  document.querySelectorAll("[data-page]").forEach(function (a) {
    if (a.tagName === "A") {
      a.classList.toggle("is-active", a.dataset.page === currentPage);
    }
  });

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
  if (gallery && lightbox) {
    setupGallery();
  }

  function setupGallery() {
    for (var i = 1; i <= PHOTO_COUNT; i++) {
      var img = document.createElement("img");
      img.src = "/assets/img/photos/photo-" + String(i).padStart(2, "0") + ".jpg";
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
  }

  // Instagram embeds
  var instagram = document.getElementById("instagram");
  if (!instagram) {
    // This page has no Instagram section
  } else if (INSTAGRAM_POSTS.length > 0) {
    INSTAGRAM_POSTS.forEach(function (url) {
      var col = document.createElement("div");
      col.className = "column is-half-tablet is-4-desktop ig-post";
      var quote = document.createElement("blockquote");
      quote.className = "instagram-media";
      quote.setAttribute("data-instgrm-permalink", url);
      quote.setAttribute("data-instgrm-version", "14");
      var link = document.createElement("a");
      link.href = url;
      link.textContent = "View on Instagram";
      quote.appendChild(link);
      col.appendChild(quote);
      instagram.appendChild(col);
    });
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);
  } else {
    instagram.remove();
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
