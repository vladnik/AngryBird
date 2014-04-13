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
  var space = this._physicsNode.space;
  var rotation = this.launcher.getRotation() * Math.PI / 180;
  var directionVector = cc.p(Math.sin(rotation), Math.cos(rotation))
  var ballOffset = cc.pMult(directionVector, 70);
  var ball = cc.PhysicsSprite.createWithSpriteFrameName("Sprites/bird.png");
  ball.setScale(0.25);

  var radius = ball.getContentSize().width * ball.getScale() / 2
  var mass = Math.PI * Math.pow(radius,2) * 1/1000;
  var body = space.addBody(new cp.Body(mass, cp.momentForCircle(mass, 0, radius, cp.v(0, 0))));
  body.setPos(cc.pAdd(this.launcher.getPosition(), ballOffset));


  var circle = space.addShape(new cp.CircleShape(body, radius, cp.v(0, 0)))
  circle.setElasticity(0.8);
  circle.setFriction(1);
  
  ball.setBody(body);
  this._physicsNode.addChild(ball);

  var force = cc.pMult(directionVector, 5000);
  body.applyForce(force, cp.v(0, 0));
};