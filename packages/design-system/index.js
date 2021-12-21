module.exports = {
  config: {
    theme: {
      extend: {
        spacing: {
          '4': '0.25rem',
          '8': '0.5rem',
          '16': '1rem',
          '32': '2rem',
          '64': '4rem',
          '128': '8rem',
        },
        boxShadow: {
          'panel': '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
          'input': 'inset 0px 10px 25px -15px rgba(0, 0, 0, 0.25), inset 0px 5px 10px -5px rgba(17, 24, 39, 0.2)',
          'button': '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 5px 5px -2px rgba(0, 0, 0, 0.04)',
        },
        colors: {
          white: '#FFFFFF',
          black: '#1F2937',
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
          blue: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
          },
          red: {
            50: '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#EF4444',
            600: '#DC2626',
          }
        },
        fontFamily: {
          sans: [
            "pt-sans",
            "ui-sans-serif",
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "Noto Sans",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji",
          ],
          mono: [
            "ui-monospace",
            "SFMono-Regular",
            "Menlo",
            "Monaco",
            "Consolas",
            "Liberation Mono",
            "Courier New",
            "monospace",
          ],
        },
      }
    }
  },
  handler: function() {

  }
}