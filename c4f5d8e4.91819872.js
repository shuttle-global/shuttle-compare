(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,a){e.exports={"mb-1":"mb-1_2BIw","mb-2":"mb-2_3S4V","mb-3":"mb-3_2Tlm","mb-4":"mb-4_3Bce","mb-5":"mb-5_2cZ_","mb-auto":"mb-auto_3Tq7","mr-1":"mr-1_1xKp","mr-2":"mr-2_jhZY","mr-3":"mr-3_2W4e","mr-4":"mr-4_tvXk","mr-5":"mr-5_28Z9","mr-auto":"mr-auto_3_IV","mx-3":"mx-3_8e4G","mx-auto":"mx-auto_2XkV","my-5":"my-5_1bvO","material-icons":"material-icons_tyvq",navbar__items:"navbar__items_2w1Z","navbar__items--right":"navbar__items--right_2bDY","react-toggle":"react-toggle_1GRs","docusaurus-highlight-code-line":"docusaurus-highlight-code-line_3xgc","row--no-gutters":"row--no-gutters_3W6G",col:"col_om7V",responsiveImage:"responsiveImage_1TWu",label:"label_3XdM","text-center":"text-center_2hOu","text-left":"text-left_3YMt",hero__title:"hero__title_2VN7",hero__tagline:"hero__tagline_6vw7","table_no-borders":"table_no-borders_2Ji1",hidden:"hidden_liAa","mobile-hidden":"mobile-hidden_2YUD","desktop-hidden":"desktop-hidden_3778","mobile-only":"mobile-only_3VIF","desktop-only":"desktop-only_N92O",navbar:"navbar_16PI",navbar__logo:"navbar__logo_33br","container-fluid":"container-fluid_112X","column-container":"column-container_3lgY",col1:"col1_2VHI",col2:"col2_mSG3",col3:"col3_1wwf",container:"container_3GQX","margin-vert--xl":"margin-vert--xl_ljJM","button--outline":"button--outline_2AdE",bordered:"bordered_14i2",platformCard:"platformCard_Klni",platformCard__img:"platformCard__img_1OU0",platformCard__name:"platformCard__name_2mhF",platformCard__url:"platformCard__url_3XnJ",platformCard__show:"platformCard__show_Z8Tb"}},142:function(e,t,a){e.exports={"mb-1":"mb-1_14MD","mb-2":"mb-2_2fsO","mb-3":"mb-3_1Ljo","mb-4":"mb-4_3vUB","mb-5":"mb-5_18V9","mb-auto":"mb-auto_1KD1","mr-1":"mr-1_3uft","mr-2":"mr-2_3RRi","mr-3":"mr-3_3-XT","mr-4":"mr-4_pAra","mr-5":"mr-5_muMc","mr-auto":"mr-auto_2ZQM","mx-3":"mx-3_iisT","mx-auto":"mx-auto_bO-j","my-5":"my-5_2vBH","material-icons":"material-icons_1fp7",navbar__items:"navbar__items_1EUU","navbar__items--right":"navbar__items--right_3Bds","react-toggle":"react-toggle_oEVs","docusaurus-highlight-code-line":"docusaurus-highlight-code-line_1pvS","row--no-gutters":"row--no-gutters_2KuG",col:"col_2ZWW",responsiveImage:"responsiveImage_1AbP",label:"label_Z83o","text-center":"text-center_1kz7","text-left":"text-left_2oh4",hero__title:"hero__title_3b6x",hero__tagline:"hero__tagline_PEen","table_no-borders":"table_no-borders_8QAC",hidden:"hidden_YKP0","mobile-hidden":"mobile-hidden_2_Pn","desktop-hidden":"desktop-hidden_1F8_","mobile-only":"mobile-only_285j","desktop-only":"desktop-only_RU06",navbar:"navbar_1Ylm",navbar__logo:"navbar__logo_HenG","container-fluid":"container-fluid_3WeJ","column-container":"column-container_3XHk",col1:"col1_36oV",col2:"col2_3epJ",col3:"col3_3qDv",container:"container_3PPo","margin-vert--xl":"margin-vert--xl_3LF9","button--outline":"button--outline_2INp",bordered:"bordered_3brN",platformList__search_container:"platformList__search_container_18jI",platformList__search:"platformList__search_1O1k",platformList__search_input:"platformList__search_input_21Og"}},67:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(70),l=a(74),s=a(71),i=a(82),m=a(88),c=a(3),p=a(73),h=a.n(p),u=a(141),d=a.n(u),b=a(75),f=function(e){function t(){return e.apply(this,arguments)||this}Object(c.a)(t,e);var a=t.prototype;return a.onShow=function(e){e.preventDefault(),this.props.onShow(this.props.platform.id)},a.render=function(){return h.a.isEmpty(this.props.platform)?null:o.a.createElement("div",{className:Object(n.a)(this.props.className,d.a.platformCard)},h.a.isEmpty(this.props.platform.logo)?o.a.createElement("div",{className:Object(n.a)("mb-3",d.a.platformCard__name)},this.props.platform.name):o.a.createElement("img",{src:this.props.platform.logo,alt:this.props.platform.name,className:Object(n.a)("responsiveImage","mb-3",d.a.platformCard__img)}),!h.a.isEmpty(this.props.platform.getWebsite&&this.props.platform.getWebsite(this.props.country))&&o.a.createElement("div",{className:d.a.platformCard__url},this.props.platform.getWebsite&&this.props.platform.getWebsite(this.props.country)," ",o.a.createElement("a",{href:"http://"+(this.props.platform.getWebsite&&this.props.platform.getWebsite(this.props.country)),target:"_blank"},o.a.createElement("i",{className:"material-icons"},"open_in_new"))),o.a.createElement(b.a,{to:"/platform/"+(this.props.platform.id||"").toLowerCase(),className:Object(n.a)("button","button--secondary button--outline",d.a.platformCard__show)},"show"))},t}(o.a.Component),g=a(142),v=a.n(g),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={search:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.searchResults=function(){var e=this,t=RegExp(this.state.search,"i");return _.filter(this.props.platforms,(function(a){return""==(e.state.search||"")||(a.name||"").match(t)}))},a.handleChange=function(e){this.setState({search:e.target.value})},a.handleSubmit=function(e){e.preventDefault()},a.render=function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.props.platforms.length>0&&o.a.createElement(o.a.Fragment,null,this.props.platforms.length>20&&o.a.createElement("div",{className:Object(n.a)(v.a.platformList__search_container)},o.a.createElement("div",{className:Object(n.a)(v.a.platformList__search)},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",autoFocus:!0,className:Object(n.a)(v.a.platformList__search_input),value:this.state.search,placeholder:"search thousands of platforms...",onChange:this.handleChange})))),o.a.createElement("div",{className:"container"},this.props.title&&o.a.createElement("div",{className:Object(n.a)("label","text-center","mb-5")},this.props.title),this.searchResults().length?o.a.createElement("div",{className:"row"},((this.state.search||"").length?_.orderBy(this.searchResults(),"name"):_.shuffle(this.searchResults())).slice(0,24).map((function(t){return o.a.createElement("div",{className:"col col--3",key:t.id},o.a.createElement(f,{platform:t,selected:e.props.selected,onShow:e.props.onShow,onAddToCompare:e.props.onAddToCompare,onRemoveFromCompare:e.props.onRemoveFromCompare}))}))):o.a.createElement("div",{className:"text-center"},o.a.createElement("span",null,"No results")))))},t}(o.a.Component),E=a(49),w=a.n(E),x=a(83),C=a(1),N=function(e){Object(C.k)().push("/platform?id="+e)};var O=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:Object(n.a)("hero hero--secondary",w.a.heroBanner)},o.a.createElement("div",{className:"container"},o.a.createElement("p",{className:"hero__title"},t.tagline),o.a.createElement("p",{className:"hero__tagline"},"Get the best deal possible on a payment gateway that works with your existing software."))),o.a.createElement(y,{platforms:new x.a(i).all(),onShow:N}))};t.default=function(){return Object(s.a)().siteConfig,o.a.createElement(l.a,{title:"What payment gateway should I use?",description:"Find the best software and the compatible payment gateways to use for your business. Providing Global Payment Logistics to vendors and merchants."},o.a.createElement(O,null))}}}]);