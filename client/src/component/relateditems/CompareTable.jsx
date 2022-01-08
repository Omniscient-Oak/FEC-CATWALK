import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import ProductContext from '../ProductContext';

const CompareTable = (props) => {
  const { compareProduct } = props;
  const [currentProduct, changeCurrentProduct] = useState();
  const products = [compareProduct, currentProduct];
  const [featuresArr, setFeaturesArr] = useState([]);
  const { productId } = useContext(ProductContext);

  const setFeatureList = () => {
    let feats = [];
    products.forEach((product) => { for(const key in product.features) {
      if (!feats.includes(product.features[key].feature)) {
        feats.push(product.features[key].feature);
      }
    };
    });
    console.log(feats);
    setFeaturesArr(feats);
  };

  return (
    <div>
      <table>
        <tr>
          <th>&nbsp;</th>
          <th>{currentProduct && currentProduct.name}</th>
          <th>{compareProduct.name}</th>
        </tr>
        {currentProduct && featuresArr.map((feature) => (
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
