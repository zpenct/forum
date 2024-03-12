import { TableRow, TableCell } from "../ui/table";

export default function RowUser({
  number,
  name,
  score,
}: {
  number: number;
  name: string;
  score: number;
}) {
  return (
    <TableRow>
      <TableCell className="font-medium">#{number}</TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>{score}</TableCell>
    </TableRow>
  );
}
