"use client";
import { PDFViewer } from "@react-pdf/renderer";

// const PDFViewer = dynamic(
//   () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   },
// );
// import PDFDownloadButton from "./pfddwld";
import PDF from "./pdf";
import { ResumeType } from "./typings";
import { Suspense } from "react";
type Props = {
  data: ResumeType;
}
const PreviewPdf = ({data}:Props) => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex items-center justify-center">
        <PDFViewer width="1000" height="600">
          <PDF data={data} />
        </PDFViewer>
      </div>
      </Suspense>
    </>
  );
};

export default PreviewPdf;
