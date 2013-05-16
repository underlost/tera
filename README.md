#Tera Website Exercise.

##PSD Revisions

* Original: https://raw.github.com/underlost/tera/gh-pages/assets/img/_psd/exercise.jpg
* Revised: https://raw.github.com/underlost/tera/gh-pages/assets/img/_psd/exercise_modified.jpg

I made two major revisions to the CSS file:

* With the PSD being only a width of only 1024px, the background imgage that displays the characters appears cut off on larger resolutions. I added a few simple gradients so its a little less jarring and doesn’t look like the image is just cut off on the sides. If I had more assets, Id probably work with a designer/artist to make something a little more high res that spans the entire width of the user’s browser window. 

* Text merged onto other layers, so it proved to be a little tricky to get decent background image slices of the psd. This applied primarily to the navigation near the top of the page. Granted I could have sliced the nav up into individual images, but striping the text from the PSD and adding it later in the HTML proves with more flexibility for simple hover/focus states. 

* I also briefly touched up some of the borders in the content section. There were partially deleted leaves in the top right of the border.

##3rd party scripts used

####Bootstrap Framework
I chose to go with Bootstrap instead of a a normalize/reset css because of a couple reasons. Besides the normal reset, Bootstrap provides several handy utilities for alignment and the ability to customize forms.  In general I’ve found working with Bootstrap is also easier for making sites compatible across all browsers, with ut the need to use a lot of extra pesky little hacks to make things work in older browsers like IE7/8.

The other primary reason I went with Bootstrap was the javascript components like the carousel. Instead of writing a custom jquery plugin or javascript file from scratch, it was much quicker to include bootstrap-carousel.js to display the selection of videos. And with LESS, I have the ability to customize its look however I needed.  

####Modernizr/Placeholder.js
I only ran into one major issue with backwards compatibility with older browsers that I needed to address: Placeholder text in forms. the placeholder element is useful for displaying initial data in form fields (‘enter your email address’, in the newsletter section for example). Added in HTML5, this is missing in a lot of older browsers (again, mostly IE). Luckily placeholder.js is able to reproduce it for unsupported browsers. I used Modernizer to detect what is/isn’t supported on the user’s browser. If the placeholder element isn’t supported, Modernizer will load the placeholder.js file to recreate the functionality. 

##Misc notes

####tera.css
Most of the CSS I wrote is in tera.css. Tera.css handles most of the layout and provides a few overrides on the other less files. For convenience sake, I kept most of my work separate in a single file away from bootstrap to demonstrate what I did. While I also made a number of modifications to the Bootstrap less files, I’d probably merge a lot more of the tera.css into the other less files. 

####CSS Sprites
I created two separate sprite files (thumbnails.jpg, symbols.png) besides the normal images. Again, normally I would merge mostly everything in one file. But, I didn’t want to waste the time to combine everything, so I just did these two files to demonstrate my ability to use them.