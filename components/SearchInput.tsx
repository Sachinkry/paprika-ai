import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useFetchPapers } from "@/app/hooks/useFetchPapers";
import { ScrollArea } from "./ui/scroll-area";

interface SearchInputProps {
  onPaperSelect?: (paper: any) => void; // Optional callback when a paper is selected
}

export const SearchInput: React.FC<SearchInputProps> = ({ onPaperSelect }) => {
  const [query, setQuery] = useState("");
  const { papers, fetchPapers, loading } = useFetchPapers();
  const [results, setResults] = useState<any[]>([]);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleSearch = () => {
    if (query.trim().length > 0) {
      fetchPapers(query);
    } 
  };

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search papers..."
          className="flex-1"
          value={query}
          onChange={(e) => {
            const newQuery = e.target.value;
            setQuery(newQuery);
          }}
        />
        <Button variant="ghost" size="icon" onClick={handleSearch}>
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {loading && <p className="text-sm text-muted">Loading...</p>}

      {papers.length > 0 && (
        <div className="absolute max-h-100 overflow-y-auto top-12 bg-white border w-full border-gray-300 rounded-md shadow-lg mt-1 z-10">
          <ScrollArea> {/* Added ScrollArea component */}
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => onPaperSelect?.(paper)}
            >
              <h4 className="font-medium text-sm">{paper.title}</h4>
              {/* <p className="text-xs text-gray-600">{paper.authors.join(", ")}</p> */}
            </div>
          ))}
        </ScrollArea> 
      </div>
      )}
    </div>
  );
};
