interface ShareProps {
    width: number;
    height: number;
    rotate?: string;
}

const FlipTriangle = ({ width, height, rotate }: ShareProps) => {
    return (
        <div className={`w-[${width}px] h-[${height}px]`} style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}>
            <svg viewBox="0 0 24 24" focusable="false" name="CaretDownSmallIcon">
                <path d="M12 16.7714L6 8.20001H18L12 16.7714Z" fill="currentColor"></path>
            </svg>
        </div>
    );
};

export default FlipTriangle;
