import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0px 32px;
  background: #343a40;
  color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 1px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const MaxWidth = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;
