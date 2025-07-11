"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FilterItem {
  value: string;
  label: string;
}

interface Props {
  value: string | null;
  onChange: (value: string | null) => void;
  data: FilterItem[];
  entityName?: string;
}

export function FilterSearchSelect({
  data,
  onChange,
  value,
  entityName = "item",
}: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between px-5 py-2.5 rounded-lg bg-white dark:bg-card text-card dark:text-white border-none"
        >
          {value
            ? data.find((item) => item.label === value)?.label
            : `Select ${entityName}...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder={`Search ${entityName}...`}
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>No {entityName} found.</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    onChange(
                      currentValue === "all"
                        ? null
                        : data.find((c) => c.value === currentValue)?.label ||
                            null
                    );
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === item.label || (item.value === "all" && !value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
