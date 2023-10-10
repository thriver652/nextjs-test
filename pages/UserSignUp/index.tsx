import React from "react";

const Index = ({ index }) => {
  return (
    <div>
      {index.map((indices) => (
        <div key={indices.id}>
          <a >
            <h3>{indices.id}</h3>
            <h3>{indices.name}</h3>
            <h3>{indices.email}</h3>
            <h3>{indices.signupDate}</h3>
            </a>
        </div>
      ))}
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/signups");
  const data = await res.json();

  return {
    props: { index: data },
  };
};
