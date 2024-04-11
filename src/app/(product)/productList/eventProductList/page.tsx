import EventProductList from "@/components/pages/productList/EventProductList";
import FloatingLeft from "@/components/UI/FloatingLeft";
import FloatingUp from "@/components/UI/FloatingUp";

const TestSpecialPricePage = () => {
    return (
        <div className="bg-white">
            <EventProductList />
            <FloatingLeft />
            <FloatingUp />
        </div>
    );
};

export default TestSpecialPricePage;
