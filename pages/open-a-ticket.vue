<template>
  <section>
    <div class="contact_us_form">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 contact_bg_color">
            <picture>
              <source type="image/webp" srcset="@/images/open-a-ticket.webp">
              <img src="@/images/open-a-ticket.webp" alt="Open_A_Ticket">
            </picture>
          </div>
          <div class="col-md-8">
            <div v-html="openATicketTitle.title"></div>
            <form ref="openATicketForm" @submit.prevent="openATicket">
              <div class="row justify-content-center">
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
                <div class="col-md-6 ">
                  <label for="exampleFormControlTextarea1" class="form-label text-white">Your Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" name="message" required></textarea>
                </div>
                <div class="col-md-6 d-grid gap-2">
                  <label for="exampleFormControlTextarea1" class="form-label text-white"></label>
                  <button class="btn btn_custom_contact" type="submit" >Submit</button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export  default {
  name:'openATicketPage',
  head: {
    title: 'Open A Ticket',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Open A Ticket Digital Marketing Solution Pvt Ltd'
      }
    ],
  },
  data: () => ({
    openATicketTitle: [],
  }),
  mounted() {
    this.dataLoad()
  },
  methods:{
    dataLoad(){
      this.$axios.get("get_open_a_ticket/title").then((response)=>{
        this.openATicketTitle = response.data.openATicketTitle
      })
    },
    openATicket(){
      try{
        const formData = new FormData(this.$refs.openATicketForm);
        // console.log(formData)
        this.$axios.post('post_open_a_ticket_message', formData).then( res => {
          this.$router.push({
            path: '/thank-you',
          });
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
