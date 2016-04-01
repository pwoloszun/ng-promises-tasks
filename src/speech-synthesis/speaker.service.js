App.factory("speaker", [
  "$window",
  "$q",
  function ($window, $q) {
    if (!$window.speechSynthesis)
      console.error("Your bowser does not support speechSynthesis()");

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
