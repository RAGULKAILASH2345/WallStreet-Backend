/**
 * Returns a timestamp string to use for timestamped files
 * @returns {string} String of current datetime in YYYY.MM.DD-HH:MM:SS format
 */
const dateForFilename = () => {
	const dt = new Date();
	return `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}-${dt.getHours()}-${dt.getMinutes()}-${dt.getSeconds()}`;
}

module.exports = {
	dateForFilename,
}

