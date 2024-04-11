import LikeTotalFoler from "./LikeTotalFoler";
import LikeFolder from "./LikeFolder";
import LikeFolderAdd from "./LikeFolderAdd";
import LikeFolderManager from "./LikeFolderManager";
import { useGetServerToken } from "@/actions/useGetServerToken";

interface CustomFolder {
    likeFolderSeq: number;
    likeFolderName: string;
}

async function getFolder(token: string) {
    const res = await fetch(`${process.env.BASE_URL}/likes/user/folder`, {
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
    const data = await res.json();
    return data.result;
}

const LikeHeader = async () => {
    const token = await useGetServerToken();
    const customFolder = await getFolder(token);

    return (
        <div className="h-[120px] bg-white flex flex-row items-center gap-2 overflow-x-auto">
            <LikeTotalFoler />
            {customFolder.map((folder: CustomFolder, idx: number) => (
                <div key={idx}>
                    <LikeFolder folderName={folder.likeFolderName} />
                </div>
            ))}
            <LikeFolderAdd />
            <LikeFolderManager cumstomFolderList={customFolder} />
        </div>
    );
};

export default LikeHeader;
