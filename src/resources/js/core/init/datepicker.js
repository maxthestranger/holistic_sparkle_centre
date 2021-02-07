//
// Datepicker
//

'use strict';

var Datepicker = (function() {

	//
	// Variables
	//

	var $date = $('[data-toggle="date"]'),
		$datetime = $('[data-toggle="datetime"]'),
		$time = $('[data-toggle="time"]');


	//
	// Methods
	//

	function initDate($this) {

		var options = {
			enableTime: false,
			allowInput: true
		};

		$this.flatpickr(options);
	}

	function initDatetime($this) {

		var options = {
			enableTime: true,
			allowInput: true
		};

		$this.flatpickr(options);
	}

	function initTime($this) {

		var options = {
			noCalendar: true,
            enableTime: true,
			allowInput: true
		};

		$this.flatpickr(options);
	}


	//
	// Events
	//

	if ($date.length) {

		// Init selects
		$date.each(function() {
			initDate($(this));
		});
	}

	if ($datetime.length) {

		// Init selects
		$datetime.each(function() {
			initDatetime($(this));
		});
	}

	if ($time.length) {

		// Init selects
		$time.each(function() {
			initTime($(this));
		});
	}

})();
