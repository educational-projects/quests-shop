import { MainLayout } from 'components/common/common';
import { AppRoute } from 'const';
import * as S from './not-found.styled';

const NotFoundPage = () => (
  <MainLayout>
    <S.Main>
      <S.PageTitle>Page not found</S.PageTitle>
      <S.Link to={AppRoute.Main}>На главную</S.Link>
    </S.Main>
  </MainLayout>
)

export default NotFoundPage
