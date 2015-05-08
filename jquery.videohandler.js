/**
 * Name: Video Handler 0.0.1
 * Author: Marco Cattaneo @marco_cattaneo
 */
(function($) {
	$.fn.VideoHandler = function(options) {

		this.el = this[0];

		/**
		 * Play video
		 * @return {[type]} [description]
		 */
		this.play = function() {
			this.el.play();
		}

		/**
		 * Pause video
		 * @return {[type]} [description]
		 */
		this.pause = function() {
			this.el.pause();
		}

		/**
		 * Go to position and play
		 * @param  {[type]} seekTo [description]
		 * @return {[type]}        [description]
		 */
		this.seekTo = function(seekTo) {

			if( seekTo == undefined )
				return

			if( typeof seekTo == 'string' )
				seekTo = parseInt(seekTo);

			if(seekTo>=0 && seekTo<=getDuration())
				this.el.currentTime = seekTo;
			
		}

		/**
		 * get video duration
		 * @return {[type]} [description]
		 */
		this.getDuration = function() {
			return this.el.duration;
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