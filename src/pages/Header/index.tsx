import React, { useEffect, useState } from 'react'

import { Container, Separator } from './styles';

function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await localStorage.getItem('@tropa:user');
      setUserName(user || '')
    }

    loadStorageUserName();
  }, [])

  return (
    <Container>
      <div>
        <h1>Olá</h1>
        <span>{userName}</span>
      </div>

      <Separator />
    </Container>

  )
}

export default Header
