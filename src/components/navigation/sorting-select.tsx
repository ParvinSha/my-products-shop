"use client";
import { useCallback } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortingSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      if (value === "none") {
        newSearchParams.delete(name); // remove sort param
      } else {
        newSearchParams.set(name, value);
      }

      return newSearchParams.toString();
    },
    [searchParams]
  );

  const currentSort = searchParams.get("sort") ?? "none";

  function handleChange(value: string): void {
    router.push(`${pathname}?${createQueryString("sort", value)}`);
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="sortingSelect">Sort by title:</Label>
      <Select defaultValue={currentSort} onValueChange={handleChange}>
        <SelectTrigger id="sortingSelect" className="w-[180px]">
        <SelectValue placeholder="Sort by title" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">None</SelectItem>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="desc">Descending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
