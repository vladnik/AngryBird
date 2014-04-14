//
// PhysicsNode class
//
var PhysicsNode = function(node){
  // Initialize space
  this.node = node;
  node.space = new cp.Space();
  var space = node.space;
  space.iterations = 60;
  space.gravity = cp.v(0, -500);
  space.sleepTimeThreshold = 0.5;
  space.collisionSlop = 0.5;
  space.sleepTimeThreshold = 0.5;

  /////////// DEBUG /////////
  // node._debugNode = cc.PhysicsDebugNode.create( node.space );
  // node._debugNode.setVisible( true );
  // node.addChild( node._debugNode );
  //////////////////////////
    
  // Iterate children
  var children = node.getChildren();
  var p_objects = [];
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

    // Add sprite
    var frame = cc.SpriteFrame.createWithTexture(child.getTexture(), child.getTextureRect())
    frame.setRotated(child.isTextureRectRotated());
    var sprite = cc.PhysicsSprite.createWithSpriteFrame(frame);
    sprite.setScale(scale);

    // Build body
    var mass = width * height * 1/1000;
    var body = space.addBody(new cp.Body(mass, cp.momentForBox(mass, width, height)));
    body.setPos(cc.p(pos.x, pos.y))

    // Build shape
    var shape = space.addShape(new cp.BoxShape(body, width, height));
    shape.setFriction(0.5);
    shape.setElasticity(0.3);

    sprite.setBody(body);
    p_objects.push(sprite);
  }
  node.removeAllChildren();
  for (var i=0 ;i < p_objects.length; i++) {
    node.addChild(p_objects[i]);
  };

  // Update scene
  node.update = function(dt) {
    this.space.step(dt);
  };
  node.scheduleUpdate();
};

PhysicsNode.prototype.addGround = function(ground) {
  var space = this.node.space;
  var floor = space.addShape(new cp.SegmentShape(space.staticBody, cp.v(0, 30), cp.v(2000, 80), 0));
  floor.setElasticity(1);
  floor.setFriction(1);
};
