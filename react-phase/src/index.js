import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<Index />,document.getElementById('root'));

