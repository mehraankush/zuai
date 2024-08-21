import CourseWork from "@/components/core/courseWork/CourseWork";
import DocumentUploadComponent from "@/components/core/DocumentUpload/DocumentUploadComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto w-full">

      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col justify-center items-center  lg:flex-row gap-4  pt-[100px]  w-full">

          <div className="w-[650px] space-y-5">
            <p className=" pl-2 tracking-wide text-[24px] font-bold leading-[normal]  lg:text-[32px] text-black">
              Hey IB Folks ! Unsure about the quality of your answers?
              <span className="text-purple pl-1">We get you.</span></p>
            <div className="p-3">

              <DocumentUploadComponent />
            </div>
          </div>

          <div className="flex-1">
            <Image
              src='/home/model.png'
              width={1000}
              height={1000}
              alt="model"
              className="h-[650px] w-[400px]"
            />
          </div>

        </div>

        <div className="px-5">
          <CourseWork />
        </div>

      </div>

    </main>
  );
}
