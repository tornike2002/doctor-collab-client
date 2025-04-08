export default function BlogHeroContent({ HeroImg, HeroTitle, HeroSubTitle }) {
  return (
    <div
      className={`relative min-h-[390px] sm:min-h-[557px] lg:min-h-screen 
        flex items-center max-w-full bg-no-repeat bg-cover bg-center`}
      style={{ backgroundImage: `url("${HeroImg}")` }}
    >
      <div className="flex flex-col justify-end gap-3 px-[36px] h-full">
        <h1 className="text-white font-bold   text-[48px] leading-[40px]">
          {HeroTitle}
        </h1>
        <h3 className="text-white  font-heeboRegular text-[24px] leading-[24px]">
          {HeroSubTitle}
        </h3>
      </div>
    </div>
  );
}
