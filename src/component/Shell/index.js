/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-10-08 10:39:22
 * @Last Modified by: zy9
 * @Last Modified time: 2018-10-08 15:37:30
 */
import React, { Component } from 'react';

import './css/Shell.css';

export default class Shell extends Component {
	constructor (props) {
		super(props);

		this.state = {

		};
	}

    componentDidMount = () => {

    }

    render = () => {
    	const { children, title } = this.props;

    	return (
    		<div { ...this.props }>
    			{ title }
    			{ children }
    		</div>
    	);
    }
}