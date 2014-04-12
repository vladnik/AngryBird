//
// PhysicsNode class
//
var PhysicsNode = function(node){
  this.node = node;
  node.space = new cp.Space();
  var space = node.space;
  space.iterations = 60;
  space.gravity = cp.v(0, -500);
  space.sleepTimeThreshold = 0.5;
  space.collisionSlop = 0.5;
  space.sleepTimeThreshold = 0.5;

  /////////// DEBUG /////////
  node._debugNode = cc.PhysicsDebugNode.create( node.space );
  node._debugNode.setVisible( true );
  node.addChild( node._debugNode );
  //////////////////////////
  
  var children = node.getChildren();
  window.vasia = children[0];
  for (var i=0 ;i < children.length; i++) {
    // Get child attributes
    var child = children[i];
    var size = child.getContentSize();
    var scale = child.getScale();
    var pos = child.getPosition();
    var width = size.width * scale;
    var height = size.height * scale;
    if (height <= 0 || width <=0) {
      continue;
    }
    var mass = width * height * 1/1000;

    // Build body
    var body = new cp.Body(mass, cp.momentForBox(mass, width, height));
    space.addBody(body);

    // Build shape
    var shape = space.addShape(new cp.BoxShape(body, width, height));
    shape.setFriction(0.3);
    shape.setElasticity(0.3);

    // Add sprite
    var sprite = cc.PhysicsSprite.createWithSpriteFrameName('Sprites/shape-0.png');
    sprite.setBody(body);
    sprite.setScale(scale);
    sprite.setPosition(pos);
    children[i] = sprite;
    if (i === 0) {window.sprite = sprite;}
  }

  // Update scene
  node.update = function(dt) {
    this.space.step(dt);
  };
  node.scheduleUpdate();
};

PhysicsNode.prototype.addGround = function(ground) {
};
