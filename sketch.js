function preload() {
  myFont = loadFont('space-age.regular.ttf');
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    
    textFont(myFont);
    textSize(35);
    
    textAlign(CENTER); 


    background('teal');
    inp = createInput('');
    inp.position(500, 200);
    inp.size(500);

    let button = createButton("ENTER");
    button.position(inp.x + inp.width + 10, inp.y);
    button.mousePressed(showImage); 
    
}


function showImage() {
    const userInput = inp.value();

    if(userInput == 'ADAM STRANGE, JOHN STEWART, AND MISTER MIRACLE'){

        text('YES YOU HAVE WON THE GAME!!!', 800, 180);
    }
    if(userInput == 'DOCTOR DOOM, CAPTAIN KANGAROO, AND IRON MAN'){

        text('WHOOPS, looks like you lost, wanna try again?', 780, 100);
    }
    
    if(userInput == 'BLUE BEETLE, CAPTAIN PLANET, AND QUICKSILVER'){ 

        text('WHOOPS, looks like you lost, you failed the universe?', 780, 100);
    }
    
     if(userInput == 'BATMAN, MISTER MIRACLE, AND SUPERMAN'){ 

        text('WHOOPS, looks like you lost, you failed the universe?', 780, 100);
    }
    
    if(userInput == 'NIGHT CRAWLER, FLASH, AND INVICIBLE'){ 

        text('WHOOPS, looks like you lost, you failed the universe?', 780, 100);
    }
}

function myInputEvent() 
{
    console.log('you are typing: ', this.value());
    textSize(32);
    text(this.value(), 400, 200);
}

function draw() {
    
    textSize(40);
    text('Hello friend Welcome to Trivia about Scott!!!', 750, 270);
    textSize(30);
    text('Today, you will have to balance the fate of our Universe', 740, 320);    
    textSize(30);
    text('With the act of answer the great question...', 740, 370);
    textSize(30);
    text('Who are 3 of Scotts favorite superheroes???', 740, 420);
    textSize(30);
    text('You will only have shot to choose from the responses below', 740, 470);
    textSize(30);
    text('Ad Astra Traveller', 740, 520);
    textSize(20);
    text('Your Choices', 740, 570);
    textSize(18);
    text('1.  Blue Beetle, Captain Planet, and Quicksilver', 740, 590);
    textSize(18);
    text('2.  Doctor Doom, Captain Kangaroo, and Iron Man', 740, 610);
    textSize(18);
    text('3.  Night Crawler, Flash, and Invincible', 740, 630);
    textSize(18);
    text('4.  Batman, Mister Terrific, and Superman', 740, 650);
    textSize(18);
    text('5.  Adam Strange, John Stewart, and Mister Miracle', 740, 670);
}


