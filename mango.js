class Mango{

constructor(x,y,r){
var options={
isStatic:true,
resitition:0,
friction:1,
}
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("mango.png")
this.body=bodies.circle(x,y,this.r,options)
World.add(world,this.body)

}

display(){
var mangoPos=this.body.position;
Push()
translate(mandoPos.x,mangoPos.y);
rotate(this.body.angle)
ImageMode(CENTER);
ellipseMode(CENTER);
this.image(this.image,0,0,this.r*4,this.r*4)
pop()
}



}