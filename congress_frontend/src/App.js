import './App.css';
import { connect } from 'react-redux';
import Search from './components/Search.js';
import ResultsCard from './components/ResultsCard.js';

function App({ district }) { 
  return (
    <div className="App">
      <h1>Congress Search</h1>
      <Search />
      { district === '' ? '' : <ResultsCard /> }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    district: state.districtReducer
  }
}

export default connect(mapStateToProps)(App);
