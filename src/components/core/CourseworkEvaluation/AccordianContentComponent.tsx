import { AssessmentType } from '@/data/courseWorkEvalution';
import { AccordionContent } from '@radix-ui/react-accordion'
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { IoAlertCircleSharp } from "react-icons/io5";


const AccordianContentComponent = ({
    scope
}: { scope: AssessmentType }) => {
    return (
        <AccordionContent className='bg-white rounded-b-2xl text-sm font-light p-2 space-y-2'>
            <p className='px-2'>{scope.content.description}</p>
            <div className='px-2'>
                <p className='font-semibold text-lg'>Strengths</p>
                <div className='rounded-2xl border-2 border-green p-2'>
                    {
                        scope.content.strength.map((strength, i: number) => (
                            <div key={i} className='flex gap-1'>
                                <FaCircleCheck className='w-6 h-6 text-green ' />
                                <p className='px-2 font-medium' key={i}>{strength}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='px-2'>
                <p className='font-semibold text-lg'>Scope of improvement</p>
                <div className='rounded-2xl border-2 border-yellow-500 p-2'>
                    {
                        scope.content.scope.map((scope, i: number) => (
                            <div key={i} className='flex gap-1'>
                                <IoAlertCircleSharp className='w-7 h-7 text-yellow-500 ' />
                                <p className='px-2 font-medium' key={i}>{scope}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>

            </div>
        </AccordionContent>
    )
}

export default AccordianContentComponent