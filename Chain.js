class Chain{
    constructor(bodya,bodyb){
        var options = {
            bodyA:bodya,
            bodyB:bodyb,
            stiffness:2,
            length:10
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var pointa = this.chain.bodyA.position
        var pointb = this.chain.bodyB.position
        strokeWeight(4)
        line(pointa.x,pointa.y,pointb.x,pointb.y)


    }
}