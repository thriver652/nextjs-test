import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "../../components/sharedstyles";
import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/logins");
  const data = await res.json();

  return {
    props: { UserLogins: data },
  };
};

const UserLogin = ({ UserLogins }) => {
  return (
    <Container>
      {UserLogins.map((indices) => (
        <div key={indices.id}>
          <a>
            <h3>User ID No {indices.userId}</h3>
            <h3>Date accessed {indices.date}</h3>
            <h3>Device accessed from {indices.device}</h3>
          </a>
        </div>
      ))}
      <h1 style={{ color: "blue" }}>
        <Link href="/">Go back Home</Link>
      </h1>
    </Container>
  );
};

export default UserLogin;
