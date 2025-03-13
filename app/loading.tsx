import spinner from "../public/spinner.svg";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={spinner} />
    </div>
  );
};

export default loading;
