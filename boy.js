class boy {
    constructor(posX,posY,widtha,heighta)
    {
     this.image = loadImage("images/boy.png")
     this.x = posX
     this.y = posY
     this.width = widtha
     this.height = heighta
    }
 
    display()
    {
     push();
     imageMode(CENTER)
     image(this.image,this.x,this.y,this.width,this.height)
     pop();
    }
 }