/**
 * Get the correct asset path for production/development
 * Handles Vite's base URL configuration for GitHub Pages
 */
export const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
