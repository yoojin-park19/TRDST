import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { URL } from '../../constants';
import axios from 'axios';

export const ColorList = () => {
  const [colors, setColors] = useState([]);
  const [items, setItems] = useState([]);
  const [colorItem, setColorItem] = useState([]);
  const [active, setActive] = useState(null);
  const getColor = async () => {
    try {
      const res = await axios.get(`${URL}/colors`, {
        headers: {
          'Content-type': 'application/json',
        },
      });
      setColors(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getColor();
  }, []);
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

  function handleColor(e) {
    colorItem = items.filter((item) => item.color === e.target.value);
    setColorItem(colorItem);
    setActive(e.target.value);
  }

  return (
    <Container>
      <ListWrap>
        <Title>Color Category</Title>
        {colors.map((data, index) => (
          <ColorsList key={index}>
            <ColorItem>
              <button
                value={data.name}
                onClick={handleColor}
                className={active === `${data.name}` ? 'active' : null}
              >
                {data.name}
              </button>
            </ColorItem>
          </ColorsList>
        ))}
      </ListWrap>
      <ItemWrap>
        {colorItem[0] ? (
          <>
            {colorItem.map((data, index) => (
              <ItemList key={index}>
                <Item>
                  <Img src={`${data.image}`}></Img>
                  <ItemName>{data.name}</ItemName>
                  <Color>색상: {data.color}</Color>
                  <Price>가격: {data.original_price}원</Price>
                  <BrandName>{data.brand}</BrandName>
                </Item>
              </ItemList>
            ))}
          </>
        ) : (
          <div>선택하신 상품이 없습니다.</div>
        )}
      </ItemWrap>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;

const ListWrap = styled.section`
  width: 250px;
  height: 100;
  padding: 20px;
  border-right: 1px solid #eee;
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #666;
`;
const ColorsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ColorItem = styled.li`
  margin-bottom: 15px;
  .active {
    color: #d76a7c;
  }
`;

const ItemWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const ItemList = styled.ul``;

const Item = styled.li`
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
