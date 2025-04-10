import Image from "next/image";
import spinner from "../public/spinner.svg";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image height={50} alt="spinner" src={spinner} />
    </div>
  );
};

export default loading;
