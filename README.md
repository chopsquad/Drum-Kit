# Drum Kit

In this project i followed the guidelines and thru a series of challenges created a drum kit webpage.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](/readmeImages/final.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- [ ] Creating a function that is called when we click something
- [ ] Adding our function to all buttons.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

- Creating a function that is called when we click something.

```js
function handleClicked() {
  alert("I got clicked!;");
}
```

- How to add an background image to a css file

```css
.class {
  background-image: url("Link to image");
}
```

- Adding an event listener to the whole document
  -This comes in handy when you want to use something like "keydown"

```js
  document.addEventListener("keydown", function(){
    //anonymous function
    //example
    alert("Key was pressed")
  });
  //When any key is pressed anywhere on the document we get an alert that says the "Key was pressed"
}
```

- Adding an animation class to a specific key.

```js
  function buttonAnimation(currentkey) {
  let activeButton = document.querySelector(`.${currentkey}`);

  activeButton.classList.add("pressed");
  //when adding a class you do not need to write .pressed, instead just write pressed.
}
}
```

-Adding a set timer function to run a remove "class"

```js

  //setting a clock that run and when it ends it run this function.
  setTimeout(function () { //anonymous function
    activeButton.classList.remove("pressed");
  }, 100 //this is in milliseconds);

}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
