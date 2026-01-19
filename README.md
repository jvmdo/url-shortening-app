# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

> [!WARNING]
> Requests to CleanURI API are CORS blocked. I workaround that using Heroku's CORS Anywhere.

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screencast](#screencast)
  - [Live preview](#live-preview)
- [My process](#my-process)
  - [Step-by-step](#step-by-step)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Remaining questions](#remaining-questions)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Beyond the challenge (extra features)

- Sticky header
- Animations

### Screencast

![WYSIWYG](./screencast.gif)

#### What is recorded

- Responsiveness
  - For each page section, resize the simulated device from **320px to 1440px**
  - For each breakpoint (375px, 768px, 1440px):
    - Display the main navigation in both orientations
    - Display the entire page
- Responsiveness (browser zoom out)
- Functionalities
  - Page scroll when clicking on links
  - Hover states
  - Form validation:
    - Empty
    - Missing protocol
    - Invalid protocol
    - Invalid TLD
  - Error handling:
    - CORS
    - Unsupported domain
  - Link creation:
    - YouTube.com, Twitch.tv, Minecraft.net
  - Link copying
  - Cache persistence

### Live preview

- Live Site URL: [App on Netlify](https://url-shortening-jvmdo.netlify.app)
- Solution URL: [Solution on FrontendMentor](https://www.frontendmentor.io/solutions/responsive-nav-menu-using-base-ui-primitives-QVO4aXQg3s)

## My process

I first solved the most problematic layouts, then I structured and styled the whole page. Finally, implemented the main functionality. Moreover, added beyond the challenge features and small fixes.

### Step by step

1. How to build the nav?
    - I spent 2h wondering how to compose unstyled primitives to build this, considering a11y
    - 1h spent on the animated hamburger button
    - 3h tinkering Collapsible + Navigation Menu

2. How to build the hero section?
    - 3h studying, playing with grid, sizings and magic numbers

3. Funky cards section
    - Nothing so complicated so far 1h spent
    - The desktop layout seems tricky though, spent 1h figuring this out
        - I think subgrid solves this one maybe... +1h
        - gap is driving me crazy +3h

4. Footer nav
    - Spent too much time trying out flex stuff (+4h)

5. Setup design tokens in Tailwind
    - This time, I tried something different: I uploaded the designs and tokens to Claude and asked it to create the semantic tokens, and guess where each one is used. (+30min)

6. Figure out the optimal markup that fits both mobile and desktop designs
    - header, section, form, section, foter
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

8. Functionality
    - Error state
    - How to push content down on new URL (+1h30min)
        - It was a trouble because the form was an absolute box
    - API Integration
        - How to proper validate URL (+1h)
        - Form validation (+1h)
        - HTTP request (+1h because of CORS issue)
        - Query +1h30
        - Persist and other things (+1h30)
        - Toast and errors at 1:40 PM
            - Toast and errors (+2h)
    - card styles (+1h)

9. Animations
    - The snap gap episode (+3h30min)

10. Optimistic mutation +30min

11. Ele brinca ele
    - Header shadow box +2h
        - IntersectionObserver and sticky elements aren't friends!
    - Small fixes +3h

### Built with

- React.js
- TailwindCSS
- Base UI
- Tanstack Query
- Zod
- Sonner
- Motion
- CSS `subgrid` 😮

### What I learned

- `<nav>` should wrap the button of a collapsible navigation menu for accessibility reasons

- base-ui's `<Collapsible.Panel hiddenUntilFound={true} className="lg:contents">` to pluck the navigation menu out of the panel. CSS only.

- Remember: `<img>`, a replaced element, has intrinsic constraints like `max-width: 100%`. That's why they won't resize in some layout contexts! Always reset those properties.

- `overflow: clip` is better than `hidden`. Use it on the very parent, not on global elements like `body`.

- The subgrid gap mystery: the extra rows created by `row-span-[]` will equally divide the available space when there is a configured `height`. It wasn't because of the gap 🤭.

- Remember: `flex-grow` doesn't guarantee that all the items will have the same width. It distributes the extra space proportionally based on growth values then it adds the slice of that extra space to `flex-basis`. Therefore, in order to all the items end up having the same width, `flex-basis` should be `0`.

- Remember: you cannot directly style an element that appears before the Tailwind's `peer` element in the HTML source order.

- Use `group-data-open:*` when the group element itself has owns the `data` attribute. Use `group-has-data-open:*` when any descendant of the group owns the target attribute.

- In Tailwind v4, interpolate `className` strings won't work. Just use `twMerge` instead.

- `brightness-0 invert` filters change an image to white. In fact, you can change an single solid color image to whatever color you want using a combination of filters.

- How to create multicolor bands background (hard stop gradient): `linear-gradient(to bottom, red 50%, blue 50%)`. You can create an utility for that or use Tailwind directly: `bg-linear-to-b from-red from-50% to-blue to-50%`.

- Remember: you can use Zod's `refine` to multi-step custom validation.

- `psl` package to check for valid Top Level Domain (TLD).

- Tanstack Query's `mutation` really useful even for a simple POST. You can `setQueryData` which automatically triggers re-render on subscribed components, easing away a lot of pain.

- React's synthetic events are pooled and nullified after the handler completes. You can't use an event after its handling function finished. It happened when I wanted to reset the form in `onSuccess` from `mutate`. The solution? Store a reference to the form: `const form = event.currentTarget`.

- Union + type narrowing for mutually exclusive schemas in Zod.

- Tanstack Query's `persisters` very easy to use for `localStorage`. Install the plugins, define the persister, include retry logic, replace the contexts, configure `maxAge` (must match `gcTime`). That's it!

- `min-w-0` allows text truncate to work properly in Flexbox layout. By default flex items' `min-width` is `auto`, which means the length of their text content will dictate their minimum width.

- Motion's `layout` + `AnimatePresence` + `layout="position"` for smooth exit transitions. If either the flex container or flex items don't have `layout`, items will snap because of abrupt gap change when an item is removed.

- Remember: `data-state={isOpen || undefined}` nice syntax to pair with Tailwind's `data-state`. It will select only if `isOpen` is true.

- IntersectionObserver + `top: -1px` tricky for detecting when a sticky element gets stuck. Or just use an empty `div` before the header.

- `scroll-behavior` + `scroll-padding` combo for anchor navigation.

### Remaining questions

- The `contents` approach is too good to be true! Maybe some a11y issues are introduced?
  - The only downside I noticed is that it seems this approach is preferable for unstyled containers, otherwise you will need to get rid of styles when the contents in plucked out.

- Is my final solution worth 51h of work?

### Continued development

- Deploy some Server Function (on Netlify or Vercel) to middleware the browser and the API. This will prevent CORS block.
- Use [this another URL shortening API](https://tinyurl.com/app/dev)

#### Fix this

- Footer's `social-icons` not center aligned on ~900px
- CTA's button shrinks (height) on 320px

### Useful resources

- [Collection of hamburger animations](https://codepen.io/farnous/pen/abEbwMd)
- [Article about `display: contents`](https://ishadeed.com/article/display-contents/)
- [Article about `overflow: clip`](https://kilianvalkhof.com/2022/css-html/do-you-know-about-overflow-clip/)
- [Resize image keep aspect ratio?](https://stackoverflow.com/a/23675095/21858786)
- [Article about IntersectionObserver](https://blog.webdevsimplified.com/2022-01/intersection-observer/)
- [Sticky -1px trick](https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/)
