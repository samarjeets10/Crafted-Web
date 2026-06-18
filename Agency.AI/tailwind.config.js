/** Tailwind config for Agency.AI
 * Adds a custom `dark` variant that targets .dark and its descendants.
 */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('dark', '&:where(.dark, .dark *)')
    }
  ],
};