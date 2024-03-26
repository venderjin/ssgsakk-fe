import { snsLoginData } from "@/libs/joinIntroDatas";
import SnsButton from "@/components/common/SnsButton";
import CardTtile from "@/components/UI/CardTtile";

const SimpleJoinList = () => {
  return (
    <div>
      <CardTtile title="간편회원" />

      <div className="px-[20px]">
        <ul className="w-full my-[40px] flex justify-around items-center">
          {snsLoginData.map((sns) => (
            <SnsButton
              key={sns.id}
              snsType={sns.type}
              snsName={sns.name}
              iconPosition={sns.img}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SimpleJoinList;
