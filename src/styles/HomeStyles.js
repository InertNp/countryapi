import styled from "styled-components";

export const ContainerHome = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-top: 2%;
  color: inherit;
`;
export const ContainerSearch = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;

  /*This is for search and input*/
  .search {
    width: 400px;
    height: 50px;
    background-color: ${(a) => {
      return a.theme.NavBarbgColor;
    }};
    box-shadow: ${(a) => {
      return a.theme.NavBarContainerBshadow;
    }};
    color: ${(a) => {
      return a.theme.color;
    }};
    border-radius: 5px;
    display: flex;
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    color: ${(a) => {
      return a.theme.color;
    }};
    opacity: 50%;
  }
  input {
    -webkit-appearance: none;
    width: 90%;
    height: 100%;
    background-color: transparent;
    border: none;
    padding-left: 20px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(a) => {
      return a.theme.color;
    }};
    font-weight: 600;
    font-size: 14px;
    font-family: "Nunito Sans", sans-serif;
  }

  /*THis is filter one*/
  .filter {
    cursor: pointer;
    width: 200px;
    height: 50px;
    background-color: ${(a) => {
      return a.theme.NavBarbgColor;
    }};
    box-shadow: ${(a) => {
      return a.theme.NavBarContainerBshadow;
    }};
    color: ${(a) => {
      return a.theme.color;
    }};
    border-radius: 5px;
    z-index: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  button {
    background: none;
    border: none;
    font-size: 15px;
    font-weight: 300;
    padding-left: 25px;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  button:hover {
    background-color: ${(a) => {
      return a.theme.NavBarbgColor;
    }};
  }
  .dropdown {
    color: ${(a) => {
      return a.theme.color;
    }};
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    z-index: 1;
  }
  .icon1 {
    padding-left: 10px;
  }
  .dropdown-content {
    display: none;
    background-color: ${(a) => {
      return a.theme.bgColor;
    }};
    box-shadow: ${(a) => {
      return a.theme.NavBarContainerBshadow;
    }};
    color: ${(a) => {
      return a.theme.dropColor;
    }};
    border-radius: 5px;
    margin-top: 2px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .filter:hover .dropdown-content {
    display: block;
  }
`;

export const ContainerCountry = styled.div`
  width: 300px;
  min-width: 200px;
  height: 350px;
  margin-top: 3%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${(a) => {
    return a.theme.NavBarbgColor;
  }};
  box-shadow: ${(a) => {
    return a.theme.countryBoxShadow;
  }};
  color: ${(a) => {
    return a.theme.color;
  }};
  &:hover {
    box-shadow: ${(a) => {
      return a.theme.countryHover;
    }};
  }
  .containerBox {
    /* background-color: aqua; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .imageContainer {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    background-color: transparent;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .imageContainer img {
    max-width: 100%;
    min-width: 100%;
    max-height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .informationBox {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;
    text-transform: capitalize;
  }
  .informationBox h1 {
    font-size: 18px;
    font-weight: 800;
  }
  .more-info {
    font-size: 14px;
    font-weight: 600;
    color: inherit;
    text-align: justify;
    padding-left: 20px;
    /* text-align: left; */
    /* background-color: red; */
  }
  .more-info data {
    font-size: 14px;
    font-weight: 300;
  }
`;
export const SetCol = styled.div`
  display: flex;
  /* background-color: red; */

  flex-wrap: wrap;
  justify-content: space-between;
`;
export const LoadingScreenContainer = styled.div`
  margin-top: 10%;
  width: 100%;
  /* background-color: red; */
  color: hsl(0, 0%, 60%);
  height: 400px;
  .icon2 {
    width: 100%;
    height: 100%;
  }
`;
