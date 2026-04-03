const API_URL = "http://localhost:8080/api";
 
export async function registerUser({ nome, email, senha }) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ nome, email, senha }),
    credentials: "include"
  });
 
  if (!response.ok) {
    if (response.status === 400) {
      throw new Error("This email is already registered.");
    }
    throw new Error("Registration failed. Please try again.");
  }

  return response.json(); // { nome: string, token: string }
}