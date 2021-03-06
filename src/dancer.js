// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img class="dog" src="http://cottonwoodvetclinic.com/wp-content/uploads/2015/03/image-nutro-small-dog-breeds-yorkshire-terrier.png"></span>');

  //this.timeBetweenSteps = timeBetweenSteps;
  this.top;
  this.left;

  this.setPosition(top, left);
  this.step.call(this, timeBetweenSteps);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  

  // return dancer;
};

MakeDancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.top = top;
  this.left = left;

  var styleSettings = {
    top: top,
    left: left, //1039 - 100
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.getPosition = function() {
  var array = [this.top, this.left];
  return array;
};


