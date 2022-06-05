function shout(string){
    return string.toUpperCase();
}

function logShout(spy){
   spy = 'HELLO';
   console.log(spy);
}

function logWhisper(spy){
    spy = 'hello';
    console.log(spy);
}

function whisper(string){
    return string.toLowerCase();
}

function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        return "I can\'t hear you!";
    }
    if(string === string.toUpperCase()){
        return "YES INDEED!";
    }

    if(string === "Let\'s have dinner together!"){
        return "I would love to!";
    }
}
