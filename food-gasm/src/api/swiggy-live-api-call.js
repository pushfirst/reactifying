import dummyData from "../feed/dummy-feed.json";
export async function fetchRestaurants(lat = "26.83730", lng = "80.91650") {
  try {
      const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${encodeURIComponent(lat)}&lng=${encodeURIComponent(lng)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Proxy HTTP ${res.status}`);
    const json = await res.json();

    // Find the restaurant grid card and extract the list
    const cards = json?.data?.cards ?? [];
    const gridCard = cards.find(
      (c) => c?.card?.card?.id === "restaurant_grid_listing_v2"
    );
    return gridCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
  } catch (err) {
    return JSON.parse(JSON.stringify(dummyData.restaurants));
  }
}
