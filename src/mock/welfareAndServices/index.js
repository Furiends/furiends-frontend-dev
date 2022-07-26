import { getServicesReq, saveServicesReq } from '@/service/api/welfareAndServices';
import Mock from '../mock';

const { Random } = Mock;
const getWelfarelist = [];
const baseUrl = 'http://localhost:8080';
const successRsp = {
  code: '0',
  msg: 'success',
};

for (let i = 0; i < 49; i += 1) {
  const obj = {
    id: Random.integer(0, 99),
    isSelected: Random.integer(0, 1),
    type: Random.cword(2, 3),
  };
  getWelfarelist.push(obj);
}

Mock.mock(baseUrl + getServicesReq.url, getServicesReq.type, getWelfarelist);

Mock.mock(baseUrl + saveServicesReq.url, saveServicesReq.type, () => successRsp);
