"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import { Input } from '@/components/ui/input';
import SelectBtn from '@/components/common/SelectBtn';
import { DropdownMenuComponent } from '@/components/common/Dropdown';
import UploadfileComponent from './UploadfileComponent';
import useStore from '@/store';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';



const courseWOrkType = [
    "Tok Essay",
    "Extended Essay",
    "Intermediate Assessment",
]
const courseSubjectWorkType = [
    "Mathmatics",
    "English",
]

const DocumentUploadComponent = () => {
    const { coursework, setCourseworkType, setPdf, setSubject, setTitle } = useStore();
    const { toast } = useToast()
    const router = useRouter()


    const isButtonDisabled = !(coursework.pdf && coursework.courseworkType && coursework.subject && coursework.title);

    const handleSubmit = () => {
        const courseworkJson = { ...coursework };
        const pdfFile: any = coursework.pdf;

        const reader = new FileReader();
        reader.onloadend = () => {
            const dataUrl = reader.result as any;
            const base64String = dataUrl?.split(',')[1];
            courseworkJson.pdf = base64String;

            localStorage.setItem(`coursework-${coursework.title}`, JSON.stringify(courseworkJson));

            setPdf(null);
            setCourseworkType('');
            setSubject('');
            setTitle('');
            router.push(`/coursework/coursework-${coursework.title}`)
            console.log("After touter ")

            toast({
                title: `🥳 Coursework ${coursework.title} added `,
                description: "Thank you for your contribution",
            })
        };
        reader.readAsDataURL(pdfFile);
    };

    return (
        <section >
            <div className="bg-OffWhite rounded-2xl  p-2 lg:p-6 ">

                <UploadfileComponent />

                <div className='mt-5 flex flex-col gap-3'>

                    <div>
                        <p className='font-extralight text-gray100 text-sm'>Select your course & subjects*</p>
                        <div className='mt-2 flex gap-5'>
                            <DropdownMenuComponent
                                trigger={
                                    <p>Coursework Type</p>
                                }
                                options={courseWOrkType}
                                setState={setCourseworkType}
                            >

                            </DropdownMenuComponent>


                            <DropdownMenuComponent
                                trigger={<p>Subject</p>}
                                options={courseSubjectWorkType}
                                setState={setSubject}
                            />

                        </div>
                    </div>

                    <div>
                        <p className='font-extralight text-gray100 text-sm'>Enter your essay title*</p>
                        <div className='pt-2 w-1/2'>
                            <Input
                                type="text"
                                placeholder="How nation works..."
                                className='rounded-full  bg-white placeholder:text-gray-400'
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='pt-5'>
                        <SelectBtn
                            variant='primary'
                            className='pl-2 '
                            disabled={isButtonDisabled}
                            onClick={handleSubmit}
                        >
                            <Image
                                width={100} height={100}
                                alt='Evalute '
                                src={"/home/twinkle.svg"}
                                className='h-8 w-8'
                            />  <p className='text-lg'>Evalate your Score</p>
                        </SelectBtn>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default DocumentUploadComponent