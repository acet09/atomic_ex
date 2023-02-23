import React from 'react';
import LinkButton from './LinkButton';

const ProductList = (props) => { //상품 데이터는 Props로 전달받음
  return (
    <ul>
      {itemList(props.items)}
    </ul>
  )
};

const itemList = (items) => {

  return items.map((item, index) => {
    return (
      <li key={index}>
        <p>{item.name}</p>
        <LinkButton
          url={item.url}
          labe="상품 상세" //변하지 않는 값은 Molecules 안에 직접 지정해야 됨
        />
      </li>
    )
  })
}

export default ProductList