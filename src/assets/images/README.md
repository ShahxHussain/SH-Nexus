# Team Images Setup Guide

## How to Add Local Images

### Step 1: Add Your Image Files
Place your image files in the appropriate folders:

```
src/assets/images/team/
├── co-founders/
│   ├── shah-hussain.jpg (or .png)
│   └── soman-ahmad.jpg
├── lead-ambassadors/
│   ├── emily-chen.jpg
│   ├── michael-rodriguez.jpg
│   └── priya-sharma.jpg
├── core-team/
│   ├── james-wilson.jpg
│   ├── lisa-thompson.jpg
│   ├── robert-kim.jpg
│   └── anna-kowalski.jpg
└── university-ambassadors/
    ├── alex-thompson.jpg
    ├── maria-gonzalez.jpg
    └── ... (other ambassadors)
```

### Step 2: Update the index.js file
In `src/assets/images/index.js`, update the import section:

```javascript
// Import your local images
import shahHussainImg from './team/co-founders/shah-hussain.jpg';
import somanAhmadImg from './team/co-founders/soman-ahmad.jpg';
// ... add more imports as needed
```

### Step 3: Update the teamImages object
Replace the URLs with your imported images:

```javascript
coFounders: {
    shahHussain: shahHussainImg,
    somanAhmad: somanAhmadImg,
    // ...
},
```

## Image Requirements

### Recommended Specifications:
- **Format**: JPG or PNG
- **Size**: 
  - Co-founders & Leadership: 400x400px minimum
  - University Ambassadors: 300x300px minimum
- **Quality**: High resolution, professional headshots
- **Background**: Clean, professional background preferred
- **File Size**: Under 500KB for optimal loading

### Naming Convention:
- Use lowercase with hyphens: `shah-hussain.jpg`
- Match the keys in the teamImages object
- Consistent file extensions

## Current Setup

The system currently uses:
- **Local images** when available (with proper imports)
- **Fallback to online images** from Unsplash when local images are missing
- **Error handling** to prevent broken images

## Adding Shah Hussain's Image

1. Save his photo as: `src/assets/images/team/co-founders/shah-hussain.jpg`
2. The system will automatically use it (already configured)
3. If the file doesn't exist, it falls back to the placeholder

## Troubleshooting

### Image Not Showing?
1. Check file path and name exactly match
2. Ensure file extension is correct (.jpg, .png)
3. Restart the development server after adding new images
4. Check browser console for any import errors

### Performance Tips:
- Optimize images before adding (use tools like TinyPNG)
- Use WebP format for better compression (with JPG fallback)
- Keep file sizes reasonable for faster loading