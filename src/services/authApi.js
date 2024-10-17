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
    return data; // Optionally return the data for further use
  } catch (err) {
    console.error("Error during login:", err.message);
    throw err; // Re-throw the error to allow higher-level handling if needed
  }
}
