import { Rings } from "react-loader-spinner";

export default function SmallSpinner() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#020817"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
