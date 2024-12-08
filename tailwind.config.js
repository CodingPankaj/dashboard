/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary-color": "rgba(var(--bg-primary-color))",
        "bg-secondary-color": "rgba(var(--bg-secondary-color))",
        "text-primary-color": "rgba(var(--text-primary-color))",
        "text-secondary-color": "rgba(var(--text-secondary-color))",
        "accent-color": "rgba(var(--accent-color))",
        "border-color": "rgba(var(--border-color))",
      },
    },
  },
  plugins: [],
};
