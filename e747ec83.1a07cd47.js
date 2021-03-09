(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(7),i=(a(0),a(105)),o={id:"glossary",title:"Glossary",slug:"glossary"},l={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"Pricing",source:"@site/docs/glossary.md",slug:"/glossary",permalink:"/docs/glossary",version:"current"},c=[{value:"Pricing",id:"pricing",children:[]},{value:"Integration Features",id:"integration-features",children:[]},{value:"Payment Methods",id:"payment-methods",children:[]},{value:"Integrated Payment Methods",id:"integrated-payment-methods",children:[]},{value:"PCI DSS",id:"pci-dss",children:[]},{value:"References",id:"references",children:[]}],s={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"pricing"},"Pricing"),Object(i.b)("p",null,"We check each payment gateway's website on a regular basis and list their advertised rates here.  We do our best to accurately and fairly represent pricing and include a link to the gateway's pricing page under \"References\" to allow you to validate this data. Pricing is that for the country selected."),Object(i.b)("p",null,'To process a card payment, the payment gateway incurs a "interchange" fee set by the card schemes (eg Visa / Mastercard), there are hundreds of different rates depending on the type of card used and transaction type, ranging from 0% to over 4%.'),Object(i.b)("p",null,"There are generally two ways a payment gateway will charge you:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Interchange ++: eg ",Object(i.b)("inlineCode",{parentName:"li"},"$0.20 + Interchange + % Fee"),": This means $0.20 + the interchange fee marked up by an amount (eg 0.5%) "),Object(i.b)("li",{parentName:"ul"},"Blended rate: eg ",Object(i.b)("inlineCode",{parentName:"li"},"$0.20 + 1.8%"),": This means $0.20 + 1.8% regardless of the interchange fee, this makes your costs more predictable, but will generally cost you more, especially if the bulk of your volume is for low cost transaction types (eg. consumer debit cards).")),Object(i.b)("p",null,'Furthermore, some payment gateways are not "merchant acquirers" and do not bundle what\'s called a "merchant account", these are described in the pricing matrix as "Gateway Only". These will typically only have a fixed fee per transaction, eg ',Object(i.b)("inlineCode",{parentName:"p"},"$0.20"),' however you will require an additional service called a "merchant account" which is where you will need to pay interchange + markup. '),Object(i.b)("p",null,"The pricing matrix includes the following data:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Monthly Fee"),Object(i.b)("td",{parentName:"tr",align:null},'If a monthly subscription fee is payable. Some payment providers have several "plans" which are listed separated by commas.')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Processing"),Object(i.b)("td",{parentName:"tr",align:null},"The cost to process an ecommerce transaction. Additional charges may apply, such as for MOTO transactions, or transactions that dont take advantage of anti-fraud facilities provided by the gateway.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Interational"),Object(i.b)("td",{parentName:"tr",align:null},"An additional cost (on top of the processing fee) for using an international card. For example using a European card in the USA or vice versa.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"POS"),Object(i.b)("td",{parentName:"tr",align:null},"The cost to process a customer-present (point of sale) transaction. You will typically need to swipe, chip and pin, or use contactless to receive this rate.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Activation Fee"),Object(i.b)("td",{parentName:"tr",align:null},"A one time cost to activate an account.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Termination Fee"),Object(i.b)("td",{parentName:"tr",align:null},"A one time cost to terminate an account.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Forex"),Object(i.b)("td",{parentName:"tr",align:null},"A fee (typically over the mid-market exchange rate) to convert the payment currency into the settlement currency.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Bespoke Pricing"),Object(i.b)("td",{parentName:"tr",align:null},'The minimum monthly transaction volume required before the gateway will consider giving you a rate other than their "list price".')))),Object(i.b)("p",null,"Note: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Where ",Object(i.b)("inlineCode",{parentName:"li"},"see website"),' is listed, we do not have recent data for the selected country and you may be able to find further information on the website. Use the link in the "References" section.'),Object(i.b)("li",{parentName:"ul"},"Where ",Object(i.b)("inlineCode",{parentName:"li"},"on application")," is listed, the payment provider does not advertise their rates (or has bespoke rates), and you need to speak to them directly. In general we know the kind of rates you will be offered, but it is not public information we are allowed to publish.  ")),Object(i.b)("h3",{id:"integration-features"},"Integration Features"),Object(i.b)("p",null,"Some software platforms offer very specific capabilities that are only available for some payment gateways, eg POS, card vaulting or MOTO. This section (where applicable) contains platform specific content about each gateway."),Object(i.b)("h3",{id:"payment-methods"},"Payment Methods"),Object(i.b)("p",null,"This section lists popular payment methods supported by the gateway. This may not be comprehensive as some gateways support hundreds of payment methods. Also, if viewing in the context of a software platform, in general we have not validated if the software platform supports all payment methods in their integration (see below)."),Object(i.b)("h3",{id:"integrated-payment-methods"},"Integrated Payment Methods"),Object(i.b)("p",null,'If this section is listed, it lists payment methods specifically supported by the platform. Where available, this section will override the "Payment Methods" section. '),Object(i.b)("h3",{id:"pci-dss"},"PCI DSS"),Object(i.b)("p",null,'PCI DSS is a set of security standards required by all businesses that store or transmit cardholder data. Merchant and software vendors must also be compliant, even if that compliance is "we dont touch cardholder data", this is documented via an AOC (attestation of compliance) or SAQ (self assessment questionaire). It is your responsibility to ensure all vendors and payment processors you use are PCI DSS compliant (requirement 12.8.4).'),Object(i.b)("p",null,"Acceptable sources of documentation are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"VISA's online registry ",Object(i.b)("a",{parentName:"li",href:"https://www.visa.com/splisting/searchGrsp.do"},"here")),Object(i.b)("li",{parentName:"ul"},"An AOC document (service providers transacting over 300,000 transactions p/a) "),Object(i.b)("li",{parentName:"ul"},"An SAQ document (service providers transacting less than 300,000 transactions p/a)")),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("p",null,"Our reference matrix is intended to get you to the source of important information quickly. Where possible we will send you to country specific content (eg country specific pricing), however this is not always possible."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Website"),Object(i.b)("td",{parentName:"tr",align:null},"The company's web page.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Pricing"),Object(i.b)("td",{parentName:"tr",align:null},"The page where pricing information is available. Please always double check pricing with the gateway directly incase there are additional costs we can not display in our matrix")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Restricted Industries"),Object(i.b)("td",{parentName:"tr",align:null},"A list of which industries the gateway is able to and not able to work with. While some are obvious like adult / gambling / CBD, others may not be so eg travel or events.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Terms and Conditions"),Object(i.b)("td",{parentName:"tr",align:null},"The gateway's merchant terms and conditions.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PCI DSS"),Object(i.b)("td",{parentName:"tr",align:null},"The PCI DSS AOC or recognition of AOC by VISA. You will need this when completing  PCI DSS section 4.7.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"System Status"),Object(i.b)("td",{parentName:"tr",align:null},"The gateway's official system status page, which in general will advise you of any ongoing incidents.")))))}b.isMDXComponent=!0}}]);