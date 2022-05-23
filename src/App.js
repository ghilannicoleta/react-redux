import './App.css';
import Menu from './components/menu/Menu.jsx';
import Content from './components/content/Content';
import Footer from './components/Footer';


import routes from "./routes";
import RenderRoutes from "./components/RenderRoutes/RenderRoutes";

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

import {
    Routes,
    Route,
    useLocation
} from 'react-router-dom';

function App() {
   useLocation()
    return (
        <I18nextProvider i18n={i18n}>
            <div className='app'>

                <Menu />

                <Routes>

                    {routes.map((router) => {
                        return (
                            <Route
                                path={router.path}
                                key={router.path}
                                element={<RenderRoutes {...router} />}
                            />
                        )
                    })}

                </Routes>

                <Footer />

            </div>
        </I18nextProvider>
    );
}

export default App;
