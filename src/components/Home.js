import React from "react";

function Home({ basics, education }) {
  return (
    <div>
      <div>{JSON.stringify(basics, null, 2)}</div>
      <div>{JSON.stringify(education, null, 2)}</div>
    </div>
  );
}

export default Home;
