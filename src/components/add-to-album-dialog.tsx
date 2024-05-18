import { SearchResult } from "@/app/gallery/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FolderPlus } from "lucide-react";
import { useState } from "react";
import { addImageToAlbum } from "./actions";

export function AddToAlbumDialog({image}: {image: SearchResult}) {
  const [open, setOpen] = useState(false);
  const [albumName, setAlbumName] = useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <FolderPlus className="w-4 h-4 mr-2" />
          <span>Add to Album</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Type an album name to add this image to it.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
              id="album-name"
              defaultValue="family"
              className="col-span-3"
              onChange={e => setAlbumName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={async () => {
            await addImageToAlbum(image, albumName);
            setOpen(false);
            setAlbumName("");
          }} type="submit">Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
