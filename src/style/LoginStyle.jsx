import { styled } from "styled-components";

const LoginStyle = styled.div`
  width: 100vw;

  .container {
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .loginText {
      text-align: center;
      margin-bottom: 50px;
    }
    .loginProcess {
      display: flex;
      flex-direction: column;
      align-items: center;
      .loginType {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
        button {
          align-self: flex-end;
          border: none;
          background: none;
          font-size: 1.1em;
          color: #ccc;
          cursor: pointer;
          &:first-child {
            margin-right: 20px;
          }
          &.active {
            color: var(--DARKBLUE);
            font-size: 1.5em;
          }
        }
      }
      .loginInput {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
      }

      .idInput,
      .pwInput {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
      }

      .idInput label,
      .pwInput label {
        width: 80px;
      }

      .idInput input,
      .pwInput input {
        flex: 1;
      }
    }
    .loginButton {
      padding-top: 10px;
      padding-left: 40px;
      padding-right: 40px;
      padding-bottom: 10px;
      border: none;
      font-size: 1.5em;
      background-color: var(--LIGHTBLUE);
      margin-bottom: 50px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .forgotbox {
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .forgotID,
  .forgotPw {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .findId button,
  .findPw button {
    border: none;
    background: none;
    font-size: 1em;
    font-weight: 700;
    &:hover {
      cursor: pointer;
    }
  }
  .findId button {
    margin-left: 70px;
  }
  .findPw button {
    margin-left: 50px;
  }

  .noJoin {
    border: 2px solid #ebeaea;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .noMember,
  .noPartner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .noMember button,
  .noPartner button {
    margin-left: 70px;
    border: none;
    background: none;
    font-size: 1em;
    font-weight: 700;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default LoginStyle;
