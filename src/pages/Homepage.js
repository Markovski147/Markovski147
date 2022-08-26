import styled from 'styled-components';
import Slider from '../components/Slider/slider';
import HotDeals from '../components/HotDeals/HotDeals';
import WhoAreWe from '../components/WhoAreWe/WhoAreWe'


const HomepageContainer = styled.div`
    display: inline;
    justify-content: center;
  `;


const Homepage = () => {
    return (
      <HomepageContainer>
        <Slider />
        <HotDeals />
        <WhoAreWe />
      </HomepageContainer>
    )
  }

export default Homepage;