import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

export async function generatePembatalanHidupPDF(form: {
  nama: string;
  bin: string;
  jk: string;
  ttl: string;
  porsi: string;
  alamat: string;
  hp: string;
}) {
  const templateBytes = await fetch("/templates/pembatalan-hidup.pdf").then((res) =>
    res.arrayBuffer()
  );

  const pdfDoc = await PDFDocument.load(templateBytes);
  const page = pdfDoc.getPage(0);

  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const write = (text: string, x: number, y: number, bold = false) => {
    page.drawText(text, {
      x,
      y,
      size: 11,
      font: bold ? fontBold : font,
      color: rgb(0, 0, 0),
    });
  };

  write(form.nama, 170, 610);
  write(form.bin, 170, 590);
  write(form.jk, 170, 570);
  write(form.ttl, 170, 550);
  write(form.porsi, 170, 530);
  write(form.alamat, 170, 510);
  write(form.hp, 170, 490);

  write(form.nama, 370, 150, true);

  const pdfBytes = await pdfDoc.save();
  saveAs(new Blob([pdfBytes], { type: "application/pdf" }), "Permohonan Pembatalan - Masih Hidup.pdf");
}
