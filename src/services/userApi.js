export async function updateUser(obj) {
  try {
    const token = JSON.parse(sessionStorage.getItem("token"));

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
