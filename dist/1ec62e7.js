(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{447:function(t,e,r){"use strict";r.r(e);r(36),r(58),r(33);var n={name:"companyProfilePage",head:{title:"Best Digital Marketing Team | Expert Online Marketing Team",meta:[{hid:"description",name:"description",content:"An expert digital marketing team can spread your business to the whole world througn online. DMS has an expert digital marketing team that knows very well how to boost a business and grow a business."}]},data:function(){return{ourTeamMemberTitle:[],ourTeamMemberChairman:[],ourTeamMember:[]}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;this.$axios.get("our_team_member").then((function(e){t.ourTeamMemberTitle=e.data.ourTeamMemberTitle,t.ourTeamMemberChairman=e.data.ourTeamMemberChairman,t.ourTeamMember=e.data.ourTeamMember}))}}},m=r(18),component=Object(m.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("section",[e("div",{staticClass:"our_team_member"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"our_team_member_content"},[e("div",{domProps:{innerHTML:t._s(t.ourTeamMemberTitle.title)}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.ourTeamMemberTitle.description)}})]),t._v(" "),e("div",{staticClass:"row justify-content-center"},t._l(t.ourTeamMemberChairman,(function(r){return e("div",{key:r.id,staticClass:"container d-flex justify-content-center"},[e("div",{staticClass:"card team_member_card"},[e("div",{staticClass:"member_image mx-auto"},[e("picture",[e("source",{attrs:{type:"image/webp",srcset:t.$config.baseURL+"our-team-member/"+r.image}}),t._v(" "),e("img",{attrs:{src:t.$config.baseURL+"our-team-member/"+r.image,alt:r.alt}})])]),t._v(" "),e("div",{staticClass:"card-body text-center"},[e("div",{staticClass:"team_member_content"},[e("h5",{staticClass:"mb-0"},[t._v(t._s(r.name))]),t._v(" "),e("p",[t._v(t._s(r.designation))]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{target:"_blank",href:r.facebook}},[e("i",{staticClass:"fa-brands fa-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:r.twitter,target:"_blank"}},[e("i",{staticClass:"fa-brands fa-twitter"})])]),t._v(" "),e("li",[e("a",{attrs:{href:r.linkedin,target:"_blank"}},[e("i",{staticClass:"fa-brands fa-linkedin"})])])])])])])])})),0)]),t._v(" "),e("div",{staticClass:"container d-flex justify-content-center",attrs:{id:"team_card"}},[e("div",{staticClass:"row"},t._l(t.ourTeamMember,(function(r){return e("div",{directives:[{name:"show",rawName:"v-show",value:r.priority<5,expression:"item.priority < 5"}],key:r.id,staticClass:"col-lg-4 col-md-4 mt-3 justify-content-center"},[e("div",{staticClass:"card team_member_card"},[e("div",{staticClass:"member_image mx-auto"},[e("picture",[e("source",{attrs:{type:"image/webp",srcset:t.$config.baseURL+"our-team-member/"+r.image}}),t._v(" "),e("img",{attrs:{src:t.$config.baseURL+"our-team-member/"+r.image,alt:r.alt}})])]),t._v(" "),e("div",{staticClass:"card-body text-center"},[e("div",{staticClass:"team_member_content"},[e("h5",{staticClass:"mb-0"},[t._v(t._s(r.name))]),t._v(" "),e("p",[t._v(t._s(r.designation))]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{target:"_blank",href:r.facebook}},[e("i",{staticClass:"fa-brands fa-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:r.twitter,target:"_blank"}},[e("i",{staticClass:"fa-brands fa-twitter"})])]),t._v(" "),e("li",[e("a",{attrs:{href:r.linkedin,target:"_blank"}},[e("i",{staticClass:"fa-brands fa-linkedin"})])])])])])])])})),0)]),t._v(" "),e("div",{},[e("div",{staticClass:"row d-flex justify-content-center"},t._l(t.ourTeamMember,(function(r){return e("div",{directives:[{name:"show",rawName:"v-show",value:r.priority>=5,expression:"item.priority >= 5"}],key:r.id,staticClass:"col-lg-3 col-md-3 mt-3"},[e("div",{staticClass:"card team_member_card"},[e("div",{staticClass:"member_image mx-auto"},[e("picture",[e("source",{attrs:{type:"image/webp",srcset:t.$config.baseURL+"our-team-member/"+r.image}}),t._v(" "),e("img",{attrs:{src:t.$config.baseURL+"our-team-member/"+r.image,alt:r.alt}})])]),t._v(" "),e("div",{staticClass:"card-body text-center"},[e("div",{staticClass:"team_member_content"},[e("h5",{staticClass:"mb-0"},[t._v(t._s(r.name))]),t._v(" "),e("p",[t._v(t._s(r.designation))]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{target:"_blank",href:r.facebook}},[e("i",{staticClass:"fa-brands fa-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:r.twitter,target:"_blank"}},[e("i",{staticClass:"fa-brands fa-twitter"})])]),t._v(" "),e("li",[e("a",{attrs:{href:r.linkedin,target:"_blank"}},[e("i",{staticClass:"fa-brands fa-linkedin"})])])])])])])])})),0)])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);