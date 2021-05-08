class Hero {
constructor(x,y,r){
var options = {
    
density:1,
frictionAir :1


}

this.x = x
this.r = r
this.y = y
this.image = loadImage("super.png");
this.body = Bodies.circle(this.x,this.y,this.r , options);
World.add(world,this.body);


}
display()
{
var pos = this.body.position
push ();
translate (pos.x,pos.y)
imageMode(CENTER);
image (this.image , 0,0 ,this.r,this.r)





pop();
 



}

}