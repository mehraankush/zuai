"use client"
import React, { useRef, useState } from 'react'
import { MdUploadFile } from "react-icons/md";


import SelectBtn from '@/components/common/SelectBtn'
import { RxCross2 } from "react-icons/rx";
import { IoIosCheckmarkCircle } from "react-icons/io";
import useStore from '@/store';



const UploadfileComponent = () => {

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const { setPdf } = useStore();


    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileSizeInMB = file.size / (1024 * 1024);
            if (fileSizeInMB > 25) {
                setError('File size exceeds the limit of 25MB');
                setUploadedFile(null);
                setPdf(null)
                setPreviewUrl(null);
            } else {
                setError(null);
                setUploadedFile(file);
                setPdf(file)
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewUrl(reader.result as string);
                };
                reader.readAsDataURL(file);
            }
        }
    };

    const handleClearFile = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setUploadedFile(null);
        setPreviewUrl(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <label
                id="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-[250px] border-dashed rounded-lg cursor-pointer bg-white  hover:bg-gray-100 text-gray100  dashborder"
            >
                {uploadedFile && previewUrl ? (
                    <div className="flex gap-2 items-center w-[250px] border border-slate-300 rounded-xl relative p-2">
                        <div
                            className='border border-slate-300 rounded-full absolute -top-2  -right-3 p-1'
                            onClick={handleClearFile}
                        >
                            <RxCross2 className="w-3 h-3 cursor-pointer" />
                        </div>

                        <embed
                            src={previewUrl}
                            className="w-[80px] h-[70px] object-contain border rounded-xl"
                        />
                        <div className='flex items-center gap-1  justify-center'>
                            <IoIosCheckmarkCircle className="!w-6 !h-6 text-green-500 text-green" />
                            <p className="text-xs w-[100px] overflow-hidden h-4 line-clamp-1">{uploadedFile.name}</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col items-center justify-center">
                                <MdUploadFile
                                className="w-10 h-10 mb-4 "
                                aria-hidden="true"
                            />
                            <p className="mb-2 text-sm ">
                                <span className="font-semibold capitalize"></span> Drag and Drop a PDF
                            </p>
                            <p className="text-xs ">*Limit 25MB per file</p>
                            <SelectBtn
                                onClick={handleButtonClick}
                                className='mt-6'
                            >
                                <p className='text-purple font-semibold'>Upload your file</p>
                            </SelectBtn>
                        </div>
                    </>
                )}

                <input
                    ref={fileInputRef}
                    id="dropzone-file"
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>
            {error && (
                <p className="text-red-500">{error}</p>
            )}
        </div>
    )
}

export default UploadfileComponent