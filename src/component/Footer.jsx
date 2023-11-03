import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 300px;
  background-color: var(--grey);

  .container {
    height: 100%;
    outline: 1px solid red;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="container">
          <h2>h2태그입니다!</h2>
          <h3>h3태그입니다!</h3>
          <p>p태그입니다!</p>
        </div>
      </FooterContainer>
    </>
  );
};
export default Footer;
