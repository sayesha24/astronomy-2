class Buttons{

    constructor(){

        this.start = createButton('START');
        this.start.position(displayWidth/2, displayHeight/2);

        this.next = createButton('NEXT');
        this.next.position(displayWidth/2 + 200, displayHeight/2);

        /*this.next2 = createButton('NEXT');
        this.next2.position(displayWidth/2 + 200, displayHeight/2);
*/
    }

    display(){


        this.next.mousePressed(()=>{

            solarSystem.visible = true;
            solarSystem.x = test.x + 570;
            solarSystem.y = test.y - 240;
           
            
        });
       
       
        this.start.mousePressed(()=>{

            galaxy.visible = true;
            galaxy.x = displayWidth/2 - 600;
            galaxy.y = displayHeight/2 - 240;

        });

        
       if(solarSystem.x === test.x && solarSystem.y === test.y){

            this.next.mousePressed(()=>{
            
                stars.x = test.x;
                stars.y = test.y - 300
               stars.visible = true;
                
            })
        }




        /*this.next2.mousePressed(()=>{

            universe.visible = false;
        })*/


        
    }
}