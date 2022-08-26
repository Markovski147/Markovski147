import styled from 'styled-components';
import img from '../../assets/no-img.gif'

const HotDealsContainer = styled.div`
    display: block;
    width: 100%;
    margin: 50px 0;

    h1 {
        text-transform: uppercase;
    }

    .cardContainer {
        display: block;
        width: 992px;
        margin: 0 auto;

        @media (max-width: 992px) {
            width: 500px;
        }
    }

    .gridContainer {
        display: grid;
        grid-template-columns: repeat(4, 200px);
        justify-content: space-between;

        img {
            width: 200px;
            height: 200px;
        }

        @media (max-width: 992px) {
            grid-template-columns: repeat(2, 200px);s
        }
    }

    .card {
        height: 350px;
        margin: 30px 0;

        img {
            margin: 0 0 30px 0;
        }

        div {
            font-size: 12px;
            text-transform: uppercase;
        }

        button {
            height: 50px;
            width: 100%;
            margin-top: 10px;
            border: none;
            color: white;
            background: rgb(19, 43, 159);
            background: linear-gradient(90deg, rgba(19, 43, 159, 1) 0%, rgba(249, 5, 5, 1) 100%);
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            cursor: pointer;
        }
    }
`

const HotDeals = () => {
    return (
    <HotDealsContainer>
        <div className='cardContainer'>
            <h1>Hot Deals</h1>
            <div className='gridContainer'>
                <div className='card'>
                    <img src={img} alt=''></img>
                    <div>Rating</div>
                    <div>Name of product</div>
                    <div>Price</div>
                    <button>Buy Now</button>
                </div>
                <div className='card'>
                    <img src={img} alt=''></img>
                    <div>Rating</div>
                    <div>Name of product</div>
                    <div>Price</div>
                    <button>Buy Now</button>
                </div>
                <div className='card'>
                    <img src={img} alt=''></img>
                    <div>Rating</div>
                    <div>Name of product</div>
                    <div>Price</div>
                    <button>Buy Now</button>
                </div>
                <div className='card'>
                    <img src={img} alt=''></img>
                    <div>Rating</div>
                    <div>Name of product</div>
                    <div>Price</div>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    </HotDealsContainer>
    )
}

export default HotDeals