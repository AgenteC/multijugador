class Form{
    constructor(){}
    display(){
     
        var title = createElement("h1")
        title.html("F1")
        title.position(200,200);
        var input = createInput("name")
        var buttom = createButtom("Play")
        buttom.position(230,200)
        input.positon(10,20)
        buttom.mousePressed(function(){

        input.hide();
        buttom.hide();
        var name = input.value();
        playerCount+= 1;
        player.update(name)
        player.updateCount(playerCount)
        var creating = createElement("h1")
        creating.html("HOOOOOOOOOOOLA._."+ name)
        creating.position(200,250)
        
        })
    
        }
    
    }
 
    