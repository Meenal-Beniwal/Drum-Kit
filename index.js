//document.querySelector("button").addEventListener("click" , handleClick);
//function handleClick(){
//   alert("I got clicked");
// }

// M1 above

// M2 below

 //document.querySelector("button").addEventListener("click" , function (){
//  alert("I got clicked");
//  })

// Using for loop

let i =0;

for(i ; i< document.querySelectorAll(".wdrum").length ; i++){
    document.querySelectorAll(".wdrum")[i].addEventListener("click" , function (){
        // console.log(this.innerHTML);  TTO print number written on it
        var button_text = this.innerHTML;
        makesound(button_text);
        button_animation(button_text);
          })
}

document.addEventListener("keypress" , function(event){
    makesound(event.key);
    button_animation(event.key);
})

function makesound(key){
        
    switch(key){
        case "w" :
            let audio = new Audio ("sounds/tom1.mp3.mp3");
            audio.play(); 
            break;
        
        case "a" :
            let audio1 = new Audio ("sounds/tom2.mp3.mp3");
            audio1.play(); 
            break;
        
        case "s" :
            let audio2 = new Audio ("sounds/tom3.mp3.mp3");
            audio2.play(); 
            break;

        case "d" :
            let audio3 = new Audio ("sounds/tom1.mp3.mp3");
            audio3.play(); 
            break;
        case "j" :
            let audio4 = new Audio ("sounds/Bass_drum.mp3.mp3");
            audio4.play(); 
            break;

        case "k" :
            let audio5 = new Audio ("sounds/tom4.mp3.mp3");
            audio5.play(); 
            break;

        case "l" :
            let audio6 = new Audio ("sounds/snare_drum.mp3.mp3");
            audio6.play(); 
            break;

    }
}

function button_animation(current_key){
   let active_button= document.querySelector( "#" + current_key);
   
   active_button.classList.add("pressed");
   
   setTimeout(function (){
   active_button.classList.remove("pressed");
   } , 100);
}

//let audio = new Audio ("sounds/tom1.mp3.mp3");
//          audio.play(); 
