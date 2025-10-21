/**
 * Autumn Leaves Animation
 * A subtle animation overlay that drops autumn leaves during fall months (September-November)
 */

(function () {
	"use strict";

	// Check if it's fall season (September, October, November)
	function isFallSeason() {
		const month = new Date().getMonth(); // 0-11 (0 = January)
		return month >= 8 && month <= 10; // 8 = September, 9 = October, 10 = November
	}

	// Exit early if not fall season
	if (!isFallSeason()) {
		console.log("Not fall season - autumn leaves disabled");
		return;
	}

	console.log("Fall season detected - initializing autumn leaves 🍂");

	// Autumn leaf colors (orange, red, yellow, brown tones)
	const leafColors = [
		"#D2691E", // Chocolate
		"#FF8C00", // Dark orange
		"#CD853F", // Peru
		"#DAA520", // Goldenrod
		"#B8860B", // Dark goldenrod
		"#8B4513", // Saddle brown
		"#A0522D", // Sienna
		"#FF6347", // Tomato
		"#FFA500", // Orange
		"#FFD700", // Gold
	];

	// SVG leaf shape
	function createLeafSVG(color, size) {
		return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
			<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
		</svg>`;
	}

	// Create a single leaf element
	function createLeaf() {
		const container = document.getElementById("autumn-leaves-container");
		if (!container) {
			console.error("Autumn leaves container not found!");
			return;
		}

		const leaf = document.createElement("div");
		leaf.className = "autumn-leaf";

		// Random properties for variety
		const size = Math.random() * 15 + 10; // 10-25px
		const startX = Math.random() * 100; // 0-100% of viewport width
		const duration = Math.random() * 15 + 15; // 15-30 seconds
		const delay = Math.random() * 5; // 0-5 seconds delay
		const color = leafColors[Math.floor(Math.random() * leafColors.length)];

		// Set leaf properties
		leaf.innerHTML = createLeafSVG(color, size);
		leaf.style.left = `${startX}%`;
		leaf.style.animation = `leafFall ${duration}s ease-in-out ${delay}s forwards`;

		// Add leaf to container
		container.appendChild(leaf);

		// Remove leaf after animation completes
		setTimeout(() => {
			leaf.remove();
		}, (duration + delay) * 1000);
	}

	// Start the animation when page loads
	function initializeLeaves() {
		console.log("Initializing autumn leaves animation...");

		// Create initial batch of leaves
		const initialLeaves = 8;
		for (let i = 0; i < initialLeaves; i++) {
			setTimeout(() => createLeaf(), i * 2000); // Stagger initial leaves
		}

		// Continue creating leaves periodically
		let leafCount = 0;
		const maxLeaves = 30; // Limit total leaves created

		const leafInterval = setInterval(() => {
			if (leafCount >= maxLeaves) {
				clearInterval(leafInterval);
				return;
			}
			createLeaf();
			leafCount++;
		}, 3000); // New leaf every 3 seconds
	}

	// Initialize on page load
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initializeLeaves);
	} else {
		initializeLeaves();
	}
})();
