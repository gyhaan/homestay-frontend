export async function getMyListings() {
  try {
    const token = JSON.parse(sessionStorage.getItem("token"));

    if (!token) {
      throw new Error("Looks like you are not logged in!!");
    }

    const res = await fetch(
      "https://homestay-backend-c160.onrender.com/api/v1/users/getMyListings",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to get user data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    throw error;
  }
}

export async function addListing(formData) {
  try {
    const token = JSON.parse(sessionStorage.getItem("token"));

    if (!token) {
      throw new Error("Looks like you are not logged in!!");
    }

    console.log(Object.fromEntries(formData));
    const res = await fetch(
      "https://homestay-backend-c160.onrender.com/api/v1/listings",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Do not set Content-Type manually
        },
        body: formData, // Pass the FormData directly
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to get user data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    throw error;
  }
}
