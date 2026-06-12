const DEFAULT_API_URL = "http://localhost:4000";

export const apiUrl = (import.meta.env.VITE_API_URL || DEFAULT_API_URL).replace(/\/+$/, "");
