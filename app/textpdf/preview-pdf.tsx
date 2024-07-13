"use client";

import { PDFViewer } from "@react-pdf/renderer";
// import PDFDownloadButton from "./pfddwld";
import PDF from "./pdf";

const PreviewPdf = ({}) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <PDFViewer width="1000" height="600">
          <PDF />
        </PDFViewer>
      </div>
    </>
  );
};

export default PreviewPdf;
