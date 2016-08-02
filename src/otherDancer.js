var OtherDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);


  // MakeDancer.apply(this, arguments);
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="other-dancer"></span>');
  this.$node.addClass('new-dancer').prepend('<img src="http://www.netanimations.net/Moving-picture-spotted-dog-running-animated-gif.gif">');


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = this.step;
  this.move(300, 0);
};

OtherDancer.prototype = Object.create(MakeDancer.prototype);
OtherDancer.prototype.constructor = OtherDancer;
  
OtherDancer.prototype.step = function(timeBetweenSteps) {
    // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  this.$node.show();
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
  


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
};

OtherDancer.prototype.move = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //

  setInterval(function() {
    // top--;
    left++;
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);

  }.bind(this), Math.random * 100);
  
};



  
