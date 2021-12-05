import { MainLayout } from 'components/common/common';
import * as S from './loading.styled';
import { ClipLoader } from 'react-spinners';

const LoadingPage = () => (
  <MainLayout>
    <S.Main>
    <ClipLoader
    color='orange'
    size='60px'
    />
    </S.Main>
  </MainLayout>
)

export default LoadingPage
