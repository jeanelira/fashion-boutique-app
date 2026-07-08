const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export async function apiRequest(path, options = {}) {
  if (!API_BASE_URL) {
    return {
      mocked: true,
      path,
      options
    };
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  });

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status}`);
  }

  return response.json();
}
