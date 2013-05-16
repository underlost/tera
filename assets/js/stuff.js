$('.carousel').carousel({ interval: false});
Modernizr.load({ test: Modernizr.input.placeholder, nope: ['./assets/js/placeholders.min.js'], complete: function(){Placeholders.init();}});