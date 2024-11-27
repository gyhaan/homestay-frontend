export async function getAllListings() {
  try {
    const res = await fetch(
      "https://homestay-backend-c160.onrender.com/api/v1/listings?sort=-ratingsAverage,price"
    );

    if (!res.ok) {
      const errorData = await res.json();
      const errorMessage =
        errorData.message || `HTTP error! status: ${res.status}`;
      throw new Error(errorMessage);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    throw error;
  }
}

export async function getListing(id) {
  try {
    const res = await fetch(
      `https://homestay-backend-c160.onrender.com/api/v1/listings/${id}`
    );

    if (!res.ok) {
      const errorData = await res.json();
      const errorMessage =
        errorData.message || `HTTP error! status: ${res.status}`;
      throw new Error(errorMessage);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    throw error;
  }
}

export async function getEvents() {
  const res = await fetch(
    "https://homestay-backend-c160.onrender.com/api/v1/events?sort=-date"
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
}
