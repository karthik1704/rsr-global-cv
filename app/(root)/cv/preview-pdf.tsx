'use client';

import { PDFViewer } from "@react-pdf/renderer";
// import PDFDownloadButton from "./pfddwld";
import PDF from '@/app/Pdf/pdf'



const PreviewPdf = ({formdata}) => {
  return (
    <>
      
      <div className="flex items-center justify-center">
      <PDFViewer width="1000" height="600">
        <PDF data= {formdata}/>
      </PDFViewer>
      </div>
     
    </>

  );
};

export default PreviewPdf;
