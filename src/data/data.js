import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { key: 'dashboard', text: 'Dashboard', icon: <Web/>, link: '/dashboard' },
    // { key: 'tracker', text: 'Tracker', icon: <PermIdentity/>},
  ],
  tablePage: {
    items: [
      {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
      {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
      {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
      {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
      {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
      {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
      {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
      {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
      {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
      {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
      {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
    ],
    MonthlyInteractions: [
      {name: 'Jan', uv: 20},
      {name: 'Feb', uv: 25},
      {name: 'Mar', uv: 10},
      {name: 'Apr', uv: 17},
      {name: 'May', uv: 16},
      {name: 'Jun', uv: 22},
      {name: 'Jul', uv: 21},
      {name: 'Aug', uv: 18},
      {name: 'Sep', uv: 19},
      {name: 'Oct', uv: 24},
      {name: 'Nov', uv: 16},
      {name: 'Dec', uv: 27}
    ],
    newOrders: [
      {pv: 2},
      {pv: 1},
      {pv: 4},
      {pv: 2},
      {pv: 3},
      {pv: 2},
      {pv: 1}
    ],
    browserUsage: [
      {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
    ],
    week_one: {
      lanes: [
        {
          id: 'Monday', // in real data - make id the date (ex. 7/23/18)
          title: 'Monday',
          label: '1',
          cards: [
            {id: '1', title: '', description: '', label: ''},
          ]
        },
        {
          id: 'Tuesday',
          title: 'Tuesday',
          label: '2',
          cards: [
            {id: '2', title: '', description: '', label: ''},
          ]
        },
        {
          id: 'Wednesday',
          title: 'Wednesday',
          label: '3',
          cards: [
            {id: '3', title: '', description: '', label: ''},
          ]
        },{
          id: 'Thursday',
          title: 'Thursday',
          label: '4',
          cards: [
            {id: '4', title: '', description: '', label: ''},
          ]
        },
        {
          id: 'Friday',
          title: 'Friday',
          label: '5',
          cards: [
            {id: '5', title: '', description: '', label: ''},
          ]
        },
      ]
    },
    week_two: {
      lanes: [
        {
          id: 'Monday',
          title: 'Monday',
          label: '2/2',
          cards: [
            {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
            {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
          ]
        },
        {
          id: 'Tuesday',
          title: 'Tuesday',
          label: '2/2',
          cards: [
            {id: 'Card1', title: 'Write Blog', description: 'Call data team', label: '30 mins'},
          ]
        },
        {
          id: 'Wednesday',
          title: 'Wednesday',
          label: '0/4',
          cards: [
            {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
          ]
        },{
          id: 'Thursday',
          title: 'Thursday',
          label: '0/6',
          cards: [
            {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
          ]
        },
        {
          id: 'Friday',
          title: 'Friday',
          label: '0/6',
          cards: [
            {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
          ]
        },
      ]
    }
  }
};

export default data;