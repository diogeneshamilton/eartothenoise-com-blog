# Autumn Leaves Animation Module

A seasonal animation overlay that displays falling autumn leaves during fall months (September, October, November).

## 🍂 Features

- **Automatic Season Detection**: Only activates during September, October, and November
- **Subtle & Beautiful**: Leaves gently fall with natural drift and rotation in authentic autumn colors
- **Performance Optimized**: Hardware-accelerated CSS animations with automatic cleanup
- **Non-Intrusive**: Overlay doesn't interfere with page content or user interactions (pointer-events: none)
- **Zero Configuration**: Works automatically once installed

## 📁 Files

```
public/
├── js/
│   ├── autumn-leaves.js      # Main JavaScript module
│   ├── test-autumn-leaves.html  # Test page
│   └── README.md              # Detailed documentation
└── css/
    └── autumn-leaves.css      # Animation styles
```

## 🚀 How It's Integrated

The module is integrated into the site via `_includes/layouts/base.njk`:

1. **CSS**: Loaded via Eleventy's CSS bundle
2. **HTML**: Container div (`#autumn-leaves-container`) added to body
3. **JavaScript**: Script tag loads `/js/autumn-leaves.js`

## 🧪 Testing

### View the Live Site
Refresh your browser and check the console. You should see:
- If it's fall: `"Fall season detected - initializing autumn leaves 🍂"`
- If it's not fall: `"Not fall season - autumn leaves disabled"`

### Use the Test Page
Open `http://localhost:8080/js/test-autumn-leaves.html` (when dev server is running) to:
- See the current season status
- Test the animation
- View console messages
- Get instructions for testing other seasons

### Manual Season Testing
To test the animation outside of fall months, open the browser console and run:

```javascript
// Override to test October
Date.prototype.getMonth = function() { return 9; };
location.reload();
```

Month numbers:
- 8 = September
- 9 = October  
- 10 = November

## ⚙️ Customization

### Change Active Months

Edit `public/js/autumn-leaves.js`, line ~14:

```javascript
function isFallSeason() {
    const month = new Date().getMonth(); // 0-11
    return month >= 8 && month <= 10; // Change these values
}
```

### Adjust Leaf Behavior

In `public/js/autumn-leaves.js`:

```javascript
const initialLeaves = 8;      // Initial leaves on page load
const maxLeaves = 30;         // Maximum total leaves
const leafInterval = 3000;    // Milliseconds between new leaves
const duration = 15-30;       // Random duration range (seconds)
const size = 10-25;          // Random size range (pixels)
```

### Modify Colors

Edit the `leafColors` array in `public/js/autumn-leaves.js`:

```javascript
const leafColors = [
    '#D2691E', // Chocolate
    '#FF8C00', // Dark orange
    '#CD853F', // Peru
    // Add more colors here
];
```

### Adjust Animation

Edit `public/css/autumn-leaves.css` to modify the `@keyframes leafFall` animation.

## 🎨 Current Behavior

- **Initial leaves**: 8 leaves appear gradually over 16 seconds
- **Continuous**: New leaf every 3 seconds (max 30 total)
- **Duration**: Each leaf takes 15-30 seconds to fall
- **Motion**: Gentle drift left/right with 720° rotation
- **Colors**: 10 autumn colors (oranges, reds, yellows, browns)
- **Sizes**: Random between 10-25px

## 🗑️ Removal

To disable the animation, simply remove these lines from `_includes/layouts/base.njk`:

```html
<!-- Remove the CSS include -->
{%- css %}{% include "public/css/autumn-leaves.css" %}{% endcss %}

<!-- Remove the container div -->
<div id="autumn-leaves-container" aria-hidden="true"></div>

<!-- Remove the script tag -->
<script src="/js/autumn-leaves.js"></script>
```

## 📊 Browser Support

Works in all modern browsers supporting:
- CSS3 Animations & Transforms
- ES6+ JavaScript
- SVG

## 🐛 Troubleshooting

**Leaves not appearing?**
1. Check browser console for error messages
2. Verify it's fall season (Sept-Nov) or use the date override
3. Ensure `#autumn-leaves-container` div exists in the HTML
4. Confirm JavaScript file is loading (check Network tab)

**Performance issues?**
- Reduce `maxLeaves` value
- Increase `leafInterval` duration
- Reduce initial leaves count

---

Created: October 2024

