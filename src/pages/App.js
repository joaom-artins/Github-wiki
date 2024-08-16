import Background from '../Assets/githubgenericname.png'
import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo';

import {Container} from './styles'

function App() {
    return (
    <Container>
        <img src= {Background} width={72} height={72} alt='github logo'/>
        <Input/>
        <ItemRepo/>
    </Container>
  );
}

export default App;