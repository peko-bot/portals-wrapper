(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{21:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactGridLayout=__webpack_require__(24),_reactGridLayout2=_interopRequireDefault(_reactGridLayout);function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}__webpack_require__(30),__webpack_require__(33);var Display=function(_Component){function Display(props){_classCallCheck(this,Display);var _this=_possibleConstructorReturn(this,(Display.__proto__||Object.getPrototypeOf(Display)).call(this,props));return _this.componentDidMount=function(){_this.loadLayout(function(){var layout=_this.state.layout,pathArr=[],_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _iterator=layout[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var item=_step.value,path=item.path,type=item.type;"iframe"!=type&&pathArr.push("import('"+path+"')")}}catch(t){_didIteratorError=!0,_iteratorError=t}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}pathArr="["+pathArr.toString()+"]",Promise.all(eval(""+pathArr)).then(function(t){for(var e=0;e<t.length;e++){var r=t[e].TestModule,a=layout[e].i,o=new r(_this[a]),i=o._moduleOnMount;i&&i.call(o)}})})},_this.transStaticDatas=function(t){var e=[],r=!0,a=!1,o=void 0;try{for(var i,n=t[Symbol.iterator]();!(r=(i=n.next()).done);r=!0){var u=i.value;e.push(Object.assign({},u,{static:!0}))}}catch(t){a=!0,o=t}finally{try{!r&&n.return&&n.return()}finally{if(a)throw o}}return e},_this.loadLayout=function(t){fetch("../../../mock/layoutDatas.json").then(function(t){return t.json()}).then(function(e){var r=e.layout;_this.setState({layout:_this.transStaticDatas(r)},function(){return t&&t()})})},_this.render=function(){var t=_this.state.layout,e={className:"layout",cols:12,rowHeight:30,width:document.documentElement.clientWidth||document.body.clientWidth,margin:[10,10]};return _react2.default.createElement("div",{className:"Display"},_react2.default.createElement(_reactGridLayout2.default,e,t.map(function(t){var e=t.i,r=t.type,a=t.path;return"iframe"==r?_react2.default.createElement("div",{key:e,"data-grid":t},_react2.default.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%",overflow:"auto"}})):_react2.default.createElement("div",{key:e,"data-grid":t,style:{background:"#ccc"},ref:function(t){return _this[e]=t}})})))},_this.state={layout:[]},_this}return _inherits(Display,_Component),Display}(_react.Component);exports.default=Display}}]);