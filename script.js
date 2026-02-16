document.addEventListener("DOMContentLoaded", () => {
  /* === KAPITEL 8: MENYER OCH DROPDOWNS === */
  // I din HTML heter de: id="nav-menu-btn" och id="nav-dropdown-list"
  const navBtn = document.getElementById("nav-menu-btn");
  const navList = document.getElementById("nav-dropdown-list");

  if (navBtn && navList) {
    navBtn.addEventListener("click", () => {
      const isExpanded = navBtn.getAttribute("aria-expanded") === "true";
      navBtn.setAttribute("aria-expanded", !isExpanded);
      // Växla visning
      navList.style.display = isExpanded ? "none" : "block";
    });
  }

  /* === KAPITEL 9: TANGENTBORDSNAVIGERING (DEMO) === */
  // I din HTML heter de: id="demo-menu-btn" och id="demo-menu-list"
  const demoBtn = document.getElementById("demo-menu-btn");
  const demoMenu = document.getElementById("demo-menu-list");

  if (demoBtn && demoMenu) {
    // Vi hämtar alla klickbara element inuti menyn
    const items = demoMenu.querySelectorAll("a, button");

    const toggleDemoMenu = (show) => {
      demoMenu.style.display = show ? "block" : "none";
      demoBtn.setAttribute("aria-expanded", show);
    };

    demoBtn.addEventListener("click", () => {
      const isExpanded = demoBtn.getAttribute("aria-expanded") === "true";
      toggleDemoMenu(!isExpanded);
      // Om vi öppnar, skicka fokus till första valet
      if (!isExpanded && items.length > 0) {
        setTimeout(() => items[0].focus(), 10);
      }
    });

    demoMenu.addEventListener("keydown", (e) => {
      const currentIndex = Array.from(items).indexOf(document.activeElement);

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          items[(currentIndex + 1) % items.length].focus();
          break;
        case "ArrowUp":
          e.preventDefault();
          items[(currentIndex - 1 + items.length) % items.length].focus();
          break;
        case "Escape":
          e.preventDefault();
          toggleDemoMenu(false);
          demoBtn.focus(); // Skicka tillbaka fokus till knappen!
          break;
      }
    });
  }

  /* === KAPITEL 10: REACT-SIMULERING === */
  // I din HTML heter knappen: id="react-sim-btn"
  const reactSimBtn = document.getElementById("react-sim-btn");

  if (reactSimBtn) {
    reactSimBtn.addEventListener("click", () => {
      // Vi flyttar fokus till huvudrubriken för att simulera sidbyte
      const mainHeading = document.querySelector("h1");
      if (mainHeading) {
        mainHeading.setAttribute("tabindex", "-1");
        mainHeading.focus();
      }
    });
  }
});
