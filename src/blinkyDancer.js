var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);
  MakeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = this.step;
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
  
MakeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
    // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  this.$node.show();
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
  


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
};

  
