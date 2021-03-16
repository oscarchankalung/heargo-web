// IMAGES
import img1 from '../../assets/images/product/Hansaton-feature6-0.png';
import img2 from '../../assets/images/product/RemoteControl-0.png';
import img3 from '../../assets/images/product/PartnerMic.png';
import img4 from '../../assets/images/product/Hansaton-logo.png';
import img5 from '../../assets/images/product/Phonak-logo.jpg';
import img6 from '../../assets/images/product/battery-product1.jpg';
import img7 from '../../assets/images/product/battery-product2.jpg';
import img8 from '../../assets/images/product/battery-product3.jpg';
import img9 from '../../assets/images/product/battery-product4.jpg';
import img10 from '../../assets/images/product/battery-product5.jpg';
import img11 from '../../assets/images/product/Accessories-banner.jpg';
import img12 from '../../assets/images/product/Battery-banner.jpg';

export const data = [
  {
    id: 1,
    title: '配件及手機app',
    subTitle: '自由無線掌控一切',
    banner: img11,
    categories: [
      {
        id: 0,
        title: '無線配件',
        products: [
          {
            id: 0,
            img: img1,
            title: 'TV connector 多媒體小盒子',
            subTitle: '家居必備',
            description:
              '多媒體小盒子能利用串流技術，將助聽器輕鬆地連接電視以及其他影音設備。使用者能夠在15公尺的距離內看電視、聽音樂，享受雙耳聆聽的感受。'
          },
          {
            id: 1,
            img: img2,
            title: 'Remote Control 遙控器',
            description:
              '搖控器採用全新設計，簡單且易於使用。特大鍵盤標示清晰，即使手指不靈敏、不慣用手機控制助聽器的用家亦能輕鬆操作，如調節音量、切換程式等。此配件適用於全線EXCITE PRO助聽器。'
          },
          {
            id: 2,
            img: img3,
            title: 'PartnerMic 遠端麥克風',
            description:
              'PartnerMic設計及功能經過升級，用家可以輕易地將咪夾在談話對象的衣領上，而且單鍵設計令操作更簡單，音質及電池效能亦很出色。其覆蓋範圍達25公尺，能直接傳送語音到助聽器，在困難的談話環境中效果尤其顯著。'
          }
        ]
      },
      {
        id: 1,
        title: '手機App',
        products: [
          {
            id: 0,
            img: img4,
            title: 'Stream Remote 串流app',
            description:
              'Stream Remote串流App的介面設計易於使用，能讓用家輕易透高手機調節助聽器各種設定，新加入的equaliser功能更可分別調節低頻、中頻、高頻的聲音，讓你自由作出個人化的效果。'
          },
          {
            id: 1,
            img: img5,
            title: 'myPhonak App',
            description:
              'myPhonak手機App有4大功能：遙距支援、我的裝置、遙控及聽力日記。遙距支援讓你隨時隨地透過手機App與你的聽力專家視像通話，更可即時根據你所在的環境及場合調節你的助聽器，例如餐廳、會議、辦公空、課室等，確保裝置設定能滿足你的需要。'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: '產市時請單由隨收',
    subTitle: '電池及清潔保養產品',
    banner: img12,
    categories: [
      {
        id: 0,
        title: '電池',
        products: [
          {
            id: 0,
            img: img6,
            title: '助聽器電池',
            description: '一排六粒不同型號, 分別為 10, 13, 312, 675, 配合不同助聽器體積而設。'
          },
          {
            id: 1,
            img: img7,
            title: '助聽器電池測電器',
            description: '把鋅空氣電池放在金色銅片內，可測度出電量'
          }
        ]
      },
      {
        id: 1,
        title: '清潔保養產品',
        products: [
          {
            id: 0,
            img: img8,
            title: 'Cedis',
            subTitle: '普通防潮盒',
            description: '密封式旋轉蓋掩, 更能防透氣'
          },
          {
            id: 1,
            img: img9,
            title: 'Cedis',
            subTitle: '普通防潮藥片',
            description:
              '一盒 4 粒裝每次放一粒橙色防潮藥片在防潮盒當橙色轉變為米白色時, 即表示藥片已充分吸濕, 須要重新更換新的防潮藥片能維持多久即視乎天氣潮濕的程度, 一般大概一個月一粒'
          },
          {
            id: 2,
            img: img10,
            title: 'Hal-Hen',
            subTitle: '強力防潮珠',
            description:
              '強力防潮珠 , 可循環再用防潮珠裡面有2種顏色的珠 , 大部份為米白色、 小部分為藍色。 當藍色珠變成米白 , 即表示整瓶珠已充分吸濕 , 須要重新烘焙後才能使用。'
          }
        ]
      }
    ]
  }
];
