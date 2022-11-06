import Text from '@/components/Text';
import styled from '@emotion/styled';

const Home = () => (
  <Wrapper>
    <Text typography='heading' text='This is Heading.' />
    <Text typography='subheading' text='This is Sub Heading.' />
    <Text typography='bold' text='This is Bold Text.' />
    <Text typography='default' text='This is Default Text' />
    <Text typography='formHelper' text='This is Form Helper' />
    <Text typography='formLabel' text='This is Form Label' />
  </Wrapper>
);

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 10px;
`;

export default Home;
