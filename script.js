$(document).ready(function() {
	let body_height = $(window).height();
	body.css("height", body_height);
	/* get differense */
	let birthday = new Date('13 March, 2022');
	let now = new Date();
	let time = parseInt((birthday.getTime() - now.getTime()) / 1000);
	/* blocks */
	const DAY = $('#day');
	const HOUR = $('#hour');
	const MIN = $('#min');
	const SEC = $('#sec');
	/* eq */
	let s2d = (60*60*24);
	let s2h = (60*60);
	let s2m = 60;
	/* time */
	let day = time / s2d;
	day = parseInt(day);
	if (day < 10) day = "0" + day;
	let hour = time % s2d;
	hour /= s2h;
	hour = parseInt(hour);
	if (hour < 10) hour = "0" + hour;
	let min = time % s2d % s2h;
	min /= s2m;
	min = parseInt(min);
	if (min < 10) min = "0" + min;
	let sec = time % s2d % s2h % s2m;
	if (sec < 10) sec = "0" + sec;
	let i = 0;
	setInterval(function() {
		sec--;
		if (sec < 10) sec = "0" + sec;
		if (sec == 0) {
			sec = 59;
			min--;
			if (min < 10) min = "0" + min;
			if (min == 0) {
				min = 59;
				hour--;
				if (hour < 10) hour = "0" + hour;
				if (hour == 0) {
					hour = 23;
					day--;
				}
			}
		}
		DAY.html(day);
		HOUR.html(hour);
		MIN.html(min);
		SEC.html(sec);
	}, 1000);
	DAY.html(day);
	HOUR.html(hour);
	MIN.html(min);
	SEC.html(sec);
});