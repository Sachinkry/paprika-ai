import { useState } from "react";

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  pdfUrl: string;
}

export const useFetchPapers = () => {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPapers = async (query: string) => {
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/arxiv?query=all:${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error("Failed to fetch papers");
      }

      const data = await response.json();
      const formattedPapers: Paper[] = data.map((paper: any) => ({
        id: paper.id || Math.random().toString(), // Fallback ID for dummy data
        title: paper.title || "Untitled",
        authors: paper.authors || [],
        abstract: paper.summary || "",
        pdfUrl: paper.pdfLink || "#",
      }));

      setPapers(formattedPapers);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { papers, loading, error, fetchPapers };
};
