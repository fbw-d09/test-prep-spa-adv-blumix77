import React, { useContext } from 'react';
import ThemeContext from './components/ThemeContext';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css'

function App() {
const country = {
    name: "South Africa",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1599px-Flag_of_South_Africa.svg.png",
    capital: "Pretoria",
    largestCity: "Johannesburg",
    population: 58048332,
    currency: "South African Rand (ZAR)",
    officialLanguages: ["Zulu", 
                        "Xhosa", 
                        "Afrikaans", 
                        "English", 
                        "Sepedi", 
                        "Swazi", 
                        "Sesotho",
                        "Setswana", 
                        "Xitsonga", 
                        "Tshiwenda", 
                        "Ndebele"
                      ],
    neighbouringCountries: ["Namibia", 
                            "Botswana",
                            "Zimbabwe", 
                            "Mozambique", 
                            "Eswatini"
                          ],
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
    document.body.classList.toggle('dark-mode');
  }
 
  return (
    <>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
          <Header/>
          <button onClick={handleToggleTheme}>ToggleTheme</button>
          <Card country={country}/>
          <Footer/>
      </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
