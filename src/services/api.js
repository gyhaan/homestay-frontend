export async function getAllListings() {
  const res = await fetch(
    "https://homestay-backend-c160.onrender.com/api/v1/listings"
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  console.log(data);
  return data;
}
