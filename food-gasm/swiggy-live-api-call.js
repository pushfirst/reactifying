// api/fetchRestaurants.js
export async function fetchRestaurants(lat = "26.83730", lng = "80.91650") {
  const res = await fetch(`http://localhost:3001/api/restaurants?lat=${lat}&lng=${lng}`);
  if (!res.ok) throw new Error(`Proxy HTTP ${res.status}`);
  const json = await res.json();

  // Find the restaurant grid card and extract the list
  const cards = json?.data?.cards ?? [];
  const gridCard = cards.find((c) => c?.card?.card?.id === "restaurant_grid_listing_v2");
  return gridCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
}
