import southParkVideo from "../assets/southpark.mp4";
import BillboardButton from "./BillboardButton";

export default function Billboard() {
  return (
    <div className="relative h-screen">
      <video
        src={southParkVideo}
        className="w-full h-full object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-[40%] ml-16">
        <p className="text-white mt-8 mb-5 drop-shadow-x; text-7xl">
          South Park
        </p>
        <div className="flex items-center mt-4 gap-3">
          <BillboardButton text="Play" theme="light" />
          <BillboardButton text="More info" theme="dark" />
        </div>
      </div>
    </div>
  );
}
