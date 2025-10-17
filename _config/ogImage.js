import path from "node:path";
import Image from "@11ty/eleventy-img";

export default function (eleventyConfig) {
	eleventyConfig.addShortcode("makeOGImg", async function (src, siteUrl) {
		if (!src) return "";

		siteUrl = siteUrl ?? "/";

		// Process the image using the Eleventy Image Plugin
		const metadata = await Image(src, {
			widths: [1200], // Standard Open Graph image size
			formats: ["jpeg"], // Use JPEG for Open Graph compatibility
			outputDir: "./_site/img/og/", // Output directory for OG images
			urlPath: path.join(siteUrl, "img/og/"), // URL path for OG images
			sharpOptions: {
				quality: 80, // Adjust image quality
			},
		});

		// Get the URL of the generated image
		return metadata.jpeg[0].url;
	});
}
