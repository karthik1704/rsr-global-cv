"use client";

import { PDFViewer } from "@react-pdf/renderer";
// import PDFDownloadButton from "./pfddwld";
import PDF from "@/app/(root)/Pdf/pdf";
import { ResumeType } from "./typings";

type Props = {
  data:ResumeType;
}

const PreviewPdf = ({ data }:Props) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <PDFViewer width="1000" height="600">
          <PDF data={data} />
        </PDFViewer>
      </div>
    </>
  );
};

export default PreviewPdf;
