"use client";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";

import ResultAccordian from "@/components/core/CourseworkEvaluation/ResultAccordian";
import PdfReaderHeader from "@/components/core/CourseworkEvaluation/PdfReaderHeader";

import "@react-pdf-viewer/core/lib/styles/index.css";
import '@react-pdf-viewer/core/lib/styles/index.css';
import usePdfViewerStore from "@/store/pdfViewerStore";
import { useEffect, useState } from "react";
import { base64ToBlob } from "@/utils/PdfDecoder";
import { useRouter } from "next/navigation";



const Page = ({ params }: { params: { slug: string } }) => {

  const zoomPluginInstance = zoomPlugin();
  const fullScreenPluginInstance = fullScreenPlugin();
  const router = useRouter()

  const { isExpanded } = usePdfViewerStore();
  const [savedItem, setsavedItem] = useState<any>()
  const [fileUrl, setFileUrl] = useState<any | undefined>()

  useEffect(() => {
    const item = localStorage.getItem(params.slug);
    if (item) {
      const parsedItem = JSON.parse(item);
      setsavedItem(parsedItem);
      if (parsedItem.pdf) {
        const pdfBlob = base64ToBlob(parsedItem.pdf, 'application/pdf');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setFileUrl(pdfUrl);
      }
    }else{
      router.push('/')
    }
  }, [params]);

 

  return (
    <div className=" flex gap-5 w-full justify-center pt-[80px] min-h-screen text-black100 overflow-y-auto">
      <div className="flex flex-col gap-5 lg:flex-row justify-between w-4/5">

        <div className={`!h-[600px] overflow-hidden  rounded-b-3xl ${isExpanded ? 'w-full lg:w-[750px]' : 'w-full lg:w-[600px] justify-start'}`}>

          <div>
            <PdfReaderHeader
              zoomPluginInstance={zoomPluginInstance}
              fullScreenPluginInstance={fullScreenPluginInstance}
              title={savedItem?.title}
            />
          </div>


          <Worker
            workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
            <Viewer
              fileUrl={fileUrl}
              plugins={[zoomPluginInstance, fullScreenPluginInstance]}
              enableSmoothScroll
              defaultScale={0.8}
            />
          </Worker>
        </div>


        <div className="flex justify-center">
          <ResultAccordian />
        </div>
      </div>


    </div>
  );
}

export default Page;
