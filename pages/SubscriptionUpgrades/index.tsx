export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/upgrades");
  const data = await res.json();

  return {
    props: { SubscriptionUpgrades: data },
  };
};

import React from "react";

const SubscriptionUpgrade = ({ SubscriptionUpgrades }) => {
  return (
    <div>
      {SubscriptionUpgrades.map((indices) => (
        <div key={indices.id}>
          <a>
            <h3>{indices.userId}</h3>
            <h3>{indices.oldPlan}</h3>
            <h3>{indices.newPlan}</h3>
            
            <h3>{indices.upgradeDate}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionUpgrade;
