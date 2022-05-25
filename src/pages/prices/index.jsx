import styled from '@emotion/styled';
import { Header } from '../../components/layout/Header';
import { PricedList } from '../../components/Pages/PriceList';
export default function prices() {
  return (
    <Container>
      <Header />
      <PricedList
        initialMin={0}
        initialMax={10000000}
        min={0}
        max={10000000}
        step={10000}
        priceCap={10000}
      />
    </Container>
  );
}

const Container = styled.section``;
