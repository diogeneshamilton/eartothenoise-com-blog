import path from "node:path";
import sharp from "sharp";
import { promises as fs } from "node:fs";

export default function (eleventyConfig) {
	eleventyConfig.addShortcode("makeOGImg", async function (src, siteUrl) {
		if (!src) return "";

		siteUrl = siteUrl ?? "/";

		// Ensure the output directory exists
		await fs.mkdir("./_site/img/og/", { recursive: true });

		// Generate a unique filename for the OG image
		const filename = `og-${Date.now()}-${Math.random()
			.toString(36)
			.substr(2, 9)}.jpeg`;
		const outputPath = `./_site/img/og/${filename}`;
		const urlPath = `${siteUrl}img/og/${filename}`;

		// Use Sharp directly to force exact 1200x630 dimensions
		await sharp(src)
			.resize(1200, 630, {
				fit: "cover",
				position: "center",
			})
			.jpeg({ quality: 80 })
			.toFile(outputPath);

		return urlPath;
	});
}
