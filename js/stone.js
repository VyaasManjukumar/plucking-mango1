class Stone{
    constructor(x,y,diameter){
        var options ={
            isStatic : false,
            density : 1.2,
            friction : 1,
            restitution:0
        }
    this.body=bodies.circle(x,y,diameter,options);
    this.diameter=diameter;
    this.image=loadImage("stone.png");
    World.add(world,this.body);
    }
display(){
    push();
    tranlate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0.0,this.diameter);
    Pop();
}
}