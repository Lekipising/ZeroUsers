import React, { useState, useEffect } from 'react';
import { Spinner } from 'src/shared/spinner';
import { Section, H2, OneSuite, Num } from './index.styles';

export default function UserLocation({ users }) {
  const [suites, setSuites] = useState(null);
  const [apt, setApt] = useState(null);

  useEffect(() => {
    if (users) {
      const suitesList = [];
      const aptList = [];
      users.map((user) => {
        user.address.suite.includes('Apt.') && aptList.push(user.address.suite);
        user.address.suite.includes('Suite') &&
          suitesList.push(user.address.suite);
      });
      setSuites(suitesList);
      setApt(aptList);
    }
  }, [users]);

  return (
    <Section>
      <h1>Count of users</h1>
      {!suites || !apt ? (
        <Spinner />
      ) : (
        <div>
          <OneSuite>
            <H2
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              Users in Suite
            </H2>
            <Num
              initial={{ opacity: 0.5, x: -30 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              whileHover={{ y: -10, transition: { duration: 1 } }}
            >
              {suites.length}
            </Num>
          </OneSuite>
          <OneSuite>
            <H2
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              Users in Apt
            </H2>
            <Num
              initial={{ opacity: 0.5, x: -30 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              whileHover={{ y: -10, transition: { duration: 1 } }}
            >
              {apt.length}
            </Num>
          </OneSuite>
        </div>
      )}
    </Section>
  );
}
