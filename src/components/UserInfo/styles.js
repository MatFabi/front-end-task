import styled from "styled-components";

export const GithubImage = styled.img`
  width: 12rem;
  border-radius: 0.5rem;
`;
export const UserName = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.lg};
`;
