/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-09-26 11:25:50
 * @Last Modified by: zy9
 * @Last Modified time: 2018-10-10 11:00:18
 */
import React, { Component } from 'react';

import { reject } from 'lodash';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Shell from '../../component/Shell';

export default class Grid extends Component {
	constructor (props) {
		super(props);

		this.state = {
			layout: [],
		};
	}

    componentDidMount = () => {
    	this.loadLayout(() => {
    		const { layout } = this.state;
    		let pathArr = [];

    		for(let item of layout) {
    			const { path, type } = item;

    			type != 'iframe' && pathArr.push(`import('${ path }')`);
    		}
    		pathArr = `[${ pathArr.toString() }]`;

    		/* eslint-disable no-eval */
    		Promise.all(eval(`${ pathArr }`)).then(modules => {
    			for(let i = 0; i < modules.length; i++) {
    				const { TestModule } = modules[i];
    				const { i: key } = layout[i];
    				const testModule = new TestModule(this[key]);
    				const { _moduleOnMount } = testModule;

    				_moduleOnMount && _moduleOnMount.call(testModule);
    			}
    		});
    	});
    }

	loadLayout = callback => {
		fetch('../../../mock/layoutDatas.json')
			.then(result => result.json())
			.then(result => {
				const { layout } = result;

				this.setState({ layout }, () => callback && callback());
			});
	}

    handleLayoutChange = layout => {
    	// console.log(layout);
    }

	handleDragDrop = e => {
		let { layout } = this.state;
		const item = JSON.parse(e.dataTransfer.getData('menuItemToGrid'));
		const { key, url, text, style } = item;

		layout.push({
			i: '' + key + layout.length,
			x: (layout.length * 2) % 12,
			y: Infinity,
			w: 2,
			h: 9,
			type: 'iframe',
			imgUrl: url,
			title: text,
			style
		});

		this.setState({ layout });
	}

	handleShellOnChange = layoutItem => {
		const { i: key } = layoutItem;
		const { layout } = this.state;

		this.setState({ layout: reject(layout, { i: key }) });
	}

    render = () => {
    	const { layout } = this.state;
    	const { isEdit = true } = this.props;

    	const layoutProps = {
    		className: 'layout',
    		// draggableHandle: '.layout',
    		cols: 12,
    		rowHeight: 30,
    		width: (document.documentElement.clientWidth || document.body.clientWidth) - 256,
    		margin: [10, 10],
    		onLayoutChange: this.handleLayoutChange,
    		isDraggable: isEdit,
    		isResizable: isEdit,
    		compactType: 'horizontal'
    	};

    	return (
    		<div className='Grid' onDrop={ this.handleDragDrop } onDragOver={ e => e.preventDefault() }>
    			<GridLayout { ...layoutProps }>
    				{
    					layout.map(item => {
    						const { i, type, imgUrl, title, path, style: shellStyle = {} } = item;
    						const height = 'calc(100% - 30px)';
    						const shellProps = {
    							key: i,
    							'data-grid': item,
    							style: Object.assign({}, { zIndex: 1, userSelect: 'none' }, shellStyle),
    							title,
    							onChange: this.handleShellOnChange,
    						};
    						const iframeChild = isEdit ? (
    							<Shell { ...shellProps }>
    								<img src={ imgUrl } style={{ width: '100%', height }} />
    							</Shell>
    						) : (
    							<Shell { ...shellProps }>
    								<iframe src={ path } style={{ border: 'none', width: '100%', height, overflow: 'auto' }}></iframe>
    							</Shell>
    						);

    						return type == 'iframe' ? iframeChild : (
    							<Shell { ...shellProps }>
    								<div style={{ height }} ref={ ref => this[i] = ref } />
    							</Shell>
    						);
    					})
    				}
    			</GridLayout>
    		</div>
    	);
    }
}