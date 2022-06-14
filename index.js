for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
    function clicked() {
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
    }
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var crashSound = new Audio("crash.mp3");
            crashSound.play();
            break;
        case "a":
            var kickBass = new Audio("kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snareSound = new Audio("snare.mp3");
            snareSound.play();
            break;
        case "d":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log("wrong button");
            break;
    }
}

function buttonAnimation(currentKey){
    let activeButton =document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");        
    }, 100);

}

