const proxy = null;

/*eslint-disable */
const prod = {
	propertyDatas: '../../mock/propertyDatas.json',
	's_slmh_menu_data': 'http://47.95.1.229:9003/webapi/api/v1.1/basic/data?key=s_slmh_menu_data',
	's_slmh_meal_layout_data': 'http://47.95.1.229:9003/webapi/api/v1.1/basic/data?key=s_slmh_meal_layout_data',
	's_slmh_meal_switch': 'http://47.95.1.229:9003/webapi/api/v1.1/basic/data?key=s_slmh_meal_switch',
	'd_slmh_meal': 'http://47.95.1.229:9003/webapi/api/v1.1/basic/data?key=d_slmh_meal',
	'add_meal': 'http://47.95.1.229:9007/webapi1/api/basic/meal',
	'style_menu_data': '../../mock/menuDatas.json',
	'login-ticket': 'http://47.95.1.229:9007/webapi/api/v1/zjzhsl/login-ticket',
};

/*eslint-disable */
const dev = {};

// const path = process.argv.toString().includes('development') ? dev : prod;
const path = prod;

export { path, proxy };