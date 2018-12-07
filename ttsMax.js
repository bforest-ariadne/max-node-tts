const SimpleTTS = require("simpletts");
const tts = new SimpleTTS();
const path = require('path');
const Max = require('max-api');
 
tts.getVoices().then((voices) => {
 
    console.log(voices[0].name);
    console.log(voices[0].gender);
 
}).catch((err) => {
    console.log(err);
});

Max.addHandler("say", (msg) => {
	// Max.outlet(msg);
	if ( tts.isReading() ) tts.stopReading();

	tts.read({ "text": msg, "speed": 60 }).then(() => {
	    console.log("Ok");
	}).catch((err) => {
	    console.log(err);
	});


});
 
// tts.read({ "text": "this is a test", "volume": 75, "speed": 60 }).then(() => {
//     console.log("Ok");
// }).catch((err) => {
//     console.log(err);
// });
 
// tts.read("this is a test").then(() => { // is equal to { "text": "this is a test", "voice": voices[0], "volume": 100, "speed": 50 }
//     console.log("Ok");
// }).catch((err) => {
//     console.log(err);
// });