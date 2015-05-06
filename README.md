# VideoHandler.js

Javascript to handle a HTML5 &lt;video&gt; Tag.
Simple/easy to use.

Script example:
```
var video = $('#video1').VideoHandler({
  onReady: function() {
    // callback when video is ready to be reproduced
  },
  onEnd: function() {
    // callback when video is end
  },
  onPause: function() {
    // callback when video paused
  },
  onError: function() {
    // callback on error
  }
});
```

You can also start/pause video with:
```
video.play();
video.stop();
```