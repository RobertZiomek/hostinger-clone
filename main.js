const resourcesList = Array.from(
	document.querySelectorAll(".resources__text-title")
);
const resourcesItems = document.querySelectorAll("[data-id]");
const markerList = Array.from(document.querySelectorAll(".resources__marker"));
const resourcesText = document.querySelectorAll("[data-texts]");
const rolling = Array.from(document.querySelectorAll("[data-rolls]"));
const arrows1 = Array.from(document.querySelectorAll("[data-arrows]"));
const arrowsrolled = Array.from(document.querySelectorAll("[data-arrowsdown]"));
const leftDirection = document.querySelector('[data-choose="item-1"]');
const rightDirection = document.querySelector('[data-choose="item-2"]');
const boxes = Array.from(document.querySelectorAll("[data-box"));
const scroll1 = document.querySelector(".header__nav");
const hostingerLogo = document.getElementById("hostingerIn");
const binLogo = document.getElementById("bin");
const padlockLogo = document.getElementById("padlock");
const arrowDownLogo = document.querySelectorAll(".arrowDown");
let move = 0;

const description = () => {};

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

arrows1.forEach((arrow) => {
	arrow.addEventListener("click", () => {
		arrow.classList.add("shared-hosting__arrow-disappear");

		rolling.forEach((roll) => {
			if (arrow.dataset.arrows === roll.dataset.rolls)
				roll.classList.add("block__rolling");
		});
		arrowsrolled.forEach((arrowrolled) => {
			if (arrow.dataset.arrows === arrowrolled.dataset.arrowsdown) {
				arrowrolled.classList.remove("shared-hosting__arrow-disappear");
			}
		});
	});
});

arrowsrolled.forEach((arrowrolled) => {
	arrowrolled.addEventListener("click", () => {
		arrowrolled.classList.add("shared-hosting__arrow-disappear");

		rolling.forEach((roll) => {
			if (arrowrolled.dataset.arrowsdown === roll.dataset.rolls)
				roll.classList.remove("block__rolling");
		});
		arrows1.forEach((arrow) => {
			if (arrow.dataset.arrows === arrowrolled.dataset.arrowsdown)
				arrow.classList.remove("shared-hosting__arrow-disappear");
		});
	});
});
const left = () => {
	if (move === 0) {
		boxes[0].style.transform = "translateX(" + 420 + "px)";
		// boxes[1].style.transform = "scale(1.11)";
		boxes[1].style.transform = "translateX(" + 420 + "px)";
		boxes[2].style.transform = "translateX(" + 420 + "px)";
		boxes[3].style.transform = "translateX(" + 420 + "px)";
		boxes[4].style.transform = "translateX(" + -1680 + "px)";
		move++;
	} else if (move === 1) {
		boxes[0].style.transform = "translateX(" + 840 + "px)";
		boxes[1].style.transform = "translateX(" + 840 + "px)";
		boxes[2].style.transform = "translateX(" + 840 + "px)";
		boxes[3].style.transform = "translateX(" + -1260 + "px)";
		boxes[4].style.transform = "translateX(" + -1260 + "px)";
		move++;
	} else if (move === 2) {
		boxes[0].style.transform = "translateX(" + 1260 + "px)";
		boxes[1].style.transform = "translateX(" + 1260 + "px)";
		boxes[2].style.transform = "translateX(" + -840 + "px)";
		boxes[3].style.transform = "translateX(" + -840 + "px)";
		boxes[4].style.transform = "translateX(" + -840 + "px)";
		move++;
	} else if (move === 3) {
		boxes[0].style.transform = "translateX(" + 1680 + "px)";
		boxes[1].style.transform = "translateX(" + -420 + "px)";
		boxes[2].style.transform = "translateX(" + -420 + "px)";
		boxes[3].style.transform = "translateX(" + -420 + "px)";
		boxes[4].style.transform = "translateX(" + -420 + "px)";
		move++;
	} else if (move === 4) {
		boxes[0].style.transform = "translateX(" + 0 + "px)";
		boxes[1].style.transform = "translateX(" + 0 + "px)";
		boxes[2].style.transform = "translateX(" + 0 + "px)";
		boxes[3].style.transform = "translateX(" + 0 + "px)";
		boxes[4].style.transform = "translateX(" + 0 + "px)";
		move = 0;
	}
};

const right = () => {
	if (move === 0) {
		boxes[0].style.transform = "translateX(" + 1680 + "px)";
		boxes[1].style.transform = "translateX(" + -420 + "px)";
		boxes[2].style.transform = "translateX(" + -420 + "px)";
		boxes[3].style.transform = "translateX(" + -420 + "px)";
		boxes[4].style.transform = "translateX(" + -420 + "px)";
		move = 4;
	} else if (move === 4) {
		boxes[0].style.transform = "translateX(" + 1260 + "px)";
		boxes[1].style.transform = "translateX(" + 1260 + "px)";
		boxes[2].style.transform = "translateX(" + -840 + "px)";
		boxes[3].style.transform = "translateX(" + -840 + "px)";
		boxes[4].style.transform = "translateX(" + -840 + "px)";
		move--;
	} else if (move === 3) {
		boxes[0].style.transform = "translateX(" + 840 + "px)";
		boxes[1].style.transform = "translateX(" + 840 + "px)";
		boxes[2].style.transform = "translateX(" + 840 + "px)";
		boxes[3].style.transform = "translateX(" + -1260 + "px)";
		boxes[4].style.transform = "translateX(" + -1260 + "px)";
		move--;
	} else if (move === 2) {
		boxes[0].style.transform = "translateX(" + 420 + "px)";
		boxes[1].style.transform = "translateX(" + 420 + "px)";
		boxes[2].style.transform = "translateX(" + 420 + "px)";
		boxes[3].style.transform = "translateX(" + 420 + "px)";
		boxes[4].style.transform = "translateX(" + -1680 + "px)";
		move--;
	} else if (move === 1) {
		boxes[0].style.transform = "translateX(" + 0 + "px)";
		boxes[1].style.transform = "translateX(" + 0 + "px)";
		boxes[2].style.transform = "translateX(" + 0 + "px)";
		boxes[3].style.transform = "translateX(" + 0 + "px)";
		boxes[4].style.transform = "translateX(" + 0 + "px)";
		move = 0;
	}
};
const scrollPage = () => {
	scroll1.classList.toggle("header__nav--scroll", window.scrollY > 150);
	if (window.scrollY > 150) {
		hostingerLogo.style.fill = "black";
		binLogo.style.fill = "black";
		arrowDownLogo.forEach((a) => {
			a.style.fill = "black";
			console.log("object");
		});
	} else {
		hostingerLogo.style.fill = "white";
		binLogo.style.fill = "white";
		arrowDownLogo.forEach((a) => {
			a.style.fill = "white";
		});
	}
};

window.addEventListener("scroll", scrollPage);
leftDirection.addEventListener("click", left);
rightDirection.addEventListener("click", right);
