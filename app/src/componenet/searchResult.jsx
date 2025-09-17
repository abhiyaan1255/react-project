import React from 'react'
import styled from 'styled-components';
import { BASE_URL, Maincontainer } from '../App';
import { Button } from '../App';
const SearchResult = ({data}) => {    
  return (
    <FoodcartContainer>
        <Maincontainer>
    <Foodcards>
        {
            data?.map((food)=>(<Foodcard key={food.name}>
               
                <div className='Food_img'>
                    <img src={BASE_URL+food.image} alt="" />
                </div>
                <div className='Food_info'>
                    <div className='Info'>
                        <h3>{food.name}</h3>
                        <p>{food.text}</p>
                    </div>
                     <Button>${food.price.toFixed(2)}</Button>
                </div>
               
                </Foodcard>))
        }
    </Foodcards>
    </Maincontainer>
    </FoodcartContainer>
  )
}

export default SearchResult;

const FoodcartContainer=styled.section`
    background-size: cover;
    background-image: url("/images/bg.png");
   height: calc(100vh - 100px);
   display: flex
;
    align-items: center;
   `
const Foodcards=styled.div`    display: flex
;
    flex-wrap: wrap;
    gap: 20px;
    text-align: center;
    justify-content: center;
  
  
`
const Foodcard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;



  .Food_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
  `