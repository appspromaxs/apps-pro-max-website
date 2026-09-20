/* =========================================================
   APPS PRO MAX
   Website JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ================= MOBILE MENU =================

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.querySelector(".navigation");

  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navigation.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );

    });


    // Close mobile menu after clicking a navigation link

    const navigationLinks =
      navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {

      link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

      });

    });

  }


  // ================= CURRENT YEAR =================

  const currentYear =
    document.getElementById("currentYear");

  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }


  // ================= ESCAPE KEY =================

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      if (navigation && menuToggle) {

        navigation.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

      }

    }

  });


  // ================= APP DOWNLOAD LINKS =================

  const downloadButtons =
    document.querySelectorAll("[data-app-link]");

  downloadButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

      const appLink =
        button.getAttribute("data-app-link");

      // Prevent empty or placeholder links
      if (!appLink || appLink === "#") {

        event.preventDefault();

        alert(
          "The download link for this application will be available soon."
        );

        return;
      }

      // For a valid app link, allow the normal
      // browser behavior from the HTML anchor.
    });

  });

});