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
  };
  let doc = new jsPDF({
    orientation: "landscape",
    unit: "cm",
    format: "letter",
    // putOnlyUsedFonts:true
  });
  doc.setFontSize(14);
  doc.setFont("Sarai_07");
  //   doc.addFont('Devanagari.ttf', 'LohitMarathi', 'normal');

  // doc.text(1, 3, 'शुभम');
  doc.text(data.receiptNo, 5, 13.1);
  doc.text(data.receiptNo, 18.5, 13.1);
  doc.text(formattedDate(data.date), 12, 13.15);
  doc.text(formattedDate(data.date), 25.75, 13.15);

  //   doc.text(data.amount, 4.1, 6.30)
  //   doc.text(data.amount, 10, 6.30)
  doc.text(data.name, 4, 14.15);
  doc.text(data.name, 17.75, 14.15);

  doc.text(data.numInWords + " Only", 5, 15.9);
  doc.text(data.numInWords + " Only", 17, 15.9);

  doc.setFontSize(16);
  doc.text(data.mobile.toString(), 3.8, 17.63);
  doc.text(data.mobile.toString(), 17.5, 17.63);
  doc.text(data.amount.toFixed(2).toString(), 10.8, 17.63);
  doc.text(data.amount.toFixed(2).toString(), 24.3, 17.63);

  await doc.save(data.receiptNo + "_Receipt.pdf");
  NotificationManager.success(
    "Receipt is downloading...",
    data.receiptNo + "_Receipt.pdf"
  );
};
