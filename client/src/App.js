// Style App
import './App.css';
import './style/header.css';
import './style/body.css';
import './style/footer.css';
import './style/scroll_btn/scroll_btn.css'

// Components Children
import Header from './containers/Header/Header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import ScrollButton from './components/scroll_btn/scroll_btn';

const App = () => {

  return (
        <div className="App">
            <Header />
            <Body />
            <ScrollButton /> 
            <Footer />
        </div>
  );
}

export default App;
