/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-09-28 09:01:44
 * @Last Modified by: zy9
 * @Last Modified time: 2018-10-23 15:44:39
 */
import React, { Component } from 'react';

import Grid from '../../component/Gird';
import Navigation from '../../component/Navigation';

export default class Display extends Component {
	constructor (props) {
		super(props);

		this.state = {
			layout: [],
			menuDatas: [],
		};
	}

    componentDidMount = () => {
    	this.loadLayout('layoutDatas');

    	this.loadMenu();
    }

	loadLayout = path => {
		// fetch('../../../mock/layoutDatas.json')
		fetch(`../../../mock/${ path }.json`)
			.then(result => result.json())
			.then(result => {
				const { layout } = result;

				this.setState({ layout });
			});
	}

	loadMenu = () => {
		fetch('../../../mock/switchMealDatas.json')
			.then(result => result.json())
			.then(result => {
				const { data } = result;

				this.setState({ menuDatas: data });
			});
	}

    render = () => {
    	const { layout, menuDatas } = this.state;

    	return (
    		<Navigation mentItemOnClick={ ({ url }) => this.loadLayout(url) } menu={ menuDatas }>
    			<Grid isEdit={ false } isDelete={ false } layout={ layout } />
    		</Navigation>
    	);
    }
}