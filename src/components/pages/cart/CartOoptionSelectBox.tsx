import React from "react";

const CartOoptionSelectBox = () => {
  return <div>CartOoptionSelectBox</div>;
};

export default CartOoptionSelectBox;
// import { useEffect, useState } from "react";
// import { GetOption } from "@/actions/product";
// import {
//   OptionResponse,
//   OptionCombination,
//   OptionInfo,
//   SelectedOptionAndQuantity,
// } from "@/types/optionType";

// const CartOoptionSelectBox = ({
//   productSeq,
//   optionAndStockSeq,
//   onChangeOption,
// }: {
//   productSeq: number;
//   optionAndStockSeq: number;
//   onChangeOption: (productOption: string, optionAndStockSeq: number) => void;
// }) => {
//   const minimumStock = 5;
//   const [optionData, setOptionData] = useState<OptionResponse>(
//     {} as OptionResponse
//   );
//   const [optionList, setOptionList] = useState<OptionInfo[]>([]);
//   const [selectedOption, setSelectedOption] = useState<string[]>([]);

//   const setOoptionList = (data: any) => {
//     //품절상품 제외
//     const optionData: OptionInfo[] = [];
//     for (let i = 1; i <= data.depthLevel; i++) {
//       const optionList: Set<string> = new Set();

//       data.options.forEach((option: OptionCombination) => {
//         console.log(option);
//         if (i === 1 && option.explain) optionList.add(option.explain || "");
//         else if (i === 2) optionList.add(option.explain2 || "");
//         else if (i === 3) optionList.add(option.explain3 || "");
//       });

//       const option: OptionInfo = { type: "", optionList: [] };
//       if (i === 1) {
//         option.type = data.firstDepthName;
//         option.optionList = Array.from(optionList);
//       } else if (i === 2) {
//         option.type = data.secondDepthName;
//         option.optionList = Array.from(optionList);
//       } else if (i === 3) {
//         option.type = data.thirdDepthName;
//         option.optionList = Array.from(optionList);
//       }
//       optionData.push(option);
//     }

//     return optionData;
//   };

//   const getSelectedOption = (data: any) => {
//     const options = data.options.filter(
//       (option: OptionCombination) =>
//         option.optionAndStockSeq === optionAndStockSeq
//     )[0];

//     const newSelectedOptions = [...selectedOption];

//     if (options.explain) {
//       newSelectedOptions.push(options.explain);
//     }
//     if (options.explain2) {
//       newSelectedOptions.push(options.explain2);
//     }
//     if (options.explain3) {
//       newSelectedOptions.push(options.explain3);
//     }

//     setSelectedOption(newSelectedOptions);
//   };

//   useEffect(() => {
//     const fetchOption = async () => {
//       const response = await GetOption(productSeq);
//       const optionList = setOoptionList(response);

//       getSelectedOption(response);
//       setOptionList(optionList);
//     };
//     fetchOption();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setSelectedOption((prev) => {
//       const temp = [...prev];
//       temp[optionList.findIndex((option) => option.type === name)] = value;
//       return temp;
//     });
//   };

//   const chanageOptionHandler = () => {
//     const option = selectedOption.join(" ");
//     onChangeOption(option, optionAndStockSeq);
//   };

//   return (
//     <div className="font-Pretendard">
//       <div className="px-[15px] pt-[20px]">
//         <h2 className="pb-[6px] border-b border-b-[#222] text-[15px] font-semibold">
//           옵션변경
//         </h2>
//       </div>

//       <div className="px-[16px] pt-[20px]">
//         {optionList.map((option, index) => (
//           <div key={index} className="pt-[20px] flex items-center">
//             <h3 className="text-[13px] w-[95px]">{option.type}</h3>
//             <div className="relative h-[40px] w-full">
//               <span className="relative block h-[40px]">
//                 <select
//                   className="w-full h-[40px] pl-[15px] pr-[27px] border border-[#e5e5e5] text-[14px] text-[#222]"
//                   value={selectedOption[index] || ""}
//                   onChange={handleChange}
//                   title="옵션"
//                   name={option.type}
//                 >
//                   {option.optionList.map((item, idx) => (
//                     <option
//                       className="block text-[14px]"
//                       key={idx}
//                       value={item}
//                     >
//                       {item}
//                     </option>
//                   ))}
//                 </select>
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="w-full absolute bottom-0">
//         <button
//           onClick={chanageOptionHandler}
//           className="h-[52px] bg-primary-red font-bold text-[#fff] text-[18px] w-full"
//         >
//           변경하기
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartOoptionSelectBox;
