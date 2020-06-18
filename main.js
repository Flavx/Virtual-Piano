



document.addEventListener("keypress", function(e){
    if(e.code === "KeyA"){
        let audioA = new Audio("white_keys/A.mp3");
        audioA.play();
    } else if(e.code === "KeyS"){
        let audioS = new Audio("white_keys/S.mp3");
        audioS.play();
    } else if(e.code === "KeyD"){
        let audioD = new Audio("white_keys/D.mp3");
        audioD.play();
    } else if(e.code === "KeyF"){
        let audioF = new Audio("white_keys/F.mp3");
        audioF.play();
    } else if(e.code === "KeyG"){
        let audioG = new Audio("white_keys/G.mp3");
        audioG.play();
    } else if(e.code === "KeyH"){
        let audioH = new Audio("white_keys/H.mp3");
        audioH.play();
    } else if(e.code === "KeyJ"){
        let audioJ = new Audio("white_keys/J.mp3");
        audioJ.play();
    } else if(e.code === "KeyE"){
        let audioE = new Audio("black_keys/E.mp3");
        audioE.play();
    } else if(e.code === "KeyT"){
        let audioT = new Audio("black_keys/T.mp3");
        audioT.play();
    } else if(e.code === "KeyU"){
        let audioU = new Audio("black_keys/U.mp3");
        audioU.play();
    } else if(e.code === "KeyW"){
        let audioW = new Audio("black_keys/W.mp3");
        audioW.play();
    } else if(e.code === "KeyY"){
        let audioY = new Audio("black_keys/Y.mp3");
        audioY.play();
    } else {
        console.log("Warning. Key not associated.");
    }
});