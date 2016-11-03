function mysteriousCalculator(a, b) {
	var mysteriousVariable = 3;
	return {
		add: function() {
			var result = a + b + mysteriousVariable;
			return toFixedTwoPlaces(result);
		},

		subtract: function() {
			var result = a - b - mysteriousVariable;
			return toFixedTwoPlaces(result);
		}
	}
}

function toFixedTwoPlaces(value) {
	return value.toFixed(2);
}

var myCalculator = mysteriousCalculator(10.01, 2.01);
myCalculator.add() // 15.02
myCalculator.subtract() // 5.00
