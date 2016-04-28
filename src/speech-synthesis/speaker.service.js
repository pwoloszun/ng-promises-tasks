App.factory("speaker", [
  "$window",
  "$q",
  function ($window, $q) {
    if (!$window.speechSynthesis)
      console.error("Your bowser does not support speechSynthesis()");

    // TODO API
    // API voices are loaded
    // $window.speechSynthesis.addEventListener("voiceschanged", function () {
    //   var voices = $window.speechSynthesis.getVoices();
    // });
    // // create speech
    // var speech = new $window.SpeechSynthesisUtterance("batman!");
    // speech.voice = voices[0];
    // // speech end event
    // speech.addEventListener("end", function (event) {
    //   console.log(event);
    // });
    // // run speech
    // $window.speechSynthesis.speak(speech);

    // TODO
    var speaker = {
      speak: function (text, voice) {
        // return messageEndPromise;
      },
      allVoices: function () {
        // return voicesPromise;
      },
      defaultVoice: function () {
        // return defaultVoicePromise;
      }
    };

    return speaker;
  }
]);
