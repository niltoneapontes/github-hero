import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.main`
  background: ${({ theme }) => theme.gradients.secondary};
  width: 100%;
  min-height: calc(100vh - 104px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 0;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.mode.light.background};
  padding: 24px;
  width: 80%;

  ${({ theme }) => theme.breakpoints.breakpoint_lg} {
    width: 30%;
    padding: 52px;
  }

  p + p {
    margin-top: 12px;
    width: 90%;
    text-align: center;
  }
`;

export const UserImage = styled(Image)`
  border-radius: 50%;
`;

export const Aditional = styled.div`
  display: flex;
  width: 100%;
`;

export const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 32px;
  align-items: flex-start;
`;

export const GoBack = styled.a`
  text-decoration: none;
  position: absolute;
  top: 24px;
  left: 24px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Contact = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 32px;
  align-items: flex-end;

  li {
    & + li {
      margin-top: 12px;
    }
  }

  li a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.mode.light.color};
    justify-content: center;
    text-decoration: none;
    text-align: right;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    svg {
      margin-left: 8px;
    }
  }
`;

export const Info = styled.li`
  & + li {
    margin-top: 12px;
  }
  h1 {
    color: ${({ theme }) => theme.mode.light.color};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 14px;
    text-align: left;

    ${({ theme }) => theme.breakpoints.breakpoint_sm} {
      font-size: 18px;
    }
  }

  p {
    color: ${({ theme }) => theme.mode.light.color};
    font-size: 14px;
    font-weight: normal;
    text-align: left;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.mode.light.color};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 24px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.breakpoint_sm} {
    font-size: 52px;
  }
`;
