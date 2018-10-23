Array.prototype.myEntries = function () {
	var start = 0;
	var end = this.length;
	var count = 0;
	var nextIndex = start;
	return {
		next : function () {
			var result;
			if (nextIndex < end) {
				result = {value : nextIndex, done : false};
				nextIndex ++;
				count ++;
			} else {
				result = {value : count, done : true}
			}
			return result;
		}
	};
};