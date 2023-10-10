import React from "react";
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "../../components/sharedstyles";
import Link from "next/link";

const Index = ({ index }) => {
  return (
    <Container>
      {index.map((indices) => (
        <div key={indices.id}>
          <a>
            <h3>ID No {indices.id}</h3>
            <h3>Name of the User : {indices.name}</h3>
            <h3>Email ID of the User : {indices.email}</h3>
            <h3>Sign Up Date of the User : {indices.signupDate}</h3>
          </a>
        </div>
      ))}
      <h1 style={{ color: "blue" }}>
        <Link href="/">Go back Home</Link>
      </h1>
    </Container>
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
