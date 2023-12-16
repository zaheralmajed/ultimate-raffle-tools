"use client";
import Link from "next/link";
import { useState } from "react";
const IndexPage = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const randomizeLines = () => {
    const lineList = inputText.split("\n");
    const randomizedLines = shuffleArray(lineList);
    setOutputText(randomizedLines.join("\n"));
  };

  const shuffleArray = (array: string[]) => {
    let currentIndex = array.length;
    let temporaryValue: string;
    let randomIndex: number;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  return (
    <div className="w-full max-w-4xl w-full mt-[1rem] mb-[2rem]">
      <div className="flex w-full gap-[1rem] flex-col md:flex-row">
        <div className="w-full">
          <div className="text-2xl font-bold">Enter the List of Participants</div>
          <div>
            <textarea rows={24} cols={1} className="w-full" value={inputText} onChange={(e) => setInputText(e.target.value)} />
          </div>
          <div className="">
            <button className="heroButton-3 w-full  mt-[0.5rem]" onClick={randomizeLines}>
              Shuffle
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="text-2xl font-bold">Randomized List</div>
          <div>
            <textarea rows={24} className="w-full" cols={1} value={outputText} readOnly />
          </div>
          <div>
            <Link className="justify-center items-center flex w-full mt-[0.5rem]" href={"/"}>
              <div className="heroButton h-[2.75rem] max-w-md w-full relative overflow-hidden text-xl">
                <button className="ButtomText">
                  <div className="flex justify-center items-center px-[2rem]">
                    <div className="justify-center items-center flex gap-[2rem] w-full">
                      <div className="flex text-center">Go Back</div>
                    </div>
                  </div>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
