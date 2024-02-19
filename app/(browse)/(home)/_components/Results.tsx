import { getStreams } from "@/lib/feed-service";
import React from "react";
import ResultCard from "./ResultCard";

const Results = async () => {
  const data = await getStreams();

  return (
    <div>
      <h2 className="text-red-900 font-bold mb-4 text-xl">
        Streams we think you will like ...
      </h2>
      {data.length === 0 && (
        <div className="text-muted-foreground text-sm">No streams found</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data.map((result) => (
          <ResultCard key={result.id} data={result} />
        ))}
      </div>
    </div>
  );
};

export default Results;
