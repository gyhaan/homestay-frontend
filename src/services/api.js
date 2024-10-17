export async function getAllListings() {
  try {
    const res = await fetch(
      "https://homestay-backend-c160.onrender.com/api/v1/listings"
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

export async function getEvents() {
  const res = await fetch(
    "https://homestay-backend-c160.onrender.com/api/v1/events"
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
}
