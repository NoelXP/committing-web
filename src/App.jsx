import React from "react";
import { Gitgraph } from "@gitgraph/react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Git History</h1>
        <Gitgraph>
          {(gitgraph) => {
            gitgraph.branch("main").commit("Initial commit");
          }}
        </Gitgraph>
      </div>
    </div>
  );
};

export default App;

