
// actions方法名称与vue methods方法同步

import * as types from '../mutationTypes';
import amtApi from '../../resource/amtApi';

// 添加
export const addToCart = ({ commit }, money) => {
  amtApi
    .userResource()
    .get({id: 1, money: 500})
    .then(data => {
      let value = `甩你${data + money}块！`;
      commit(types.ADD_TO_CART, value);
    });
};

// 提交
export const submit = ({ commit }, formData) => {
  amtApi
    .businessResource()
    .save(formData)
    .then(data => {
      commit(types.FORM_SUBMIT, data);
    });
};
