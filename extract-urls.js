// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

async function extractUrls() {
    console.log("Reading sitemap-source.xml...");
    
    // Path to your source file
    const inputPath = path.join(__dirname, 'data', 'sitemap-source.xml');
    const outputPath = path.join(__dirname, 'data', 'urls.json');

    try {
        const xmlContent = fs.readFileSync(inputPath, 'utf8');

        // Regex to find content between <loc> tags
        const locRegex = /<loc>(.*?)<\/loc>/g;
        const urls = [];
        let match;

        while ((match = locRegex.exec(xmlContent)) !== null) {
            urls.push(match[1]);
        }

        console.log(`Successfully extracted ${urls.length} URLs.`);

        // Save as a JSON file for Next.js to read easily
        fs.writeFileSync(outputPath, JSON.stringify(urls));
        console.log(`Saved to ${outputPath}`);
        
    } catch (error) {
        console.error("Error processing file:", error.message);
    }
}

extractUrls();