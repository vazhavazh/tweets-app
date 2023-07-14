import styled from '@emotion/styled';

export const Container = styled.div``;
export const LoadMoreButton = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  margin-top: 48px;
  margin-left: auto;
  margin-right: auto;
  max-width: 196px;
  padding: 14px 28px;
  border-radius: 10.311px;
  background-color: rgb(255, 191, 72);
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  border-color: transparent;
  text-align: center;
  transition: background-color 0.3s ease-in-out;
  span {
    color: #373737;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;
  }
  &:hover,
  &:focus {
    background-color: #5cd3a8;
    span {
      color: #ffff;
    }
  }
`;

export const GoBackButton = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  margin-right: auto;
  max-width: 124px;
  padding: 14px 28px;
  border-radius: 10.311px;
  background-color: red;
  border: 1px solid red;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);

  text-align: center;
  margin-bottom: 16px;
  margin-top: 16px;
  transition: background-color 0.3s ease-in-out;
  span {
    color: #fff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;
  }
  &:hover,
  &:focus {
    background-color: transparent;

    span {
      color: black;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  margin-right: auto;
  margin-left: auto;
`;
