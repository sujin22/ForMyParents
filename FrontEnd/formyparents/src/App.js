import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import { StartPage, QuizPage, ResultPage } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import styled from "styled-components";


class App extends React.Component {
  render() {
    return(
      <Container>
        <HashRouter>
          <Route path="/" exact={true} component={StartPage} />
          <Route path="/process" component={QuizPage} />
          <Route path="/result" component={ResultPage} />
        </HashRouter>
      </Container>
    )
    
  }
}

const Container = styled.div`
  min-height: 844px;
  background-color:#FFF4EB;
`;


export default App;
