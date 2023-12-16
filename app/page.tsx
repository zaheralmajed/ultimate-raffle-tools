import ButtonMain from "./components/buttonMain";

export default function Home() {
  return (
    <div className="w-full max-w-md w-full">
      <ButtonMain LINK={"/shuffle"} TEXT={"Shuffle"} DESC={"Randomize the Winners List"} />
      <ButtonMain LINK={"/winner"} TEXT={"Winner"} DESC={"Find the lucky winner from a List"} />
    </div>
  );
}
