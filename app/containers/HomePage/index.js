/*
*
* HomePage
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'components/Helmet';
import styled from 'styled-components';
import makeSelectHomePage from './selectors';

const MainContent = styled.div `
  background: white;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
`;

const HeaderBar = styled.div `
  background: #008975;
  height: 2%;
`;

const HeaderOne = styled.h1 `
  margin: 0;
  background: #00bf9a;
  text-transform: uppercase;
  padding: 1.5rem 1rem;
  color: white;
`;

const P = styled.p `
  font-family: 'Open Sans', sans-serif;
`;

const StepsContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55vh;
  @media (max-width: 768px) {
    min-height: 70vh;
  }
  @media (max-width: 480px) {
    min-height: 75vh;
    margin-right: 15px;
  }
`;

const StepContent = styled.div`
  display: ${({ displayNone }) => displayNone ? 'block' : 'none'};
  -webkit-box-shadow: 3px 3px 15px 0px rgba(50, 50, 50, 0.38);
  -moz-box-shadow: 3px 3px 15px 0px rgba(50, 50, 50, 0.38);
  box-shadow: 3px 3px 15px 0px rgba(50, 50, 50, 0.38);
  width: 50%;
  min-height: 40vh;
  padding: 2rem 1.5rem;
  font-family: 'Open Sans', sans-serif;
  border-radius: 2px;
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 480px) {

    width: 90%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.25rem;
  color: white;
`;

const Button = styled.button `
   display: ${({ displayNone }) => displayNone ? 'none' : 'inline-block'};
   background: #00bf9a;
   width: 15%;
   padding: 10px;
   font-weight: bold;
   letter-spacing: 0.5px;
   border-radius: 2px;
   box-shadow: 0 3px 0 0 #008975;
   @media (max-width: 768px) {
    width: 25%;
  }
  @media (max-width: 480px) {
    width: 33.33%;
  }
`;

const BoldSpan = styled.span `
    font-weight: bold;
`;

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  state = {
    step: 0,
  }

  handleNextStep = () => {
    this.setState((currentState) => ({
      ...currentState,
      step: currentState.step + 1,
    }));
  }

  previousStep = () => {
    this.setState((currentState) => ({
      ...currentState,
      step: currentState.step - 1,
    }));
  }

  render() {
    return (
      <div>
        <Helmet title="HomePage" />
        <MainContent>
          <HeaderBar></HeaderBar>
          <HeaderOne>Step {this.state.step + 1}</HeaderOne>

          <StepsContainer>
            <StepContent displayNone={this.state.step === 0}>
              <P>In the upper-right corner of any page, click <BoldSpan>+</BoldSpan>, and then click <BoldSpan>New repository.</BoldSpan></P>
            </StepContent>
            <StepContent displayNone={this.state.step === 1}>
              <P>Type a short, memorable name for your repository. For example, &#39;hello-world&#39;</P>
            </StepContent>
            <StepContent displayNone={this.state.step === 2}>
              <P>Optionally, add a description of your repository. For example, &#39;My first repository on GitHub.&#39;</P>
            </StepContent>
            <StepContent displayNone={this.state.step === 3}>
              <P>Choose between creating a public or private repository.</P>
              <ul>
                <li><BoldSpan>Public</BoldSpan> repositories are a great choice for getting started. They&apos;re visible to any user on GitHub, so you can benefit from a collaborative community.</li>
                <li><BoldSpan>Private</BoldSpan> repositories require a little more setup. They&apos;re only available to you, the repository owner, as well as any collaborators you choose to share with. Private repositories are only available for paid accounts. For more information, see &#39;GitHub&apos;s billing plans.&#39;</li>
              </ul>
            </StepContent>
            <StepContent displayNone={this.state.step === 4}>
              <P>Select <BoldSpan>Initialize this repository with a README.</BoldSpan></P>
            </StepContent>
            <StepContent displayNone={this.state.step === 5}>
              <P>Click <BoldSpan>Create repository.</BoldSpan></P>
            </StepContent>
            <StepContent displayNone={this.state.step === 6}>
              <P>Congratulations! You&apos;ve successfully created your first repository, and initialized it with a README file.</P>
            </StepContent>
          </StepsContainer>
          <ButtonsContainer>
            <Button onClick={this.previousStep} displayNone={this.state.step === 0}>
              Previous
            </Button>
            <Button onClick={this.handleNextStep} displayNone={this.state.step === 6}>
                Next
            </Button>
          </ButtonsContainer>
        </MainContent>
      </div>
    );
  }
}

const mapStateToProps = makeSelectHomePage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
