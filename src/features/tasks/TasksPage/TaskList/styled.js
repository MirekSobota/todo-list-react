import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  padding: 26px;
  background: ${({ theme }) => theme.color.white};
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  transition: 0.6s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToggleDoneButton = styled(Button)`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.japaneseLaurel};

  &:hover {
    background: ${({ theme }) => theme.color.everglade};
    transform: scale(1.1);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      transform: scale(1);
      background: ${({ theme }) => theme.color.everglade};
    }
  }
`;

export const RemoveTaskButton = styled(Button)`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.red};

  &:hover {
    background: ${({ theme }) => theme.color.chestnut};
    transform: scale(1.1);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      transform: scale(1);
      background: ${({ theme }) => theme.color.japaneseLaurel};
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
`;
