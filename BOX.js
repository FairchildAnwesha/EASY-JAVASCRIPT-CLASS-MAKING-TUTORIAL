class Box{
    constructor(x,y,width,height){
        var options= {restitution:1.0}
        this.Body= Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        World.add(world,this.Body);
    }

    display(){
        rectMode(CENTER);
        rect(this.Body.position.x, this.Body.position.y,this.width,this.height)
        
    }
}