// generateSitemap.js

const fs = require('fs');
const axios = require('axios');

async function generateSitemap() {
  try {
    // Fetch data from your APIs and generate the sitemap XML here
    // const apiResponse = await axios.get('https://api.spacite.com/api/workSpace');

    // Extract URLs from the API response (adjust this based on your API response structure)
    // const workspaceUrls = apiResponse.data.map(item => `https://spacite.com/coworking/${item.slug}`);

    const coworkingApiResponse = await axios.get('https://api.cofynd.com/api/user/microLocationByCitySpaceType?is_admin=true&for_coworking=true?page=1&limit=500');

    const colivingApiResponse = await axios.get('https://api.cofynd.com/api/user/microLocationByCitySpaceType?is_admin=true&for_coliving=true?page=1&limit=500');

    // const virtualApiResponse = await axios.get('https://api.cofynd.com/api/user/workSpaces?for_virtual=true?page=1&limit=5000');

    const officeApiResponse = await axios.get('https://api.cofynd.com/api/user/microLocationByCitySpaceType?is_admin=true&for_office=true?page=1&limit=500');

    // Extract  URLs from the  API response (adjust this based on your API response structure)
   const cowork = coworkingApiResponse.data
   const coliving = colivingApiResponse.data
  //  const virtual = virtualApiResponse.data
   const office = officeApiResponse.data

    const coworkUrls = cowork.data.map(item => `https://cofynd.com/coworking/${item.city?.name.replace(/\s+/g, '-').toLowerCase()}/${item?.name.replace(/\s+/g, '-').toLowerCase()}`);

    const colivingUrls = coliving.data.map(item => `https://cofynd.com/co-living/${item.city?.name.replace(/\s+/g, '-').toLowerCase()}/${item?.name.replace(/\s+/g, '-').toLowerCase()}`);

    // const virtualUrls = virtual.data.map(item => `https://cofynd.com/virtual-office/${item.name.toLowerCase()}`);
    const officeUrls = office.data.map(item => `https://cofynd.com/office-space/rent/${item.city?.name.replace(/\s+/g, '-').toLowerCase()}/${item?.name.replace(/\s+/g, '-').toLowerCase()}`);
   
    // const microlocationApiResponse = await axios.get('https://api.spacite.com/api/microlocation/active-location');

    // Extract microlocation URLs from the microlocation API response (adjust this based on your API response structure)
    // const microlocationUrls = microlocationApiResponse.data.map(item => `https://spacite.com/coworking-space/${item..name.toLowerCase()}/${item.name.replace(/\s+/g, '-').toLowerCase()}`);

    // Create a sitemap as a plain text string
    const date = new Date();
    const isoString = date.toISOString()

    const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
xmlns:xhtml="http://www.w3.org/1999/xhtml"
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${coworkUrls.map(url => `
    <url>
      <loc>${url}</loc>
      <lastmod>${isoString}</lastmod>
      <priority>1.0</priority>
      <changefreq>Daily</changefreq>
    </url>
  `).join('')}
  ${colivingUrls.map(url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${isoString}</lastmod>
    <priority>1.0</priority>
    <changefreq>Daily</changefreq>
  </url>
`).join('')}
${officeUrls.map(url => `
<url>
  <loc>${url}</loc>
  <lastmod>${isoString}</lastmod>
  <priority>1.0</priority>
  <changefreq>Daily</changefreq>
</url>
`).join('')}
</urlset>`;

    // Save the sitemap to the root folder of the React project
    fs.writeFileSync('./public/cofyndSitemap.xml', sitemap, 'utf-8');

    console.log('Sitemap generated and saved successfully.');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
