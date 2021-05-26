import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: calc(100vh - 55px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 70px;
  height:70px;
  border: 5px solid transparent;
  border-radius: 50%;
  border-left-color: blueviolet; 
  border-top-color: blueviolet; 
  border-right-color: blueviolet;
  animation: spin .8s ease-in-out infinite;
  -webkit-animation: spin .8s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;