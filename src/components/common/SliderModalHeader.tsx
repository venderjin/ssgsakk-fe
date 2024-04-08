import Close from "../images/Close";
type Props = {
    title: string;
    onChangeModal: () => void;
    closeWidth?: string;
    closeHeight?: string;
};

const SliderModalHeader = ({ title, onChangeModal, closeWidth, closeHeight }: Props) => {
    return (
        <div className="h-auto py-[10px] flex items-center justify-center border-b-[#BCBCBC] border-b-[1px]">
            <h1 className="text-black text-[16px] font-bold align-middle flex items-center font-Pretendard">{title}</h1>
            <div
                onClick={onChangeModal}
                className={`flex absolute right-0 top-0 bottom-0 items-center justify-center`}
                style={{
                    width: closeWidth ? closeWidth : "60px",
                    height: closeHeight ? closeHeight : "60px",
                }}
            >
                <Close />
            </div>
        </div>
    );
};

export default SliderModalHeader;
