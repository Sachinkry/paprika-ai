import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
import { SearchInput } from "./SearchInput";
import { Paper, useFetchPapers } from "@/app/hooks/useFetchPapers";

interface SidebarProps {
  sidebarOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen }) => {
  const { papers, fetchPapers } = useFetchPapers();

  return (
    <div
      className={cn(
        "border-r bg-muted/40 transition-all duration-300",
        sidebarOpen ? "w-80" : "w-0"
      )}
    >
      <div className="p-4 flex flex-col">
        {sidebarOpen && (
          <SearchInput onPaperSelect={(paper) => console.log("Selected:", paper)} />
        )}

        <ScrollArea className="flex-1 mt-4">
          {papers.map((paper: Paper) => (
            <div
              key={paper.id}
              className="p-3 hover:bg-accent rounded-lg cursor-pointer mb-2"
            >
              <h3 className="font-medium text-sm line-clamp-2">{paper.title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {paper.authors.join(", ")}
              </p>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};
