import './App.css';
import Accordian from './components/Accordian';
import CustomColorDiv from './components/CustomColorDiv';
import CustomScrollIndicator from './components/CustomScrollIndicator';
import TabsTest from './components/CustomTabs';
import ModalTest from './components/ModalPopup/modalTest';
import RandomColor from './components/RandomColor';
import SearchAutoComplete from './components/SearchAutoComplete';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="App">
      <Accordian/>
      <RandomColor/>
      <CustomScrollIndicator/>
      <TabsTest/>
      <ModalTest/>
      <SearchAutoComplete />
      <TicTacToe />
      <CustomColorDiv />
    </div>
  );
}

export default App;
