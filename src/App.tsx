import { createGlobalStyle } from 'styled-components'
import './reset.css'
import 'react-datepicker/dist/react-datepicker.css'
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
    /* margin: 0;
    padding: 0; */
    box-sizing: border-box;

    scrollbar-width: thin;
    scrollbar-color: transparent ${colors.light2};
  }

  *:focus {
    outline: none;
  }

  // Styling the scrollbars
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

  h2 {
    font-size: 20px;
    font-weight: 500;
    color: ${colors.dark2};
  }

  // Styling the datepicker

  .react-datepicker__input-container input {
    width: 100%;
    padding: 16px;
    border-radius: 4px;
    border: none;
    background-color: ${colors.light};
    color: ${colors.dark};
    font-size: 16px;
    transition: border 0.2s;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid ${colors.light2};
    }

    &:focus {
      border-bottom: 2px solid ${colors.primary};
    }
  }

  .datepicker-wrapper {
    width: 100%;

    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  } 

  .react-datepicker {
    & button > span::before {
      border-color: ${colors.dark};
      transition: border-color .2s;
    }

    & button:hover > span::before {
      border-color: ${colors.light};
    }

    border-radius: 0;
    border-color: transparent;
    background-color: transparent;    

    &__triangle::before {
      display: none;
    }
  }

  .react-datepicker__month-container {
    background-color: ${colors.light};
    border-radius: 4px;
    
    & * {
      transition: all .2s;
    }
  }

  .react-datepicker__header, .react-datepicker-year-header {
    background-color: ${colors.primary};
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: ${colors.dark2};
    padding: 10px;
    border: none;
  }

  .react-datepicker__month-text, .react-datepicker__month--selected {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    padding: 10px 5px;
    

    &--keyboard-selected {
      background-color: ${colors.primary};
      color: ${colors.dark};

      &:hover {
        background-color: ${colors.white};
      }
    }
  }
`

export default App
