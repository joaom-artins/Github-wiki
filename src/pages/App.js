import { useState } from 'react';
import Background from '../Assets/githubgenericname.png'
import Input from '../components/Input'
import Button from '../components/Button'
import ItemRepo from '../components/ItemRepo';

import {Container} from './styles'

function App() {

  const [repos,setRepos] = useState([])
    return (
    <Container>
        <img src= {Background} width={72} height={72} alt='github logo'/>
        <Input/>
        <Button/>
        <ItemRepo/>
    </Container>
  );
}

export default App;