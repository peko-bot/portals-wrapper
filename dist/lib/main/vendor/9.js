(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{506:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=l(r),a=l(n(527)),i=l(n(835)),s=n(512);function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){n.loadMenu(),window.onresize=function(){n.setState({})}},n.loadLayout=function(e){(0,s.ajax)({key:"s_slmh_meal_layout_data",data:{id:e},success:function(e){var t=e.data,r=[],o=!0,a=!1,i=void 0;try{for(var s,l=t[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var u=s.value,c=u.style;"string"==typeof c&&(u.style=JSON.parse(c)),r.push(u)}}catch(e){a=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(a)throw i}}n.setState({layout:r},function(){n.grid.mountRoots()})}})},n.loadMenu=function(){(0,s.ajax)({key:"s_slmh_meal_switch",data:{id:1},success:function(e){var t=e.data;n.setState({menuDatas:t},function(){0!=t.length&&n.loadLayout(t[0].id)})}})},n.render=function(){var e=n.state,t=e.layout,r=e.menuDatas;return o.default.createElement(i.default,{menuItemOnClick:function(e){var t=e.id;return n.loadLayout(t)},menu:r,clock:!0},o.default.createElement(a.default,{isEdit:!1,isDelete:!1,layout:t,ref:function(e){return e&&(n.grid=e)}}))},n.state={layout:[],menuDatas:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=u},512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ajax=void 0;var r=n(517),o=n(520),a=["json","html","text"],i=function(e){if(a.includes(e))return e;console.error("fetch type error.")},s=function(e,t){return(e.includes("?")?"&":"?")+l(t)},l=function(e){var t="";for(var n in e)t+=n+"="+e[n]+"&";return t=t.substr(0,t.length-1)},u=function(e){var t=void 0;for(var n in o.path)if(e==n){t=o.path[n];break}if(t)return t};t.ajax=function(e){var t,n,o=e.url,a=e.key,l=e.method,c=void 0===l?"GET":l,f=e.data,d=e.type,p=void 0===d?"json":d,h=e.success;i(p),t=u(a),n=s(t,f);var m={};"GET"!=c&&(m={body:JSON.stringify(f),method:c,headers:{"Content-Type":"application/json"}}),(0,r.fetch)(o||t+n,m).then(function(e){return e[p]()}).then(function(e){return h&&h(e)}).catch(function(e){return console.error(e)})}},514:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(77)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n(510);var a=n(2),i=s(a);function s(e){return e&&e.__esModule?e:{default:e}}n(515);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));u.call(n);var r=e.title;return n.state={title:r,propertyBoardVisible:!1,propertyBoardDataSource:{}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),t}(),u=function(){var e=this;this.componentDidMount=function(){},this.handleOnDelete=function(t){var n=e.props.onDelete,r=e.props["data-grid"]||{};e.preventBubble(t),n&&n(r)},this.handleOnEdit=function(t){var n=e.props,r=n.style,o=n.onEdit,a=e.props["data-grid"]||{};e.preventBubble(t),e.setState({propertyBoardVisible:!0,propertyBoardDataSource:{title:a.title||"",style:r}},function(){o&&o(!0)})},this.preventBubble=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},this.handleDrawerOnClose=function(t){var n=e.props.onEdit;e.setState({propertyBoardVisible:t},function(){n&&n(t)})},this.render=function(){var t=e.props,n=t.children,a=t.isEdit,s=t.isDelete,l=t.type,u=void 0===l?"component":l,c=t.onClick,f=t.showTitle,d=void 0===f||f,p=e.state.title,h=i.default.createElement(r.default,{type:"edit",theme:"outlined",className:"operation",onMouseDown:e.handleOnEdit,style:{right:22}}),m=i.default.createElement(r.default,{type:"delete",theme:"outlined",className:"operation",onMouseDown:e.handleOnDelete.bind(e),style:{right:0}}),y=Object.assign({},e.props);return delete y.getDrawerStatus,delete y.isDelete,delete y.onDelete,delete y.onEdit,delete y.isEdit,delete y.title,delete y.showTitle,i.default.createElement("div",o({},y,{className:"Shell"+("component"!=u?" border-transition":""),onClick:function(e){return"add"==u&&c&&c(e)}}),s&&m,a&&h,"add"!=u&&d&&i.default.createElement("span",{className:"operation-title"},p),n)}};t.default=l},515:function(e,t,n){var r=n(516);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(100)(r,o);r.locals&&(e.exports=r.locals)},516:function(e,t,n){(e.exports=n(99)(!1)).push([e.i,".Shell .operation {\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    float: right;\r\n    position: absolute;\r\n    top: 0px;\r\n}\r\n\r\n.Shell .operation-title {\r\n    font-family: MicrosoftYaHei;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: 1px;\r\n    color: #171717;\r\n    padding-left: 10px;\r\n}\r\n\r\n.Shell {\r\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n}\r\n\r\n.Shell:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.border-transition:hover {\r\n    border: 1px dashed #1890ff;\r\n}\r\n\r\n.border-transition {\r\n    border: 1px dashed #d9d9d9;\r\n}",""])},520:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.path={propertyDatas:"../../../mock/propertyDatas.json",s_slmh_menu_data:"http://47.95.1.229:9003/webapi/api/v1.1/basic/data?key=s_slmh_menu_data",s_slmh_meal_layout_data:"http://47.95.1.229:9003/webapi/api/v1.1/basic/data?key=s_slmh_meal_layout_data",s_slmh_meal_switch:"http://47.95.1.229:9003/webapi/api/v1.1/basic/data?key=s_slmh_meal_switch",d_slmh_meal:"http://47.95.1.229:9003/webapi/api/v1.1/basic/data?key=d_slmh_meal",add_meal:"http://47.95.1.229:9007/webapi1/api/basic/meal"}},527:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=l(r),a=l(n(550));n(555),n(556);var i=l(n(514)),s=l(n(530));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.mountRoots=function(){var e=r.props.layout;new s.default(e,r.roots).load()},r.handleLayoutChange=function(e){for(var t=r.props,n=t.onLayoutChange,o=t.layout,a=[],i=0;i<e.length;i++){var s=e[i],l=o[i];a.push(Object.assign({},l,s))}n&&n(a)},r.handleDragDrop=function(e){var t=r.props,n=t.layout,o=t.onLayoutChange,a=JSON.parse(e.dataTransfer.getData("menuItemToGrid")),i=a.key,s=a.imgurl,l=a.text,u=a.style,c=a.url,f={i:""+i+n.length,x:2*n.length%12,w:2,h:9,y:0,url:c,path:c,imgUrl:s,title:l,style:JSON.stringify(u)};n.push(Object.assign({},a,f)),o&&o(n)},r.createShellChild=function(e,t){var n=t.i,a=t.moduletype,i=t.imgurl,s=t.imgUrl,l=t.path,u="calc(100% - 21px)";return e?o.default.createElement("img",{src:i||s,style:{width:"100%",height:u}}):"iframe"==a?o.default.createElement("iframe",{src:l,style:{border:"none",width:"100%",height:u,overflow:"auto"}}):o.default.createElement("div",{style:{height:u},ref:function(e){return e&&(r.roots[n]=e)}})},r.handleShellonEdit=function(e,t){Promise.all([n.e(2),n.e(10),n.e(11)]).then(n.t.bind(null,700,7)).then(function(n){r.setState({isDrawerOpen:e,propertyBoardDataSource:t,PropertyBoard:n.default||n})})},r.handleShellStyleOnChange=function(e){var t=r.props,n=t.onLayoutChange,o=t.layout,a=[],i=!0,s=!1,l=void 0;try{for(var u,c=o[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var f=u.value,d=f.i,p=f.style,h=void 0===p?{}:p,m=f;d==e.id&&(m.style=Object.assign(h,e),delete m.style.id),a.push(m)}}catch(e){s=!0,l=e}finally{try{!i&&c.return&&c.return()}finally{if(s)throw l}}n&&n(a)},r.render=function(){var e=r.state,t=e.isDrawerOpen,n=e.propertyBoardDataSource,s=e.PropertyBoard,l=r.props,u=l.isEdit,c=void 0===u||u,f=l.isDelete,d=void 0===f||f,p=l.layout,h=l.onDelete,m=l.propertyBoardEnumData,y={className:"layout",cols:12,rowHeight:30,width:(document.documentElement.clientWidth||document.body.clientWidth)-(c?256:0),margin:[10,10],onLayoutChange:r.handleLayoutChange,isDraggable:c,isResizable:c,style:{height:500,background:"#f5f6fa"}},j={visible:t,onClose:function(e){r.setState({isDrawerOpen:e},function(){setTimeout(function(){return r.setState({PropertyBoard:null})},301)})},shellStyleDatas:n,enumDatas:m,onChange:r.handleShellStyleOnChange};return o.default.createElement("div",{className:"Grid",onDrop:r.handleDragDrop,onDragOver:function(e){return e.preventDefault()}},o.default.createElement(a.default,y,p.map(function(e){var t=e.i,n=e.title,a=e.style,s=void 0===a?{}:a,l=e.showtitle,u={key:t,title:n,isEdit:c,isDelete:d,onDelete:h,showTitle:l,style:Object.assign({},{zIndex:1,userSelect:"none",boxShadow:"0px 0px 29px 0px rgba(93, 106, 113, 0.12)",borderRadius:2},s),"data-grid":e,onEdit:function(t){return r.handleShellonEdit(t,e)}};return o.default.createElement(i.default,u,r.createShellChild(c,e))})),s&&o.default.createElement(s,j))},r.state={isDrawerOpen:!1,propertyBoardDataSource:{},PropertyBoard:null},r.roots={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=u},530:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(517);var o=function(e){if(e)return(0,r.fetch)(e).then(function(e){return e.text()}).then(function(e){var t={exports:{}};return new Function("module",e)(t),t.exports}).catch(function(e){return console.error("importPolyfill error: "+e)});console.error("importPolyfill error: url is undefined.")};t.default=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.load=function(){var e=[],t=[],n=!0,a=!1,i=void 0;try{for(var s,l=r.layout[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){var u=s.value,c=u.path;"iframe"!=u.moduletype&&(e.push(o(c)),t.push(u))}}catch(e){a=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw i}}r.layout=t,r.loadScripts(e,0,[],function(e){for(var t=0;t<e.length;t++)if(e[t]){var n=r.layout[t].i,o=new e[t](r.roots[n]),a=o._moduleOnMount;a&&a.call(o)}})},this.loadScripts=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments[3];t!=e.length?e[t].then(function(a){n.push(a),r.loadScripts(e,++t,n,o)}).catch(function(e){return console.error("loadScripts error: "+e)}):o&&o(n)},this.layout=t,this.roots=n}},835:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(836)),o=u(n(77)),a=u(n(518));n(838),n(510),n(519);var i=n(2),s=u(i),l=u(n(509));function u(e){return e&&e.__esModule?e:{default:e}}n(842),l.default.locale("zh-cn");var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.componentDidMount=function(){i.props.clock&&i.loadCurrentTime()},i.loadCurrentTime=function(){n.e(13).then(n.t.bind(null,853,7)).then(function(e){return i.setState({CurrentTime:e.default})})},i.getCurrentTime=function(){setInterval(function(){i.setState({time:(0,l.default)().format("HH:mm:ss")})},1e3)},i.render=function(){var e=i.props,t=e.children,n=e.menu,u=e.menuItemOnClick,c=e.clock,f=i.state.CurrentTime,d=s.default.createElement("div",{className:"content-wrapper"},s.default.createElement("div",{className:"content-time-detail"},(0,l.default)().format("YYYY-MM-DD")),s.default.createElement("div",{className:"content-time-detail"},(0,l.default)().format("dddd"))),p=s.default.createElement(a.default,null,n.map(function(e){var t=e.title,n=e.id;return s.default.createElement(a.default.Item,{key:n,onClick:function(t){return u&&u(e)}},s.default.createElement("a",{rel:"noopener noreferrer"},t))}));return s.default.createElement("div",{className:"Navigation"},s.default.createElement("div",{className:"content"},s.default.createElement("div",{className:"content-wrapper",style:{width:300}},"浙江省水利综合门户"),s.default.createElement("div",{className:"content-wrapper",style:{width:300}},s.default.createElement("div",{className:"content-time"},f&&s.default.createElement(f,null))),c&&d,s.default.createElement("div",{className:"content-wrapper",style:{float:"right",marginRight:20,color:"#FFF"}},s.default.createElement(r.default,{overlay:p,trigger:["hover","click"]},s.default.createElement("span",{className:"droplink"},"套餐切换",s.default.createElement(o.default,{type:"down"}))))),t)},i.state={CurrentTime:null},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}();t.default=c},841:function(e,t,n){var r={"./af":577,"./af.js":577,"./ar":578,"./ar-dz":579,"./ar-dz.js":579,"./ar-kw":580,"./ar-kw.js":580,"./ar-ly":581,"./ar-ly.js":581,"./ar-ma":582,"./ar-ma.js":582,"./ar-sa":583,"./ar-sa.js":583,"./ar-tn":584,"./ar-tn.js":584,"./ar.js":578,"./az":585,"./az.js":585,"./be":586,"./be.js":586,"./bg":587,"./bg.js":587,"./bm":588,"./bm.js":588,"./bn":589,"./bn.js":589,"./bo":590,"./bo.js":590,"./br":591,"./br.js":591,"./bs":592,"./bs.js":592,"./ca":593,"./ca.js":593,"./cs":594,"./cs.js":594,"./cv":595,"./cv.js":595,"./cy":596,"./cy.js":596,"./da":597,"./da.js":597,"./de":598,"./de-at":599,"./de-at.js":599,"./de-ch":600,"./de-ch.js":600,"./de.js":598,"./dv":601,"./dv.js":601,"./el":602,"./el.js":602,"./en-au":603,"./en-au.js":603,"./en-ca":604,"./en-ca.js":604,"./en-gb":605,"./en-gb.js":605,"./en-ie":606,"./en-ie.js":606,"./en-il":607,"./en-il.js":607,"./en-nz":608,"./en-nz.js":608,"./eo":609,"./eo.js":609,"./es":610,"./es-do":611,"./es-do.js":611,"./es-us":612,"./es-us.js":612,"./es.js":610,"./et":613,"./et.js":613,"./eu":614,"./eu.js":614,"./fa":615,"./fa.js":615,"./fi":616,"./fi.js":616,"./fo":617,"./fo.js":617,"./fr":618,"./fr-ca":619,"./fr-ca.js":619,"./fr-ch":620,"./fr-ch.js":620,"./fr.js":618,"./fy":621,"./fy.js":621,"./gd":622,"./gd.js":622,"./gl":623,"./gl.js":623,"./gom-latn":624,"./gom-latn.js":624,"./gu":625,"./gu.js":625,"./he":626,"./he.js":626,"./hi":627,"./hi.js":627,"./hr":628,"./hr.js":628,"./hu":629,"./hu.js":629,"./hy-am":630,"./hy-am.js":630,"./id":631,"./id.js":631,"./is":632,"./is.js":632,"./it":633,"./it.js":633,"./ja":634,"./ja.js":634,"./jv":635,"./jv.js":635,"./ka":636,"./ka.js":636,"./kk":637,"./kk.js":637,"./km":638,"./km.js":638,"./kn":639,"./kn.js":639,"./ko":640,"./ko.js":640,"./ky":641,"./ky.js":641,"./lb":642,"./lb.js":642,"./lo":643,"./lo.js":643,"./lt":644,"./lt.js":644,"./lv":645,"./lv.js":645,"./me":646,"./me.js":646,"./mi":647,"./mi.js":647,"./mk":648,"./mk.js":648,"./ml":649,"./ml.js":649,"./mn":650,"./mn.js":650,"./mr":651,"./mr.js":651,"./ms":652,"./ms-my":653,"./ms-my.js":653,"./ms.js":652,"./mt":654,"./mt.js":654,"./my":655,"./my.js":655,"./nb":656,"./nb.js":656,"./ne":657,"./ne.js":657,"./nl":658,"./nl-be":659,"./nl-be.js":659,"./nl.js":658,"./nn":660,"./nn.js":660,"./pa-in":661,"./pa-in.js":661,"./pl":662,"./pl.js":662,"./pt":663,"./pt-br":664,"./pt-br.js":664,"./pt.js":663,"./ro":665,"./ro.js":665,"./ru":666,"./ru.js":666,"./sd":667,"./sd.js":667,"./se":668,"./se.js":668,"./si":669,"./si.js":669,"./sk":670,"./sk.js":670,"./sl":671,"./sl.js":671,"./sq":672,"./sq.js":672,"./sr":673,"./sr-cyrl":674,"./sr-cyrl.js":674,"./sr.js":673,"./ss":675,"./ss.js":675,"./sv":676,"./sv.js":676,"./sw":677,"./sw.js":677,"./ta":678,"./ta.js":678,"./te":679,"./te.js":679,"./tet":680,"./tet.js":680,"./tg":681,"./tg.js":681,"./th":682,"./th.js":682,"./tl-ph":683,"./tl-ph.js":683,"./tlh":684,"./tlh.js":684,"./tr":685,"./tr.js":685,"./tzl":686,"./tzl.js":686,"./tzm":687,"./tzm-latn":688,"./tzm-latn.js":688,"./tzm.js":687,"./ug-cn":689,"./ug-cn.js":689,"./uk":690,"./uk.js":690,"./ur":691,"./ur.js":691,"./uz":692,"./uz-latn":693,"./uz-latn.js":693,"./uz.js":692,"./vi":694,"./vi.js":694,"./x-pseudo":695,"./x-pseudo.js":695,"./yo":696,"./yo.js":696,"./zh-cn":697,"./zh-cn.js":697,"./zh-hk":698,"./zh-hk.js":698,"./zh-tw":699,"./zh-tw.js":699};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=841},842:function(e,t,n){var r=n(843);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(100)(r,o);r.locals&&(e.exports=r.locals)},843:function(e,t,n){(e.exports=n(99)(!1)).push([e.i,".Navigation {\r\n    background: #2e7df3;\r\n    box-shadow: 0px 0px 9px 0px rgba(39, 93, 214, 0.39);\r\n}\r\n\r\n.Navigation .content {\r\n    height: 65px;\r\n    background-color: #2e7df3;\r\n    box-shadow: 0px 0px 9px 0px rgba(39, 93, 214, 0.39);\r\n}\r\n\r\n.Navigation .content .content-wrapper {\r\n    font-family: MicrosoftYaHeiLight;\r\n    font-size: 28px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: 1px;\r\n    color: #ffffff;\r\n    float: left;\r\n    height: 100%;\r\n    line-height: 65px;\r\n    text-align: center;\r\n}\r\n\r\n.Navigation .content .content-space {\r\n    width: 1px;\r\n    height: 100%;\r\n    background: #2372e7;\r\n    float: left;\r\n}\r\n\r\n.Navigation .content .content-time {\r\n    font-family: MicrosoftYaHeiLight;\r\n    font-size: 34px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: 0px;\r\n    color: #ffffff;\r\n}\r\n\r\n.Navigation .content .content-time-detail {\r\n    height: 24px;\r\n\tfont-family: MicrosoftYaHei;\r\n\tfont-size: 13px;\r\n\tfont-weight: normal;\r\n\tfont-stretch: normal;\r\n\tline-height: 33px;\r\n\tletter-spacing: 0px;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.Navigation .content .content-wrapper .droplink{\r\n    color: #FFF;\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    -webkit-transition: color .3s;\r\n    transition: color .3s;\r\n}",""])}}]);