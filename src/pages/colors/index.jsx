import styled from '@emotion/styled';
import { Header } from '../../components/layout/Header';
import { ColorList } from '../../components/Pages/ColorList';
export default function colors() {
  return (
    <Container>
      <Header />
      <ColorList />
    </Container>
  );
}

const Container = styled.section``;
