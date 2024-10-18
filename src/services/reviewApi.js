export async function createReview(obj) {
  const token = JSON.parse(sessionStorage.getItem("token"));
  try {
    const res = await fetch(
      "https://homestay-backend-c160.onrender.com/api/v1/reviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(obj),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to add a review");
    }
  } catch (err) {
    console.error("Error during login:", err.message);
    throw err; // Re-throw the error to allow higher-level handling if needed
  }
}
