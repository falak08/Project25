class Paper{
    constructor(x,y,width,height){
        var options={
            isStatic:false,restitution:0.3,
            friction:0.5,
            density:1.2
        }
this.body=Body.rectangle(x,y,width,height,options);


World.add(World,this.body);

    }
    display(){
        var pos=this.body.position;
rect(pos.x,pos.y,this.width,this.height);
this.width=width;
this.height=height;
        rectMode(CENTER);
        fill("brown");
        
    }
}