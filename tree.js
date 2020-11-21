class tree {
    constructor(posX,posY,widtha,heighta)
    {
     var options = {isStatic:true}
     this.image = loadImage("images/tree.png")
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