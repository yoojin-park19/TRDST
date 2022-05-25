import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../../constants';
import { Header } from '../../components/layout/Header';
import { CategoryList } from '../../components/Pages/CategoryList';
import { BrandList } from '../../components/Pages/BrandList';
import { ColorList } from '../../components/Pages/ColorList';
import { PricedList } from '../../components/Pages/PriceList';
import Pagination from 'react-js-pagination';
export default function projects() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  const getItem = async () => {
    try {
      const res = await axios.get(`${URL}/products`, {
        headers: {
          'Content-type': 'application/json',
        },
      });
      setItems(res.data.products);
      console.log(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getItem();
  }, []);
  return (
    <Container>
      <Contents>
        <Header />
        <ItemWrap>
          {items.map((data, index) => (
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
        </ItemWrap>
      </Contents>
      <Pagination
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={20}
        pageRangeDisplayed={4}
        prevPageText={'⇧'}
        nextPageText={'⇩'}
        onChange={handlePageChange}
      />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  position: relative;
`;

const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  text-align: left;
`;
const ButtonWrap = styled.div``;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #666;
`;
const Contents = styled.section``;
const ItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 250px);
  grid-auto-rows: minmax(100px, auto);
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
