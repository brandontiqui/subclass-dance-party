var Chicken = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);


  // MakeDancer.apply(this, arguments);
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="chicken"><img class="chick" src="https://openclipart.org/image/2400px/svg_to_png/191046/chicken.png"></span>');
  this.$node = $('<span class="chicken"><img class="chick" src="https://openclipart.org/image/2400px/svg_to_png/191046/chicken.png"></span>');

  // this.$node.addClass('new-dancer').prepend('<img src="http://bestanimations.com/Animals/Birds/Chickens/animated-chicken-rooster-gif-4.gif">');
  // this.step.call(this, timeBetweenSteps);


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.step.call(this, timeBetweenSteps);
  // this.oldStep = this.step;
  this.top;
  this.left;
  this.setPosition(500, 500);
};

Chicken.prototype = Object.create(MakeDancer.prototype);
Chicken.prototype.constructor = Chicken;
  
Chicken.prototype.step = function(timeBetweenSteps) {
    // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  this.$node.show();
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
  


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
};

Chicken.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;

  var styleSettings = {
    top: 1000,
    left: 1000
  };
  this.$node.css(styleSettings);
};






  
