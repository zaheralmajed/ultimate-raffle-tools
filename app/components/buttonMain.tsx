import Link from "next/link";
import { FaRandom } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";

interface ButtonProps {
  LINK: string;
  TEXT: string;
  DESC: string;
}

const buttonMain = ({ TEXT, LINK, DESC }: ButtonProps) => {
  return (
    <Link className="justify-center items-center flex w-full text-center mb-[1rem]" href={LINK}>
      <div className="heroButton h-[4rem] max-w-lg w-full relative overflow-hidden text-xl justify-center items-center">
        <button className="ButtomText">
          <div className="flex w-full  items-center">
            <div className="flex ">
              <div className="px-[1rem] flex justify-center items-center">{TEXT == "Shuffle" ? <FaRandom /> : TEXT == "Winner" ? <GiPodiumWinner /> : ""}</div>
              <div className="text-left">
                <div>{TEXT}</div>
                <div className="text-sm">{DESC}</div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </Link>
  );
};

export default buttonMain;
