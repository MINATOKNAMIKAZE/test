class Form {

    constructor() {
      this.input = createInput("");
      this.button = createButton('Click Me');
      this.title = createElement('h1');
     this.title1=createElement("h1")
     this.img=loadImage("Img1.JPG")
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.title1.hide();
    }
  
    display(){
      image(this.img,displayWidth/2 -650,displayHeight/2 -400,displayWidth,displayHeight+50)
      fill("white")
      this.title.html("My Game");
      this.title.position(displayWidth/2 - 50, 0);
 
      this.title1.html("Please Enter Your Credentials Below: ");
      this.title1.position(displayWidth/2 - 80, 210);

      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 15, displayHeight/2 -20);
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.title1.hide();
        this.title.hide();
        gameState=1
      });
  }}
  