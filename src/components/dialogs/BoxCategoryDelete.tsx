import { CategorySelect } from "@/server/db/types";
import { Button } from "../ui/button";

interface IProps {
  category: CategorySelect;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function BoxCategoryDelete({ category, setModalOpen }: IProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-red-600 w-full">
        Estas seguro/a que quieres eliminar la categoria {category.name}?
      </p>
      <Button
        variant={"destructive"}
        onClick={() => {
          fetch("/api/categories", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: category.id }),
          });
          setModalOpen(false);
        }}
      >
        Borrar
      </Button>
    </div>
  );
}
