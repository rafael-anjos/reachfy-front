const API_URL = "https://api.reachfy.com.br/api";
 
export async function registerUser({ nome, email, senha }) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, email, senha }),
  });
 
  if (!response.ok) {
    if (response.status === 400) {
      throw new Error("This email is already registered.");
    }
    throw new Error("Registration failed. Please try again.");
  }
 
  const data = await response.json();
  return data; // { nome: string, token: string }
}