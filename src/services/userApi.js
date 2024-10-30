export async function updateUser(obj, token) {
  try {
    if (!token) {
      throw new Error("Please login to update user");
    }
    const res = await fetch(
      "https://homestay-backend-c160.onrender.com/api/v1/users/updateUser",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(obj),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to update user");
    }
  } catch (err) {
    console.error("Error during login:", err.message);
    throw err; // Re-throw the error to allow higher-level handling if needed
  }
}

export async function getMyBookings(token) {
  try {
    // if (!token) {
    //   throw new Error("Please login to get bookings");
    // }

    const res = await fetch(
      "https://homestay-backend-c160.onrender.com/api/v1/users/getBookings",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to update user");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error during login:", err.message);
    throw err; // Re-throw the error to allow higher-level handling if needed
  }
}
