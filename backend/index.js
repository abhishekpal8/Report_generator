const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const pdfTemplate = require("./documents/index.js")
const app = express()

const port = 5000
const puppeteer = require("puppeteer")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


let obj={
    invoiceID: "FDSDFS232",
    invoiceDate: "24/05/2023",
    customerName: "Manish",
    MobileNumber: "9993805253",
    loadId: "DFSDF233",
    bookingId: "DFDF233",
    origin: "PUNE",
    destination: "DELHI",
    loadPostCharges: "330",
    convenienceFee: "330",
    CGST: "33",
    CGSTPercentage: "9.0",
    SGST: "33",
    SGSTPercentage: "9.0",
    Total: "40"
}

app.get('/generate-pdf', async (req, res) => {

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(pdfTemplate(obj));
        const pdfBuffer = await page.pdf({
            printBackground: true
        });
        await browser.close();
        res.setHeader('Content-Disposition', 'attachment; filename=generated.pdf');
        res.setHeader('Content-Type', 'application/pdf');
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
});
app.listen(port, () => console.log(`port is ${port}`))