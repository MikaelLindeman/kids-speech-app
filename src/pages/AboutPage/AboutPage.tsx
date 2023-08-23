import { useState, useEffect } from "react";
import { client } from "../../client";
import useSanityFetch from "../../components/Hooks/useSanityFetch";

function AboutPage() {
  const query = `*[_type == "about"]{title, description}`;
  const [data, loading, error] = useSanityFetch(query);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((entry: any, index: number) => (
        <div key={index}>
          <h1>{entry.title}</h1>
          <p>{entry.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutPage;
