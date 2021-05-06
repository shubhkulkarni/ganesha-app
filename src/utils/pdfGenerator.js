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
  doc.setFontSize(12);
  doc.setFont("Sarai_07");
  //   doc.addFont('Devanagari.ttf', 'LohitMarathi', 'normal');

  // doc.text(1, 3, 'शुभम');
  doc.text(data.receiptNo, 5, 11.71);
  doc.text(data.receiptNo, 18, 11.81);
  doc.text(formattedDate(data.date), 12, 11.71);
  doc.text(formattedDate(data.date), 25.2, 11.8);

  //   doc.text(data.amount, 4.1, 6.30)
  //   doc.text(data.amount, 10, 6.30)
  doc.text(data.name, 4, 12.65);
  doc.text(data.name, 17.15, 12.65);

  doc.text(data.numInWords + " Only", 5.5, 14.45);
  doc.text(data.numInWords + " Only", 18.5, 14.45);

  doc.setFontSize(15);
  doc.text(data.mobile.toString(), 4, 16.12);
  doc.text(data.mobile.toString(), 17, 16.14);
  doc.text(data.amount.toFixed(2).toString(), 11, 16.13);
  doc.text(data.amount.toFixed(2).toString(), 24.2, 16.13);

  await doc.save(data.receiptNo + "_Receipt.pdf");
  NotificationManager.success(
    "Receipt is downloading...",
    data.receiptNo + "_Receipt.pdf"
  );
};
