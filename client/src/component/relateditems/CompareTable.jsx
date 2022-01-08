import React, { useEffect, useState } from 'react';

const CompareTable = ({ compareProduct, currentProduct }) => {
  const products = [compareProduct, currentProduct];
  const [featuresArr, setFeaturesArr] = useState([]);

  const setFeatureList = () => {
    const feats = [];
    products.forEach((product) => { for(const key in product.features) {
      if (!feats.includes(product.features[key].feature)) {
        feats.push(product.features[key].feature);
      }
    });
    setFeaturesArr(feats);
  };

  const findFeat = (product, feature) => {
    const productFeat = Object.values(product.features).find((feat) => feat.feature === feature);
    return productFeat ? productFeat.value : 'X';
  };

  useEffect(() => {
    setFeatureList();
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>&nbsp;</th>
          <th>{currentProduct.name}</th>
          <th>{compareProduct.name}</th>
        </tr>
        {currentProduct && featuresArr.map((feature) => (
          <tr>
            <td>
              {feature}
            </td>
            <td>{findFeat(currentProduct, feature)}</td>
            <td>{findFeat(compareProduct, feature)}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CompareTable;
