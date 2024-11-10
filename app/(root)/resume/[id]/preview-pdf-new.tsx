"use client";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { CloudDownload } from "lucide-react";

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
  isMobile: boolean;
};
const PreviewPdf = ({ data, isMobile }: Props) => {
  return (
    <div>
      {isMobile ? (
        <div className="w-full h-svh flex items-center justify-center ">
          <PDFDownloadLink
            document={<PDF data={data} />}
            fileName={`${data.resume_title}.pdf`}
            className="mt-4 flex w-49 justify-center rounded bg-blue-600 p-3 font-medium text-gray transition-all duration-300 hover:bg-blue-500 active:scale-95 disabled:bg-slate-500"
          >
            {({ blob, url, loading, error }) => (
              <>
                <CloudDownload className="mr-3 text-white" />
                {loading ? "Loading ..." : <span className="text-white">Download now!</span>}
              </>
            )}
          </PDFDownloadLink>
        </div>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex items-center justify-center">
            <PDFViewer width="1000" height="600">
              <PDF data={data} />
            </PDFViewer>
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default PreviewPdf;
