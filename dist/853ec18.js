(window.webpackJsonp=window.webpackJsonp||[]).push([[47,2,9,10,11],{408:function(t,e,n){"use strict";n.r(e);n(36),n(58);var o={name:"SliderComponent",props:{Slider:{required:!0}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",t._l(t.Slider,(function(n){return e("section",{key:n.id},[e("div",{staticClass:"seo_slider",style:{"background-image":"url("+t.$config.baseURL+"service-development/"+n.image+")"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"seo_content"},[e("h1",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.description))]),t._v(" "),e("NuxtLink",{staticClass:"btn btn-primary custom_primary_button",attrs:{to:n.url}},[t._v(t._s(n.button))])],1)])])])})),0)}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){"use strict";n.r(e);n(36),n(58);var o={name:"ContentComponent",props:{Content:{required:!0}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",t._l(t.Content,(function(n){return e("div",{key:n.id},[n.priority%2==0?e("section",[e("div",{staticClass:"sec_3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5 imageDiv"},[e("picture",[e("source",{attrs:{type:"image/webp",srcset:t.$config.baseURL+"service-development/"+n.image}}),t._v(" "),e("img",{staticClass:"sec_3_img",attrs:{src:t.$config.baseURL+"service-development/"+n.image,alt:n.alt}})])]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"sec_3_description"},[e("div",{staticClass:"custom_h2",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("div",{staticClass:"custom_p",domProps:{innerHTML:t._s(n.description)}})])])])])])]):e("section",[e("div",{staticClass:"sec_4"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"sec_3_description"},[e("div",{staticClass:"custom_h2",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("div",{staticClass:"custom_p",domProps:{innerHTML:t._s(n.description)}})])]),t._v(" "),e("div",{staticClass:"col-md-5 imageDiv"},[e("picture",[e("source",{attrs:{type:"image/webp",srcset:t.$config.baseURL+"service-development/"+n.image}}),t._v(" "),e("img",{staticClass:"sec_4_img",attrs:{src:t.$config.baseURL+"service-development/"+n.image,alt:n.alt}})])])])])])])])})),0)}),[],!1,null,null,null);e.default=component.exports},410:function(t,e,n){"use strict";n.r(e);n(33);var o={name:"ListItemComponent",props:{ListItem:{required:!0}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",t._l(t.ListItem,(function(n){return e("li",{key:n.id},[t._m(0,!0),e("span",{staticClass:"smm_content"},[t._v(t._s(n.name))])])})),0)}),[function(){var t=this._self._c;return t("span",[t("i",{staticClass:"fa-solid fa-square-check"})])}],!1,null,null,null);e.default=component.exports},411:function(t,e,n){"use strict";n.r(e);var o={name:"ListItemTitleComponent",props:{Title:{required:!0}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"custom_h1"},[t._v(t._s(t.Title.title))])])}),[],!1,null,null,null);e.default=component.exports},457:function(t,e,n){"use strict";n.r(e);var o=n(408),l=n(410),c=n(409),r={name:"webDevelopmentPage",components:{ListItemTitleComponent:n(411).default,ContentComponent:c.default,ListItemComponent:l.default,SliderComponent:o.default},head:{title:"Best Web Development Company in Bangladesh | Custom Design Agency",meta:[{hid:"description",name:"description",content:"DMS is the best web development company in Bangladesh. We offer the latest web development services that will be 100% responsive & user-friendly to get the maximum audience."}]},data:function(){return{webDevelopmentSlider:[],webDevelopmentListItemTitle:[],webDevelopmentListItem:[],webDevelopmentContent:[]}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;this.$axios.get("web_development").then((function(e){t.webDevelopmentSlider=e.data.webDevelopmentSlider,t.webDevelopmentListItemTitle=e.data.webDevelopmentListItemTitle,t.webDevelopmentListItem=e.data.webDevelopmentListItem,t.webDevelopmentContent=e.data.webDevelopmentContent}))}}},m=n(18),component=Object(m.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("SliderComponent",{attrs:{Slider:t.webDevelopmentSlider}}),t._v(" "),e("section",[e("div",{staticClass:"top_smm"},[e("div",{staticClass:"container"},[e("ListItemTitleComponent",{attrs:{Title:t.webDevelopmentListItemTitle}}),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"smm"},[e("ul",[e("ListItemComponent",{attrs:{ListItem:t.webDevelopmentListItem}})],1)])])])],1)])]),t._v(" "),e("ContentComponent",{attrs:{Content:t.webDevelopmentContent}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);