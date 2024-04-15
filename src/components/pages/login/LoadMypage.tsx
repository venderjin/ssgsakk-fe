import TopHeaderIncludeIcon from "@/components/layouts/TopHeaderIncludeIcon";

const LoadMypage = () => {
  return (
    <>
      <TopHeaderIncludeIcon title="MY SSG" icon="cart" />
      <div className="px-[16px] pb-[20px]">
        <section className="pt-[24px] animate-pulse">
          <div className="h-[25px] bg-gray-200  w-2/6 mb-[5px]" />
          <div className="h-[25px] bg-gray-200  w-3/6 mb-[5px]" />
          <div className="h-[25px] bg-gray-200  w-4/6 mb-[5px]" />

          <div className="flex gap-2">
            <div className="h-[100px] bg-gray-200 rounded-md w-1/4 mb-[5px]" />
            <div className="h-[100px] bg-gray-200 rounded-md w-2/4 mb-[5px]" />
            <div className="h-[100px] bg-gray-200 rounded-md w-2/4 mb-[5px]" />
          </div>
        </section>

        <section className="pt-[24px] animate-pulse">
          <div className="h-[150px] bg-gray-200  w-full mb-[10px]" />
          <div className="h-[100px] bg-gray-200  w-full mb-[10px]" />
          <div className="h-[100px] bg-gray-200  w-full mb-[5px]" />
        </section>
      </div>
    </>
  );
};

export default LoadMypage;
