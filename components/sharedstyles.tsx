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
  height: calc(100vh - 60px);
  padding: 1rem;
  padding-bottom: 0;
  background-color: ${({theme}) => theme.colors.gray3};
`

const ContentST = styled.div`
  width: 70%;
  padding: 1rem;
  padding-bottom: 0;
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
  cursor:pointer;
`

const SearchInputST = styled.input`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 20px;
  border: 1px solid ${({theme}) => theme.colors.gray1};
  padding: 0.25rem;
  padding-left: 1.5rem;
  font-size: 1rem;
`

const SearchWrapper = styled.div`
  position: relative;
  font-weight:bold;
  :after{
    content: "";
    position: absolute;
    top:0.25rem;
    left:0.5rem;
    height: 8px;
    width: 8px;
    border-radius:50%;
    border:3px solid ${({theme}) => theme.colors.gray1};
  }
  :before{
    content: "";
    position: absolute;
    top:1rem;
    left:0.55rem;
    height: 6px;
    width: 3px;
    background-color:${({theme}) => theme.colors.gray1};
    transform: rotate(25deg);
  }
`

export { ContainerST, MainST, SideBarST, ContentST, TitleST, SubtitleST, ParagrafST, ButtonST,SearchWrapper, SearchInputST }
