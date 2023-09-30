// generateSitemap.js

const fs = require('fs');
const axios = require('axios');

async function generateSitemap() {
  try {
    // Fetch data from your APIs and generate the sitemap XML here
    const apiResponse = await axios.get('https://api.spacite.com/api/workSpace');

    // Extract URLs from the API response (adjust this based on your API response structure)
    const workspaceUrls = apiResponse.data.map(item => `https://spacite.com/coworking/${item.slug}`);

    const cityApiResponse = await axios.get('https://api.spacite.com/api/city/active-cities');

    // Extract city URLs from the city API response (adjust this based on your API response structure)
    const cityUrls = cityApiResponse.data.map(item => `https://spacite.com/coworking-space/${item.name.toLowerCase()}`);

    const microlocationApiResponse = await axios.get('https://api.spacite.com/api/microlocation/active-location');

    // Extract microlocation URLs from the microlocation API response (adjust this based on your API response structure)
    const microlocationUrls = microlocationApiResponse.data.map(item => `https://spacite.com/coworking-space/${item.city.name.toLowerCase()}/${item.name.replace(/\s+/g, '-').toLowerCase()}`);

    // Create a sitemap as a plain text string
    const date = new Date();
    const isoString = date.toISOString()

    const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
xmlns:xhtml="http://www.w3.org/1999/xhtml"
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${workspaceUrls.map(url => `
    <url>
      <loc>${url}</loc>
      <lastmod>${isoString}</lastmod>
      <priority>0.7</priority>
    </url>
  `).join('')}
  ${cityUrls.map(url => `
    <url>
      <loc>${url}</loc>
      <lastmod>${isoString}</lastmod>
      <priority>0.6</priority>
    </url>
  `).join('')}
  ${microlocationUrls.map(url => `
    <url>
      <loc>${url}</loc>
      <lastmod>${isoString}</lastmod>
      <priority>0.5</priority>
    </url>
  `).join('')}
</urlset>`;

    // Save the sitemap to the root folder of the React project
    fs.writeFileSync('./public/sitemap.xml', sitemap, 'utf-8');

    console.log('Sitemap generated and saved successfully.');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
