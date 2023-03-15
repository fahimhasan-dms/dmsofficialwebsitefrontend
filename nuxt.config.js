export default {
  target: 'static',
  generate: {
    fallback: 'error.html'
  },
  head: {
    title: 'Digital Marketing Agency in Bangladesh | Data Driven Company',
    htmlAttrs: {
      lang: 'en'
    },
    headers: {
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DMS is the best digital marketing agency that provides professional SEO service, google ads, SMM, SEM, email marketing, web design, and software development services' },
      { name: 'format-detection', content: 'telephone=no' },

      { httpEquiv: 'Permissions-Policy', content: 'interest-cohort=()' },

      { hid: 'og-title', property: 'og:title', content: 'here title' },
      { hid: 'og-desc', property: 'og:description', content: 'here description' },
      { hid: 'og-image', property: 'og:image', content: '/dms.png'},
      { hid: 'og-url', property: 'og:url', content: 'https://www.digitalmarketingbd.com' },

      { hid: 'twitter-title', property: 'twitter:title', content: 'Twitter title' },
      { hid: 'twitter-desc', property: 'twitter:description', content: 'Twitter description' },
      { hid: 'twitter-image', property: 'twitter:image', content: 'https://www.digitalmarketingbd.com/dms.png' },
      { hid: 'twitter-card', property: 'twitter:card', content: 'your card' },
      // { hid: 'facebook-domain-verification', property: 'facebook-domain-verification', content: 'pblfygwebzfkdvhnrg2887qo9v9iii' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/dms.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' },
      // { rel: 'stylesheet', href: 'css/bootstrap.min.css' },
      // { rel: 'stylesheet', href: 'css/main.css' },
    ],
    script: [
      // { type: 'text/javascript', src: 'bootstrap.bundle.min.js' },
      // { src: 'https://www.googletagmanager.com/gtm.js?id=GTM-58WNJFQ', async: true },
      {
        hid: 'tawk.to',
        src:
          'https://embed.tawk.to/638b4992b0d6371309d271e7/1gjc1epp8',
        defer: true
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/css/bootstrap.min.css',
    '@/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/js/bootstrap.bundle.min.js', mode: 'client' },
    // '@/plugins/vueLaravelPagination.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-sweetalert2',
    // 'nuxt-hsts-module',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: 'GTM-58WNJFQ'
  },

  sitemap: {
    hostname: 'https://www.digitalmarketingbd.com',
  },

  robots: {
    UserAgent: '*',
    Disallow:[
      '/feed',
      '/public',
    ],
    Allow: '/'
  },

  // hsts: {
  //   maxAge: 31536000, // 6 months
  //   includeSubDomains: true
  // },

  // server: {
  //   hsts: {
  //     maxAge: 31536000,
  //     includeSubDomains: true
  //   }
  // },

  axios: {
    baseURL: 'https://www.admin.digitalmarketingbd.com/api/',
    // baseURL: 'http://localhost:8000/api/',
    credentials:true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'https://www.digitalmarketingbd.com/',
  },

  publicRuntimeConfig: {
    baseURL: 'https://www.admin.digitalmarketingbd.com/admin/assets/img/',
    // baseURL: 'http://localhost:8000/admin/assets/img/',
  },

  // router: {
  //   middleware: [
  //     'redirect'
  //   ]
  // }
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/seo-service-provider-company/',
        redirect: '/best-seo-service-provider',
        statusCode: 301
      })
      routes.push({
        path: '/social-media-marketing-agency/',
        redirect: '/social-media-marketing-agency',
        statusCode: 301
      })
      routes.push({
        path: '/display-marketing-ppc/',
        redirect: '/google-ads-management-services-agency',
        statusCode: 301
      })
      routes.push({
        path: '/online-brand-promotion/',
        redirect: '/digital-marketing-service-agency',
        statusCode: 301
      })
      routes.push({
        path: '/targeted-email-marketing/',
        redirect: '/email-marketing-service-provider',
        statusCode: 301
      })
      routes.push({
        path: '/sms-marketing/',
        redirect: '/bulk-sms-services',
        statusCode: 301
      })
      routes.push({
        path: '/creative-graphic-design/',
        redirect: '/creative-graphic-design-services',
        statusCode: 301
      })
      routes.push({
        path: '/video-marketing/',
        redirect: '/video-marketing-agency',
        statusCode: 301
      })
      routes.push({
        path: '/software-development/',
        redirect: '/best-software-development-company',
        statusCode: 301
      })
      routes.push({
        path: '/web-development/',
        redirect: '/web-development-company',
        statusCode: 301
      })
      routes.push({
        path: '/custom-web-design/',
        redirect: '/custom-website-design-company',
        statusCode: 301
      })
      routes.push({
        path: '/app-development/',
        redirect: '/app-development-company',
        statusCode: 301
      })
      routes.push({
        path: '/web-maintenance/',
        redirect: '/website-maintenance-service',
        statusCode: 301
      })
      routes.push({
        path: '/outsourcing-training/',
        redirect: '/best-outsourcing-training-centre',
        statusCode: 301
      })
      routes.push({
        path: '/domain-registration/',
        redirect: '/book-domain-name',
        statusCode: 301
      })
      routes.push({
        path: '/photography/',
        redirect: '/best-professional-photography-services',
        statusCode: 301
      })

    }
  }

}
