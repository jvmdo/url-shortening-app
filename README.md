# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I first solved the most problematic layouts, then I structured and styled the whole page. Finally, implemented the main functionality.

### Step by step

1. How to build the nav?
    - I spent 2h wondering how to compose unstyled primitives to build this, considering a11y
    - 1h spent on the animated hamburger button
    - 3h tinkering Collapsible + Navigation Menu

2. How to build the hero section?
    - 3h studying, playing with grid, sizing and magic numbers

3. Funky cards section
    - Nothing so complicated so far 1h spent
    - The desktop layout seems tricky though, spent 1h figuring this out
        - I think subgrid solves this one maybe... +1h
        - gap is driving me crazy +3h

4. Footer nav
    - Spent to much time trying out flex stuff (+4h)

5. Setup design tokens in Tailwind
    - This time, I tried something different: I uploaded the designs and tokens to Claude and asked it to create the semantic tokens, and guess where each one is used. (+ 30 min).

6. Figure out the optimal markup that fits both mobile and desktop designs
    - header, section, form, section, fotter
    - The first struggle: logo + [open] collapsible layout (+1h)
    - +1h for mobile layout and styles
    - The second struggle: hero section padding conflicts (+1h)
    - Form: spent 2h on layout + styles
    - Features section + needed changes = 2h30
    - Footer +1h

7. Final layout touches
    - FIX: header/nav on desktop (+30min)
    - Font sizes, spacing, alignments (+2h30)
    - Max widths (+30min)

8. Functionality (11 PM)
    - Error state ---
    - How to push content down on new URL (+1h30min)
        - It was a trouble because the form was an absolute box
    - API Integration
        - How to proper validate URL (+1h)
        - Form validation (+1h)
        - HTTP request (+1h because of CORS issue)
        - Query +1h30
        - ... 11:40 PM

x. General
    - FIX: space between feature text and cards
    - Create components: header, cta
    - Get started button should be links
    - Rename: footer-nav-section, footer-nav-socials
    - Header shadow when sticked
    - FIX: push down content not so right when sticky hits
    - TRY: change hero img sizing approach to make x-clip possible without creating that horizontal space
        - Maybe increase padding for wider screens is sufficient?

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

- `<nav>` should wrap the button of a collapsible navigation menu for accessibility reasons

- base-ui's `<Collapsible.Panel hiddenUntilFound={true} className="lg:contents">` to pluck the navigation menu out of the panel. CSS only.

- Remember: `<img>`, a replaced element, has intrinsic constraints like `max-width: 100%`. That's why they won't resize in some layout contexts! Always reset those properties.

- `overflow: clip` is better than `hidden`. Use it on the very parent, not on globally `body` or somewhere else.

- The subgrid gap mystery: the extra rows created by `row-span-[]` will equally divide the available space when there is a configured `height`. It is not because of the gap.

- Remember: `flex-grow` doesn't guarantee that all the items will have the same width. It distributes the extra space proportionally based on `flex-grow` values. Then, add the slice of that extra space to `flex-basis`. Therefore, in order to all the items end up having the same width, `flex-basis` should be `0`.

- Remember: you cannot directly style an element that appears before the Tailwind's `peer` element in the HTML source order.

- `group-has-data-open:*` works as expected for Base UI's Collapsible.

- In Tailwind v4, interpolate `className` strings won't work. Just use `twMerge` instead.

- `brightness-0 invert` filters change an image to white. In fact, you can change an single solid color image to whatever color you want using a combination of filters.

- How to create multicolor bands background (hard stop gradient): `linear-gradient(to bottom, red 0%, red 50%, blue 50%, blue 100%)`. You can create an utility for that or use Tailwind directly: `bg-linear-to-b from-red from-50% to-blue to-50%`.

- It seems `contents` approach is preferable for unstyled containers.

- Remember: you can use Zod's `refine` to multi-step custom validation. Use `psl` to check for valid Top Level Domain (TLD).

- Tanstack Query's `mutation`

- Tanstack Query's `persisters`

- React's synthetic events are pooled and nullified after the handler completes. You can't use an event after its handling function finished. It happened when I wanted to reset the form in `onSuccess` from `mutate`. The solution? Store a reference to the form: `const form = event.currentTarget`.

### Remaining questions

- The `contents` approach is too good to be true! Maybe some a11y issues is introduced?

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

<https://codepen.io/farnous/pen/abEbwMd>
<https://ishadeed.com/article/display-contents/>
<https://kilianvalkhof.com/2022/css-html/do-you-know-about-overflow-clip/>
<https://stackoverflow.com/a/23675095/21858786> - Resize image keep aspect ratio?

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
