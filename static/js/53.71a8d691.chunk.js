(this.webpackJsonpadminpanel=this.webpackJsonpadminpanel||[]).push([[53],{540:function(e,t,a){"use strict";var n=a(19),c=a(50),o=a(1),s=a.n(o),l=a(62),i=a.n(l),r=a(525),u=a.n(r),m=a(526),p=i.a.oneOfType([i.a.number,i.a.string]),f={tag:m.q,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},d={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,l=e.tag,i=e.form,r=e.widths,p=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];r.forEach((function(t,a){var n=e[t];if(delete p[t],n){var c=!a;f.push(c?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var d=Object(m.m)(u()(t,o?"no-gutters":null,i?"form-row":"row",f),a);return s.a.createElement(l,Object(n.a)({},p,{className:d}))};v.propTypes=f,v.defaultProps=d,t.a=v},541:function(e,t,a){"use strict";var n=a(19),c=a(50),o=a(1),s=a.n(o),l=a(62),i=a.n(l),r=a(525),u=a.n(r),m=a(526),p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),d={tag:m.q,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,o=e.widths,l=e.tag,i=Object(c.a)(e,["className","cssModule","widths","tag"]),r=[];o.forEach((function(t,n){var c=e[t];if(delete i[t],c||""===c){var o=!n;if(Object(m.k)(c)){var s,l=o?"-":"-"+t+"-",p=b(o,t,c.size);r.push(Object(m.m)(u()(((s={})[p]=c.size||""===c.size,s["order"+l+c.order]=c.order||0===c.order,s["offset"+l+c.offset]=c.offset||0===c.offset,s)),a))}else{var f=b(o,t,c);r.push(f)}}})),r.length||r.push("col");var p=Object(m.m)(u()(t,r),a);return s.a.createElement(l,Object(n.a)({},i,{className:p}))};h.propTypes=d,h.defaultProps=v,t.a=h},573:function(e,t,a){"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function c(e){this.setState(function(t){var a=this.constructor.getDerivedStateFromProps(e,t);return null!==a&&void 0!==a?a:null}.bind(this))}function o(e,t){try{var a=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(a,n)}finally{this.props=a,this.state=n}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var a=null,s=null,l=null;if("function"===typeof t.componentWillMount?a="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?l="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==a||null!==s||null!==l){var i=e.displayName||e.name,r="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+r+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=c),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,a){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:a;u.call(this,e,t,n)}}return e}a.r(t),a.d(t,"polyfill",(function(){return s})),n.__suppressDeprecationWarning=!0,c.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0},574:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(1),c=a.n(n).a.createContext({})},665:function(e,t,a){"use strict";var n=a(19),c=a(30),o=a(1),s=a.n(o),l=a(573),i=a(62),r=a.n(i),u=a(525),m=a.n(u),p=a(574),f=a(526),d={tag:f.q,activeTab:r.a.any,className:r.a.string,cssModule:r.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(c.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.tag,o=Object(f.n)(this.props,Object.keys(d)),l=Object(f.m)(m()("tab-content",t),a);return s.a.createElement(p.a.Provider,{value:{activeTabId:this.state.activeTab}},s.a.createElement(c,Object(n.a)({},o,{className:l})))},t}(o.Component);Object(l.polyfill)(v),t.a=v,v.propTypes=d,v.defaultProps={tag:"div"}},666:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(19),c=a(50),o=a(1),s=a.n(o),l=a(62),i=a.n(l),r=a(525),u=a.n(r),m=a(574),p=a(526),f={tag:p.q,className:i.a.string,cssModule:i.a.object,tabId:i.a.any};function d(e){var t=e.className,a=e.cssModule,o=e.tabId,l=e.tag,i=Object(c.a)(e,["className","cssModule","tabId","tag"]),r=function(e){return Object(p.m)(u()("tab-pane",t,{active:o===e}),a)};return s.a.createElement(m.a.Consumer,null,(function(e){var t=e.activeTabId;return s.a.createElement(l,Object(n.a)({},i,{className:r(t)}))}))}d.propTypes=f,d.defaultProps={tag:"div"}},996:function(e,t,a){"use strict";a.r(t);var n=a(156),c=a(157),o=a(162),s=a(158),l=a(159),i=a(1),r=a.n(i),u=a(666),m=a(540),p=a(541),f=a(974),d=a(971),v=a(972),b=a(665),h=a(973),g=a(525),E=a.n(g),T=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).toggle=c.toggle.bind(Object(o.a)(c)),c.state={activeTab:new Array(4).fill("1")},c}return Object(c.a)(a,[{key:"lorem",value:function(){return"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."}},{key:"toggle",value:function(e,t){var a=this.state.activeTab.slice();a[e]=t,this.setState({activeTab:a})}},{key:"tabPane",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{tabId:"1"},"1. ".concat(this.lorem())),r.a.createElement(u.a,{tabId:"2"},"2. ".concat(this.lorem())),r.a.createElement(u.a,{tabId:"3"},"3. ".concat(this.lorem())))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement(m.a,null,r.a.createElement(p.a,{xs:"12",md:"6",className:"mb-4"},r.a.createElement(f.a,{tabs:!0},r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"1"===this.state.activeTab[0],onClick:function(){e.toggle(0,"1")}},"Home")),r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"2"===this.state.activeTab[0],onClick:function(){e.toggle(0,"2")}},"Profile")),r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"3"===this.state.activeTab[0],onClick:function(){e.toggle(0,"3")}},"Messages"))),r.a.createElement(b.a,{activeTab:this.state.activeTab[0]},this.tabPane())),r.a.createElement(p.a,{xs:"12",md:"6",className:"mb-4"},r.a.createElement(f.a,{tabs:!0},r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"1"===this.state.activeTab[1],onClick:function(){e.toggle(1,"1")}},r.a.createElement("i",{className:"icon-calculator"}))),r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"2"===this.state.activeTab[1],onClick:function(){e.toggle(1,"2")}},r.a.createElement("i",{className:"icon-basket-loaded"}))),r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"3"===this.state.activeTab[1],onClick:function(){e.toggle(1,"3")}},r.a.createElement("i",{className:"icon-pie-chart"})))),r.a.createElement(b.a,{activeTab:this.state.activeTab[1]},this.tabPane())),r.a.createElement(p.a,{xs:"12",md:"6",className:"mb-4"},r.a.createElement(f.a,{tabs:!0},r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"1"===this.state.activeTab[2],onClick:function(){e.toggle(2,"1")}},r.a.createElement("i",{className:"icon-calculator"})," ",r.a.createElement("span",{className:"1"===this.state.activeTab[2]?"":"d-none"}," Calculator"))),r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"2"===this.state.activeTab[2],onClick:function(){e.toggle(2,"2")}},r.a.createElement("i",{className:"icon-basket-loaded"})," ",r.a.createElement("span",{className:"2"===this.state.activeTab[2]?"":"d-none"}," Shopping cart"))),r.a.createElement(d.a,null,r.a.createElement(v.a,{className:E()({active:"3"===this.state.activeTab[2]}),onClick:function(){e.toggle(2,"3")}},r.a.createElement("i",{className:"icon-pie-chart"})," ",r.a.createElement("span",{className:"3"===this.state.activeTab[2]?"":"d-none"}," Charts")))),r.a.createElement(b.a,{activeTab:this.state.activeTab[2]},this.tabPane())),r.a.createElement(p.a,{xs:"12",md:"6",className:"mb-4"},r.a.createElement(f.a,{tabs:!0},r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"1"===this.state.activeTab[3],onClick:function(){e.toggle(3,"1")}},r.a.createElement("i",{className:"icon-calculator"}),r.a.createElement("span",{className:"1"===this.state.activeTab[3]?"":"d-none"}," Calc"),"\xa0",r.a.createElement(h.a,{color:"success"},"New"))),r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"2"===this.state.activeTab[3],onClick:function(){e.toggle(3,"2")}},r.a.createElement("i",{className:"icon-basket-loaded"}),r.a.createElement("span",{className:"2"===this.state.activeTab[3]?"":"d-none"}," Cart"),"\xa0",r.a.createElement(h.a,{pill:!0,color:"danger"},"29"))),r.a.createElement(d.a,null,r.a.createElement(v.a,{active:"3"===this.state.activeTab[3],onClick:function(){e.toggle(3,"3")}},r.a.createElement("i",{className:"icon-pie-chart"}),r.a.createElement("span",{className:"3"===this.state.activeTab[3]?"":"d-none"}," Charts")))),r.a.createElement(b.a,{activeTab:this.state.activeTab[3]},this.tabPane()))))}}]),a}(i.Component);t.default=T}}]);
//# sourceMappingURL=53.71a8d691.chunk.js.map