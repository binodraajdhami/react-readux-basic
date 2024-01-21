import AppRouting from "./AppRouting";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

import { Provider } from 'react-redux';
import store from "./store/store"

const App = () => {
    return (
        <Provider store={store}>
            <AppRouting />
        </Provider>
    )

}

export default App;