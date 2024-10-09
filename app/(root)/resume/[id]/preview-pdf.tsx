"use client";

import { PDFViewer } from "@react-pdf/renderer";
// import PDFDownloadButton from "./pfddwld";
import PDF from "@/app/(root)/Pdf/pdf";
import { ResumeType } from "./typings";
import { Suspense } from "react";

type Props = {
  data:ResumeType;
}

const PreviewPdfOld = ({ data }:Props) => {
  return (
    <>
    <Suspense fallback={<div className="flex items-center justify-center">Loading...</div>}>
      <div className="flex items-center justify-center">
        <iframe width="1000" height="600">
          <PDFViewer width="1000" height="600">
            <PDF data={data} />
          </PDFViewer>
        </iframe>
      </div>
      </Suspense>
    </>
  );
};

export default PreviewPdfOld;
