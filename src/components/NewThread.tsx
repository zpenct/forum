import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import NewThreadForm from "./FormThread";
export default function NewThread() {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="w-full">
          <span className="flex cursor-pointer bg-white border border-slate-400 px-4 py-2 rounded-lg text-slate-400 w-full text-left mt-10">
            Cerita Hari ini....
          </span>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Bagikan Ceritamu!</AlertDialogTitle>
            <AlertDialogDescription>
              <NewThreadForm />
            </AlertDialogDescription>
          </AlertDialogHeader>
          {/* <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter> */}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
