import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import usePdfViewerStore from '@/store/pdfViewerStore';
import AccordianContentComponent from './AccordianContentComponent';
import { scoreData } from '@/data/courseWorkEvalution';



const ResultAccordian = () => {
    const { isExpanded, setToggle } = usePdfViewerStore();
    const [expandedItems, setExpandedItems] = useState<string[]>([]);


    const handleAccordionChange = (value: string[]) => {
        console.log("Value",value)
        if(value.length >0 ){
            setToggle(false)
        }else{
            setToggle(true)
        }
        setExpandedItems(value)
    };

    return (
        <div className="flex flex-col space-y-2 overflow-y-auto">

            <div className={`flex justify-between bg-white rounded-2xl p-4 px-5  ${isExpanded ? "w-[350px]" : "w-[500px]"}`}>
                <div className="space-y-1">
                    <p className=" text-sm capitalize">overall score</p>
                    <p className="text-2xl font-semibold">Remark : <span className="text-green">Good</span></p>
                    <p className="text-xs text-nutral">Excluded on 12 jul 2024</p>
                </div>

                <div>
                    <div className="relative size-[85px]">
                        <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" stroke-width="4"></circle>
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-green" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="65" stroke-linecap="round"></circle>
                        </svg>

                        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <span className="text-center text-lg font-bold">12/10</span>
                        </div>
                    </div>
                </div>
            </div>

            <Accordion
                type="multiple"
                className="w-full space-y-2"
                onValueChange={handleAccordionChange}
            >
                {
                    scoreData.map((scope, i) => (
                        <AccordionItem
                            value={scope.criteria}
                            key={i}
                            className={`${isExpanded ? "w-[350px]" : "w-[500px]"}`}
                        >

                            <AccordionTrigger
                                className={`flex gap-2 justify-between bg-white ${expandedItems.includes(scope.criteria) ? 'rounded-t-2xl ' :"rounded-2xl "} p-4 px-5  focus:no-underline  border-b-2`}

                            >
                                <div>
                                    <div className="relative size-16 ">
                                        <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" stroke-width="4"></circle>
                                            <circle cx="18" cy="18" r="16" fill="none" className={`stroke-current ${scope.ringColor}`} stroke-width="4" stroke-dasharray="100" stroke-dashoffset="65" stroke-linecap="round"></circle>
                                        </svg>

                                        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                            <span className="text-center text-sm font-bold">{scope.score}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-start text-left  w-full'>
                                    <p className='text-nutral'>{scope.criteria}</p>
                                    <p className='capitalize text-base'>{scope.title}</p>
                                </div>
                            </AccordionTrigger>

                            <AccordianContentComponent
                                scope={scope}
                            />

                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    )
}

export default ResultAccordian