(function($) {
	$.fn.VideoHandler = function(options) {

		this.el = this[0];

		/**
		 * Functions
		 */

		this.play = function() {
			this.el.play();
		}

		this.pause = function() {
			this.el.pause();
		}

		/**
		 * Events
		 */

		if(options.onReady != undefined)
			this.el.addEventListener('canplay', options.onReady);

		if(options.onEnd != undefined)
			this.el.addEventListener('ended', options.onEnd);

		if(options.onError != undefined)
			this.el.addEventListener('error', options.onError);

		if(options.onPause != undefined)
			this.el.addEventListener('pause', options.onPause);

		return this;
	}

})(jQuery);