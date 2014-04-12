//
// MainScene class
//
var Level = function(){
};

// Callback when CCBI is loaded
Level.prototype.onDidLoadFromCCB = function() {
  var physicsLayer = new PhysicsNode(this._physicsNode);
  physicsLayer.addGround(this._ground);
};

// Create callback for button
Level.prototype.launchBird = function(id) {

};