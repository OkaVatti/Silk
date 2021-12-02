<div align="center">
	<h1>Tokyo</h1>
</div>

____

<div align="center">
	<b>A Spiderweb Startpage</b>
</div>

## Index

- [Tokyo](#)
  - [Features](###Features)
  - [Usage](####usage)
    - [Home Page](####As-Home-Page)
    - [New Tab](##as-new-tab)
  - [Customization](###customization)
    - [Links](##links)
    - [Colors](##colors)
    - [Theme Depending at the time](##theme-depending-on-the-time)
    - [Greetings](###greetings)
    - [Image Background](###Image-Background)
   -  
   - [Conclusion](#Conclusion)

### Features:

- **Light Switch**, you can toggle Dark and Light modes on the page. It'll be saved in local storage.
- **Clock and Date** format can be set to 24 hour (default) or 12 hour.
>note : 12hr format is a little broken. AM and PM keep getting mixed up
- **Greetings** are easy to modify.
- **Variables** for custom colors and font sizes in the `style.css` code.
- **Icons** all icons are from Feather Icons (Some others I made them with the Feather icons as a base)
- **Modular** JavaScript and CSS files for an easy read.
- **Search Bar's** , 2 custom, sexy looking search bars. One uses DuckDuckGo, the other uses Google. you can change these to whichever search engine you want.
> note : Custom Google Search Bar doesn't work too well on Beaker Browser. weird little glitch. I'll try to find a work around at some point.
> note 2 : make sure you know wtf you're doing or at least just make a backup of the HTML file before you decide to fuck with it.

## Usage:

#### As-Home-Page:

1. Fork this repo
2. Enable the Github Pages service `Settings > GitHub Pages > Source [master branch] > Save`
3. Set it as Home Page:
   - Click the menu button. and select Options. Preferences.
   - Click the Home panel.
   - Click the menu next to Homepage and new windows and choose to show custom URLs and add your `Github Pages link`

#### As-New-Tab:

You can use different Add-ons/Extensions for it

There are currently no suggested extensions for it because, in all honesty, none of them work really well.

If anybody know's of some simple, easy to use Add-ons for Firefox and/or chromium based web browsers. Feel free to suggest them. 

## Customization

> All the code is using variables and is comented, It's easy to customize the project to your own, and this sections are the principal customizable elements in the Startpage:

### Links

You can change the links (and the icons too) in the HTML Code:

```html
<a
  href="https://github.com/"
  target="blank"
  class="buttonLink__link card buttonLink__link-1"
>
  <i class="buttonLink__icon" data-feather="github"></i>
</a>
```

Change the link in the `href` property with the link you want. (The `target="blank"` makes the link to open a new tab with the link you choose).
The Project uses [Feather icons](https://feathericons.com/) for the icons, and you can change them in the `data-feather=""` property with the name of the icon in the page.

### Colors

In the CSS code you can always change the variables for both themes (Dark and Light)

```css
/* Light theme  */
:root {
  --accent: #4b8ec4; /* Hover color */
  --bg: #f5f5f5; /* Background color */
  --sbg: #e4e6e6; /* Cards color */
  --fg: #3a3a3a; /* Foreground color */
  --sfg: #3a3a3a; /* Sceondary Foreground color */
}

/* Dark theme  */
.darktheme {
  --accent: #4b8ec4; /* Hover color */
  --bg: #19171a; /* Background color */
  --sbg: #201e21; /* Cards color */
  --fg: #d8dee9; /* Foreground color */
  --sfg: #3a3a3a; /* Secondary Foreground color */
}
```

<p align="center">
  <img src="https://github.com/MiguelRAvila/Bento/blob/master/assets/SubHeader.png">
</p>

### Theme-Depending-on-the-time

In the `theme.js` file there's a section about changing the theme depending in the time. You have to 'Uncomment' that section to enable it:

```js
const today = new Date();
const Hr = today.getHours();

if (Hr >= 19 || Hr < 5) {
  enableDark();
} else {
  disableDark();
}
```

### Image-Background

>this is utterly useless unless you're one of those weird MacOS users. which in that case, yeah, here it is. Have fun with that because if i remember correctly I actually took it out of the CSS files.
>have fun putting it back in!

You can set your own background image with the variable `--imgbg` and set the route to the image you want It's disable by default. If you uncomment the variable, it has by default this image:

<p align="center">
  <img src="https://github.com/MiguelRAvila/Bento/blob/master/assets/previewbg.png">
</p>

It has a black filter by default in `--imgcol`, and it'ts value is: `rgba(255, 255, 255, 0.7)` and `rgba(0, 0, 0, 0.7)` for the dark theme. You can change them and the opacity for a better experience with your image.

### Greetings

You can put your name and change the greetings.

```js
var name = "Joesephy Doesephy";
const gree1 = "Go to Sleep! ";
const gree2 = "Good morning! ";
const gree3 = "Good afternoon ";
const gree4 = "Good evening, ";
```

It <b>should</b> change in order of the hour, and it does. Just not in real time like it's intended to.

## Conclusion

That's pretty much it, not much else to the startpage other than the two search bars that were stolen from somewhere a long ass time ago.

****

<div>
	<h1>Disclaimer</h1>
	<p>MIT License

Copyright (c) 2021 Parker / Oka / Azuko

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>