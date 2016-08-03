$(document).ready(function() {
  window.dancers = [];

  // start stackoverflow functions
  // http://stackoverflow.com/questions/17628456/measure-distance-between-two-html-elements-centers

  /*************************
  * ATTEMPT LATER
  // var getPositionAtCenter = function (element) {
  //   var data = element.getBoundingClientRect();
  //   return {
  //     x: data.left + data.width / 2,
  //     y: data.top + data.height / 2
  //   };
  // };

  // var getDistanceBetweenElements = function(a, b) {
  //   var aPosition = getPositionAtCenter(a);
  //   var bPosition = getPositionAtCenter(b);

  //   return Math.sqrt(
  //     Math.pow(aPosition.x - bPosition.x, 2) + 
  //     Math.pow(aPosition.y - bPosition.y, 2) 
  //   );
  // };

  // end stackoverflow functions

  // for (var i = 0; i < window.dancers.length; i++) {

  //   window.dancers[i].setPosition(500, horizontalPosition);
  // }
  ********************/

  // setInterval(function() {
  //   // for (var i = 0; i < window.dancers.length; i++) {
  //   //   var position = window.dancers[i].getPosition();
  //   //   for (var j = i + 1; j < window.dancers.length; j++) {
  //   //     var position = window.dancers[j].getPosition();
  //   //   }


  //   // }
  //   console.log(window.dancers[1].getPosition());
  // }, 1000);

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $('.addNewDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 500
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addOtherDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
    $('body').height() * Math.random(),
    $('body').width() * Math.random(),
      Math.random() * 500
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    var horizontalPosition = 0;
    console.log(window.dancers.length);
    for (var i = 0; i <= 99999; i++) {
      window.clearInterval(i);
    }
    for (var i = 0; i < window.dancers.length; i++) {
      horizontalPosition += 50;
      window.dancers[i].setPosition(500, horizontalPosition);
    }
    // console.log(window.dancers.length);
  });
});

