# Animated Search Input Project

This project implements a responsive and accessible search input field with smooth animations. The input expands when focused, stays expanded if text is present, and shrinks back when the input is empty. The search and close (X) icons are animated with rotation and opacity, providing a fluid user experience. The project also respects the user's preference for reduced motion by disabling animations when necessary. All styling and animations are handled via CSS, with the functionality to clear the input field implemented in JavaScript.

## Features

- **Input Expansion**: The input field expands when focused and remains expanded if there is text inside. It shrinks back to its original size when empty.
- **Icon Animations**: The search icon and close icon (X) are animated using CSS transitions. They rotate and fade in/out based on user interactions.
- **Reduced Motion Preference**: Users with the `prefers-reduced-motion` setting enabled will experience no animations, ensuring accessibility for those sensitive to motion.
- **Clear Input Functionality**: Users can click the close icon (X) to clear the input field, which is implemented using JavaScript.

## Installation

This project does not require any specific installation since it uses pure HTML, CSS, and minimal JavaScript. You can run it in any modern browser.

### HTML Structure

The search input field and icons are structured as follows:

```html
<div class="wrapper">
  <div class="search-wrapper">
    <input class="input" id="input" type="search" placeholder="Search..." />
    <svg
      class="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.62 17.03a9 9 0 1 1 1.41-1.41l4.68 4.67a1 1 0 0 1-1.42 1.42l-4.67-4.68ZM17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      ></path>
    </svg>
    <button class="close-icon" id="clearInputIcon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
          d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z"
        ></path>
      </svg>
    </button>
  </div>
</div>
```

## Conclusion

You can easily copy and integrate this code into your projects to create an animated and accessible search input. The project is simple, yet effective, with all styles and animations handled using pure CSS and minimal JavaScript. Feel free to modify and adapt it to your needs. I hope you find this code helpful and enjoy using it in your own applications!
