
const htmlString =({invoiceID,invoiceDate,customerName,MobileNumber,loadId,bookingId,origin,destination,loadPostCharges,convenienceFee,CGST,CGSTPercentage,SGST,SGSTPercentage,Total})=>{
    return  `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
      
        <title>Document</title>
        <style>
    .maindiv{
        width:"90%";
        margin:"auto";
        padding:"20px";
        border:"3px dotted red";
        box-sizing:"border-box";
    }
    .header{
        height: 5vh;
        width: 95%; 
        background-color: rgb(223,30,74);
        display: flex;
        align-items: center;
        padding:0px 20px;
        justify-content: space-between;
    }
    .header>div:first-child{
        width: 20%;
        color: white;
        font-weight: bold;
    }
    .header>div:nth-child(2){ 
        width: 60%;
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
    }
    .header>div:nth-child(2)>div{
        width: 30%;
    }
    
    .companyDetails{
        height: auto;
        width: 100%;
        border-bottom: 1px solid black;
        display: flex;
        justify-content: space-between;
    }
    .companyDetails>div:first-child{
        width: 40%;
        font-size: smaller;
        padding: 10px;
      
    }
    .companyDetails>div:first-child>img{
        width: 40%;
       
    }
    .companyDetails>div:nth-child(2){
        max-width: 30%;
        font-size: smaller;
        padding: 10px;
        text-align: right;
    }
    .invoiceDetails{
        display: flex;
        justify-content: space-between;
      
    }
    .billDetails{
        display: flex;
        justify-content: space-between;
        padding: 5px 5px;
    }
    .billHeading{
        /* border-bottom:3px dashed; */
        display: flex;
        justify-content: space-between;
    }
    .note{
        font-size: smaller;
    }
        </style>
    </head>
    <body style="width:90%;padding:10px;margin:auto;margin-top:20px">
        <div class='maindiv'>
            <div class='header'>
                <div class='heading'>TAX INVOICE</div>
               
            </div>
            <div class='companyDetails'>
        
                <div>
                    <img src="" alt="" /> <br />
                    <strong>Ease my transport</strong>
                    <p> Shanthi Complex, Office No: 12,13,14,15(1st Floor), Jawaharlal Nehru Rd, Mangalwar Peth, Narpathgiri Chowk, Pune, Maharashtra 411011</p>
                   
                </div>
                <div>
                    <p>State GSTIN: 23AACJS1243F1ZR</p>
                    <p>SAC Code: 999799</p>
                    <p>Sarvice Tax Category: Business Auxiliary Service</p>
                    
                </div>
            </div>
            <div class='invoiceDetails'>
               
                <div>
                    <span>Invoice ID ${invoiceID}</span>
                </div>
                <div>
                    <span>Invoice Date ${invoiceDate}</span>
                </div>
            </div> <hr />
            <div class='invoiceDetails'>
               
              
                   <span>Customer Name ${customerName}</span>
              
                   <span>Moblie Number ${MobileNumber}</span>
              
           </div> <hr />
             <div class='invoiceDetails'>
               
             
                   <span>Load ID: ${loadId}</span>
              
                   <span>Booking ID: ${bookingId}</span>
              
           </div> <hr />
           <div class='invoiceDetails'>
               
             
               <span>Origin: ${origin}</span>
          
               <span>Destination: ${destination}</span>
          
        </div> <hr />
           <div>
           <div class='billHeading'>
            <strong>Description</strong>
            <strong>Amount (INR)</strong>
           </div> 
           <div class='billDetails'>
            <span>Load Post Charges </span>
            <span>₹${loadPostCharges}</span>
           </div> 
           <div class='billDetails'>
            <span>Convenience Fee </span>
            <span>₹${convenienceFee}</span>
           </div> 
           <div class='billDetails'>
            <span>CGST <br /> ${CGSTPercentage}%</span>
            <span>₹${CGST}</span>
           </div> 
           <div class='billDetails'>
            <span>SGST <br />${SGSTPercentage}%</span>
            <span>₹${SGST}</span>
           </div> 
           </div>
           <hr />
           <div class='invoiceDetails'>
                   <span>Total</span>
               
                   <span>₹${Total}</span>
           </div> <hr />
           <div class='note'>
            <span>Please Note:</span>
            <ol>
                <li>This is a electronically generated invoice and done not require a digital signature.</li>
                <li>Vide Circular No. 146/02/2021 - GST dated 23rd February 2021, Printing of Dynamic QR code is not mandatory in case of Prepaid invoice since cross referene of payment is available.</li>
            </ol>
           </div>
            </div>
           
    </body>
    </html>
    `
} 

module.exports = htmlString