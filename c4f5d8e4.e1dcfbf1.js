(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{102:function(e,t,a){e.exports={"mb-1":"mb-1_2BIw","mb-2":"mb-2_3S4V","mb-3":"mb-3_2Tlm","mb-4":"mb-4_3Bce","mb-5":"mb-5_2cZ_","mb-auto":"mb-auto_3Tq7","mr-1":"mr-1_1xKp","mr-2":"mr-2_jhZY","mr-3":"mr-3_2W4e","mr-4":"mr-4_tvXk","mr-5":"mr-5_28Z9","mr-auto":"mr-auto_3_IV","mx-3":"mx-3_8e4G","mx-auto":"mx-auto_2XkV","my-5":"my-5_1bvO","material-icons":"material-icons_tyvq",navbar__items:"navbar__items_2w1Z","navbar__items--right":"navbar__items--right_2bDY","react-toggle":"react-toggle_1GRs","docusaurus-highlight-code-line":"docusaurus-highlight-code-line_3xgc","row--no-gutters":"row--no-gutters_3W6G",col:"col_om7V",responsiveImage:"responsiveImage_1TWu",label:"label_3XdM",bold:"bold_1Msh","text-center":"text-center_2hOu","text-left":"text-left_3YMt",hero__title:"hero__title_2VN7",hero__tagline:"hero__tagline_6vw7","table_no-borders":"table_no-borders_2Ji1",hidden:"hidden_liAa","mobile-hidden":"mobile-hidden_2YUD","desktop-hidden":"desktop-hidden_3778","mobile-only":"mobile-only_3VIF","desktop-only":"desktop-only_N92O",navbar:"navbar_16PI",navbar__logo:"navbar__logo_33br","container-fluid":"container-fluid_112X","column-container":"column-container_3lgY",col1:"col1_2VHI",col2:"col2_mSG3",col3:"col3_1wwf",container:"container_3GQX","margin-vert--xl":"margin-vert--xl_ljJM","button--outline":"button--outline_2AdE",bordered:"bordered_14i2","gateway-reviews":"gateway-reviews_MXQE","gateway-reviews__g2":"gateway-reviews__g2_2utC","gateway-reviews__trustpilot":"gateway-reviews__trustpilot_2Yj1","hero-color-bg":"hero-color-bg_2B-C",platformCard:"platformCard_Klni",platformCard__img:"platformCard__img_1OU0",platformCard__name:"platformCard__name_2mhF",platformCard__url:"platformCard__url_3XnJ",platformCard__show:"platformCard__show_Z8Tb"}},103:function(e,t,a){e.exports={"mb-1":"mb-1_14MD","mb-2":"mb-2_2fsO","mb-3":"mb-3_1Ljo","mb-4":"mb-4_3vUB","mb-5":"mb-5_18V9","mb-auto":"mb-auto_1KD1","mr-1":"mr-1_3uft","mr-2":"mr-2_3RRi","mr-3":"mr-3_3-XT","mr-4":"mr-4_pAra","mr-5":"mr-5_muMc","mr-auto":"mr-auto_2ZQM","mx-3":"mx-3_iisT","mx-auto":"mx-auto_bO-j","my-5":"my-5_2vBH","material-icons":"material-icons_1fp7",navbar__items:"navbar__items_1EUU","navbar__items--right":"navbar__items--right_3Bds","react-toggle":"react-toggle_oEVs","docusaurus-highlight-code-line":"docusaurus-highlight-code-line_1pvS","row--no-gutters":"row--no-gutters_2KuG",col:"col_2ZWW",responsiveImage:"responsiveImage_1AbP",label:"label_Z83o",bold:"bold_2UFk","text-center":"text-center_1kz7","text-left":"text-left_2oh4",hero__title:"hero__title_3b6x",hero__tagline:"hero__tagline_PEen","table_no-borders":"table_no-borders_8QAC",hidden:"hidden_YKP0","mobile-hidden":"mobile-hidden_2_Pn","desktop-hidden":"desktop-hidden_1F8_","mobile-only":"mobile-only_285j","desktop-only":"desktop-only_RU06",navbar:"navbar_1Ylm",navbar__logo:"navbar__logo_HenG","container-fluid":"container-fluid_3WeJ","column-container":"column-container_3XHk",col1:"col1_36oV",col2:"col2_3epJ",col3:"col3_3qDv",container:"container_3PPo","margin-vert--xl":"margin-vert--xl_3LF9","button--outline":"button--outline_2INp",bordered:"bordered_3brN","gateway-reviews":"gateway-reviews_1PnF","gateway-reviews__g2":"gateway-reviews__g2_1e8C","gateway-reviews__trustpilot":"gateway-reviews__trustpilot_3WD7","hero-color-bg":"hero-color-bg_R4ll",platformList__search_container:"platformList__search_container_18jI",platformList__search:"platformList__search_1O1k",platformList__search_input:"platformList__search_input_21Og"}},108:function(e,t,a){"use strict";var r=a(79),o=a(3),n=a(71),s=a(0),l=a.n(s),i=a(73),m=a.n(i),c=a(102),p=a.n(c),h=a(76),u=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var a=t.prototype;return a.onShow=function(e){e.preventDefault(),this.props.onShow(this.props.platform.id)},a.render=function(){return m.a.isEmpty(this.props.platform)?null:l.a.createElement("div",{className:Object(n.a)(this.props.className,p.a.platformCard)},m.a.isEmpty(this.props.platform.logo)?l.a.createElement("div",{className:Object(n.a)("mb-3",p.a.platformCard__name)},this.props.platform.name):l.a.createElement("img",{src:this.props.platform.logo,alt:this.props.platform.name,className:Object(n.a)("responsiveImage","mb-3",p.a.platformCard__img)}),!m.a.isEmpty(this.props.platform.getWebsite&&this.props.platform.getWebsite(this.props.country))&&l.a.createElement("div",{className:p.a.platformCard__url},this.props.platform.getWebsite&&this.props.platform.getWebsite(this.props.country)," ",l.a.createElement("a",{href:"http://"+(this.props.platform.getWebsite&&this.props.platform.getWebsite(this.props.country)),target:"_blank"},l.a.createElement("i",{className:"material-icons"},"open_in_new"))),l.a.createElement(h.a,{to:"/platform/"+(this.props.platform.id||"").toLowerCase(),className:Object(n.a)("button","button--secondary button--outline",p.a.platformCard__show)},"show"))},t}(l.a.Component),b=a(103),d=a.n(b),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={search:""},a.handleChange=a.handleChange.bind(Object(r.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.searchResults=function(){var e=this,t=RegExp(this.state.search,"i");return _.filter(this.props.platforms,(function(a){return""==(e.state.search||"")||(a.name||"").match(t)}))},a.handleChange=function(e){this.setState({search:e.target.value})},a.handleSubmit=function(e){e.preventDefault()},a.render=function(){var e=this;return l.a.createElement(l.a.Fragment,null,this.props.platforms.length>0&&l.a.createElement(l.a.Fragment,null,this.props.platforms.length>20&&l.a.createElement("div",{className:Object(n.a)(d.a.platformList__search_container,!this.props.noBg&&"hero-color-bg")},l.a.createElement("div",{className:Object(n.a)(d.a.platformList__search)},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",autoFocus:this.props.autoFocus,className:Object(n.a)(d.a.platformList__search_input),value:this.state.search,placeholder:"search thousands of platforms...",onChange:this.handleChange})))),l.a.createElement("div",{className:"container my-5"},this.props.title&&l.a.createElement("div",{className:Object(n.a)("label","text-center","mb-5")},this.props.title),this.searchResults().length?l.a.createElement("div",{className:"row"},((this.state.search||"").length?_.orderBy(this.searchResults(),"name"):_.shuffle(this.searchResults())).slice(0,24).map((function(t){return l.a.createElement("div",{className:"col col--3",key:t.id},l.a.createElement(u,{platform:t,selected:e.props.selected,onShow:e.props.onShow,onAddToCompare:e.props.onAddToCompare,onRemoveFromCompare:e.props.onRemoveFromCompare}))}))):l.a.createElement("div",{className:"text-center"},l.a.createElement("span",null,"No results")))))},t}(l.a.Component);t.a=g},64:function(e,t,a){"use strict";a.r(t);var r=a(71),o=a(0),n=a.n(o),s=a(81),l=a(108),i=a(65),m=a.n(i),_=a(82),c=a(1),p=a(72),h=a(75),u=function(e){Object(c.k)().push("/platform?id="+e)};t.default=function(){var e=Object(p.a)().siteConfig,t=void 0===e?{}:e;return n.a.createElement(h.a,{title:"What payment gateway should I use?",description:"Find the best software and the compatible payment gateways to use for your business. Providing Global Payment Logistics to vendors and merchants."},n.a.createElement("header",{className:Object(r.a)("hero hero--secondary",m.a.heroBanner)},n.a.createElement("div",{className:"container"},n.a.createElement("p",{className:"hero__title"},t.tagline),n.a.createElement("p",{className:"hero__tagline"},"Get the best deal possible on a payment gateway that works with your existing software."))),n.a.createElement(l.a,{autoFocus:!0,platforms:new _.a(s).all(),onShow:u}))}}}]);