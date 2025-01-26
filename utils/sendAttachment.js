const fastCSV = require("fast-csv");
const stream = require("stream");

const sendCSV = async (res, filename, data) => {
	const csvData = await fastCSV.writeToBuffer(data, { headers: true });

	// refer https://stackoverflow.com/a/45922316/
	const fileStream = new stream.PassThrough();
	fileStream.end(csvData);

	res.attachment(filename + ".csv");
	res.type("text/csv");

	fileStream.pipe(res);
	return;
}

module.exports = {
	sendCSV,
}

