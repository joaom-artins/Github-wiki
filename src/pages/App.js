import { useState } from 'react';
import Background from '../Assets/githubgenericname.png'
import Input from '../components/Input'
import Button from '../components/Button'
import ItemRepo from '../components/ItemRepo';
import {api} from '../services/api'

import {Container} from './styles'

function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () =>{
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)
      if(!isExist){
      setRepos(prev =>[...prev, data])
      setCurrentRepo('')
      return
    }
  }
    alert("Repositório já listado!")
  }

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(item => item.id!== id)
    setRepos(newRepos)
  }

    return (
    <Container>
        <img src= {Background} width={72} height={72} alt='github logo'/>
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
        <Button onClick={handleSearchRepo}/>
        {repos.map(repo =><ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo}/>)}
    </Container>
  );
}

export default App;