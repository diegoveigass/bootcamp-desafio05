import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 25px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 2px solid ${props => (props.error ? '#ff6b6b' : '#eeee')};
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 10px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s ease infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #4444;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
