import { ArrowRight, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { OrderDetails } from "./OrderDetails";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="size-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        1234567890
      </TableCell>
      <TableCell className="text-muted-foreground">
        há 15 minutos
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-slate-400" />
          <span>Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">
        Fernando Junior
      </TableCell>
      <TableCell className="font-medium">
        R$ 159,90
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="size-3 mr-2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="size-3 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}