import styled from 'styled-components';
import notFound from './../assets/not-found.jpg'

const NotFoundContainer = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 800px;
        heigth: 800px;
    }
  `;


const NotFound = () => {
    return (
      <NotFoundContainer>
        <img src={notFound} alt=''></img>
      </NotFoundContainer>
    )
  }

export default NotFound;