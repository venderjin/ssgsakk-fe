type Props = {
  title: string;
  onChangeModal: () => void;
  fixed?: boolean;
};

export default function ModalHeader({ title, onChangeModal, fixed }: Props) {
  return (
    <div
      className={`h-[50px] py-[11px]  justify-center border-b-[#BCBCBC] border-b-[1px] bg-white font-Pretendard ${
        fixed ? "flex sticky top-0 " : "flex items-center"
      }`}
    >
      <div className="w-[50px] h-[50px] flex absolute left-0 top-0 bottom-0 items-center justify-center">
        <button
          onClick={onChangeModal}
          className="w-[22px] h-[20px] bg-top-icon bg-no-repeat bg-[position:0px_0px] bg-[length:100px_100px]"
        ></button>
      </div>

      <h1 className="text-black text-[17px] font-bold align-middle flex items-center font-Pretendard">
        {title}
      </h1>
    </div>
  );
}
