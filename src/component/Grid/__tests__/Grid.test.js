/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-10-24 17:14:50
 * @Last Modified by: zy9
 * @Last Modified time: 2018-11-02 15:57:36
 */
import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Grid from '..';

describe('Grid', () => {
	const layoutItem = {
		h: 6,
		i: 'dbzx',
		id: 1,
		imgurl: 'http://47.95.1.229:9003/UploadFile/201808/dbzx.png',
		mealid: 1,
		path: '../../../thirdModules/dbzx/index.js',
		showtitle: false,
		style: '{"background": "#F96","border": "1px solid #ccc"}',
		title: '代办中心',
		w: 4,
		x: 0,
		y: 0,
	};


	it('render correctly', () => {
		const wrapper = mount(<Grid layout={ [layoutItem] } />);

		expect(wrapper).toMatchSnapshot();
	});
});