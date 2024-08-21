"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { base64ToBlob } from '@/utils/PdfDecoder'


type BadgeType = {
    img: string;
    text: string;
}

interface CourseWorkCardProps {
    className?: string;
    title: string;
    description: string;
    pdfImg?:string;
    onClick?: () => void;
}

const badgeData: BadgeType []= [
    { img: "/card/user.svg", text: "Physical HL" },
    { img: "/card/watch.svg", text: "18 min read" },
    { img: "/card/doc.svg", text: "2569 words" },
    { img: "/card/star.svg", text: "7/7" },
    { img: "/card/hand.svg", text: "English" },
];

const CourseWorkCard: React.FC<CourseWorkCardProps> = ({
    title,
    description,
    className,
    pdfImg,
    onClick
}) => {
    const pdfBlob = pdfImg ? base64ToBlob(pdfImg, 'application/pdf') : null;

    return (
        <Card
            className={`w-[470px] cursor-pointer p-3 overflow-hidden border border-[#F4EAD8] bg-gradient-to-r from-white via-[#E9D8F4] to-transparent  shadow-none rounded-xl ${className || ''}`}
            onClick={onClick}
        >
            <div className='flex'>
                <CardHeader className='flex gap-1 p-1 rounded-xl'>
                    {pdfBlob && (
                        <object
                            data={URL.createObjectURL(pdfBlob)}
                            type="application/pdf"
                            className="w-[120px] bg-white"
                            style={{
                                border: 'none',
                                overflow: 'hidden',
                            }}
                        >
                            <p>
                                Your browser does not support PDF viewing. Please download the PDF to
                                view it.
                            </p>
                        </object>
                    )}
                </CardHeader>
                <CardContent className='p-1 w-[70%] space-y-1'>
                    <CardTitle className='text-lg text-black100 h-[3.5rem] line-clamp-2 overflow-hidden capitalize'>
                        {title}
                    </CardTitle>
                    <CardDescription className='h-[2rem] text-xs line-clamp-2 overflow-hidden text-gray100 font-light'>
                        {description}
                    </CardDescription>

                    <CardFooter className='pt-1 p-1 pl-0 flex flex-wrap gap-1 overflow-hidden pb-1'>
                        {badgeData.map((badge, i) => (
                            <Badge
                                variant="secondary"
                                key={i}
                                className='bg-white text-gray100 rounded-xl flex items-center p-1 gap-1'
                            >
                                {badge.img && (
                                    <Image
                                        alt='badge'
                                        src={badge.img}
                                        className='w-4 h-4' width={100} height={100}
                                    />
                                )}
                                <p>{badge.text}</p>
                            </Badge>
                        ))}
                    </CardFooter>

                </CardContent>
            </div>
        </Card>
    );
};

export default CourseWorkCard