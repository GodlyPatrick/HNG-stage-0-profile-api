export const fetchCatFact = async () => {
try {
const fetchCatApi = await fetch('https://catfact.ninja/fact', {timeout: 5000});
if(!fetchCatApi.ok) {
  console.log(`⚠️ Cat Facts API returned status: ${fetchCatApi.status}`);
          return 'Could not fetch a cat fact at the moment 🐾';
};

const data = await fetchCatApi.json();
return data.fact;

} catch(error) {
console.log('Error fetching cat fact', {error: error.message});
return 'Could not fetch a cat fact at the moment 🐾';
};
};