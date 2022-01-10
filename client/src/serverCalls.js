import axios from 'axios';

//PRODUCT SERVER REQUESTS

export const getProducts = (product_id) => {
  return axios.get('/products/', {params: { product_id: product_id }});
};
//Returns product info with style information attached.
export const getProductAllInfo = (product_id) => {
  return axios.get('/products/allinfo/', {params: { product_id: product_id }});
};


//QUESTION & ANSWER ROUTES

export const putQuestionHelpful = (question_id) => {
  return axios.put(`/qa/questions/helpful`, {params: {question_id: question_id}});
};
export const putQuestionReport = (question_id) => {
  return axios.put(`/qa/questions/report`, {params: {question_id: question_id}});
};

export const getRelated = (product_id) => {
  console.log(product_id)
  return axios.get('/related', {params: {product_id: product_id}});
};