import { AiOutlineStop } from "react-icons/ai";
interface IProps {
  message: string;
}
export default function EmptyTable({ message }: IProps) {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex items-center gap-2">
        <AiOutlineStop size={20} />
        <p> {message} </p>
      </div>
    </div>
  );
}
