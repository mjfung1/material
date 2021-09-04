import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, grey, red } from '@material-ui/core/colors';
import Layout from './components/Layout';


const theme = createTheme({
  palette: {
    primary: blue,
    secondary: grey,
  },
  typography: {
    fontFamily: "Kaisei Tokumin",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  }
})



function App() {


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
