import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import routes from './routes.js'
import { store } from './store/store';


import './assets/scss/styels.scss';
import { UserMsg } from "./cmps/user-msg.jsx";
import { AppHeader } from "./cmps/app-header.jsx";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <section className="main-layout">
                    <AppHeader />
                    <main>
                        <Routes>
                            {routes.map(route =>
                                <Route key={route.path} element={<route.component />} path={route.path} />
                            )}
                        </Routes>
                    </main>
                </section>
                <UserMsg />
            </Router>
        </Provider>
    )
}

export default App