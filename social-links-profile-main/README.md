# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
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

### Screenshots

#### Full Screen
![Full Screen](./assets/images/Frontend%20Mentor-Social%20Links%20Profile-FullScreen.jpeg)

#### Full Screen (Interacted)
![Full Screen - Interacted](./assets/images/Frontend%20Mentor-Social%20Links%20Profile-FullScreen-interacted.png)

#### Mobile Screen
<p align="center">
  <img src="./assets/images/Frontend Mentor-Social Links Profile-Mobile.jpeg"/>
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

#### 1. Dynamic content generation with JavaScript
Instead of manually writing multiple link elements, I used JavaScript to render them dynamically:
```
linksContainer.innerHTML = linkNames
  .map(link => `<a href="#" class="profile-card__link">${link}</a>`)
  .join("");
```
This helped me understand how to manipulate the DOM efficiently and separate logic from structure.

#### 2. Transitions and hover animations
I learned to create subtle yet effective hover animations that improve user experience:
```
.profile-card__link {
  transition: all 0.3s ease;
}
.profile-card__link:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 10px var(--color-green);
}
```

#### 3. Shadow and depth for visual hierarchy
I explored how to use multiple shadow layers to give depth to cards and make the interface feel more tangible:
```
.profile-card {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}
.profile-card:hover {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}
```
Adding soft elevation cues like this helps guide the user’s focus naturally.

### Continued development
In future projects, I want to keep improving my use of subtle animations, transitions, and shadow effects to enhance user experience. I’ll also focus on writing cleaner, modular JavaScript for dynamic UI elements and deepening my understanding of accessibility and responsive design best practices.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - This documentation helped me understand some CSS properties more clearly, especially about the `box-sizing` property and layout techniques.


## Author

- Frontend Mentor - [@halildayi-dev](https://www.frontendmentor.io/profile/halildayi-dev)
- X (Twitter) - [@halildayi_dev](https://x.com/halildayi_dev)
- GitHub - [halildayi-dev](https://github.com/halildayi-dev/frontend-mentor-projects)
