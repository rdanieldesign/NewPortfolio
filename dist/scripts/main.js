(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['projects'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <a class=\"textlink\" href=\""
    + escapeExpression(((helper = (helper = helpers.webLink || (depth0 != null ? depth0.webLink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"webLink","hash":{},"data":data}) : helper)))
    + "\">Visit Website</a>\n";
},"3":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "      <img src=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\"/>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<ul class=\"container-individual\">\n  <li class=\"golden-small project-description\">\n    <h2 class=\"title-individual\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n    <p>"
    + escapeExpression(((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"copy","hash":{},"data":data}) : helper)))
    + "</p>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.webLink : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <a href=\"#projects\" id=\""
    + escapeExpression(((helper = (helper = helpers.nextLink || (depth0 != null ? depth0.nextLink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nextLink","hash":{},"data":data}) : helper)))
    + "\" class=\"textlink\">Next Project<i class=\"fi-arrow-right\"></i></a>\n  </li>\n  <li class=\"golden-large images-individual\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.images : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </li>\n</ul>\n";
},"useData":true});
})();
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

// UCP
var ucp = new ProjectPage({
  title: 'UCP Casual Day Shirt',
  copy: "United Cerebral Palsy commisions a t-shirt design every year to raise money and awareness for their campaign to help those suffering from Cerebral Palsy. This year, UCP wanted to celebrate the many businesses around Birmingham who have played a key role in financially supporting their operations, and the spirit of giving in the city of Birmingham.",
  nextLink: 'shred',
  images: ['images/ucp-large.jpg']
});

// Shred Ready
var shred = new ProjectPage({
  title: 'Shred Ready SIA Tradeshow',
  copy: "As an exhibitor in the SIA 2012 Trade Show, Shred Ready entered the snow industry this year with a new helmet, the Forty4. I designed a line of graphics and colorways for Shred Ready's snow helmet, along with a comprehensive company folder containing three informational flyers, a business card, and the 2012 order form and program. I collaborated with artist Evan Watson to create the back drop for the booth, a hand-stenciled eight-by-twenty foot banner that matched my folder's cover design.",
  nextLink: 'summer',
  images: ['images/sr-set.jpg', 'images/sr-banner.jpg', 'images/sr-helmets1.jpg', 'images/sr-helmets2.jpg', 'images/sr-folder.jpg', 'images/sr-flyers1.jpg', 'images/sr-flyers2.jpg']
});

// SummerSays
var summer = new ProjectPage({
  title: 'Summer Says',
  copy: "Summer Anderson, Books-A-Million's top trendspotter, wanted to revamp her online presence and transform her site into a more image-oriented, blog-inspired destination for fashion and literature enthusiasts. To do this, I designed and developed a custom Wordpress theme that included a simple Pinterest-like masonry layout, infinite scroll, and Instagram integration that not only helped Summer's finds take center stage but made it possible for her to generate content on the fly with ease.",
  nextLink: 'sms',
  webLink: 'http://dev.summersays.com',
  images: ['images/ss-home.jpg', 'images/ss-grid.jpg', 'images/ss-single.jpg']
});

// SMS
var sms = new ProjectPage({
  title: 'BAM! SMS Campaign',
  copy: "In an effort to gain further access to their customers, BAM! launched a campaign to collect subscribers for their text message program. Customers were prompted to sign up to receive texts via in-store signage and email blasts, as well as small cards they received at the register upon checkout. BAM! offered a free coffee for those who subscribed to receive texts.",
  nextLink: 'ebm',
  images: ['images/sms-sign.jpg', 'images/sms-card.jpg', 'images/sms-email.jpg', ]
});

// EBM
var ebm = new ProjectPage({
  title: 'BAM! Publishing',
  copy: "BAM! Publishing is a print on-demand service that Books-A-Million offers to customers who want to produce their own work or books that have gone out of print. O2 Ideas did a great job with the branding and site design. After the initial site launch, BAM! decided that we needed to provide a search function for users to find available titles for print, as well as template options for those who wanted to format their own work for production. Utilizing the styles established by O2 and search scripts created by our internal developer, I developed a responsive search page as well as a cover templates page and an interior templates page.",
  nextLink: 'concrete',
  webLink: 'http://www.bampublish.com',
  images: ['images/ebm-search.jpg', 'images/ebm-covers.jpg', 'images/ebm-templates.jpg']
});
'use strict';
$(document).ready(function(){

	// Navigation toggle
	$('#hamburger').click(function(){
		$(this).toggleClass('active');
		$('nav ul').toggleClass('active');
	});

});

