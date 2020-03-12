import React, {useState} from 'react';
import SecretComponent from '../../components/SecretComponent';

const Home: React.FC = () => {
    const [attribute, setAttribute] = useState('INVALID');
  return (
    <div>
        <SecretComponent attribute={attribute} setAttribute={setAttribute}></SecretComponent>

    </div>
  );
}

export default Home;
