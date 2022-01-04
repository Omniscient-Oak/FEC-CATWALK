import React from 'react';

const CompareTable = (props) => {
  const { currentProduct, compareProduct } = props;
  const products = [compareProduct, currentProduct];
  let featuresArr = [];
  products.forEach((product) => { for(const key in product.features) {
    if (!featuresArr.includes(product.features[key].feature)) {
      featuresArr = [...featuresArr, product.features[key].feature];
    }
  }});
  return (
    <div>
    <table>
      <tr>
        <th>&nbsp;</th>
        <th>{currentProduct.name}</th>
        <th>{compareProduct.name}</th>
      </tr>
      {featuresArr.map((feature) =>
        (
          <tr>
            <td>
              {feature}
            </td>
          </tr>
      ))}
    </table>
    <div>{console.log(featuresArr)}</div>
    </div>
  );
};

export default CompareTable;
