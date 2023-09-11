// generateSitemap.js

const fs = require('fs');
const axios = require('axios');
const { SitemapStream, streamToPromise } = require('sitemap');

async function generateSitemap() {
  try {
    // Fetch data from your API and generate the sitemap XML here
    const apiResponse = await axios.get('https://api.spacite.com/api/workSpace');

    // Extract URLs from the API response (adjust this based on your API response structure)
    const urls = apiResponse.data.map(item => ({
      url: `/coworking/${item.slug}`,
      changefreq: 'weekly',
      priority: 0.7,
    }));
    const cityApiResponse = await axios.get('https://api.spacite.com/api/city/active-cities');

    // Extract city URLs from the city API response (adjust this based on your API response structure)
    const cityUrls = cityApiResponse.data.map(item => ({
      url: `/coworking-space/${item.name.toLowerCase()}`,
      changefreq: 'weekly',
      priority: 0.6,
    }));

    // Fetch data from the microlocation API endpoint (replace with your microlocation API endpoint)
    const microlocationApiResponse = await axios.get('https://api.spacite.com/api/microlocation/active-location');

    // Extract microlocation URLs from the microlocation API response (adjust this based on your API response structure)
    const microlocationUrls = microlocationApiResponse.data.map(item => ({
      url: `/coworking-space/${item.city.name.toLowerCase()}/${item.name.replace(/\s+/g, '-').toLowerCase()}`,
      changefreq: 'weekly',
      priority: 0.5,
    }));
    // Create a sitemap
    const stream = new SitemapStream({ hostname: 'https://spacite.com' });

    // Add URLs to the sitemap
    urls.forEach(url => {
      stream.write(url);
    });

    cityUrls.forEach(url => {
      stream.write(url);
    });
    microlocationUrls.forEach(url => {
      stream.write(url);
    });

    stream.end();

    // Generate the sitemap as a string
    const sitemap = await streamToPromise(stream);

    // Save the sitemap to the root folder of the React project
    fs.writeFileSync('./public/sitemap.xml', sitemap, 'utf-8');

    console.log('Sitemap generated and saved successfully.');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
