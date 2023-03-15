<template>
  <div>
    <div class="MainDiv">
      <div class="HoverShowDiv" :class="{ HoverShowDivActive: HoverShowDivActive }">
        <div class="LitelPart">
          <a href="tel:01743260655" target="_blank" rel="noopener">
            <i class="fa-sharp fa-solid fa-comment whatapp"></i>
            <p>
              Call Us
            </p>
          </a>
        </div>
        <div class="LitelPart">
          <a href="https://www.facebook.com/DMSBangladesh" target="_blank" rel="noopener">
            <i class="fa-brands fa-facebook-messenger"></i>
            <p>
              Messenger
            </p>
          </a>
        </div>
        <div class="LitelPart">
          <a href="https://wa.me/01743260655" target="_blank" rel="noopener">
            <i class="fa-brands fa-whatsapp whatapp"></i>
            <p>
              WhatsApp
            </p>
          </a>
        </div>
        <div class="LitelPart">
          <a href="skype:dmsolution2015?call" target="_blank" rel="noopener">
            <i class="fa-brands fa-skype skype"></i>
            <p>
              Skype
            </p>
          </a>
        </div>
        <div class="LitelPart">
          <a href="tel:+880 1743-260655" target="_blank" rel="noopener">
            <i class="fa-brands fa-telegram"></i>
            <p>
              Telegram
            </p>
          </a>
        </div>
      </div>
      <button class="FixedDev" @click="clickShow">
        We're online!
        <div class="SideDiv">
        </div>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  auth:false,
  name:'LiveChat',
  data() {
    return {
      HoverShowDivActive: false,
    };
  },
  // mounted() {
  //   var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  //   (function(){
  //     var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  //     s1.async=true;
  //     s1.src='https://embed.tawk.to/638b4992b0d6371309d271e7/1gjc1epp8';
  //     s1.charset='UTF-8';
  //     s1.setAttribute('crossorigin','*');
  //     s0.parentNode.insertBefore(s1,s0);
  //   })();
  // },
  methods: {
    clickShow () {
      this.HoverShowDivActive = !this.HoverShowDivActive
    }
  }
}



</script>
<style>
.FixedDev {
  font-size: 18px;
  font-style: normal;
  color: white;
  border: none;
  background: #0093D8;
  /* background-image: linear-gradient(to right, #0093D8 , #F3762B); */
  border-top-left-radius: 7px!important;
  border-top-right-radius: 7px!important;
  min-width: 185px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0 12px 14px 8px rgb(0 0 0 / 17%);
  display: block;
  height: 36px;
  position: fixed;
  z-index: 2147483648;
  padding-top: 3px;
  cursor: pointer;
}

.HoverShowDiv {
  z-index: 201;
  border-bottom: 1px solid rgba(0,0,0,.12)!important;
  bottom: 50px;
  right: 50px;
  background-color: #fff;
  color: #222d38;
  font-family: Arial,sans-serif;
  outline: 0;
  overflow: hidden;
  text-decoration: none;
  border-radius: 10px!important;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 17px 1px, rgb(0 0 0 / 16%) 0px 0px 4px;
  width: 185px;
  display: none;
  transition: 10s;
  margin-bottom: 0.5rem;
  margin-left: -1px;
}

.FixedDev{
  position: relative;
}

.SideDiv{
  border-radius: 0 24px 0 0!important;
  right: 0;
  top: 0;
  height: 33px;
  overflow: hidden;
  position: absolute;
  width: 32px;
  z-index: 6;
}

.HoverShowDiv a{
  display: flex;
  text-align: none !important;
  text-decoration: none;
}

.HoverShowDiv a i{
  cursor: pointer;
  font-size: 28px;
  margin-right: 4px;
  width: 28px;
  text-decoration: none;
  margin-top: 13px;
}

.HoverShowDiv a p{
  align-items: center;
  cursor: pointer;
  display: inline;
  min-height: 28px;
  padding: 5px 12px 0 12px;
  position: relative;
  margin-top: 11px;

  color: rgba(0,0,0,.87)!important;
  cursor: pointer;
  display: block;
  font-size: 16px;
  max-width: calc(100% - 38px);
  text-decoration: none;
}

.LitelPart{
  padding: 1px 16px;
}

.LitelPart:not(:last-child){
  border-bottom: 1px solid rgb(202, 202, 202);
}

.instagam{
  color: #F6047C;
}

.whatapp{
  color: #47DA58;
}

.MainDiv {
  height: min-content;
  position: fixed;
  bottom: 0;
  right: 0px;
  text-align: center;
}

.HoverShowDivActive{
  display: block !important;
}

.LitelPart:hover{
  background-color: rgb(233, 233, 233);
}
.footerChatIcon{
  display: none;
}
.skype{
  color: #00ADE9;
}

@media (max-width: 768px) {
  .MainDiv{
    display: none;
  }
  .footerChatIcon{
    display: block;
  }
}
</style>
