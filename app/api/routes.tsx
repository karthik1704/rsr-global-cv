// import { allPrivateFields } from "@content";
import ReactPDF from "@react-pdf/renderer";
import { NextApiHandler } from "next";
import PDF from "../Pdf/pdf";

const privateKey = process.env.PRIVATE_KEY;

const handler: NextApiHandler = async (req, res) => {
  // const secret = req.query.secret;

  // let privateInformation;

  const pdfStream = await ReactPDF.renderToStream(
    <PDF />
  );
  res.setHeader("Content-Type", "application/pdf");
  pdfStream.pipe(res);
  pdfStream.on("end", () => {});
};

export default handler;
