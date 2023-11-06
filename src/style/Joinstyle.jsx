import styled from "styled-components";

const Joinstyle = styled.div`
  margin: 50px;
  display: grid;
  justify-content: center;
  align-items: center;

  .signup {
    text-align: center;
    height: 80px;
    padding: 20px;
  }
  .profileImg {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #999;
  }
  label {
    margin: 0 auto;
    width: 100px;
    height: 400px;
    text-align: center;
  }
  input {
    width: 200px;
    height: 25px;
  }
  button {
    width: 70px;
  }
  @media only screen and (max-width: 768px) {
    .container {
      width: 90vw;
      height: 80px;

      display: block;
      flex-grow: 0;
      h2 {
        font-size: 2em;
      }
    }
  }
`;

export default Joinstyle;
