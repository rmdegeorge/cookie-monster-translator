import React, { Component } from 'react';
import axios from 'axios';

const {Provider, Consumer} = React.createContext();

const API_HOST = process.env.REACT_APP_WORDS_API_URL;
const API_KEY = process.env.REACT_APP_WORDS_API_KEY;
const RAPIDAPI_HOST = process.env.REACT_APP_RAPIDAPI_HOST;

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translationHistory: []
    };
  };

  handleSubmit = (inputText) => {
    // replace new line characters with spaces.
    inputText = inputText.replace(/\n/, ' ');
    // split string at punctuation and spaces.
    let inputTextArray = inputText.replace(/[^\w\s]|_/g, function ($1) { return ' ' + $1 + ' ';}).replace(/[ ]+/g, ' ').split(' ');
    this.getWordData(inputTextArray)
  };

  getWordData = (arr) => {
    let translatedArray = []
    for (let i = 0; i < arr.length; i++) {
      if (!/[^\w\s_]|_/.test(arr[i])) {
        axios({
          "method": "GET",
          "url": `${API_HOST}words/${arr[i]}/partOfSpeech`,
          "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": RAPIDAPI_HOST,
            "x-rapidapi-key": API_KEY
            }
        }).then((response)=>{
          // console.log(response.data);
          translatedArray[i] = {
            word: response.data.word,
            partOfSpeech: response.data.partOfSpeech[0]
          }
        }).catch((error)=>{
          console.log(error);
        });
      };
    };
    console.log(translatedArray)
  }

  render() {
    return (
      <Provider value={{
        ...this.state,
        handleSubmit: this.handleSubmit,
        getWordData: this.getWordData,
      }}>
        {this.props.children}
      </Provider>
    );
  };
};

export default DataProvider;

export function withData(Comp) {
  return props => <Consumer>
                    {value => <Comp {...value}{...props} />}
                  </Consumer>
}
