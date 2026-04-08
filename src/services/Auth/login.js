const API_URL = "https://api.reachfy.com.br/api";

export async function loginUser({ email, senha }) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, senha }),
    credentials:"include"
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 404) {
      throw new Error("Invalid email or password.");
    }
    throw new Error("Login failed. Please try again.");
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
}
