(window.webpackJsonp=window.webpackJsonp||[]).push([[32,2,9,10,11],{408:function(t,e,n){"use strict";n.r(e);n(36),n(58);var r={name:"SliderComponent",props:{Slider:{required:!0}}},l=n(18),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",t._l(t.Slider,(function(n){return e("section",{key:n.id},[e("div",{staticClass:"seo_slider",style:{"background-image":"url("+t.$config.baseURL+"service-development/"+n.image+")"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"seo_content"},[e("h1",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.description))]),t._v(" "),e("NuxtLink",{staticClass:"btn btn-primary custom_primary_button",attrs:{to:n.url}},[t._v(t._s(n.button))])],1)])])])})),0)}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){"use strict";n.r(e);n(36),n(58);var r={name:"ContentComponent",props:{Content:{required:!0}}},l=n(18),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",t._l(t.Content,(function(n){return e("div",{key:n.id},[n.priority%2==0?e("section",[e("div",{staticClass:"sec_3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5 imageDiv"},[e("picture",[e("source",{attrs:{type:"image/webp",srcset:t.$config.baseURL+"service-development/"+n.image}}),t._v(" "),e("img",{staticClass:"sec_3_img",attrs:{src:t.$config.baseURL+"service-development/"+n.image,alt:n.alt}})])]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"sec_3_description"},[e("div",{staticClass:"custom_h2",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("div",{staticClass:"custom_p",domProps:{innerHTML:t._s(n.description)}})])])])])])]):e("section",[e("div",{staticClass:"sec_4"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"sec_3_description"},[e("div",{staticClass:"custom_h2",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("div",{staticClass:"custom_p",domProps:{innerHTML:t._s(n.description)}})])]),t._v(" "),e("div",{staticClass:"col-md-5 imageDiv"},[e("picture",[e("source",{attrs:{type:"image/webp",srcset:t.$config.baseURL+"service-development/"+n.image}}),t._v(" "),e("img",{staticClass:"sec_4_img",attrs:{src:t.$config.baseURL+"service-development/"+n.image,alt:n.alt}})])])])])])])])})),0)}),[],!1,null,null,null);e.default=component.exports},410:function(t,e,n){"use strict";n.r(e);n(33);var r={name:"ListItemComponent",props:{ListItem:{required:!0}}},l=n(18),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",t._l(t.ListItem,(function(n){return e("li",{key:n.id},[t._m(0,!0),e("span",{staticClass:"smm_content"},[t._v(t._s(n.name))])])})),0)}),[function(){var t=this._self._c;return t("span",[t("i",{staticClass:"fa-solid fa-square-check"})])}],!1,null,null,null);e.default=component.exports},411:function(t,e,n){"use strict";n.r(e);var r={name:"ListItemTitleComponent",props:{Title:{required:!0}}},l=n(18),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"custom_h1"},[t._v(t._s(t.Title.title))])])}),[],!1,null,null,null);e.default=component.exports},443:function(t,e,n){"use strict";n.r(e);var r=n(408),l=n(410),o=n(409),c={name:"googleAdsManagementServicesAgency",components:{ListItemTitleComponent:n(411).default,ContentComponent:o.default,ListItemComponent:l.default,SliderComponent:r.default},head:{title:"Best Google Ads Management Services | Google Ads Services",meta:[{hid:"description",name:"description",content:"DMS is a top leading google ads management services provider in Bangladesh. We provide budget-friendly google ads services that will maximize your business. We are experts in data-driven marketing."}],link:[{rel:"canonical",href:"https://www.digitalmarketingbd.com/google-ads-management-services-agency"}]},data:function(){return{displayMarketingSlider:[],dmListItemTitle:[],displayMarketingListItem:[],displayMarketingContent:[]}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;this.$axios.get("display_marketing").then((function(e){t.displayMarketingSlider=e.data.displayMarketingSlider,t.dmListItemTitle=e.data.dmListItemTitle,t.displayMarketingListItem=e.data.displayMarketingListItem,t.displayMarketingContent=e.data.displayMarketingContent}))}}},d=n(18),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("SliderComponent",{attrs:{Slider:t.displayMarketingSlider}}),t._v(" "),e("section",[e("div",{staticClass:"top_smm"},[e("div",{staticClass:"container"},[e("ListItemTitleComponent",{attrs:{Title:t.dmListItemTitle}}),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"smm"},[e("ul",[e("ListItemComponent",{attrs:{ListItem:t.displayMarketingListItem}})],1)])])])],1)])]),t._v(" "),e("ContentComponent",{attrs:{Content:t.displayMarketingContent}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);