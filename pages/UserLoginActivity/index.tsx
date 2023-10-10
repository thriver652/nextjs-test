
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/logins");
  const data = await res.json();

  return {
    props: { UserLogins: data },
  };
};

import React from 'react'

const UserLogin = ({UserLogins}) => {
  return (
    <div>
      {UserLogins.map((indices) => (
        <div key={indices.id}>
          <a>
            <h3>{indices.userId}</h3>
            <h3>{indices.date}</h3>
            <h3>{indices.device}</h3>
        </a>
        </div>
      ))}
    </div>
  );
}

export default UserLogin

