class Rain {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0   
        }
        this.rain.fill("blue");
        this.rain = Bodies.circle(x,y,50,options);
        this.radius = 2;
        World.add(world, this.rain)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.rain.position;
        
       // startRain Function(){
        
      //  }
        
        
    }
}
