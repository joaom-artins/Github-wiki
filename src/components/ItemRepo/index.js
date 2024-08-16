import React from 'react'

import { ItemContainer } from './styles'

const ItemRepo = () => {
  return (
    <ItemContainer>
        <h3>João</h3>
        <p>Invite.Api</p>
        <a href='#'>Ver repositório</a>
        <br/>
        <a href='#' className='remove'>Remover</a>
        <hr/>
    </ItemContainer>
  )
}

export default ItemRepo
