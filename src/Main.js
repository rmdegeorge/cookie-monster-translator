import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';

import Form from './Form';

const API_HOST = process.env.REACT_APP_WORDS_API_URL;
const API_KEY = process.env.REACT_APP_WORDS_API_KEY;
const RAPIDAPI_HOST = process.env.REACT_APP_RAPIDAPI_HOST;


const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

class Main extends Component {
  constructor(props) {
    super(props);
  };

  // componentDidMount() {
  //   axios({
  //     "method": "GET",
  //     "url": API_HOST + "words/hello/partOfSpeech",
  //     "headers": {
  //       "content-type": "application/octet-stream",
  //       "x-rapidapi-host": RAPIDAPI_HOST,
  //       "x-rapidapi-key": API_KEY
  //       }
  //   }).then((response)=>{
  //     console.log(response.data);
  //   }).catch((error)=>{
  //     console.log(error);
  //   });
  // }
  render() {
    return (
      <MainContainer>
        Main Page
        <Form />
      </MainContainer>
    );
  }
}

export default Main;