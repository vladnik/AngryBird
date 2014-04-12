//
// MainScene class
//
var Level = function(){
};

Level.prototype.onDidLoadFromCCB = function() {
  var physicsLayer = new PhysicsNode(this._physicsNode);
  physicsLayer.addGround(this._ground);
};

// Create callback for button
Level.prototype.launchBird = function(id) {
  // for (var property in cc.PhysicsSprite()) {
  //   cc.log(property);
  // }
  // window.vasia = this.physicsNode;
  // for (var i=0 ;i < children.length; i++) {
  //   var child = children[i];
  //   var width = child.getContentSize().width;
  //   var height = child.getContentSize().height;
  //   var mass = width * height * 1/1000;
  //   var rock = space.addBody(new cp.Body(mass, cp.momentForBox(mass, width, height)));
  // }
  // Rotate the label when the button is pressed
  // this.helloLabel.runAction(cc.RotateBy.create(1,360));
};