import jsPDF from "jspdf";
import { formattedDate } from "./dateFormatter";
import { numToWords } from "./numToWords";
import { NotificationManager } from "react-notifications";
import "./Sarai_07";
export const generatePdf = async (receiptData) => {

  const data = {
    ...receiptData,
    amount: Number(receiptData.amount),
    numInWords: numToWords(Number(receiptData.amount)),
    date: JSON.stringify(receiptData.date).includes("/") ? receiptData.date : formattedDate(receiptData.date)
  };
  let doc = new jsPDF({
    orientation: "portrait",
    unit: "in",
    format: "a4",
    // putOnlyUsedFonts:true
  });
  doc.setFontSize(14);
  
  //   doc.addFont('Devanagari.ttf', 'LohitMarathi', 'normal');
  doc.setFont("Sarai_07","400");
  // doc.text(1, 3, 'शुभम');
  doc.text(data.receiptNo, 2.4, 2.3);

  doc.text(data.date, 5.8, 2.3);
  

  //   doc.text(data.amount, 4.1, 6.30)
  //   doc.text(data.amount, 10, 6.30)
  doc.setFont("Sarai_07","","bold");
  doc.text(data.name, 2.4, 2.67,{});
  doc.setFont("Sarai_07","400");
  doc.text("Rs. "+ data.amount.toFixed(2).toString() + " Only", 2.4, 3.07);
  
  doc.text(data.numInWords + "Rupees Only", 2.4, 3.47);
 

  
  // doc.text(data.mobile.toString(), 3.8, 17.63);
  // doc.text(data.mobile.toString(), 17.5, 17.63);
  

  await doc.save(data.receiptNo + "_Receipt.pdf");
  NotificationManager.success(
    "Receipt is downloading...",
    data.receiptNo + "_Receipt.pdf"
  );
};
