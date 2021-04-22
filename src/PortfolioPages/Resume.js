import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "./PageStyle.css"

export default function Resume(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <>
      <Document
        file="NolanResume.pdf"
        options={{ workerSrc: "/public/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}



// import React from 'react';
// // import {Component} from 'react';
// import "./PageStyle.css";
// import { Document, Page } from 'react-pdf';

// import NolanResume from "../Components/Images/NolanResume.pdf";

// export default function Resume() {
//   return (
//     <Document file={NolanResume}>
//       <Page pageNumber={1} />
//     </Document>
//   );
// }




// import React from 'react'
// import {Component} from 'react'
// import "./PageStyle.css";
// import { Document, Page, pdfjs } from "react-pdf";

// class Resume extends Component {
//     state = {
//         numPages: null,
//         pageNumber: 1,
//     }

//     onDocumentLoadSuccess = ({ numPages }) => {
//         this.setState({ numPages });
//     }

//     render() {
//         const { pageNumber, numPages } = this.state;

//         return (
//             <div>
//             <Document
//                 file="NolanResume.pdf"
//                 onLoadSuccess={this.onDocumentLoadSuccess}
//             >
//                 <Page pageNumber={pageNumber} />
//             </Document>
//             <p>Page {pageNumber} of {numPages}</p>
//         </div>
//         );
//     }
// }

// export default Resume

// export default function Resume() {
//     return (
//         <div>
//             <Document file="NolanResume.pdf" />
//         </div>
//     )
// }