
import Mock from '../mock';

const getorgAdoptionProgramManagementList = [{
					id: "1",
					name: '授权个人信息',
					detail: '授权个人信息详情……'
				}, {
					id: "2",
					name: '等待领养审核结果',
					detail: '等待领养审核结果详情……'
				}, {
					id: "3",
					name: '完善个人信息',
					detail: '完善个人信息详情……'
				}, {
					id: "4",
					name: '确定领养宠物类型意向',
					detail: '确定领养宠物类型意向详情……'
				}, {
					id: "5",
					name: '等待义工/自愿者联系',
					detail: '等待义工/自愿者联系详情……'
				}, {
					id: "6",
					name: '通过领养要求，签订协议',
					detail: '通过领养要求，签订协议详情……'
				}, {
					id: "7",
					name: '完成领养',
					detail: '完成领养详情……'
				}];
const baseUrl = 'http://localhost:8080';

Mock.mock(baseUrl + '/getResource/getData', 'GET', getorgAdoptionProgramManagementList);

