// Messy Math Mashup
function messyMath(num) {
	var sum = 0;
	for (var i = 0; i <= num; i++) {
		if (i === num / 3) {
			return -1;
		}
		else if (i % 3 === 0) {
			continue;
		}
		else if (i % 7 === 0) {
			sum += (i*2);
		}
		else {
			sum += i;
		}
	}

	return sum;
}

// extract-o-matic
function extractDigit(num, digit) {
	num = num.toString().split("");

	if (digit >= num.length) {
		return 0;
	}

	if (digit == 0) {
		return num[num.length - 1];
	}
	else if (digit > 0) {
		digit += 1;
		return num[num.length - digit];
	}
	else {
		digit -= 1;
		digit = Math.abs(digit);
		return num[num.length - digit];
	}
}

// CountTo 10
function countTo(start) {
	if (start === undefined) {
		start = 1;
	}

	if (start > 10) {
		return start;
	}

	console.log(start);
	return countTo(start + 1);
}

// clock hand angles
function clockHandAngles(seconds) {
	var hours = 0,
		minutes = 0,
		hourDegs = 0,
		minuteDegs = 0,
		secondDegs = 0;

	while (seconds >= 3600) {
		hours += 1;
		seconds -= 3600;
	}

	while (seconds >= 60) {
		minutes += 1;
		seconds -= 60;
	}

	hourDegs = hours * 30;
	minuteDegs = minutes * 6;
	secondDegs = seconds * 6;

	return [hourDegs, minuteDegs, secondDegs];
}

// Most significant digit
function mSDigit(num) {
	
	while (num >= 10) {
		num = Math.floor(num / 10);
	}

	return num;
}

// Create Kari, a wanderer
function Wanderer(name) {
	this.name = name;
	this.home = {
		x: 0,
		y: 0
	};
	this.location = {
		x: 0,
		y: 0
	};
	
}

Wanderer.prototype.reset = function() {
	this.location.x = this.home.x;
	this.location.y = this.home.y;

	return this;
};

Wanderer.prototype.move = function(x, y) {
	this.location.x += x;
	this.location.y += y;

	return this;
}

Wanderer.prototype.xDistance = function() {
	return Math.abs(this.location.x);
}

Wanderer.prototype.yDistance = function() {
	return Math.abs(this.location.y);
}

// push front
function pushFront(arr, value) {
	for (var i = arr.length; i > 0; i--) {
		arr[i] = arr[i - 1];
	}

	arr[0] = value;
	return arr;
}

// pop front

// Helper function
function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;

	return arr;
}

// Actual implementation
function popFront(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		swap(arr, i, i + 1);
	}

	arr.pop();
	return arr;
}

// insert at
function insertAt(arr, idx, val) {
	for (var i = arr.length; i > idx; i--) {
		arr[i] = arr[i - 1];
	}

	arr[idx] = val;
	return arr;
}

// remove at
function removeAt(arr, idx) {
	for (var i = idx; i < arr.length - 1; i++) {
		swap(arr, i, i + 1);
	}

	arr.pop();
	return arr;
}

// swap array pairs
function swapPairs(arr) {
	var count = Math.floor(arr.length / 2),
		idx = 0;

	while (count--) {
		swap(arr, idx, idx + 1);
		idx += 2;
	}

	return arr;
}

// Remove duplicates from sorted arrayk
function removeDupes(arr) {
	
	for (var i = 0; i < arr.length - 1; i++) {
		if (arr[i] === arr[i + 1]) {
			var idx = i;
			while (idx < arr.length - 1) {
				swap(arr, idx, idx + 1);
				idx++;
			}
			arr.pop();
		}
	}

	return arr;
}

function skylineHeights(arr) {
	var max = arr[0];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}

		if (arr[i] < 0 || arr[i] < max) {
			var idx = i;
			while (idx < arr.length - 1) {
				swap(arr, idx, idx + 1);
				idx++;
			}
			arr.pop();
			i--;
		} 
	}

	return arr;
}