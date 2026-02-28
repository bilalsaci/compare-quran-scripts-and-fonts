# Compare Quran Scripts & Fonts

A React application designed to help users compare different Quranic script styles (Uthmani, Indopak, Imlaei) and render them using various digital fonts. This tool utilizes the [Quran.com API (v4)](https://quran.api-docs.io/v4) to fetch verse data.

Deployed Tool: https://saci.blog/tools/compare-quran-scripts/

## Features

- **Script Comparison**: View multiple script types side-by-side:
  - Uthmani (Tajweed, Simple, Hafs)
  - Indopak (Standard, Nastaleeq)
  - Imlaei (Simple, Standard)
- **Dynamic Font Selection**: Switch between high-quality Quranic fonts in real-time:
  - QPC Hafs (Uthmanic)
  - Me Quran (Volt Newmet)
  - QPC Nastaleeq
  - Indopak Nastaleeq
  - Digital Khatt (V1 & V2)
- **Navigation**: Easy-to-use Surah and Ayah selector with auto-reset bounds.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## Tech Stack

- **Framework**: React 19 (TypeScript)
- **Styling**: Tailwind CSS
- **API**: Quran.com API v4
- **Fonts**: Custom web fonts hosted via CDN

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## API Usage

This application fetches data from the following endpoint:
`https://api.quran.com/api/v4/verses/by_key/{chapter}:{verse}`

It requests specific fields including `text_uthmani`, `text_indopak`, `text_imlaei`, and various other script formats to display the comparisons.

## Acknowledgements

- **Data**: [Quran.com](https://quran.com)
- **Fonts**: Hosted and provided by [Tarteel.ai](https://tarteel.ai) CDN.
