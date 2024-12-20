import { NextResponse } from 'next/server';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import type { NextRequest } from 'next/server';

const ARXIV_API_URL = 'http://export.arxiv.org/api/query';

export async function GET(req: NextRequest) {
  console.log("API Route Hit"); // Add this line
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');
  const maxResults = searchParams.get('max_results') || '10';

  if (!query) {
    console.log("No query parameter provided"); // Add logging
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    );
  }

  try {
    console.log("Fetching data from ArXiv:", query); // Add logging
    const response = await axios.get(ARXIV_API_URL, {
      params: {
        search_query: query,
        max_results: maxResults,
      },
    });

    const parsedData = await parseStringPromise(response.data);
    const entries = parsedData?.feed?.entry || [];

    const results = entries.map((entry: any) => ({
      id: entry.id?.[0] || '',
      title: entry.title?.[0] || '',
      summary: entry.summary?.[0] || '',
      authors: entry.author?.map((author: any) => author.name?.[0]) || [],
      published: entry.published?.[0] || '',
      pdfLink: entry.link?.find((link: any) => link.$.type === 'application/pdf')?.$.href || '',
    }));

    console.log("Results:", results); // Add logging
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching data from ArXiv:", error); // Add logging
    return NextResponse.json(
      { error: 'Failed to fetch data from ArXiv' },
      { status: 500 }
    );
  }
}
