import { 
    IconDatabasePlus
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
      <div className="flex flex-col justify-start w-72 text-3xl p-2 gap-2">
        <span className="text-sm text-zinc-500 pl-3 pt-4">Cadastros</span>
        <MenuItem icone={<IconDatabasePlus />} texto="Clientes" url="/clientes/listarClientes" />
      </div>
  )
}
