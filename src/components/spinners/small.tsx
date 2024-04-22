import { Rings } from "react-loader-spinner";

export default function SmallSpinner() {
  return (
    <div className="">
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
