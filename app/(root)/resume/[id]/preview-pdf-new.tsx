"use client";
import dynamic from "next/dynamic";
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

const PreviewPdf = ({data}) => {
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
