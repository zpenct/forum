"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/hooks";
import RowUser from "./RowUser";
import { IUserScore } from "../../../@types";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { asyncGetLeaderboards } from "@/states/leaderboard/action";

export default function UserTable() {
  const dispatch = useAppDispatch();
  const { leaderboards = [] } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(asyncGetLeaderboards());
  }, [dispatch]);

  return (
    <Table>
      <TableHeader className="bg-blue-50">
        <TableRow>
          <TableHead className="w-[100px]">Peringkat</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Skor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaderboards.map((leaderboard: IUserScore, index: number) => (
          <RowUser
            name={leaderboard.user.name}
            score={leaderboard.score}
            number={index + 1}
          />
        ))}
      </TableBody>
    </Table>
  );
}
