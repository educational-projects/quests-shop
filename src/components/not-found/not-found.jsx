import { MainLayout } from 'components/common/common';
import * as S from './not-found.styled';

const NotFoundPage = () => (
  <MainLayout>
    <S.Main>
      <S.PageTitle>Page not found</S.PageTitle>
      <S.Link to='/'>На главную</S.Link>
    </S.Main>
  </MainLayout>
)

export default NotFoundPage
