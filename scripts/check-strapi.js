// Simple connectivity checker for Strapi API
const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://cyrano-pamphlet-backend-cyiq.onrender.com/';

async function main() {
  try {
    const res = await fetch(`${url}/api/global`);
    console.log(`[check-strapi] GET /api/global -> ${res.status} ${res.statusText}`);
    if (!res.ok) process.exit(1);
  } catch (e) {
    console.error(`[check-strapi] Failed to reach ${url}:`, e.message);
    process.exit(1);
  }
}

main();


