## Absolute and Relative Positioning in CSS

Absolute and relative positioning are two different ways to position elements in CSS.

**Absolute positioning** removes an element from the normal flow of the document and positions it relative to its nearest positioned ancestor (or the document body if there is no positioned ancestor). This means that absolute positioned elements can overlap other elements and can be placed outside of their parent element's boundaries.

**Relative positioning** allows to position an element relative to its normal position. This means that the element will still be part of the normal flow of the document, but its position will be adjusted by the specified values.

**Table that summarizes the key differences between absolute and relative positioning:**

| Property | Absolute Positioning | Relative Positioning |
|---|---|---|
| Position | `position: absolute;` | `position: relative;` |
| Position relative to | Nearest positioned ancestor (or document body) | Normal position |
| Affects normal flow | Removed from normal flow | Part of normal flow |

**Examples:**

```html
<div class="container">
  <div class="absolute-element" style="position: absolute; top: 0; left: 0;">
    This element is absolutely positioned.
  </div>
</div>

<div class="container">
  <div class="relative-element" style="position: relative; top: 100px; left: 50px;">
    This element is relatively positioned.
  </div>
</div>
```

In the first example, the `.absolute-element` will be positioned at the top-left corner of its container, regardless of the position of any other elements in the container.

In the second example, the `.relative-element` will be positioned 100px down and 50px to the right of its normal position.

**When to use absolute and relative positioning:**

Absolute positioning is useful when need to place an element at a specific location on the page, regardless of the position of other elements. For example, might use absolute positioning to position a navigation bar at the top of the page or a modal dialog in the center of the page.

Relative positioning is useful when need to adjust the position of an element relative to its normal position. For example, might use relative positioning to position a price tag on the bottom-right corner of a product image or a button to the right of a text input.

**Conclusion:**

Absolute and relative positioning are two powerful tools for controlling the layout web pages.