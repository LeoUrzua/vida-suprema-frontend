import React from 'react';
import SecretComponent from '../../components/SecretComponent';
import AuthComponet from '../../components/AuthComponent';

const Home: React.FC = () => {
  return (
    <div>
        <h1>Home</h1>
        <SecretComponent/>

        <AuthComponet/>
    </div>
  );
}

export default Home;
