export const about = {
  title: 'nav.about',
  link: '/about',
  list: [
    {
      name: 'mission',
      bottom: 'nav.about_dropdown_mission',
      link: '/about#mission'
    },
    {
      name: 'team',
      bottom: 'nav.about_dropdown_team',
      link: '/about#team'
    },
    {
      name: 'values',
      bottom: 'nav.about_dropdown_values',
      link: '/about#values'
    },
    {
      name: 'news',
      bottom: 'nav.about_dropdown_news',
      link: '/about#news'
    }
  ]
};
export const products = {
  title: 'nav.products',
  link: '/products',
  list: [
    {
      name: 'Hansaton',
      top: 'nav.products_dropdown_Hansaton_top',
      bottom: 'nav.products_dropdown_Hansaton_bottom',
      link: '/product_detail/1'
    },
    {
      name: 'Phonak',
      top: 'nav.products_dropdown_Phonak_top',
      bottom: 'nav.products_dropdown_Phonak_bottom',
      link: '/product_detail/2'
    },
    {
      name: 'Accessories',
      top: 'nav.products_dropdown_accessories_top',
      bottom: 'nav.products_dropdown_accessories_bottom',
      link: '/accessories_detail/1'
    },
    {
      name: 'Battery',
      top: 'nav.products_dropdown_battery_top',
      bottom: 'nav.products_dropdown_battery_bottom',
      link: '/accessories_detail/2'
    }
  ],
  all: {
    text: 'nav.products_dropdown_all',
    link: '/products'
  }
};
