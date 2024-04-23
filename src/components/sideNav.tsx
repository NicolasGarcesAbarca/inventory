import { BiSolidDashboard } from "react-icons/bi";
import { IoFileTrayStacked } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

export default function SideNav() {
  return (
    <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <h5 className="block antialiased tracking-normal text-xl font-semibold leading-snug text-gray-900">
          Inventario Systemsia
        </h5>
      </div>
      <nav className="flex flex-col gap-1 min-w-[240px] p-2 text-base font-normal text-gray-700">
        <div
          role="button"
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
        >
          <div className="grid place-items-center mr-4">
            <BiSolidDashboard size={20} />
          </div>
          <Link href="/products">Dashboard</Link>
        </div>
        <Collapsible>
          <CollapsibleTrigger className="w-full">
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <IoFileTrayStacked size={20} />
              </div>
              Inventarios
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col pl-6 gap-1 text-sm">
            <div
              role="button"
              className="flex items-center w-full rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <IoFileTrayStacked size={14} />
              </div>
              <Link href="/categories">Categorias</Link>
            </div>
            <div
              role="button"
              className="flex items-center w-full rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <IoFileTrayStacked size={14} />
              </div>
              <Link href="/brands">Marcas</Link>
            </div>

            <div
              role="button"
              className="flex items-center w-full rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <IoFileTrayStacked size={14} />
              </div>
              <Link href="/suppliers">Proveedores</Link>
            </div>
            <div
              role="button"
              className="flex items-center w-full rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <IoFileTrayStacked size={14} />
              </div>
              <Link href="/warehouses">Almacenes</Link>
            </div>
            <div
              role="button"
              className="flex items-center w-full rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
                <IoFileTrayStacked size={14} />
              </div>
              <Link href="/products">Productos</Link>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <div
          role="button"
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
        >
          <div className="grid place-items-center mr-4">
            <IoMdPerson size={20} />
          </div>
          <Link href="/clients">Clientes</Link>
        </div>
        <div
          role="button"
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
        >
          <div className="grid place-items-center mr-4">
            <FaCartPlus size={20} />
          </div>
          <Link href="/buyactions">Compras</Link>
        </div>
        <div
          role="button"
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
        >
          <div className="grid place-items-center mr-4">
            <FaMoneyCheckDollar size={20} />
          </div>
          Ventas
        </div>
        <div
          role="button"
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
        >
          <div className="grid place-items-center mr-4">
            <HiDocumentReport size={20} />
          </div>
          Reportes
        </div>
      </nav>
    </div>
  );
}
