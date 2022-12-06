import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <iframe
style={{width:"700px", height:"400px"}}
        src="https://online.fliphtml5.com/zfgct/mmff/"
        seamless="seamless"
        scrolling="no"
        frameBorder="0"
        allowTransparency={true}
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}
