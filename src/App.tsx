import { createGlobalStyle } from 'styled-components'
import './reset.css'
import { colors } from './utils/variables'
import Main from './components/Main'

function App() {
  return (
    <div className='App'>
      <GlobalStyles />

      <Main />
    </div>
  )
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scrollbar-width: thin;
  scrollbar-color: transparent orange;
  }

  *:focus {
    outline: none;
  }



/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: ${colors.light2};
  border-radius: 4px;
}

  body {
    font-family: 'Poppins', sans-serif;
    box-sizing: inherit;
    background-color: ${colors.light2};
    /* width: 100vw;
    height: 100vh; */

    display: flex;
    justify-content: center;
    align-items: center;
  }

  input, textarea {
    font-family: inherit;
  }
  
  h1 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: ${colors.dark2};
  }

`

export default App
