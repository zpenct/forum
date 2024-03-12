import React from "react";
import NewThreadForm from "./FormThread";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";


export default function NewThread() {
  return (
    <div className="w-full max-w-3xl">
      <Dialog>
        <DialogTrigger className="w-full">
          <span className="flex cursor-pointer bg-white border border-slate-400 px-4 py-2 rounded-lg text-slate-400 w-full text-left">
            Cerita Hari ini....
          </span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-3">Bagikan Ceritamu!</DialogTitle>
            <DialogDescription>
              <NewThreadForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
