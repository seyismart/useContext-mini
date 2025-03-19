import ThemeButton from "./ChildComponent";
import ThemeProvider from "./Parent";
function App() {

  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>

  )
}

export default App
