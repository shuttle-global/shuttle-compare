(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{101:function(e,a,t){e.exports={"mb-1":"mb-1_2BIw","mb-2":"mb-2_3S4V","mb-3":"mb-3_2Tlm","mb-4":"mb-4_3Bce","mb-5":"mb-5_2cZ_","mb-auto":"mb-auto_3Tq7","mr-1":"mr-1_1xKp","mr-2":"mr-2_jhZY","mr-3":"mr-3_2W4e","mr-4":"mr-4_tvXk","mr-5":"mr-5_28Z9","mr-auto":"mr-auto_3_IV","mx-3":"mx-3_8e4G","mx-auto":"mx-auto_2XkV","my-5":"my-5_1bvO",navbar__items:"navbar__items_2w1Z","navbar__items--right":"navbar__items--right_2bDY","react-toggle":"react-toggle_1GRs","docusaurus-highlight-code-line":"docusaurus-highlight-code-line_3xgc","row--no-gutters":"row--no-gutters_3W6G",col:"col_om7V",responsiveImage:"responsiveImage_1TWu",label:"label_3XdM","text-center":"text-center_2hOu","text-left":"text-left_3YMt","table_no-borders":"table_no-borders_2Ji1",hidden:"hidden_liAa","mobile-hidden":"mobile-hidden_2YUD","desktop-hidden":"desktop-hidden_3778","mobile-only":"mobile-only_3VIF","desktop-only":"desktop-only_N92O",navbar__logo:"navbar__logo_33br","home-hero":"home-hero_12Zm","software-container":"software-container_2l4u","left-half":"left-half_jTlI","right-half":"right-half_ZM8H","column-container":"column-container_3lgY",col1:"col1_2VHI",col2:"col2_mSG3",col3:"col3_1wwf",alert:"alert_14nZ",welcome:"welcome_1Edv",container:"container_3GQX","margin-vert--xl":"margin-vert--xl_ljJM",platformCard:"platformCard_Klni",platformCard__img:"platformCard__img_1OU0",platformCard__name:"platformCard__name_2mhF",platformCard__url:"platformCard__url_3XnJ",platformCard__show:"platformCard__show_Z8Tb"}},53:function(e,a,t){"use strict";t.r(a);var r=t(0),o=t.n(r),l=t(54),n=t(59),m=t(55),s=t(62),i=t(3),c=t(56),_=t.n(c),p=t(101),d=t.n(p),h=t(60),f=function(e){function a(){return e.apply(this,arguments)||this}Object(i.a)(a,e);var t=a.prototype;return t.onShow=function(e){e.preventDefault(),this.props.onShow(this.props.platform.id)},t.render=function(){return _.a.isEmpty(this.props.platform)?null:o.a.createElement("div",{className:Object(l.a)(this.props.className,d.a.platformCard)},_.a.isEmpty(this.props.platform.logo)?o.a.createElement("div",{className:Object(l.a)("mb-3",d.a.platformCard__name)},this.props.platform.name):o.a.createElement("img",{src:this.props.platform.logo,alt:this.props.platform.name,className:Object(l.a)("responsiveImage","mb-3",d.a.platformCard__img)}),o.a.createElement("span",{className:d.a.platformCard__url},this.props.platform.getWebsite&&this.props.platform.getWebsite(this.props.country)),o.a.createElement(h.a,{to:"/platform/"+_.a.lowerCase(this.props.platform.id),className:Object(l.a)("button","button--secondary",d.a.platformCard__show)},"show"))},a}(o.a.Component),u=function(e){return e.platforms?o.a.createElement(o.a.Fragment,null,e.platforms.length>0&&o.a.createElement(o.a.Fragment,null,e.title&&o.a.createElement("div",{className:Object(l.a)("label","text-center","mb-5")},e.title),o.a.createElement("div",{className:"row"},e.platforms.map((function(a){return o.a.createElement("div",{className:"col col--3",key:a.id},o.a.createElement(f,{platform:a,selected:e.selected,onShow:e.onShow,onAddToCompare:e.onAddToCompare,onRemoveFromCompare:e.onRemoveFromCompare}))}))))):null},b=t(46),g=t.n(b),w=t(65),v=t(1),C=function(e){Object(v.g)().push("/platform?id="+e)};var E=function(){var e=Object(m.a)().siteConfig,a=void 0===e?{}:e;return o.a.createElement("header",{className:Object(l.a)("hero hero--secondary",g.a.heroBanner)},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"hero__title"},"Discover"),o.a.createElement("p",{className:"hero__subtitle"},a.tagline),o.a.createElement("div",{className:"alert alert--info welcome",role:"alert"},"This is a preview! We welcome your feelback and suggestions via the chat widget below."),o.a.createElement("div",{className:Object(l.a)("container")},o.a.createElement(u,{platforms:new w.a(s).all(),onShow:C}))))};a.default=function(){return Object(m.a)().siteConfig,o.a.createElement(n.a,{title:"What payment gateway should I use?",description:"Find the best software and the compatible payment gateways to use for your business. Providing Global Payment Logistics to vendors and merchants."},o.a.createElement(E,null))}}}]);