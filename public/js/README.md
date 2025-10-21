# Autumn Leaves Animation

A subtle, seasonal animation overlay that displays falling autumn leaves during fall months.

## Features

- **Seasonal Activation**: Automatically activates only during fall months (September, October, November)
- **Subtle Animation**: Leaves gently fall with natural drift and rotation
- **Performance Optimized**: Limited number of leaves, automatic cleanup, hardware-accelerated CSS animations
- **Non-Intrusive**: Overlay doesn't interfere with page content or user interactions

## Files

- `autumn-leaves.js` - Main JavaScript module with season detection and leaf animation logic
- `../css/autumn-leaves.css` - CSS styles and keyframe animations

## How It Works

1. **Season Detection**: On page load, checks the current month
2. **Conditional Activation**: Only runs during September, October, and November
3. **Progressive Enhancement**: Exits gracefully if the container element is missing
4. **Automatic Cleanup**: Leaves are removed from the DOM after their animation completes

## Configuration

To modify the behavior, edit these values in `autumn-leaves.js`:

```javascript
const initialLeaves = 8;      // Number of leaves on initial load
const maxLeaves = 30;         // Maximum total leaves created
const leafInterval = 3000;    // Milliseconds between new leaves
const duration = 15-30;       // Random duration range (seconds)
const size = 10-25;          // Random size range (pixels)
```

## Season Detection

To change which months the animation is active:

```javascript
function isFallSeason() {
  const month = new Date().getMonth(); // 0-11
  return month >= 8 && month <= 10; // 8=Sept, 9=Oct, 10=Nov
}
```

## Customization

### Adding More Leaf Colors

Add hex colors to the `leafColors` array:

```javascript
const leafColors = [
  '#D2691E', // Chocolate
  '#FF8C00', // Dark orange
  // Add your colors here
];
```

### Adjusting Animation Speed

Modify the keyframe percentages in `autumn-leaves.css` or change the duration calculation in the JavaScript.

## Browser Compatibility

Works in all modern browsers that support:
- CSS3 Animations
- CSS Transforms
- ES6+ JavaScript
- SVG

## Performance Notes

- Uses `will-change` CSS property for optimized animations
- Limits total number of leaves to prevent performance issues
- Automatically removes leaves from DOM after animation
- Uses `requestAnimationFrame` implicitly through CSS animations

