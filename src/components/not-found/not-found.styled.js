import styled from 'styled-components';
import { Link as RouterLink } from 'components/common/common';

const Main = styled.main`
  max-width: 556px;
  margin-top: 200px;
  margin-bottom: 149px;
  margin-left: 36.92vw;
`;

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-size: ${({ theme }) => theme.font.semilarge};
  line-height: 110%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};
`;

const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 42%;
  margin: 0;
  margin-top: 75px;
  margin-left: 114px;
  padding-top: 22px;
  padding-right: 47px;
  padding-bottom: 23px;
  padding-left: 48px;

  font-family: inherit;
  font-size: ${({ theme }) => theme.font.upperbase};
  line-height: 20px;
  letter-spacing: 0.03em;
  font-weight: 800;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.tangerine};
  border: none;
  border-radius: 65px;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.carrotOrange};
  }

  &:active {
    opacity: 0.8;
  }
`;

export {
  Main,
  PageTitle,
  Link,
}
