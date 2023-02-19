import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import productList from '../__mock__/products.json';

function DetailPage() {
  const params = useParams();
  // console.log(params); // {productNumber: '302012'}
  // console.log(params.productNumber); // 302012

  const { products } = productList;

  const selectedProduct = products.find((item) => item.productNumber === params.productNumber);
  const [productInfo, setProductInfo] = useState(selectedProduct);
  const {
    productName,
    productPrice,
    productNumber,
    productSize,
    productRating,
    productReview,
    Review,
    productDetail,
  } = selectedProduct;

  const [addReview, setAddReview] = useState();
  const onChangeInputValue = (e) => {
    setAddReview(e.target.value);
  };

  const onAddReviewBtn = () => {
    const newReviewPost = { ...selectedProduct };
    console.log(newReviewPost);
    let newOne = {
      reviewer: addReview,
    };
    console.log('123', newOne);
    newReviewPost.Review.push(newOne);
    console.log('////', newReviewPost);
    setProductInfo(newReviewPost);
  };

  return (
    <S.Wrapper>
      {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
    */}

      <S.Div>상품명: {productName}</S.Div>
      <S.Div>가격: {productPrice}</S.Div>
      <S.Div>사이즈: {productSize}</S.Div>
      <S.Div>평점: {productRating}</S.Div>
      <S.Div>
        리뷰:
        {Review.map((review) => (
          <S.ReviewWrapper>
            <S.Review>작성자: {review.reviewer}</S.Review>
            <S.Review>리뷰: {review.review}</S.Review>
            <S.Review>평점: {review.rating}</S.Review>
          </S.ReviewWrapper>
        ))}
      </S.Div>
      <input onChange={onChangeInputValue} />
      <button onClick={onAddReviewBtn}>리뷰작성</button>
    </S.Wrapper>
  );
}
export default DetailPage;

const Wrapper = styled.div`
  width: 80vw;
  height: 100%;
  margin: 10px auto;
  border: solid 1px #000;
`;

const Div = styled.h3`
  margin: 50px 0 50px 0;
`;

const Review = styled.h5`
  margin: 20px 0 20px 0;
`;

const ReviewWrapper = styled.div`
  border: solid 1px #000;
  margin: 10px auto;
  width: 50%;
  height: 100%;
`;
const S = {
  Wrapper,
  Div,
  Review,
  ReviewWrapper,
};
