//
// MainScene class
//
var Level = function(){};

// Create callback for button
Level.prototype.launchBird = function(id)
{
  cc.log(id);
  // Rotate the label when the button is pressed
  // this.helloLabel.runAction(cc.RotateBy.create(1,360));
};