## Role of the following key properties in the Flexbox layout model

1. `justify-content`:
   - `justify-content` is used to control the horizontal alignment of flex items within a flex container along the main axis. The main axis is determined by the `flex-direction` property (e.g., row or column).
   - It can take values like `flex-start`, `flex-end`, `center`, `space-between`, and `space-around`, among others.
   - `flex-start` aligns items at the start of the main axis, `flex-end` at the end, `center` centers them, `space-between` evenly distributes items with the first one at the start and the last one at the end, and `space-around` evenly distributes items with equal space around them.

2. `align-items`:
   - `align-items` controls the vertical alignment of flex items within a flex container along the cross axis. The cross axis is perpendicular to the main axis.
   - It can take values like `flex-start`, `flex-end`, `center`, `baseline`, and `stretch`.
   - `flex-start` aligns items at the start of the cross axis, `flex-end` at the end, `center` centers them, `baseline` aligns them based on their text baselines, and `stretch` stretches them to fill the container's height.

3. `gap`:
   - The `gap` property sets the space between flex items in a flex container. It is also known as `row-gap` and `column-gap` when working with grid layouts.
   - We can use `gap` to specify the horizontal and vertical space between items, providing a shorthand for setting both `row-gap` and `column-gap`.
   - This property simplifies the process of creating consistent spacing between flex items.

4. `flex-direction`:
   - `flex-direction` determines the direction of the main axis in the flex container. It controls how flex items are laid out within the container.
   - It can take values like `row`, `row-reverse`, `column`, and `column-reverse`.
   - `row` makes the main axis horizontal, `row-reverse` is the reverse of `row`, `column` makes the main axis vertical, and `column-reverse` is the reverse of `column`.

5. `flex-wrap`:
   - `flex-wrap` controls whether flex items are allowed to wrap to the next line when they overflow the container. It affects how items are displayed within the container when there isn't enough space on the main axis.
   - It can take values like `nowrap` (items stay on a single line), `wrap` (items wrap to the next line if needed), and `wrap-reverse` (items wrap to the previous line).
