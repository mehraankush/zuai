"use client"
import React from 'react'
import { ZoomPlugin, } from "@react-pdf-viewer/zoom";
import { FullScreenPlugin } from "@react-pdf-viewer/full-screen";


import { GoScreenFull } from "react-icons/go";
import { GoZoomIn } from "react-icons/go";
import { GoZoomOut } from "react-icons/go";
import { BiCollapseAlt } from "react-icons/bi";
import usePdfViewerStore from '@/store/pdfViewerStore';



const PdfReaderHeader = ({
    zoomPluginInstance,
    fullScreenPluginInstance,
    title
}: {
    zoomPluginInstance: ZoomPlugin,
    fullScreenPluginInstance: FullScreenPlugin,
    title:string
}) => {

    const { ZoomIn, ZoomOut, CurrentScale } = zoomPluginInstance;
    const { EnterFullScreen } = fullScreenPluginInstance;
    const { isExpanded, toggleExpand } = usePdfViewerStore();


    return (

        <div className=" rounded-t-xl bg-[rgba(255,255,255,0.46)] border-b p-4 flex justify-between ">
            <p
                className="max-w-[184px] rounded-xl bg-white px-3 py-1 capitalize line-clamp-1 text-sm font-semibold">
                Maharishi Dayand unverity
            </p>
            <div className="flex gap-2 items-center  text-gray200">

                <div className="flex gap-2 items-center">
                    <ZoomOut>
                        {(props) => (
                            <button
                                className="zoom-button"
                                onClick={props.onClick}
                            >
                                <GoZoomOut size={15} />
                            </button>
                        )}
                    </ZoomOut>

                    <CurrentScale>
                        {(props) => (
                            <span className="text-sm  text-gray100">{`${Math.round(props.scale * 100)}%`}</span>
                        )}
                    </CurrentScale>
                    <ZoomIn>
                        {(props) => (
                            <button
                                className="zoom-button"
                                onClick={props.onClick}
                            >
                                <GoZoomIn size={15} />
                            </button>
                        )}
                    </ZoomIn>
                </div>
                <div className=" flex items-center">
                    <EnterFullScreen>
                        {(props) => (
                            <button
                                className="bg-white rounded-full p-1"
                                onClick={props.onClick}
                                title={"Enter full screen"}
                            >
                                <GoScreenFull size={15} />
                            </button>
                        )}
                    </EnterFullScreen>
                </div>
                <div
                    className='bg-white text-xs px-2 p-1 rounded-xl flex gap-1 items-center cursor-pointer'
                    onClick={toggleExpand}
                >
                    <BiCollapseAlt /> <p>{isExpanded ? "Collapse" : "Extend"}</p>
                </div>
            </div>
        </div>
    )
}

export default PdfReaderHeader