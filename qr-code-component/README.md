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
- Desktop-first workflow


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


### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - This documentation helped me understand some CSS properties more clearly, especially about the `box-sizing` property and layout techniques.


## Author

- Frontend Mentor - [@halildayi-dev](https://www.frontendmentor.io/profile/yourusername)

