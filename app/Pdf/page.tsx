import PDF from "./pdf";
import PDFDownloadButton from "./pfddwld";
import {htmlRenderers} from "./pdfhtml";

function Page() {
  return (
    <div>
      <PDF />
      <PDFDownloadButton />
      {/* {htmlRenderers} */}
    </div>
  );
}

export default Page;
