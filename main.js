const resourcesList = Array.from(
	document.querySelectorAll(".resources__text-title")
);
const resourcesItems = document.querySelectorAll("[data-id]");
const markerList = Array.from(document.querySelectorAll(".resources__marker"));
const resourcesText = document.querySelectorAll("[data-texts]");
const rolling = document.querySelectorAll("shared-hosting__block");
const arrows = document.querySelectorAll("shared-hosting__arrow");

resourcesList.forEach((text) => {
	text.addEventListener("click", () => {
		text.style.color = "#673de6";
		resourcesList.forEach((item) => {
			if (text.dataset.id === item.dataset.id)
				markerList.forEach((marker) => {
					if (text.dataset.id === marker.dataset.id) {
						marker.classList.remove("resources__marker--none");
						resourcesText.forEach((description) => {
							if (item.dataset.id === description.dataset.texts) {
								description.classList.add(
									"resources__right-md--active"
								);
							} else
								description.classList.remove(
									"resources__right-md--active"
								);
						});
					} else {
						marker.classList.add("resources__marker--none");
					}
				});
			else {
				item.style.color = "black";
			}
		});
	});
});

arrows.forEach((arrow) => {
	arrow.addEventListener("click", () => {
		arrow.setAttribute("src", "./svg/arrow-down.svg");
	});
});
