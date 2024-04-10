import Image from "next/image";
import Link from "next/link";

async function getProductData() {
    const res = await fetch(`${process.env.BASE_URL}/events`);
    const data = await res.json();
    return data.result;
}

interface EventProductListProps {
    visibleProductList?: number;
}

interface EventProductList {
    eventSeq: number;
    eventName: string;
    eventEndDate: string;
    eventLowestPrice: number;
    eventThumbnail: string;
    eventVendor: string;
}
[];

const EventProductList = async ({ visibleProductList }: EventProductListProps) => {
    let visiableEventCount = visibleProductList ? visibleProductList : 10;
    const eventProductList = await getProductData();

    return (
        <div className="bg-white mt-5">
            {eventProductList.slice(0, visiableEventCount).map((item: EventProductList, idx: number) => {
                const date = new Date(item.eventEndDate);
                const formattedDate = date.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
                const dDay = Math.floor((date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                return (
                    <div key={idx} className="px-3 mb-3">
                        <Link href={`/productList/eventProductList/${item.eventSeq}`} key={idx}>
                            <div style={{ width: "100%", height: "240px", position: "relative" }}>
                                <Image
                                    src={item.eventThumbnail}
                                    alt={item.eventName}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    style={{
                                        objectFit: "cover", // cover, contain, none
                                    }}
                                />
                            </div>
                            <div className="flex flex-row">
                                <div className="flex-none my-2 px-1 w-4/5 h-[80px]">
                                    <div className="flex flex-row gap-1">
                                        <p className="font-Pretendard text-[16px] font-bold">{item.eventVendor}</p>
                                        <p className="font-Pretendard text-[16px]">{item.eventName}</p>
                                    </div>
                                    <p className="font-Pretendard text-[16px] font-bold">{item.eventLowestPrice.toLocaleString()}원 ~</p>
                                    <p className="font-Pretendard text-[11px] text-gray-500 whitespace-nowarp">종료 : {formattedDate}</p>
                                </div>
                                <div className="flex my-2 px-1 w-1/5 h-[80px] justify-end">
                                    <div>
                                        <p className="flex-none font-Pretendard text-[16px] whitespace-nowarp font-bold text-primary-red border-2 border-primary-red px-1">
                                            D-{dDay}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default EventProductList;
