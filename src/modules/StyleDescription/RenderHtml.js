/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-11-07 15:32:22
 * @Last Modified by: zy9
 * @Last Modified time: 2018-11-12 15:06:41
 */
import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown/with-html';

import { ajax } from '../../urlHelper';

import '../../assets/global.css';
import './css/RenderHtml.css';

export default class RenderHtml extends Component {
	constructor (props) {
		super(props);

		this.state = {
			markdowns: [],
		};

		this.prefix = '../../guide/';
	}

	componentWillReceiveProps = nextProps => {
		const { paths } = nextProps;

		this.loadTemplate(paths, 0, [], markdowns => this.setState({ markdowns }));
	}

	loadTemplate = (paths, index, markdowns, callback) => {
		ajax({
			url: `${ this.prefix }${ paths[index] }.html`,
			type: 'text',
			success: markdown => {
				markdowns.push(markdown);

				if(index < paths.length - 1) {
					this.loadTemplate(paths, ++index, markdowns, callback);
				} else {
					callback && callback(markdowns);
				}
			},
		});
	}

	render = () => {
		const { markdowns } = this.state;

		return (
			<div className='RenderHtml'>
				{ markdowns.map((item, i) => <ReactMarkdown source={ item } escapeHtml={ false } key={ `mark-item-${ i }` } />) }
			</div>
		);
	}
}