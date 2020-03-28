import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: ${props => props.theme.colors.texts};
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
