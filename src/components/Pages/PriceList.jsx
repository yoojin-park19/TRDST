import styled from '@emotion/styled';
import { URL } from '../../constants';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const PricedList = ({
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceCap,
}) => {
  const progressRef = useRef(null);
  const [items, setItems] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100000000);
  const [priceItems, setPriceitems] = useState([]);
  const getItem = async () => {
    try {
      const res = await axios.get(`${URL}/products`, {
        headers: {
          'Content-type': 'application/json',
        },
      });
      setItems(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getItem();
  }, []);
  const handleMin = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(maxValue)) {
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(minValue)) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step + '%';
    progressRef.current.style.right = step - (maxValue / max) * step + '%';
  }, [minValue, maxValue, max, step]);

  const getPrice = () => {
    priceItems = items.filter(
      (item) =>
        item.original_price <= maxValue && item.original_price >= minValue
    );
    setPriceitems(priceItems);
    priceItems.map((item, index) => console.log(item.name));
  };
  return (
    <Container>
      <PriceList>
        <Title>Price Range</Title>
        <SlideWrap>
          <label htmlFor="minValue">Min</label>
          <input
            onChange={(e) => setMinValue(e.target.value)}
            id="minValue"
            type="number"
            value={minValue}
          />
          <div> - </div>
          <label htmlFor="maxValue">Max</label>
          <input
            onChange={(e) => setMaxValue(e.target.value)}
            id="maxValue"
            type="number"
            value={maxValue}
          />
        </SlideWrap>
        <RangeSlide>
          <Slide>
            <Bar ref={progressRef}></Bar>
          </Slide>
          <RangePoint>
            <input
              onChange={handleMin}
              type="range"
              min={min}
              step={step}
              max={max}
              value={minValue}
            />
            <input
              onChange={handleMax}
              type="range"
              min={min}
              step={step}
              max={max}
              value={maxValue}
            />
          </RangePoint>
        </RangeSlide>
        <SubmitButton onClick={getPrice}>가격대로 살펴보기</SubmitButton>
      </PriceList>
      <ItemWrap>
        {priceItems.map((item, index) => (
          <PriceItemList key={index}>
            <PriceItem>
              <Img src={`${item.image}`}></Img>
              <ItemName>{item.name}</ItemName>
              <Color>{item.color}</Color>
              <Price>{item.original_price}</Price>
              <BrandName>{item.brand}</BrandName>
            </PriceItem>
          </PriceItemList>
        ))}
      </ItemWrap>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PriceList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  padding: 30px 20px;
  margin: 40px 0;
  gap: 30px;
  border-radius: 6px;
  border: 1px solid #eee;
`;
const SlideWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    margin-right: 20px;
    width: 100px;
  }
  div {
    margin-right: 20px;
  }
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;
const RangeSlide = styled.div`
  display: flex;
  position: relative;
  width: 400px;
`;
const Slide = styled.div`
  position: relative;
  height: 4px;
  background: grey;
`;
const Bar = styled.div`
  position: absolute;
  height: 4px;
  background: green;
`;
const RangePoint = styled.div`
  position: relative;
  width: 100%;
  input {
    position: absolute;
    background-color: blue;
    width: 100%;
    height: 24px;
    border-radius: 50%;
    background-color: transparent;
    pointer-events: auto;
  }
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid #000;
`;

const ItemWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const PriceItemList = styled.ul``;
const PriceItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 200px;
  height: 400px;
  border: 1px solid #eee;
`;
const Img = styled.img`
  width: 180px;
  height: 200px;
  margin-bottom: 30px;
`;

const BrandName = styled.p`
  font-size: 12px;
`;
const ItemName = styled.p`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;
const Color = styled.p`
  font-size: 16px;
`;
const Price = styled.p`
  font-size: 14px;
`;
