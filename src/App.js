import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
        <Header />
        <section>
            <h2>국내 코로나 현황</h2>
            <div className="contents">
            </div>
        </section>
    </div>
  );
}

export default App;
