import styled from "styled-components";

export const ContainerHome = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-top: 2%;
`;
export const ContainerSearch = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;

  /*This is for search and input*/
  .search {
    width: 400px;
    height: 50px;
    background-color: hsl(0, 0%, 100%);
    display: flex;
    color: hsl(200, 15%, 8%);
    box-shadow: 0px 0px 5px hsl(0, 0%, 90%);
    border-radius: 5px;
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    color: hsl(200, 15%, 6%);
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
    color: hsl(200, 15%, 8%);
    font-weight: 600;
    font-size: 14px;
    font-family: "Nunito Sans", sans-serif;
  }

  /*THis is filter one*/
  .filter {
    cursor: pointer;
    width: 200px;
    height: 50px;
    background-color: hsl(0, 0%, 100%);
    color: hsl(200, 15%, 8%);
    box-shadow: 0px 0px 5px hsl(0, 0%, 90%);
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
    background-color: hsl(0, 0%, 90%);
  }
  .dropdown {
    color: hsl(200, 15%, 8%);
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
    background-color: hsl(0, 0%, 100%);
    color: hsl(200, 15%, 8%);
    box-shadow: 0px 0px 5px hsl(0, 0%, 90%);
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
  width: 20%;
  margin-top: 3%;

  .containerBox {
    background-color: aqua;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
  }
  .imageContainer {
    width: 100%;
    height: 50%;
    background-color: grey;
  }
  .informationBox {
    height: 50%;
    width: 100%;
  }
  .informationBox h1 {
    font-size: 16px;
    font-weight: 800;
  }
  .more-info {
    font-size: 14px;
  }
`;
