const { hrtime } = require("process");

module.exports = function(req, res){
    //tolocalestring er for din tid 24 eller AM/PM
    const timestamp = new Date().toLocaleString();
    let logStr = timestamp;
    const startTime = hrtime();

    res.on("finish", () => {
        const duration = hrtime(startTime)
        logStr += `
            Method: ${req.method}
            URL: ${req.url}
            Status ${res.statusCode} ${res.statusMessage}
            duration ${duration[0]}s ${duration[1]/1000000}ms`
        console.log(logStr)
    });
}