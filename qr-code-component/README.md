# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### Screenshots
#### Full Screen
![Full Screen](./images/Frontend%20Mentor-QR%20Code%20Component-FullScreen.png)

#### Mobile Screen
<p align="center">
  <img src="./images/Frontend%20Mentor-QR%20Code%20Component-Mobile.png"/>
</p>


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Responsive design without media queries (natural scaling)
- Accessibility improvements using focus styles
- CSS transitions and hover effects for interactivity
- Google Fonts for custom typography


### What I learned

I didn’t have much difficulty building the HTML structure for this project, but I learned some important things while working on the CSS part.

####  1. The importance of using `box-sizing: border-box`

Before this project, I didn’t fully understand how box sizing worked.  
While using `* { box-sizing: border-box; }`, I realized that:
- By default, elements use `content-box`.
- This means that `padding` and `border` are **not included** in the element’s `width` and `height`.
- When I use `border-box`, both `padding` and `border` are included, which prevents elements from overflowing and makes layouts **more consistent and predictable**.

```css
* {
  box-sizing: border-box;
}
```

#### 2. Importing fonts with Google Fonts

In this project, I imported a font from Google Fonts for the first time, and it was actually easier than I expected.
I added the following line to the ```<head>``` tag and used the font in my CSS:

```<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet">```

```font-family: 'Outfit', sans-serif;```

This simple step made the page look much more professional and modern.
Even though these details seem small, they helped me understand the logic behind CSS styling better and will make my future projects easier to style.

#### 3. Mobile-first workflow

Previously, I used to start with desktop layouts and then adjust them for smaller screens.
Now, I understand that designing mobile-first helps create a layout that naturally scales up, sometimes even eliminating the need for extra media queries.
This makes the design simpler and more efficient.

#### 4. Simplifying responsiveness

Instead of overusing ```@media``` queries, I learned to rely more on flexible widths and relative units like ```%``` and ```rem```.
This approach keeps the layout adaptable across screen sizes with minimal code.

#### 5. Hover effects and transitions

In this project, I learned how to add smooth hover effects and transitions for interactive design:
```
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}
```
This creates subtle animations that improve user experience and make the component more dynamic.

#### 6. Accessibility with focus styles

I added a small but important accessibility enhancement:

```
.card:focus-within {
  outline: 2px solid hsl(218, 44%, 22%);
  outline-offset: 2px;
}
```
This ensures users navigating with a keyboard can visually track which element is active — improving usability.

#### 7. Clean CSS structure
I reorganized my CSS following this pattern:
```
/* 1. Reset & Variables */
/* 2. Base Styles */
/* 3. Component Styles */
/* 4. Utilities */
```
This makes my stylesheets easier to maintain and understand for future projects.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - This documentation helped me understand some CSS properties more clearly, especially about the `box-sizing` property and layout techniques.


## Author

- Frontend Mentor - [@halildayi-dev](https://www.frontendmentor.io/profile/yourusername)

