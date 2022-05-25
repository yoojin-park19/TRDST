import styled from '@emotion/styled';
import Link from 'next/link';

export const Header = () => {
  return (
    <HEAD>
      <MenuContainer>
        <Link href="/products">
          <Img src="/images/logo.png" alt="로고" />
        </Link>
        <MenuList>
          <MenuItem>
            <Link href="/categories">
              <p>Category</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/brands">
              <p>Brand</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/colors">
              <p>Color</p>
            </Link>
          </MenuItem>
        </MenuList>
      </MenuContainer>
    </HEAD>
  );
};

const HEAD = styled.section`
  display: fixed;
  width: 100%;
  height: 94px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
`;
const MenuContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .home {
    color: #3f51b5;
    font-size: 12px;
  }
`;
const Img = styled.img`
  height: 48px;
`;
const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuItem = styled.li`
  width: 160px;
  padding: 24px 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #212529;
`;
