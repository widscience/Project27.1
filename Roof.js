class Roof{

    constructor(x, y){
       
        this.x = x;
        this.y = y;
        this.roof = Bodies.rectangle(this.x, this.y, 200, 10, {isStatic: true});
        World.add(world, this.roof);
    }

    display(){
        
        var roof = this.roof;

        push();
        fill("orange");
        stroke("yellow");
        pop();
        
    }
}
