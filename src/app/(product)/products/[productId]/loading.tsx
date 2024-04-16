import TopHeader from "@/components/layouts/TopHeader";
import Share from "@/components/images/Share";

export default function Loading() {
  return (
    <>
      <TopHeader />
      <div className="px-[20px] w-full">
        <div className="h-[373px] w-full bg-gray-200 animate-pulse" />

        <div className="py-[7px] px-[16px] flex justify-end border-b border-b-[#e5e5e5] ">
          <Share width={24} height={24} />
        </div>

        <div className="my-[15px] w-full">
          <div className="h-[24px] w-1/5 bg-gray-200 animate-pulse mb-[5px]" />
          <div className="h-[24px] w-2/5 bg-gray-200 animate-pulse mb-[5px]" />
          <div className="h-[50px] w-1/4 bg-gray-200 animate-pulse mb-[10px]" />
          <div className="h-[100px] w-full bg-gray-200 animate-pulse mb-[10px]" />
          <div className="h-[200px] w-full bg-gray-200 animate-pulse mb-[10px]" />
        </div>
      </div>
    </>
  );
}
