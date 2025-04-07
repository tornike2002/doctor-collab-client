export default function AboutMeImg({ dataHeroImg, text }) {
  return (
    <div className="relative px-[10px] inline-block">
      <img src={dataHeroImg} className="w-full h-auto" alt="About me" />

      <p className="text-[20px] mt-[30px]">{text}</p>
    </div>
  );
}
