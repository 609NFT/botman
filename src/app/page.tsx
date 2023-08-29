import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-items justify-center">
      <div className="vertically-center">
        <Image
          src="/yin.png"
          alt="Vercel Logo"
          className="rotate"
          width={100}
          height={24}
          priority
        />
      </div>
    </div>
  );
}
