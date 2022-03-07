import styled from 'styled-components';

const NotFoundStyle = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  font-weight: 500;
`

const NotFound = () => {
  return (
    <NotFoundStyle>
      Sorry! Page Not Found.
    </NotFoundStyle>
  );
};

export default NotFound;