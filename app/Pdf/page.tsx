import React from "react";
import PDF from "./pdf";
import PDFDownloadButton from "./pfddwld";
import htmlRenderers from "./pdfhtml";

function page() {
  return (
    <div>
      <PDF />
      <PDFDownloadButton />
      <htmlRenderers />
    </div>
  );
}

export default page;
