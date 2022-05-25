import styled from '@emotion/styled';
import { Header } from '../../components/layout/Header';
import { CategoryList } from '../../components/Pages/CategoryList';
export default function category() {
  return (
    <Container>
      <Header />
      <CategoryList />
    </Container>
  );
}

const Container = styled.section``;
