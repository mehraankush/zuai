"use client";
import React, { useEffect, useState } from "react";
import CourseWorkCard from "@/components/common/CourseWorkCard";
import { TabsComponent } from "./TabsComponent";
import { useRouter } from "next/navigation";

const courseWorkData = [
    {
        title: "How does the temperature of a Copp lo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, maiores excepturi repudiandae dolorum voluptas fugiat li",
        description: "Deploy your new project in one-click. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab fuga u",
    },
    {
        title: "How does the temperature of a Copp lo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, maiores excepturi repudiandae dolorum voluptas fugiat li",
        description: "Deploy your new project in one-click. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab fuga u",
    },
    {
        title: "How does the temperature of a Copp lo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, maiores excepturi repudiandae dolorum voluptas fugiat li",
        description: "Deploy your new project in one-click. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab fuga u",
    },
];
interface CourseWorkProps {
    title: string;
    description: string;
    pdf: any
}
export const renderCourseWorkCards = (courses: any[], onClick?: (key: string) => void) =>
    courses?.map((course, index) => (
        <CourseWorkCard
            key={index}
            title={course.title}
            description={"Deploy your new project in one-click. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab fuga u"}
            pdfImg={course.pdf}
            onClick={onClick && (() => onClick(course.key))}
        />
    ));
const initialDisplayCount = 2;

const CourseWork = () => {
    const [showAll, setShowAll] = useState(false);
    const [savedCoursework, setSavedCoursework] = useState<any[] | undefined>()
    const router = useRouter()


    useEffect(() => {
        const courseworkKeys = Object.keys(localStorage).filter(key => key.startsWith('coursework'));
        const savedCoursework = courseworkKeys.reduce<any[]>((acc, key) => {
            const value = localStorage.getItem(key);
            if (value) {
                try {
                    const { pdf, subject, title, courseworkType } = JSON.parse(value);
                    return [
                        ...acc,
                        { key, pdf, subject, title, courseworkType }
                    ];
                } catch (error) {
                    console.error(`Error parsing value for key "${key}":`, error);
                    return acc;
                }
            }
            return acc;
        }, []);
        setSavedCoursework(savedCoursework);
    }, []);

    const visibleCourses = showAll ? savedCoursework : (savedCoursework?.slice(0, initialDisplayCount) ?? []);

    const handleClick = (key: string) => {
        router.push(`/coursework/${key}`)
    }

    console.log("savedCoursework", savedCoursework)

    return (
        <section className="mt-10 pb-10">
            <div>
                <h1 className="text-gray200 text-lg">My coursework</h1>
                <div className="flex justify-center">
                    <div className="grid lg:grid-cols-2 gap-3 pt-3">
                        {visibleCourses && renderCourseWorkCards(visibleCourses, handleClick)}
                    </div>
                </div>
                {!showAll && savedCoursework && savedCoursework.length > initialDisplayCount && (
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="text-slate-400 text-sm"
                        >
                            View all
                        </button>
                    </div>
                )}
                {savedCoursework && savedCoursework.length === 0 && (
                    <div className="mt-4 text-center text-gray200">
                        <p>No coursework available.</p>
                    </div>
                )}
            </div>

            <div className="mt-6">
                <h1 className="text-gray200 text-lg">Explore coursework</h1>
                <TabsComponent />
                <div className="flex justify-center ">
                    <div className="grid lg:grid-cols-2 gap-5 pt-3">
                        {renderCourseWorkCards(courseWorkData)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseWork;
