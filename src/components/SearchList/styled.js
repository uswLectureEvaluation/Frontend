import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Color } from '../../GlobalStyle';

export const Minute = styled.span`
  font-size: 0.7rem;
  color: #515151;
  text-decoration: underline;
  padding-left: 6px;

  &:hover {
    cursor: pointer;
  }
`;

export const BoxButton1 = styled(Button)`
  && {
    padding: 5px 15px 5px 15px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(239, 239, 239);
    color: rgb(52, 152, 219);
  }
`;
export const BoxButton2 = styled(Button)`
  && {
    padding: 5px 15px 5px 15px;
    margin-left: 5px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(239, 239, 239);
    color: rgb(230, 126, 34);
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.1rem;
  margin-right: 0.7rem;
`;

export const Professor = styled.div`
  display: flex;
  color: #515151;
  font-size: 0.8rem;
  margin: 0.3rem 0;
`;

export const Option = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: rgb(239, 239, 239);
  padding: 5px 10px;
  font-size: 0.3rem;
`;

export const RateWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;

export const Rate = styled.span`
  color: #346cfd;
  font-size: 1.2rem;
  padding-left: 4px;
  &#modal {
    font-size: 16px;
    padding-left: 0px;
  }
`;

export const LectureWrapper = styled.div`
  width: 100%;
  border: 1px solid ${Color('border')};
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const MarginTop = styled.div`
  padding: 14px 24px;
`;
export const MarginRight = styled.span`
  margin-right: 6px;
  font-size: 1rem;
`;

export const StarFlex = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  padding: 6px 12px;
  font-family: Pretendard;
  font-size: 13px;
  &#top {
    border-top: 1px solid #e0e0e0;
  }
  &#bottom {
  }
  &#between {
    justify-content: space-between;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  &#col {
    flex-direction: column;
  }
`;

export const PaddingRight = styled.span`
  padding-right: 0.7rem;
`;

export const FlexWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const FlexWrapSub = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
`;

export const FullWrapSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ErrorText = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 50px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #a3a3a3;
`;
