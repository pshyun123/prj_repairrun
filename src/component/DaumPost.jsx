import DaumPostcode from "react-daum-postcode";
import { styled } from "styled-components";

const PostStyle = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;

const DaumPost = (props) => {
  const complete = (data) => {};

  return (
    <PostStyle>
      <DaumPostcode />
    </PostStyle>
  );
};
export default DaumPost;
