interface HomeSectionTitleProps {
    title: string;
    subtitle?: string;
}

const HomeSectionTitle: React.FC<HomeSectionTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="px-3 py-1">
            <p className="font-Pretendard font-semibold text-[20px] tracking-wide">{title}</p>
            {subtitle && <p className="font-Pretendard  text-[13px] tracking-wide text-[#666666]">{subtitle}</p>}
        </div>
    );
};

export default HomeSectionTitle;
