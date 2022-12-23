import styled from 'styled-components'

const MainST = styled.main`
  padding: 0;
  max-width: 1000px;
  margin:auto;
`

const ContainerST = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`

const SideBarST = styled.div`
  width: 30%;
  min-width: 295px;
  height: 100vh;
  padding: 1rem;
  background-color: ${({theme}) => theme.colors.gray3};
`

const ContentST = styled.div`
  width: 70%;
  padding: 1rem;
`

const TitleST = styled.h1`
  margin: 0;
  line-height: 1.5;
  font-size: 2rem;
`

const SubtitleST = styled.h2`
  margin-bottom: 0.5rem;
  line-height:1.5;
  font-size: 1.8 rem;
`

const ParagrafST = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
`

const ButtonST = styled.button`
  color:${({theme}) => theme.colors.white};
  background-color:${({theme}) => theme.colors.primary};
  border-radius: 0.5rem;
  padding:0.5rem;
`


export { ContainerST, MainST, SideBarST, ContentST, TitleST, SubtitleST, ParagrafST, ButtonST }
