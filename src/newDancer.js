var NewDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);
  MakeDancer.apply(this, arguments);
  // this.$node = $('<span class="new-dancer"></span>');
  this.$node.addClass('new-dancer');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = this.step;
};

NewDancer.prototype = Object.create(MakeDancer.prototype);
NewDancer.prototype.constructor = NewDancer;
  
NewDancer.prototype.step = function(timeBetweenSteps) {
    // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  this.$node.toggle();
  MakeDancer.prototype.step.call(this, timeBetweenSteps);
  


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
};

  
