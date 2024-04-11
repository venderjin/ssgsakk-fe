import ProductListCard from "@/components/pages/productList/ProductListCard";

interface EventProductSeaq {
    productSeq: number;
}

async function getEventProductList(eventId: number) {
    const res = await fetch(`${process.env.BASE_URL}/products/event/${eventId}`, { cache: "no-store" });
    const data = await res.json();
    return data.result;
}

const EventPage = async ({ params }: { params: { eventId: number } }) => {
    const eventId = params.eventId;
    const eventProductList = await getEventProductList(eventId);
    return (
        <div className="flex flex-row h-auto px-3 w-full flex-wrap justify-between ">
            {eventProductList.map((eventProduct: EventProductSeaq, idx: number) => (
                <div key={idx} className="basis-[48%]">
                    <ProductListCard productSeq={eventProduct.productSeq} />
                </div>
            ))}
        </div>
    );
};

export default EventPage;
