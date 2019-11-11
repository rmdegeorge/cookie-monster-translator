import React, { Component } from 'react';
import styled from 'styled-components'
import {withData} from './DataProvider';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputTextArea = styled.textarea`
  width: 350px;
  height: 100px;
`;

const TranslateButton = styled.button`

`;


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.inputText);
  }

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <InputTextArea name="inputText" value={this.state.inputText} onChange={this.handleChange} />
        <TranslateButton>Translate</TranslateButton>
      </FormContainer>
    );
  }
}

export default withData(Form);
