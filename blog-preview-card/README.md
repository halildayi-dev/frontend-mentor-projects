# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:
- See hover and focus states for all interactive elements on the page

### Screenshot

#### Full Screen
![Full Screen](./assets/images/Frontend%20Mentor-Blog%20preview%20card-FullScreen.png)

#### Full Screen (Interacted)
![Full Screen - Interacted](./assets/images/Frontend%20Mentor-Blog%20preview%20card-FullScreen-interacted.png)

#### Mobile Screen
<p align="center">
  <img src="./assets/images/Frontend Mentor-Blog preview card-Mobile.png"/>
</p>

## My process

### Built with

- Semantic HTML5 structure with accessibility in mind
- CSS custom properties (variables) for consistent color management
- Flexbox for modern, flexible layout alignment
- rem-based sizing for responsive natural scaling (without media queries)
- Custom font integration using @font-face (Figtree variable font)
- BEM (Block Element Modifier) naming convention for scalable CSS architecture
- Smooth transitions and hover animations for better interactivity
- Mobile-first workflow and natural adaptability across screen sizes


### What I learned

During this project, I improved several key front-end development skills:

#### 1. BEM naming convention
I learned how to structure CSS classes clearly and maintainably. ```.card__author-avatar``` and .```card__author-name``` improve readability and scalability.

#### 2. CSS variables in the :root selector
I practiced creating reusable color tokens for consistent design.
```
:root {
  --yellow: hsl(47, 88%, 63%);
  --header-color: hsl(0, 0%, 7%);
}
```

#### 3. Mobile-first responsive design
I focused on a layout that naturally scales across devices without media queries.
```
.card {
  width: 100%;
  max-width: 23.75rem; /* 380px */
}
```
This ensures the component looks great on mobile by default, while also adapting to larger screens.

#### 4. Shadow and depth styling
I learned how to use ```box-shadow``` effectively to create a clean, dimensional look.
```box-shadow: 0.5rem 0.5rem 0 rgba(0, 0, 0, 1);```

#### 5. Using rem for scalable spacing
Instead of fixed pixel units, I now use ```rem``` to ensure proportional scaling across devices.

#### 6. Custom fonts via @font-face
I integrated variable fonts directly from local assets, which gave me full control over typography.
```
@font-face {
  font-family: 'Figtree';
  src: url('./assets/fonts/Figtree-VariableFont_wght.ttf') format('truetype');
}
```

### Continued development

#### 1. Design systems & component reuse
Applying BEM consistently made structuring CSS easier, so I want to learn more about scalable CSS architectures like ITCSS

#### 2. CSS animations 
I’d like to go beyond hover transitions and experiment with subtle motion effects using @keyframes.


### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - This documentation helped me understand some CSS properties more clearly, especially about the `box-sizing` property and layout techniques.

## Author

- Frontend Mentor - [@halildayi-dev](https://www.frontendmentor.io/profile/halildayi-dev)
- X (Twitter) - [@halildayi_dev](https://x.com/halildayi_dev)
- GitHub - [halildayi-dev](https://github.com/halildayi-dev/frontend-mentor-projects)

