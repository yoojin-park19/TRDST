import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { URL } from '../../constants';
import axios from 'axios';

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [categoryItem, setCategoryItem] = useState([]);
  const [active, setActive] = useState(null);
  const [subActive, setSubActive] = useState(null);
  const [group, setGroup] = useState([]);
  const [categoryMenu, setCategoryMenu] = useState([]);
  const getCategory = async () => {
    try {
      const res = await axios.get(`${URL}/categories`, {
        headers: {
          'Content-type': 'application/json',
        },
      });
      setCategories(res.data);
      setGroup(categories.filter((item) => item.parent_id === null));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategory();
  }, [categories]);

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
  }, [items]);
  function handleCategory(e) {
    setCategoryMenu(
      categories.filter((item) => item.parent_id === +e.target.value)
    );
    setActive(e.target.value);
  }
  function handleCategory2(e) {
    console.log(items);
    setCategoryItem(
      items.filter((item) => item.category_id === +e.target.value)
    );
    console.log();
    console.log(categoryItem);
    setSubActive(e.target.value);
  }

  return (
    <Container>
      <CategoryWrap>
        <Title>Category </Title>
        <ListWrap>
          <MenuWrap>
            {group.map((data, index) => (
              <CategoriesList key={index}>
                <CategoryItem>
                  <button
                    value={data.id}
                    onClick={handleCategory}
                    className={active === `${data.id}` ? 'active' : null}
                  >
                    {data.name}
                  </button>
                </CategoryItem>
              </CategoriesList>
            ))}
          </MenuWrap>
          <SubMenuWrap>
            {categoryMenu.map((data, index) => (
              <CategoryMenuList key={index}>
                <CategoryMenu>
                  <button
                    value={data.id}
                    onClick={handleCategory2}
                    className={subActive === `${data.id}` ? 'active' : null}
                  >
                    {data.name}
                  </button>
                </CategoryMenu>
              </CategoryMenuList>
            ))}
          </SubMenuWrap>
        </ListWrap>
      </CategoryWrap>
      <ItemWrap>
        {categoryItem[0] ? (
          <>
            {categoryItem.map((data, index) => (
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
  height: 100vh;
`;
const CategoryWrap = styled.section`
  display: flex;
  flex-direction: column;
`;
const ListWrap = styled.section`
  display: flex;
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
const MenuWrap = styled.section``;
const SubMenuWrap = styled.section``;
const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const CategoryItem = styled.li`
  margin-bottom: 15px;
  .active {
    color: #d76a7c;
  }
`;

const CategoryMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
const CategoryMenu = styled.li`
  margin-bottom: 5px;
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
