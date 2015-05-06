# VideoHandler.js

Javascript to handle a HTML5 &lt;video> Tag.
Simple/easy to use.

```
var video = $('#video1').VideoHandler({
  onReady: function() {
    this.play();
  },
  onEnd: function() {
    // callback when video is ended
  },
  onError: function() {
    alert('error');
  }
});
video.play();
```
