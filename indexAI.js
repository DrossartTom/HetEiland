 const aiButtons = document.querySelectorAll(".ai-button");
        const aiInfos = document.querySelectorAll(".ai-info");
        const closeButton = document.querySelectorAll(".close-button");

        aiButtons.forEach(button => {
            button.addEventListener("click", () => {
                const target = button.getAttribute("data-target");
                aiInfos.forEach(info => {
                    if (info.id === `${target}-info`) {
                        info.classList.add("active");
                    } else {
                        info.classList.remove("active");
                    }
                });
            });
        });

        closeButton.forEach(button => {
            button.addEventListener("click", () => {
                button.parentElement.classList.remove("active");
            });
        });