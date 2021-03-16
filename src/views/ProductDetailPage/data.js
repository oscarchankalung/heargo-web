// IMAGES
import icon1 from '../../assets/images/product/icons/Products_function1.svg';
import icon2 from '../../assets/images/product/icons/Products_function2.svg';
import icon3 from '../../assets/images/product/icons/Products_function3.svg';
import icon4 from '../../assets/images/product/icons/Products_function4.svg';
import icon5 from '../../assets/images/product/Phonak-feature1.jpg';
import icon6 from '../../assets/images/product/Hansaton-feature2.jpg';
import icon7 from '../../assets/images/product/Hansaton-feature3.png';
import icon8 from '../../assets/images/product/Hansaton-feature4.jpg';
import icon9 from '../../assets/images/product/AQsoundXCProR_CarbonBlack_Dome_persp.png';
import icon10 from '../../assets/images/product/RemoteControl-0.png';
import icon11 from '../../assets/images/product/phonak-icon1.jpg';
import icon12 from '../../assets/images/product/phonak-icon2.jpg';
import icon13 from '../../assets/images/product/phonak-icon3.jpg';
import icon14 from '../../assets/images/product/phonak-icon4.jpg';
import icon15 from '../../assets/images/product/phonak-icon5.jpg';
import icon16 from '../../assets/images/product/Hansaton-feature1.jpg';
import icon17 from '../../assets/images/product/Hansaton-feature6-0.png';
import icon18 from '../../assets/images/product/AQsoundXCProR_ExcitingRed_Dome_persp.png';
import icon19 from '../../assets/images/product/circle_image-1.png';
import icon20 from '../../assets/images/product/circle_image-2.png';
import icon21 from '../../assets/images/product/circle_image-3.png';

import productImg1 from '../../assets/images/product/AQ_sound_XC_Pro_RT_XitingRed_Dome_persp-removebg-preview.png';
import productImg2 from '../../assets/images/product/AQsoundXCProR_ExcitingRed_Dome_persp.png';
import productImg3 from '../../assets/images/product/AQsoundXCProR_ExcitingRed_Dome_persp.png';

export const data = [
  {
    id: 1,
    name: 'Sound XC pro R 充電款',
    brand: 'Hansaton AQ',
    img: icon18,
    features: [
      { id: 0, title: 'EXCITE Pro 平台', img: icon1 },
      { id: 1, title: 'Hearintellegence ™', subTitle: '智慧聆聽技術2.0', img: icon2 },
      { id: 2, title: '強大連接 - 藍牙手機，', subTitle: '電視，其他無線配件', img: icon3 },
      { id: 3, title: '支援手機APP', img: icon4 }
    ],
    middleContent: [
      {
        id: 0,
        style: 'left-right',
        backgroundColor: '#4d515a',
        title: '無論大聲細聲，',
        subTitle: 'EXCITE Pro都是如此動聽清晰',
        img: icon16,
        description: '設計時尚與性能兼備，外殼納米塗層防塵防水(IP68等級)更耐用。'
      },
      {
        id: 1,
        title: 'Hearintellegence ™',
        subTitle: '智慧聆聽技術 貼近自然音質',
        img: icon6,
        description:
          'Hearintellegence ™ 智慧聆聽技術模擬真耳自然聽覺，專注言語處理提供自然的聲音體驗， 讓你無論身處任何場合都能享受舒適的聽覺體驗。'
      },
      {
        id: 2,
        style: 'right-left',
        backgroundColor: '#4d515a',
        title: '藍牙直連手機 雙耳聆聽',
        img: icon7,
        description:
          'XC pro平台全線產品能直連iOS和Android手機，支援雙耳免提接聽電話、WhatsApp語音訊息、聽音樂、看影片，令生活更多姿多彩。'
      }
    ],
    specifications: [
      {
        id: 0,
        name: '睡前充電  一整天舒適便利',
        description:
          '先進的鋰電池充電技術，充電3小時就能運作一整天(24小時)， 帶給你一整天的舒適和便利。',
        img: icon8
      },
      {
        id: 1,
        name: '隱蔽外形 低調優雅',
        description: '長度僅2.5cm',
        img: icon9
      },
      {
        id: 2,
        name: '連線簡單而迅速',
        subName: '暢享多媒體生活',
        description: '利用專屬附件多媒體小盒子連接電視，將環徊立體高清優質音頻直接無線傳輸到助聽器',
        img: icon17
      },
      {
        id: 3,
        name: 'APP自由掌控，',
        subName: '個人化你的聽覺體驗',
        description:
          '下載使用stream remote App，毋需額外附件，即可通過手機調節助聽器音量，切換程式。',
        img: icon10
      }
    ]
  },
  {
    id: 2,
    name: 'Naida Marvel',
    brand: 'PHONAK',
    img: icon18,
    features: [
      { id: 0, title: '新AutoSense OS 3.0', subTitle: '人工智能環境轉換', img: icon11 },
      { id: 1, title: '優秀音色', img: icon12 },
      { id: 2, title: '雙耳免提手機通話', subTitle: '(iOS and Android)', img: icon13 },
      { id: 3, title: '雙耳語音串流技術™', img: icon14 },
      { id: 4, title: 'RogerDirect™數碼無', subTitle: '線系統直連技術', img: icon15 }
    ],
    middleContent: [
      {
        id: 0,
        style: 'left-right',
        backgroundColor: '#4d515a',
        title: '無與倫比 無需隱藏',
        subTitle: '智能生活強力型助聽器',
        img: icon5,
        description:
          '瑞士峰力智能生活強力型助聽器 Naida Marvel考慮到嚴重聽障人士的社交和娛樂需要而開發，是全球首款可以藍牙直連iOS及Android智能手機的強力助聽器。作為一個強效、全面的聽力解決方案，讓您連接世界，嚴重聽障從此不是限制。'
      }
    ],
    specifications: [
      {
        id: 0,
        name: '新AutoSense OS 3.0',
        subName: '人工智能環境轉換',
        description:
          '新一代 AutoSense OS 3.0 人工智能聲音自動轉換程式。程式融入了人工智能(AI)辨識技術，反應較上一代更靈敏迅速；每0.4秒掃描環境一次，並自動調節聆聽模式，為用家省卻手動調節的繁瑣工序，輕鬆克服種種聆聽挑戰。',
        img: icon11
      },
      {
        id: 1,
        name: '優秀音色',
        description:
          '全新聲頻演算公式：新公式有效保留原聲特色，音質達至前所未有的自然、細膩，令用家聽得更舒適、更容易適應。用家體驗配戴後，都會鍾情於Naida Marvel。',
        img: icon12
      },
      {
        id: 2,
        name: '藍牙娛樂享受',
        description:
          'Naida Marvel 的藍牙接駁功能可以直接連接智能手機、平板電腦、峰力 Roger 裝置； 配合 TV Connector，更可連接大多數具備藍牙功能的電子器材，如電腦、電視、遊戲機等。',
        img: icon17
      },
      {
        id: 3,
        name: '雙耳免提手機通話',
        subName: '(iOS and Android)',
        description:
          '全球首款可以連接IOS及Android 智能手機，並實現雙耳免提通話的強力型助聽器。 手機接駁至助聽器時，只要兩者之間距離不超過5米，用家隨時可以輕按Naida Marvel的按鈕接聽電話、 收線及拒絕來電，免提溝通就是如此簡單！',
        img: icon13
      }
    ]
  }
];

export const steps = [
  { id: 0, title: '1次', img: icon19, subTitle: '免費上門跟進調較' },
  { id: 1, title: '2款', img: icon20, subTitle: '產品級別即場試戴' },
  { id: 2, title: '3個月內', img: icon21, subTitle: '升級換機' }
];

export const ProductsList = [
  {
    id: 0,
    name: 'Sound XC pro R',
    subname: '微型電池款 312',
    img: productImg1,
    description: '細小體積，強大連接',
    subDescription: '適合輕度至中度嚴重聽損程度'
  },
  {
    id: 1,
    name: 'AQ sound XC pro R',
    subname: '微型充電款Li-ion',
    img: productImg2,
    description: '短時間充電 x 長時間使用',
    subDescription: '適合輕度至中度嚴重聽損程度'
  },
  {
    id: 2,
    name: 'AQ jam XC pro RT',
    subname: '標準充電款Li-ion',
    img: productImg3,
    description: '適合手指靈活度低，操作實用型',
    subDescription: '適合中度嚴重至嚴重聽損程度 '
  }
];
