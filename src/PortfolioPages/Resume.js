import React from 'react'
import {Component} from 'react'
import "./PageStyle.css";
import { Document, Page, pdfjs } from "react-pdf";

class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
            <Document
                file="NolanResume.pdf"
                onLoadSuccess={this.onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
        );
    }
}

export default Resume

// export default function Resume() {
//     return (
//         <div>
//             <Document file="NolanResume.pdf" />
//         </div>
//     )
// }