function initializeMultipleTabs() {
  const tabContainers = document.querySelectorAll(".tabs");

  tabContainers.forEach((container, index) => {
    const tabsList = container.querySelector(".tabs__nav");
    const tabButtons = tabsList.querySelectorAll(".tabs__link");
    const tabPanels = container.querySelectorAll(".tabs__panels > div");

    tabsList.setAttribute("role", "tablist");

    tabsList.querySelectorAll("li").forEach((listitem) => {
      listitem.setAttribute("role", "presentation");
    });

    tabButtons.forEach((tab, tabIndex) => {
      tab.setAttribute("role", "tab");
      if (tabIndex === 0) {
        tab.setAttribute("aria-selected", "true");
      } else {
        tab.setAttribute("tabindex", "-1");
        tabPanels[tabIndex].setAttribute("hidden", "");
      }
    });

    tabPanels.forEach((panel) => {
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("tabindex", "0");
    });

    container.addEventListener("click", (e) => {
      const clickedTab = e.target.closest(".tabs__link");
      if (!clickedTab) return;
      e.preventDefault();
      switchTab(clickedTab);
    });

    container.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          moveLeft();
          break;
        case "ArrowRight":
          moveRight();
          break;
        case "Home":
          e.preventDefault();
          switchTab(tabButtons[0]);
          break;
        case "End":
          e.preventDefault();
          switchTab(tabButtons[tabButtons.length - 1]);
          break;
      }
    });

    function moveLeft() {
      const currentTab = document.activeElement;
      if (!currentTab.parentElement.previousElementSibling) {
        switchTab(tabButtons[tabButtons.length - 1]);
      } else {
        switchTab(
          currentTab.parentElement.previousElementSibling.querySelector(".tabs__link")
        );
      }
    }

    function moveRight() {
      const currentTab = document.activeElement;
      if (!currentTab.parentElement.nextElementSibling) {
        switchTab(tabButtons[0]);
      } else {
        switchTab(currentTab.parentElement.nextElementSibling.querySelector(".tabs__link"));
      }
    }

    function switchTab(newTab) {
      const activePanelId = newTab.getAttribute("href");
      const activePanel = container.querySelector(activePanelId);

      tabButtons.forEach((button) => {
        button.setAttribute("aria-selected", false);
        button.setAttribute("tabindex", "-1");
      });

      tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
      });

      activePanel.removeAttribute("hidden", false);

      newTab.setAttribute("aria-selected", true);
      newTab.setAttribute("tabindex", "0");
      newTab.focus();
    }
  });
}

// Call the function to initialize multiple tab sets on the page
initializeMultipleTabs();
