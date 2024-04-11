import { useState, useEffect } from "react";

const Notify = ({ message }: { message: string }) => {
  const [showNoti, setShowNoti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNoti(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showNoti && (
        <div className=" w-[80%] py-2 mx-auto z-[9999] fixed top-[3rem] left-[50%] translate-x-[-50%] bg-primary-red rounded-md shadow-md">
          <p className="text-[0.75rem] text-white text-center">{message}</p>
        </div>
      )}
    </>
  );
};

export default Notify;
