import { useState } from 'react';

import Animation from './components/Animation';
import Logoreveal from './components/Logoreveal';

import Home from './pages/Home';

import { GlobalStyles } from './styles/global';

export default function App() {
  const [visible, setVisible] = useState(false);

  setTimeout(() => {
    setVisible(true);
  }, 9000);

  return (
    <>
      <GlobalStyles />
      {!visible && <Animation />}
      {!visible && <Logoreveal />}
      {visible && <Home />}
    </>
  );
}
