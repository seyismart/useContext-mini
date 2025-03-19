import { useContext } from "react";
// import CreateTheme from "./CreateContext"
import { ContextTheme } from "./CreateContext";
//  const ContextWay = () => {
//     useContext(ContextTheme);
//  }

const ThemeButton = () => {
  const valuefromProvider = useContext(ContextTheme) 
    // const { theme, toggleTheme } = ContextWay; // Get the state and function from context
    // return (
    //   <button onClick={toggleTheme}>
    //     Current Theme: {theme} (Click to Toggle)
    //   </button>
    // );
    return(
      <div>
        <button>Click me to see me!!!</button>
        {valuefromProvider}
      </div>
    )
  };
export default ThemeButton;