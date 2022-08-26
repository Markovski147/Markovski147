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
    }
    
    .text {
        margin: 50px auto;
        max-width: 1000px;
        padding: 0 20px;
        min-width: 450px;
    }

    .img-container {
        display: block;
        width: 992px;
        margin: 0 auto;

        @media (max-width: 992px) {
            width: 600px;
        }
        
        @media (max-width: 600px) {
            width: 490px;
        }
    }
    
    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 240px);
        justify-content: space-between;

            img {
            height: 240px;
            weight: 240px;
            aspect-ratio: 1 / 1;
            margin: 20px 0;

            @media (max-width: 600px) {
                width: 220px;
                weight: 240px;
                margin: 10px 0;
            }
        }
        

        @media (max-width: 992px) {
            grid-template-columns: repeat(2, 240px);
            justify-content: space-between;
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