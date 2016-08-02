var NewDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);
  MakeDancer.apply(this, arguments);
  // this.$node = $('<span class="new-dancer"></span>');
  // this.$node.addClass('new-dancer').prepend('<img src="https://media.giphy.com/media/5wJ8ZN7or1N1m/giphy.gif">');
  this.$node = $('<span class="new-dancer"><img src="https://media.giphy.com/media/5wJ8ZN7or1N1m/giphy.gif"></span>');
  
  this.step.call(this, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.setPosition(100, 100);
  this.move(100, 100, 1000, 180); // top, left, width, transform
};

NewDancer.prototype = Object.create(MakeDancer.prototype);
NewDancer.prototype.constructor = NewDancer;
  
NewDancer.prototype.step = function(timeBetweenSteps) {
    // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  this.$node.show();
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
  


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
};


MakeDancer.prototype.setPosition = function(top, left, width, transform) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left,
    width: width,
    transform: transform
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.move = function(top, left, width, transform) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var context = this;
  var newTransform, rotateString;
  setInterval(function() {
    transform = transform + Math.random();
    rotateString = 'rotate(' + transform + 'deg)';

    top = top + 5;
    left = left + 10;
    width = Math.random() + 5;
    // transform = rotateString;
    context.setPosition(top, left, width, rotateString);
  }, Math.random() * 50);
};
