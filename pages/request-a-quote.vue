<template>
  <div>
    <div class="container">
      <div id="getaquote_first_section">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 col-md-6">
            <div v-html="requestAQuoteDescription.title"></div>
            <div v-html="requestAQuoteDescription.description_one"></div>
            <div v-html="requestAQuoteDescription.description_two"></div>
            <ul>
              <li v-for="list in requestAQuoteDescription.list"><i class="fa-solid fa-check"></i>&nbsp; {{list}}</li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-6">
            <picture>
              <source type="image/webp" :srcset="$config.baseURL+'quote-image/'+ requestAQuoteImage.image">
              <img :src="$config.baseURL+'quote-image/'+ requestAQuoteImage.image" :alt="requestAQuoteImage.alt">
            </picture>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mb-4" id="down_icon">
      <i class="fa-solid fa-circle-down"></i>
    </div>

    <div id="contact_form">
      <div class="container">

        <div class="text-center text-white" v-html="requestAQuoteMessageTitle.title"></div>
        <div class="text-center text-white" v-html="requestAQuoteMessageTitle.description"></div>

        <form ref="requestAQuoteForm" @submit.prevent="requestAQuote">
          <div class="row">
            <div class="col-lg-6">
              <label for="firstname" class="mt-4 pb-2">Name</label>
              <input type="text" name="name" id="firstname" class="form-control form-control-lg" placeholder="Enter Name">
            </div>
            <div class="col-lg-6">
              <label for="email" class="mt-4 pb-2">Email</label>
              <input type="email" name="email" id="email" class="form-control form-control-lg" placeholder="Enter Email">
            </div>
            <div class="col-lg-6">
              <label for="phone" class="mt-4 pb-2">Phone</label>
              <input type="tel" name="phone" id="phone" class="form-control form-control-lg" placeholder="Enter Phone">
            </div>
            <div class="col-lg-6">
              <label for="phone" class="mt-4 pb-2">Subject</label>
              <input type="tel" name="subject" id="subject" class="form-control form-control-lg" placeholder="Enter Subject">
            </div>
            <div class="col-lg-6">
              <label for="digital_service" class="mt-4 pb-2">Marketing Services List</label>
              <select class="form-select form-select-lg mb-3" name="marketing_service" id="development_service" aria-label=".form-select-lg example">
                <option selected>Select ( Optional )</option>
                <option value="Search Engine Optimization">Search Engine Optimization</option>
                <option value="Targeted Facebook Marketing">Targeted Facebook Marketing</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="Google Display Marketing (PPC)">Google Display Marketing (PPC)</option>
                <option value="Targeted Email Marketing">Targeted Email Marketing</option>
                <option value="Online Brand Promotion">Online Brand Promotion</option>
                <option value="Brand SMS Marketing">Brand SMS Marketing</option>
                <option value="Creative Graphic Design">Creative Graphic Design</option>
                <option value="Video Marketing">Video Marketing</option>
                <option value="Domain Registration">Domain Registration</option>
                <option value="Online Payment Service">Online Payment Service</option>
              </select>
            </div>
            <div class="col-lg-6">
              <label for="development_service" class="mt-4 pb-2">Development Services List</label>
              <select class="form-select form-select-lg mb-3" name="development_service" id="digital_service" aria-label=".form-select-lg example">
                <option selected>Select ( Optional )</option>
                <option value="Software Development">Software Development</option>
                <option value="Custom Web Design & Development">Custom Web Design & Development</option>
                <option value="App Development">App Development</option>
                <option value="Web Maintenance">Web Maintenance</option>
                <option value="Hosting Packages">Hosting Packages</option>
                <option value="Outsourcing Training">Outsourcing Training</option>
              </select>
            </div>
            <div class="col-lg-12">
              <label for="message" class="mt-4 pb-2">Message</label>
              <textarea name="message" id="message" class="form-control form-control-lg" cols="30" rows="5" placeholder="Message . . ."></textarea>
            </div>

            <div class="col-lg-12">
              <button type="submit" class="btn btn-lg mt-5">Send Your Message</button>
            </div>
          </div>
        </form>

        <p class="text-center mt-4 text-white">We will never share your email address with anyone and won’t bombard you with emails. Promise.</p>
      </div>
    </div>


<!--    <section>-->
<!--      <div class="quote">-->
<!--        <div class="container">-->
<!--          <div class="row">-->
<!--            <div class="col-md-9">-->
<!--              <div class="quote_content mt-4">-->
<!--                <div class="row">-->
<!--                  <div class="col-md-6">-->
<!--                    <div class="quote_content_left">-->
<!--                      <div v-html="requestAQuoteDescription.title"></div>-->
<!--                      <div class="quote_p_1" v-html="requestAQuoteDescription.description_one"></div>-->
<!--                      <div class="quote_p_2" v-html="requestAQuoteDescription.description_two"></div>-->
<!--                      <ul>-->
<!--                        <li v-for="list in requestAQuoteDescription.list"><i class="fa-solid fa-check"></i>{{list}}</li>-->
<!--                      </ul>-->
<!--                    </div>-->
<!--                  </div>-->

<!--                  <div class="col-md-6">-->
<!--                    <div class="quote_content_right">-->
<!--                      <div v-html="requestAQuoteMessageTitle.title"></div>-->
<!--                      <div v-html="requestAQuoteMessageTitle.description"></div>-->
<!--                      <form ref="requestAQuoteForm" @submit.prevent="requestAQuote">-->
<!--                        <section>-->
<!--                          <input class="form-control mt-3" type="text" placeholder="Your name" name="name">-->
<!--                          <input class="form-control mt-3" type="email" placeholder="Your email" name="email">-->
<!--                          <input class="form-control mt-3" type="number" placeholder="Your phone" name="phone">-->
<!--                          <div class="form-group mt-2">-->
<!--                            <label for="Marketing">Marketing Services List</label>-->
<!--                            <select class="form-select" aria-label="Default select example" id="marketing" name="marketing_service">-->
<!--                              <option value="" selected disabled>Select (Optional)</option>-->
<!--                              <option value="Search Engine Optimization">Search Engine Optimization</option>-->
<!--                              <option value="Targeted Facebook Marketing">Targeted Facebook Marketing</option>-->
<!--                              <option value="Social Media Marketing">Social Media Marketing</option>-->
<!--                              <option value="Google Display Marketing (PPC)">Google Display Marketing (PPC)</option>-->
<!--                              <option value="Targeted Email Marketing">Targeted Email Marketing</option>-->
<!--                              <option value="Online Brand Promotion">Online Brand Promotion</option>-->
<!--                              <option value="Brand SMS Marketing">Brand SMS Marketing</option>-->
<!--                              <option value="Creative Graphic Design">Creative Graphic Design</option>-->
<!--                              <option value="Video Marketing">Video Marketing</option>-->
<!--                              <option value="Domain Registration">Domain Registration</option>-->
<!--                              <option value="Online Payment Service">Online Payment Service</option>-->
<!--                            </select>-->
<!--                          </div>-->
<!--                          <div class="form-group mt-2">-->
<!--                            <label for="Development">Development Services List</label>-->
<!--                            <select class="form-select" id="development" name="development_service">-->
<!--                              <option value="" selected disabled>Select (Optional)</option>-->
<!--                              <option value="Software Development">Software Development</option>-->
<!--                              <option value="Custom Web Design & Development">Custom Web Design & Development</option>-->
<!--                              <option value="App Development">App Development</option>-->
<!--                              <option value="Web Maintenance">Web Maintenance</option>-->
<!--                              <option value="Hosting Packages">Hosting Packages</option>-->
<!--                              <option value="Outsourcing Training">Outsourcing Training</option>-->
<!--                            </select>-->
<!--                          </div>-->
<!--                          <input class="form-control mt-3" type="text" placeholder="Subject" name="subject">-->
<!--                          <div class="form-group">-->
<!--                            <textarea class="form-control mt-3" id="exampleFormControlTextarea1" placeholder="Type your message (optional)" rows="5" name="message"></textarea>-->
<!--                          </div>-->
<!--                          <button class="btn btn-quote mx-auto" type="submit" >Send</button>-->
<!--                        </section>-->
<!--                      </form>-->
<!--                      <p class="quote_bottom_p">We will never share your email address with anyone and won’t bombard you with emails. Promise.</p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            -->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
  </div>
</template>
<script>
import RecentBlogPost from "@/components/inc/RecentBlogPost.vue";
import OurRecentUpdateNews from "@/components/inc/OurRecentUpdateNews";
import OurDedicatedServices from "@/components/inc/OurDedicatedServices";
export default {
  name:'requestAQuotePage',
  components: {OurDedicatedServices, OurRecentUpdateNews, RecentBlogPost},
  head: {
    title: 'Request A Quote | DMS',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Request a quote what do you want from Digital Marketing Solution Pvt Ltd'
      }
    ],
  },
  data: () => ({
    requestAQuoteDescription: [],
    requestAQuoteMessageTitle: [],
    requestAQuoteImage: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("get_request_a_quote_content").then((response) => {
        this.requestAQuoteDescription = response.data.requestAQuoteDescription;
      });
      this.$axios.get("get_request_a_quote_message_title").then((response) => {
        this.requestAQuoteMessageTitle = response.data.requestAQuoteMessageTitle;
      });
      this.$axios.get("get_request_a_quote_image").then((response) => {
        this.requestAQuoteImage = response.data.requestAQuoteImage;
      });
    },
    requestAQuote(){
      try{
        const formData = new FormData(this.$refs.requestAQuoteForm);
        // console.log(formData)
        this.$axios.post('post_request_a_quote_message', formData).then( res => {
          // this.$router.push({path: '/thank-you',});
          this.$router.push({ path: "/thank-you" }, () => {
            location.reload()
          })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Message sent.',
            showConfirmButton: false,
            timer: 1500
          })
        })
      }catch(err){
        // console.log(err);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Something went wrong.',
          showConfirmButton: false,
          timer: 1500
        })
      }
      // this.$nuxt.$loading.finish();
    }
  }
}
</script>
