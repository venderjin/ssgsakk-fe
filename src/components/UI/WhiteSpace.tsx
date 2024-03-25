import React from "react";

interface WhiteSpaceProps {
    height: number;
    backgroundColor?: string;
}

const WhiteSpace: React.FC<WhiteSpaceProps> = ({ height, backgroundColor }) => {
    return (
        <div
            style={{
                height: `${height}px`,
                backgroundColor: backgroundColor === undefined ? "white" : `${backgroundColor}`,
            }}
        ></div>
    );
};

export default WhiteSpace;
