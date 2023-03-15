(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{436:function(t,e,o){"use strict";o.r(e);o(36),o(58),o(48);var c={name:"contactUsPage",head:{title:"Contact with Digital Marketing Solution Pvt Ltd (DMS)",meta:[{hid:"description",name:"description",content:"If you have any sort of question about our services then please contact with our expert team. You will get 24/7 support from us."}]},data:function(){return{contactTitle:[],contactAddress:[],contactUsMemorableJourney:[],contactUsFormTitle:[]}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;this.$axios.get("contact_us").then((function(e){t.contactTitle=e.data.contactTitle,t.contactAddress=e.data.contactAddress,t.contactUsMemorableJourney=e.data.contactUsMemorableJourney,t.contactUsFormTitle=e.data.contactUsFormTitle}))},contactUs:function(){var t=this;try{var e=new FormData(this.$refs.contactUsForm);this.$axios.post("contact_us_message_store",e).then((function(e){t.$router.push({path:"/thank-you"},(function(){location.reload()})),Swal.fire({position:"top-end",icon:"success",title:"Message sent.",showConfirmButton:!1,timer:1500})}))}catch(t){Swal.fire({position:"top-end",icon:"error",title:"Something went wrong.",showConfirmButton:!1,timer:1500})}}}},r=o(18),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("section",[e("div",{staticClass:"contact_us"},[e("div",{staticClass:"container"},[e("div",{staticClass:"contact_us_first_title",domProps:{innerHTML:t._s(t.contactTitle.title)}}),t._v(" "),e("div",{staticClass:"contact_us_second_title",domProps:{innerHTML:t._s(t.contactTitle.description)}}),t._v(" "),t._l(t.contactAddress,(function(o){return e("div",{key:o.id,staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"contact_us_iframe"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:o.map,width:"600",height:"310",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card custom_card_contact"},[e("ul",{staticClass:"list-group list-group-flush custom_list_contact"},[e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"fa-solid fa-house contact_us_icon"}),e("span",{staticClass:"contact_address",domProps:{innerHTML:t._s(o.address)}})]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"fa-solid fa-phone contact_us_icon"}),e("span",{staticClass:"contact_address"},[t._v(t._s(o.phone))])]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"fa-solid fa-envelope contact_us_icon"}),e("span",{staticClass:"contact_address"},[t._v(t._s(o.email))])]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"fa-brands fa-skype contact_us_icon"}),e("span",{staticClass:"contact_address"},[t._v(t._s(o.skype))])]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"fa-brands fa-whatsapp contact_us_icon"}),e("span",{staticClass:"contact_address"},[t._v(t._s(o.whatsapp))])]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"fa-brands fa-viber contact_us_icon"}),e("span",{staticClass:"contact_address"},[t._v(t._s(o.viber))])]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"fa-solid fa-globe contact_us_icon"}),e("span",{staticClass:"contact_address"},[t._v(t._s(o.local_address))])])])])])])}))],2)])]),t._v(" "),e("section",[e("div",{staticClass:"contact_us_form"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-4 contact_bg_color"},t._l(t.contactUsMemorableJourney,(function(o){return e("div",{key:o.id,staticClass:"contact_right_form"},[e("h1",[e("i",{staticClass:"fa-solid fa-phone"}),t._v(t._s(o.number))]),t._v(" "),e("h4",[t._v(t._s(o.title)+" "),e("b",[t._v(t._s(o.call))])]),t._v(" "),e("div",[e("i",{staticClass:"fa-brands fa-servicestack"}),t._v(" "+t._s(o.client))]),t._v(" "),e("div",[e("i",{staticClass:"fa-solid fa-globe"}),t._v(" "+t._s(o.country))]),t._v(" "),e("div",[e("i",{staticClass:"fa-solid fa-user"}),t._v(" "+t._s(o.staff))])])})),0),t._v(" "),e("div",{staticClass:"col-md-8 contact_form_right"},[e("h1",[t._v(t._s(t.contactUsFormTitle.title))]),t._v(" "),e("form",{ref:"contactUsForm",on:{submit:function(e){return e.preventDefault(),t.contactUs.apply(null,arguments)}}},[t._m(0)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("label",{staticClass:"form-label text-white",attrs:{for:"name"}},[t._v("Your Name (required)")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"name",name:"name",required:""}})]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("label",{staticClass:"form-label text-white",attrs:{for:"name"}},[t._v("Company Name (required)")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"company",name:"company_name",required:""}})]),t._v(" "),e("div",{staticClass:"col-md-6 pb-2"},[e("label",{staticClass:"form-label text-white",attrs:{for:"email"}},[t._v("Your Email (required)")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",id:"email",name:"email",required:""}})]),t._v(" "),e("div",{staticClass:"col-md-6 pb-2"},[e("label",{staticClass:"form-label text-white",attrs:{for:"email"}},[t._v("Phone (required)")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"number",id:"phone",name:"number",required:""}})]),t._v(" "),e("div",{staticClass:"col-md-6 pb-2"},[e("label",{staticClass:"form-label text-white",attrs:{for:"subject"}},[t._v("Subject")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"subject",name:"subject",required:""}})]),t._v(" "),e("div",{staticClass:"col-md-6 pb-2"},[e("label",{staticClass:"form-label text-white",attrs:{for:"subject"}},[t._v("What is your monthly budget for these projects?")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"budget",name:"budget",required:""}})]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("label",{staticClass:"form-label text-white",attrs:{for:"exampleFormControlTextarea1"}},[t._v("Your Message")]),t._v(" "),e("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"1",name:"message",required:""}})]),t._v(" "),e("div",{staticClass:"col-md-6 d-grid gap-2"},[e("label",{staticClass:"form-label text-white",attrs:{for:"exampleFormControlTextarea1"}}),t._v(" "),e("button",{staticClass:"btn btn_custom_contact",attrs:{type:"submit"}},[t._v("Submit")])])])}],!1,null,null,null);e.default=component.exports}}]);