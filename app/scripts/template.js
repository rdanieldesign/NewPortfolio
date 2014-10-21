// Template variables
var projectTemp = $('#projectTemp').html();
var renderProjectTemp = _.template(projectTemp);

// Page template
var ProjectPage = function(options){
  var options = options || {};
  this.title = options.title;
  this.copy = options.copy;
  this.nextLink = options.nextLink;
  this.webLink = options.webLink;
  this.image = options.image;
};

// SummerSays
var summer = new ProjectPage({
  title: 'Summer Says',
  copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  nextLink: 'sms.html',
  webLink: 'http://dev.summersays.com',
  image: 'images/ss-home.jpg'
});

// ConcreteCanvas
var concrete = new ProjectPage({
  title: 'Concrete Canvas',
  copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  nextLink: 'sms.html',
  webLink: 'http://dev.summersays.com',
  image: 'images/ss-home.jpg'
});

// Create page
// $('.container-individual').html(renderProjectTemp(summer));

// Build project page on click
$('#concrete').click(function(){
    $('.dynamic').html(renderProjectTemp(concrete));
});