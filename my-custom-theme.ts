import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const myCustomTheme: CustomThemeConfig = {
  name: "my-custom-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base":
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    "--theme-font-family-heading":
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "24px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "0 0 0",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "0 0 0",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #e3bc92
    "--color-primary-50": "251 245 239", // #fbf5ef
    "--color-primary-100": "249 242 233", // #f9f2e9
    "--color-primary-200": "248 238 228", // #f8eee4
    "--color-primary-300": "244 228 211", // #f4e4d3
    "--color-primary-400": "235 208 179", // #ebd0b3
    "--color-primary-500": "227 188 146", // #e3bc92
    "--color-primary-600": "204 169 131", // #cca983
    "--color-primary-700": "170 141 110", // #aa8d6e
    "--color-primary-800": "136 113 88", // #887158
    "--color-primary-900": "111 92 72", // #6f5c48
    // secondary | #ff8e38
    "--color-secondary-50": "255 238 225", // #ffeee1
    "--color-secondary-100": "255 232 215", // #ffe8d7
    "--color-secondary-200": "255 227 205", // #ffe3cd
    "--color-secondary-300": "255 210 175", // #ffd2af
    "--color-secondary-400": "255 176 116", // #ffb074
    "--color-secondary-500": "255 142 56", // #ff8e38
    "--color-secondary-600": "230 128 50", // #e68032
    "--color-secondary-700": "191 107 42", // #bf6b2a
    "--color-secondary-800": "153 85 34", // #995522
    "--color-secondary-900": "125 70 27", // #7d461b
    // tertiary | #8f65ae
    "--color-tertiary-50": "238 232 243", // #eee8f3
    "--color-tertiary-100": "233 224 239", // #e9e0ef
    "--color-tertiary-200": "227 217 235", // #e3d9eb
    "--color-tertiary-300": "210 193 223", // #d2c1df
    "--color-tertiary-400": "177 147 198", // #b193c6
    "--color-tertiary-500": "143 101 174", // #8f65ae
    "--color-tertiary-600": "129 91 157", // #815b9d
    "--color-tertiary-700": "107 76 131", // #6b4c83
    "--color-tertiary-800": "86 61 104", // #563d68
    "--color-tertiary-900": "70 49 85", // #463155
    // success | #0eab74
    "--color-success-50": "219 242 234", // #dbf2ea
    "--color-success-100": "207 238 227", // #cfeee3
    "--color-success-200": "195 234 220", // #c3eadc
    "--color-success-300": "159 221 199", // #9fddc7
    "--color-success-400": "86 196 158", // #56c49e
    "--color-success-500": "14 171 116", // #0eab74
    "--color-success-600": "13 154 104", // #0d9a68
    "--color-success-700": "11 128 87", // #0b8057
    "--color-success-800": "8 103 70", // #086746
    "--color-success-900": "7 84 57", // #075439
    // warning | #ffeb14
    "--color-warning-50": "255 252 220", // #fffcdc
    "--color-warning-100": "255 251 208", // #fffbd0
    "--color-warning-200": "255 250 196", // #fffac4
    "--color-warning-300": "255 247 161", // #fff7a1
    "--color-warning-400": "255 241 91", // #fff15b
    "--color-warning-500": "255 235 20", // #ffeb14
    "--color-warning-600": "230 212 18", // #e6d412
    "--color-warning-700": "191 176 15", // #bfb00f
    "--color-warning-800": "153 141 12", // #998d0c
    "--color-warning-900": "125 115 10", // #7d730a
    // error | #ea1f1f
    "--color-error-50": "252 221 221", // #fcdddd
    "--color-error-100": "251 210 210", // #fbd2d2
    "--color-error-200": "250 199 199", // #fac7c7
    "--color-error-300": "247 165 165", // #f7a5a5
    "--color-error-400": "240 98 98", // #f06262
    "--color-error-500": "234 31 31", // #ea1f1f
    "--color-error-600": "211 28 28", // #d31c1c
    "--color-error-700": "176 23 23", // #b01717
    "--color-error-800": "140 19 19", // #8c1313
    "--color-error-900": "115 15 15", // #730f0f
    // surface | #4d251f
    "--color-surface-50": "228 222 221", // #e4dedd
    "--color-surface-100": "219 211 210", // #dbd3d2
    "--color-surface-200": "211 201 199", // #d3c9c7
    "--color-surface-300": "184 168 165", // #b8a8a5
    "--color-surface-400": "130 102 98", // #826662
    "--color-surface-500": "77 37 31", // #4d251f
    "--color-surface-600": "69 33 28", // #45211c
    "--color-surface-700": "58 28 23", // #3a1c17
    "--color-surface-800": "46 22 19", // #2e1613
    "--color-surface-900": "38 18 15", // #26120f
  },
};
