import styled from 'styled-components';
import img from '../../assets/no-img.gif'

const WhoAreWeContainer = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    
    h1 {
        font-size: 36px;
        font-weight: bold;
        text-transform: uppercase;
        min-width: 520px;
        
        @media (max-width: 600px) {
            min-width: 90%;
        }
    }
    
    .text {
        margin: 20px auto;
        max-width: 1000px;
        
        @media (max-width: 1130px) {
            max-width: 550px;
        }
        
        @media (max-width: 600px) {
            width: 90%
        }
    }

    .img-container {
        display: block;
        width: 1100px;
        margin: 0 auto;

        @media (max-width: 1130px) {
            width: 600px;
        }
        
        @media (max-width: 600px) {
            width: 90%;
        }
    }
    
    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 240px);
        justify-content: space-between;

            img {
            height: 240px;
            width: 240px;
            aspect-ratio: 1 / 1;
            margin: 20px 0;

            @media (max-width: 600px) {
                width: 90%;
                height: auto;
                margin: 10px auto;
            }
        }
        

        @media (max-width: 1130px) {
            grid-template-columns: repeat(2, 240px);
            justify-content: space-evenly;
        }
        
        @media (max-width: 600px) {
            grid-template-columns: repeat(2, auto);
        }
    
    }
}
    

`

const WhoAreWe = () => {
    return (
        <WhoAreWeContainer>
            <h1>Who are we?</h1>
            <div className='text'>What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            <div className='img-container'>
                <div className='grid-container'>
                    <img src={img} alt=''></img>
                    <img src={img} alt=''></img>
                    <img src={img} alt=''></img>
                    <img src={img} alt=''></img>
                </div>
            </div>
        </WhoAreWeContainer>
    )
}

export default WhoAreWe