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
  const res = await fetch("http://localhost:3000/api/upgrades");
  const data = await res.json();

  return {
    props: { SubscriptionUpgrades: data },
  };
};

const SubscriptionUpgrade = ({ SubscriptionUpgrades }) => {
  return (
    <Container>
      {SubscriptionUpgrades.map((indices) => (
        <div key={indices.id}>
          <a>
            <h3> User ID No {indices.userId}</h3>
            <h3>Old Plan is {indices.oldPlan}</h3>
            <h3>New Plan is {indices.newPlan}</h3>
            <h3>The Upgrade Date is {indices.upgradeDate}</h3>
          </a>
        </div>
      ))}
      <h2 style={{color:"green"}}>Thank You</h2>
      <h1 style={{ color: "blue" }}>
        <Link href="/">Go back Home</Link>
      </h1>
    </Container>
  );
};

export default SubscriptionUpgrade;
