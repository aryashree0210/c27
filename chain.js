class Chain{
    constructor(b1,b2){
        var options= {
            bodyA : b1,
            bodyB : b2,
            stiffness:0.01,
            length:10
            
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        
    }

    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;

        strokeWeight(6);
        stroke("black");
        line(posA.x, posA.y, posB.x,posB.y);
    }
}