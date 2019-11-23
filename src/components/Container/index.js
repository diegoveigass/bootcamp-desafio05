import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #eeee;
  border-radius: 11px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin: 80px auto;
  padding: 30px;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
