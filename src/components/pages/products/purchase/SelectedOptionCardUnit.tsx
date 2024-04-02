import { SelectedOptionAndQuantity } from "@/types/optionType";

type Props = {
  depthLevel: number;
  option: SelectedOptionAndQuantity;
  sellingPrice: number;
  seq: number;
  deleteOption: (optionAndStockSeq: number) => void;
  onQuantityChange: (optionAndStockSeq: number, newQuantity: number) => void;
};

const SelectedOptionCardUnit = ({
  depthLevel,
  option,
  sellingPrice,
  seq,
  deleteOption,
  onQuantityChange,
}: Props) => {
  const handleQuantity = (count: number) => {
    if (option.quantity + count <= 0) {
      alert("1회 최소 구매 가능한 수량은 1개입니다.");
      return;
    }
    onQuantityChange(option.optionAndStockSeq, option.quantity + count);
  };

  console.log(option);

  return (
    <div
      className={`relative px-[15px] pt-[13px] pb-[14px] mb-[5px] ${
        seq === 0 ? "border border-[#222]" : ""
      } bg-[#f8f8f8] rounded-[8px] text-[#222] ${
        seq === 0 ? "animate-[left-sheet-right_400ms_ease]" : ""
      }`}
    >
      <div className="overflow-hidden">
        <span className="pr-[27px]  text-[13px] tracking-normal ">
          {option.optionString}
        </span>
        {/* 수량 옵션 편집*/}
        <div className="relative">
          <div className=" h-[33px] w-[117px] flex align-middle items-center mt-[12px]">
            <button
              onClick={() => handleQuantity(-1)}
              className="w-[33px] h-[33px] mr-[1px] bg-[#fff] flex items-center justify-center"
            >
              <div className=" w-[11px] h-[11px] mr-[4px] bg-product-opt-icon bg-[position:-96px_-43px] bg-[size:194px_171px] align-middle" />
            </button>
            <span className="w-[49px] h-full bg-[#fff] flex items-center justify-center text-[14px]">
              {option.quantity}
            </span>
            <button
              onClick={() => handleQuantity(1)}
              className="w-[33px] h-[33px] ml-[1px] bg-[#fff] flex items-center justify-center"
            >
              <div className=" w-[11px] h-[11px] mr-[4px] bg-product-opt-icon bg-[position:-95px_-68px] bg-[size:194px_171px] align-middle" />
            </button>
          </div>

          {/* 가격 */}
          <div className="leading-4 absolute bottom-[6px] right-0">
            <span className="text-[18px] font-bold">
              {sellingPrice
                ? (sellingPrice * option.quantity).toLocaleString()
                : 0}
              원
            </span>
          </div>
        </div>

        {/* 삭제 버튼 */}
        {depthLevel > 0 && (
          <button
            className="absolute top-0 right-0 p-[8px]"
            onClick={() => deleteOption(option.optionAndStockSeq)}
          >
            <div className=" w-[16px] h-[16px] mr-[4px] bg-product-opt-icon bg-[position:-176px_-106px] bg-[size:194px_171px] align-middle" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SelectedOptionCardUnit;
