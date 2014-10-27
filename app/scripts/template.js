// Template variables
var renderProjectTemp = Handlebars.templates['projects'];

// Page template
var ProjectPage = function(options){
  options = options || {};
  this.title = options.title;
  this.copy = options.copy;
  this.nextLink = options.nextLink;
  this.webLink = options.webLink;
  this.images = options.images;
};

// Build project page on click
$('.dynamic').on('click', '#concrete', function(){
    $('.dynamic').html(renderProjectTemp(concrete));
});
$('.dynamic').on('click', '#email', function(){
    $('.dynamic').html(renderProjectTemp(email));
});
$('.dynamic').on('click', '#ucp', function(){
    $('.dynamic').html(renderProjectTemp(ucp));
});
$('.dynamic').on('click', '#shred', function(){
    $('.dynamic').html(renderProjectTemp(shred));
});
$('.dynamic').on('click', '#summer', function(){
    $('.dynamic').html(renderProjectTemp(summer));
});
$('.dynamic').on('click', '#sms', function(){
    $('.dynamic').html(renderProjectTemp(sms));
});
$('.dynamic').on('click', '#ebm', function(){
    $('.dynamic').html(renderProjectTemp(ebm));
});

// Projects

// ConcreteCanvas
var concrete = new ProjectPage({
  title: 'Concrete Canvas',
  copy: "Concrete Canvas is a skateboard shop located in Auburn, Alabama, a town with a large population of skateboarders who are currently forced to purchase products online or from neighboring cities. This shop prides itself on emphasizing skateboarding as an art rather than a sport, viewing the activity as a creative interpretation of one’s surrounding landscape in a physical manner. Contemporary skate shops have taken the role as a community center and headquarters for local skateboarders; while maintaining the function of providing necessary products for skateboarding, shops also carry the responsibility of promoting the local skate scene. Concrete Canvas is an operation run purely for skateboarders by skateboarders. We intend to create unity in a scattered skateboarding scene by emphasizing key values in the community. The aesthetic of Concrete Canvas is based on the contrast between the vibrant and energetic appeal of skateboarding and the stony, urban environment that skateboarders thrive in. Finding the creative potential in overlooked or abandoned architectural structures is skateboarding’s highest calling, and this theme is presented outright in Concrete Canvas’s color scheme: radiating orange, yellow, and red emerging from fields of rigid gray.",
  nextLink: 'email',
  images: ['images/cc-boards.jpg', 'images/cc-boxes1.jpg', 'images/cc-boxes2.jpg', 'images/cc-bags.jpg', 'images/cc-all.jpg']
});

// Email
var email = new ProjectPage({
  title: 'BAM! Emails',
  copy: "A large part of my job at BAM is designing and coding emails. These email blasts were created for a variety of purposes, including promoting events, advertising products, and announcing sales.",
  nextLink: 'ucp',
  images: ['images/email-armed.jpg', 'images/email-armed2.jpg','images/email-summer.jpg','images/email-summer2.jpg','images/email-flash.jpg','images/email-flash2.jpg', ]
});

// SummerSays
var summer = new ProjectPage({
  title: 'Summer Says',
  copy: "Summer Anderson, Books-A-Million's top trendspotter, wanted to revamp her online presence and transform her site into a more image-oriented, blog-inspired destination for fashion and literature enthusiasts. To do this, I designed and developed a custom Wordpress theme that included a simple Pinterest-like masonry layout, infinite scroll, and Instagram integration that not only helped Summer's finds take center stage but made it possible for her to generate content on the fly with ease.",
  nextLink: 'sms',
  webLink: 'http://dev.summersays.com',
  images: ['images/ss-home.jpg']
});