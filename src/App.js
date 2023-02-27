import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import HomePageComponent from './Pages/Home/HomePageComponent';
import ContactPageComponent from './Pages/Contact/ContactPageComponent';
import ServicesPageComponent from './Pages/Services/ServicesPageComponent';
import ProjectsPageComponent from './Pages/Projects/ProjectsPageComponent';
import MenuComponent from './Components/Menu/MenuComponent';
import theme from './ui/Theme';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div
                    style={{
                        // height: '100vh',
                        // width: '100vw',
                        // position: 'relative',
                        backgroundColor: theme.palette.primary.main,
                    }}
                >
                    <MenuComponent />
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/contact">
                            <ContactPageComponent />
                        </Route>
                        <Route path="/services">
                            <ServicesPageComponent />
                        </Route>
                        <Route path="/projects">
                            <ProjectsPageComponent />
                        </Route>
                        <Route path="/">
                            <HomePageComponent />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}
