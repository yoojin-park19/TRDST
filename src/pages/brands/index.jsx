import styled from '@emotion/styled';
import { Header } from '../../components/layout/Header';
import { BrandList } from '../../components/Pages/BrandList';
export default function brands() {
  return (
    <Container>
      <Header />
      <BrandList />
    </Container>
  );
}

const Container = styled.section``;
