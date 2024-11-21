const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html"
        },
        body: Buffer.from(htmlContent).toString('base64'),
        isBase64Encoded: true
    };
};
