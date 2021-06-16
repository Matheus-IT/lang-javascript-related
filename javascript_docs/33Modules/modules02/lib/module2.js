function calcAverage(grades) {
	var sum = grades.reduce((a, b) => a + b);
	return sum / grades.length;
}

module.exports = calcAverage;