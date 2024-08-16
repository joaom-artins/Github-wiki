import Background from '../Assets/githubgenericname.png'
import Input from '../components/Input'

import {Container} from './styles'

function App() {
    return (
    <Container>
        <img src= {Background} width={72} height={72} alt='github logo'/>
        <Input/>
    </Container>
  );
}

export default App;