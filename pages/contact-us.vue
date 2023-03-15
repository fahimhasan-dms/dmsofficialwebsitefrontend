<template>
  <div>
    <section>
      <div class="contact_us">
        <div class="container">
          <div class="contact_us_first_title" v-html="contactTitle.title"></div>
          <div class="contact_us_second_title" v-html="contactTitle.description"></div>
          <div class="row" v-for="item in contactAddress" :key="item.id">
            <div class="col-md-6">
              <div class="contact_us_iframe">
                <iframe :src="item.map" width="600" height="310" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card custom_card_contact">
                <ul class="list-group list-group-flush custom_list_contact">
                  <li class="list-group-item"><i class="fa-solid fa-house contact_us_icon"></i><span class="contact_address" v-html="item.address"></span></li>
                  <li class="list-group-item"><i class="fa-solid fa-phone contact_us_icon"></i><span class="contact_address">{{ item.phone }}</span></li>
                  <li class="list-group-item"><i class="fa-solid fa-envelope contact_us_icon"></i><span class="contact_address">{{item.email}}</span></li>
                  <li class="list-group-item"><i class="fa-brands fa-skype contact_us_icon"></i><span class="contact_address">{{ item.skype }}</span></li>
                  <li class="list-group-item"><i class="fa-brands fa-whatsapp contact_us_icon"></i><span class="contact_address">{{ item.whatsapp }}</span></li>
                  <li class="list-group-item"><i class="fa-brands fa-viber contact_us_icon"></i><span class="contact_address">{{item.viber}}</span></li>
                  <li class="list-group-item"><i class="fa-solid fa-globe contact_us_icon"></i><span class="contact_address">{{item.local_address}}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="contact_us_form">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-4 contact_bg_color">
              <div class="contact_right_form" v-for="item in contactUsMemorableJourney" :key="item.id">
                <h1><i class="fa-solid fa-phone"></i>{{item.number}}</h1>
                <h4>{{ item.title }} <b>{{ item.call }}</b></h4>
                <div><i class="fa-brands fa-servicestack"></i> {{ item.client }}</div>
                <div><i class="fa-solid fa-globe"></i> {{ item.country }}</div>
                <div><i class="fa-solid fa-user"></i> {{item.staff}}</div>
              </div>
            </div>
            <div class="col-md-8 contact_form_right">
              <h1>{{ contactUsFormTitle.title }}</h1>
              <form ref="contactUsForm" @submit.prevent="contactUs">
              <div class="row">
                  <div class="col-md-6 ">
                    <label for="name" class="form-label text-white">Your Name (required)</label>
                    <input type="text" class="form-control" id="name" name="name" required>
                  </div>
                  <div class="col-md-6">
                    <label for="name" class="form-label text-white">Company Name (required)</label>
                    <input type="text" class="form-control" id="company" name="company_name" required>
                  </div>
                  <div class="col-md-6 pb-2">
                    <label for="email" class="form-label text-white">Your Email (required)</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                  </div>
                  <div class="col-md-6 pb-2">
                    <label for="email" class="form-label text-white">Phone (required)</label>
                    <input type="number" class="form-control" id="phone" name="number" required>
                  </div>
                  <div class="col-md-6 pb-2">
                    <label for="subject" class="form-label text-white">Subject</label>
                    <input type="text" class="form-control" id="subject" name="subject" required>
                  </div>
                  <div class="col-md-6 pb-2">
                    <label for="subject" class="form-label text-white">What is your monthly budget for these projects?</label>
                    <input type="text" class="form-control" id="budget" name="budget" required>
                  </div>
                  <div class="col-md-6 ">
                    <label for="exampleFormControlTextarea1" class="form-label text-white">Your Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" name="message" required></textarea>
                  </div>
                  <div class="col-md-6 d-grid gap-2">
                    <label for="exampleFormControlTextarea1" class="form-label text-white"></label>
                    <button class="btn btn_custom_contact" type="submit">Submit</button>
                  </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name:'contactUsPage',
  head: {
    title: 'Contact with Digital Marketing Solution Pvt Ltd (DMS)',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'If you have any sort of question about our services then please contact with our expert team. You will get 24/7 support from us.'
      }
    ],
  },
  data: () => ({
    contactTitle: [],
    contactAddress: [],
    contactUsMemorableJourney: [],
    contactUsFormTitle: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("contact_us").then((response) => {
        this.contactTitle = response.data.contactTitle;
        this.contactAddress = response.data.contactAddress;
        this.contactUsMemorableJourney = response.data.contactUsMemorableJourney;
        this.contactUsFormTitle = response.data.contactUsFormTitle;
      });
    },
    // loadData() {
    //   this.$axios.get("contact_us/title").then((response) => {
    //     this.contactTitle = response.data.contactTitle;
    //   });
    //   this.$axios.get("contact_us/map_address").then((response) => {
    //     this.contactAddress = response.data.contactAddress;
    //   });
    //   this.$axios.get("contact_us/our_memorable_journey").then((response) => {
    //     this.contactUsMemorableJourney = response.data.contactUsMemorableJourney;
    //   });
    //   this.$axios.get("get_contact_us_message/title").then((response) => {
    //     this.contactUsFormTitle = response.data.contactUsFormTitle;
    //   });
    // },
    contactUs(){
      try{
        const formData = new FormData(this.$refs.contactUsForm);
        // console.log(formData)
        this.$axios.post('contact_us_message_store', formData).then( res => {
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
    }
  }
}
</script>
