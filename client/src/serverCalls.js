import axios from 'axios';

//PRODUCT SERVER REQUESTS

export const getProducts = (product_id) => {
  return axios.get('/products/', {params: { product_id: product_id }});
};
//Returns product info with style information attached.
export const getProductAllInfo = (product_id) => {
  return axios.get('/products/allinfo/', {params: { product_id: product_id }});
};

//CART SERVER REQUEST
export const postCart = (item) => {
  return axios.post('/cart', item)
}

//QUESTION & ANSWER SERVER REQUESTS
export const getQuestions = (params) => {
  return axios.get('/qa/questions', { params });
}
export const postQuestion = (q) => {
  return axios.post('/qa/questions', q);
}

export const putQuestionHelpful = (question_id) => {
  return axios.put(`/qa/questions/helpful`, {params: {question_id: question_id}});
};
export const putQuestionReport = (question_id) => {
  return axios.put(`/qa/questions/report`, {params: {question_id: question_id}});
};
export const postAnswer = (question_id, newAnswer) => {
  return axios.post(`/qa/questions/answers?question_id=${question_id}`, newAnswer)
}

export const putAnswerHelpful = (answer_id) => {
  return axios.put(`/qa/answers/helpful`, {params: {question_id: answer_id}});
};
export const putAnswerReport = (answer_id) => {
  return axios.put(`/qa/answers/report`, {params: {question_id: answer_id}});
};

//RELATED ITEM SERVER REQUESTS
export const getRelated = (product_id) => {
  console.log(product_id)
  return axios.get('/related', {params: {product_id: product_id}});
};