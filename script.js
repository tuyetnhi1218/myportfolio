
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

    themeToggle.setAttribute(
        "aria-label",
        isDarkMode ? "Switch to light theme" : "Switch to dark theme"
    );
});

const projects = document.querySelectorAll(".project-card");

const projectsSection = document.getElementById("projects");

const filterContainer = document.createElement("div");
filterContainer.className = "project-filters";
filterContainer.setAttribute("aria-label", "Filter projects");

const filterOptions = [
    { label: "All", value: "all" },
    { label: "Web Development", value: "web" },
    { label: "Java", value: "java" }
];

filterOptions.forEach(function (option) {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = option.label;
    button.className = "filter-button";

    if (option.value === "all") {
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");
    } else {
        button.setAttribute("aria-pressed", "false");
    }

    button.addEventListener("click", function () {
        filterContainer.querySelectorAll("button").forEach(function (item) {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        projects.forEach(function (project) {
            const matches =
                option.value === "all" ||
                project.dataset.category === option.value;

            project.hidden = !matches;
        });
    });

    filterContainer.appendChild(button);
});

const projectsGrid = projectsSection.querySelector(".projects-grid");
projectsGrid.parentNode.insertBefore(filterContainer, projectsGrid);


/* =========================
   3. BACK TO TOP BUTTON
========================= */

const backToTop = document.createElement("button");

backToTop.type = "button";
backToTop.id = "back-to-top";
backToTop.textContent = "↑";
backToTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {
    backToTop.classList.toggle("visible", window.scrollY > 300);
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
