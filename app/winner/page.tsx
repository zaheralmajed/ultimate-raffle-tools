"use client";
import Link from "next/link";
import { useState } from "react";
const IndexPage = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [peopleList, setPeopleList] = useState<string[]>([]);
  const randomizeLines = () => {
    const randomizedLines = shuffleArray(peopleList);
    if (randomizedLines.length > 0) {
      const winner = randomizedLines[0];
      setOutputText(winner);
      setPeopleList(randomizedLines.slice(1));
    } else {
      setOutputText("No more people in the list.");
    }
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
    <div className="w-full max-w-md w-full">
      <div className="flex w-full gap-[1rem] flex-col md:flex-row">
        <div className="w-full">
          <div className="text-2xl font-bold">Enter the List of Participants</div>
          <div>
            <textarea rows={16} cols={1} className="w-full" value={inputText} onChange={(e) => setInputText(e.target.value)} />
          </div>

          {outputText && (
            <div className="w-full  justify-center items-center flex flex-col winner">
              <div className=" text-center text-md">The winner is</div>
              <div className="text-4xl font-bold text-center">{outputText}</div>
            </div>
          )}

          {!outputText && (
            <div className="">
              {peopleList.length > 0 ? (
                <button className="heroButton-4 w-full  mt-[0.5rem]" onClick={randomizeLines} disabled={peopleList.length === 0}>
                  Pick Winner
                </button>
              ) : (
                <button className="heroButton-5 w-full  mt-[0.5rem]" onClick={() => setPeopleList(inputText.split("\n"))} disabled={peopleList.length > 0 || inputText === ""}>
                  Set List
                </button>
              )}
            </div>
          )}
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
  );
};

export default IndexPage;
