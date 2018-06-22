const cdn_url = 'https://res.cloudinary.com/aviabird/image/upload/q_60/v1529433193/angularspree/';

export const DEFAULT_APP_DATA = {
  landing_page_banner: [
    {
      image_link: `${cdn_url}banner-1.jpg`,
      link_url: '#'
    },
    {
      image_link: `${cdn_url}banner-2.jpg`,
      link_url: '#'
    },
    {
      image_link: `${cdn_url}banner-3.jpg`,
      link_url: '#'
    },
    {
      image_link: `${cdn_url}banner-4.jpg`,
      link_url: '#'
    }
  ],
  promo_banner: {
    image_link: `${cdn_url}secondary-banner-1.jpg`,
    link_url: '#'
  },
  Deals: {
    type: 'Today\'s Deals'
  },

  Dog: {
    image_link: 'https://www.what-dog.net/Images/faces2/scroll001.jpg'
  },

  Cat: {
    image_link:
      'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350'
  },

  footer_page_links: [
    {
      name: 'About Us',
      link_url: '#'
    },
    {
      name: 'Blog',
      link_url: '#'
    },
    {
      name: 'Return Policy',
      link_url: '#'
    },
    {
      name: 'FAQs',
      link_url: '#'
    },
    {
      name: 'Testimonials',
      link_url: '#'
    }
  ],
  footer_social_links: [
    {
      link_url: 'https://twitter.com/angularspree',
      name: 'Twitter',
      icon: 'fa fa-twitter-square'
    },
    {
      link_url: 'https://www.instagram.com/angularspree/',
      name: 'Instagram',
      icon: 'fa fa-instagram'
    },
    {
      link_url:
        'https://plus.google.com/b/110371544800340671090/110371544800340671090',
      name: 'Google +',
      icon: 'fa fa-google-plus-square'
    },
    {
      link_url: 'https://in.pinterest.com/angularspree/',
      name: 'Pinterest',
      icon: 'fa fa-pinterest-square'
    },
    {
      link_url: 'https://www.facebook.com/angularspree/',
      name: 'Facebook',
      icon: 'fa fa-facebook-square'
    },
    {
      link_url: 'https://www.youtube.com/channel/UCFBvY3QxKAKBAI_chAzRpjQ',
      name: 'Youtube',
      icon: 'fa fa-youtube-square'
    }
  ],
  contact_info: {
    contact_no: '917-6031-568',
    copyright: 'Copyright © 2018 AngularSpree, Inc.'
  }
};
