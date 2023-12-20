import React from "react";
import { Document, Page } from "react-pdf";

const MyDocument = () => (
  <Document file="../Assets/Chapter1.pdf">
    <Page pageNumber={1} />
  </Document>
);

export default MyDocument;
