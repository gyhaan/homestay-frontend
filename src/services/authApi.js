export async function signUpUser(formData) {
  try {
    const res = await fetch(
      "https://homestay-backend-c160.onrender.com/api/v1/users/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Sign-up failed");
    }

    const data = await res.json();
    console.log("User signed up successfully:", data);
    console.log(data.data.user.role);
    sessionStorage.setItem("token", JSON.stringify(data.token));
    sessionStorage.setItem("role", JSON.stringify(data.data.user.role));
    return data; // Optionally return the data if needed for further processing
  } catch (err) {
    console.error("Error during sign-up:", err.message);
    throw err; // Re-throw the error to allow higher-level handling if needed
  }
}

export async function loginUser(formData) {
  try {
    const res = await fetch(
      "https://homestay-backend-c160.onrender.com/api/v1/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await res.json();
    console.log("User logged in successfully:", data);
    sessionStorage.setItem("token", JSON.stringify(data.token));
    sessionStorage.setItem("role", JSON.stringify(data.role));
    return data; // Optionally return the data for further use
  } catch (err) {
    console.error("Error during login:", err.message);
    throw err; // Re-throw the error to allow higher-level handling if needed
  }
}

export async function getProfile() {
  try {
    const token = JSON.parse(sessionStorage.getItem("token"));

    if (!token) {
      throw new Error("Looks like you are not logged in!!");
    }

    const res = await fetch(
      "https://homestay-backend-c160.onrender.com/api/v1/users/getMe",
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
