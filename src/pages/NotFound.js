import styled from 'styled-components';
import notFound from './../assets/not-found.jpg'

const NotFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    .imgDiv {
      width: 90%;
      max-width: 800px;
    }

    img {
        width: 100%;
    }
  `;


const NotFound = () => {
    return (
      <NotFoundContainer>
        <div className='imgDiv'>
        <img src={notFound} alt=''/>
        </div>
      </NotFoundContainer>
    )
  }

export default NotFound;