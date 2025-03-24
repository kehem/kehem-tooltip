# Kehem Tooltip

A modern, minimal, and attractive tooltip plugin for Nuxt 3. This plugin provides a reusable `Tooltip` component that can be positioned (top, bottom, left, or right) and styled with custom background and text colors. It features a smooth fade animation and a slot-based trigger system for flexibility.

---

## Features
- **Customizable Positioning:** Place the tooltip above, below, to the left, or to the right of the trigger element.
- **Styling Options:** Adjust the background and text colors to match your design.
- **Smooth Animation:** Includes a fade transition for a polished user experience.
- **Slot Support:** Use any content as the trigger for the tooltip.
- **Lightweight & Minimal:** Simple design with modern aesthetics.

---

## Installation

Install the plugin via npm:

```bash
npm install kehem-tooltip
```
## Register the plugin in your nuxt.config.ts:

```js
export default defineNuxtConfig({
  plugins: ['kehem-tooltip'],
});
```

## Usage
The Tooltip component wraps any trigger element and displays a tooltip on hover. Use the <slot> to define the trigger content.

```vue
<template>
  <Tooltip content="This is a tooltip" position="top">
    <button>Hover me</button>
  </Tooltip>
</template>
```
## Multiple Tooltips

```vue
<template>
  <div>
    <Tooltip content="Top tooltip" position="top">
      <button>Top</button>
    </Tooltip>
    <Tooltip content="Right tooltip" position="right">
      <button>Right</button>
    </Tooltip>
    <Tooltip content="Bottom tooltip" position="bottom">
      <button>Bottom</button>
    </Tooltip>
    <Tooltip content="Left tooltip" position="left">
      <button>Left</button>
    </Tooltip>
  </div>
</template>
```
---

## Props

| Prop             | Type   | Default  | Description                                              |
|------------------|--------|----------|----------------------------------------------------------|
| `content`        | String | Required | The text content displayed in the tooltip.               |
| `position`       | String | `"top"`  | Position of the tooltip: `"top"`, `"bottom"`, `"left"`, or `"right"`. |
| `backgroundColor`| String | `"#333"` | Background color of the tooltip (e.g., hex, RGB, or color name). |
| `textColor`      | String | `"#fff"` | Text color of the tooltip (e.g., hex, RGB, or color name). |

---

## Styling
The tooltip’s appearance is defined in the <style> section of Tooltip.vue. Key features include:
- **Modern Design:**  Rounded corners, subtle shadow, and a minimal aesthetic.

- **Positioning:** Centered horizontally (top/bottom) or vertically (left/right) with transform.

- **Animation:** A 0.2s fade transition for showing/hiding the tooltip.

## Notes
- The tooltip appears on hover (mouseenter) and disappears on mouseleave.

- Ensure the parent element has enough space for the tooltip to render without clipping.

