import { makeAutoObservable } from "mobx";

const PhoneStore = () => {
  return makeAutoObservable({
    // list: [
    //   {
    //     id: 1,
    //     name: "iPhone 14 Pro max",
    //     minprise: 118900,
    //     mainImage:
    //       "https://imobile77.ru/wa-data/public/shop/products/83/04/10483/images/39296/39296.970.png",
    //     variatons: [
    //       {
    //         color: "#fde8cd",
    //         title: "Gold",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/83/04/10483/images/39296/39296.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/83/04/10483/images/39297/39297.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/83/04/10483/images/39298/39298.970.png",
    //         ],
    //         memory: [
    //           { name: "256 гб", value: 256, prise: 118900, disbled: true },
    //           { name: "512 гб", value: 512, prise: 133900, disbled: true },
    //           { name: "1 TB", value: 1000, prise: 146900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#685a6a",
    //         title: "Deep Purple",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/80/04/10480/images/39286/39286.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/80/04/10480/images/39287/39287.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/80/04/10480/images/39288/39288.970.png",
    //         ],
    //         memory: [
    //           { name: "256 гб", value: 256, prise: 118900, disbled: true },
    //           { name: "512 гб", value: 512, prise: 133900, disbled: true },
    //           { name: "1 TB", value: 1000, prise: 146900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#3d3737",
    //         title: "Space Black",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/85/04/10485/images/39302/39302.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/85/04/10485/images/39303/39303.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/85/04/10485/images/39304/39304.970.png",
    //         ],
    //         memory: [
    //           { name: "256 гб", value: 256, prise: 118900, disbled: true },
    //           { name: "512 гб", value: 512, prise: 133900, disbled: true },
    //           { name: "1 TB", value: 1000, prise: 146900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#eef1f0",
    //         title: "Silver",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/82/04/10482/images/39293/39293.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/82/04/10482/images/39294/39294.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/82/04/10482/images/39295/39295.970.png",
    //         ],
    //         memory: [
    //           { name: "256 гб", value: 256, prise: 118900, disbled: true },
    //           { name: "512 гб", value: 512, prise: 133900, disbled: true },
    //           { name: "1 TB", value: 1000, prise: 146900, disbled: true },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     name: "iPhone 14 Pro",
    //     minprise: 105900,
    //     mainImage:
    //       "https://imobile77.ru/wa-data/public/shop/products/67/04/10467/images/39244/39244.970.png",
    //     variatons: [
    //       {
    //         color: "#fde8cd",
    //         title: "Gold",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/67/04/10467/images/39244/39244.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/67/04/10467/images/39245/39245.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/67/04/10467/images/39246/39246.970.png",
    //         ],
    //         memory: [
    //           { name: "256 гб", value: 256, prise: 105900, disbled: true },
    //           { name: "512 гб", value: 512, prise: 122900, disbled: true },
    //           { name: "1 TB", value: 1000, prise: 134900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#685a6a",
    //         title: "Deep Purple",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/59/04/10459/images/39216/39216.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/59/04/10459/images/39217/39217.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/59/04/10459/images/39218/39218.970.png",
    //         ],
    //         memory: [
    //           { name: "256 гб", value: 256, prise: 105900, disbled: true },
    //           { name: "512 гб", value: 512, prise: 122900, disbled: true },
    //           { name: "1 TB", value: 1000, prise: 134900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#3d3737",
    //         title: "Space Black",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/69/04/10469/images/39250/39250.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/69/04/10469/images/39251/39251.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/69/04/10469/images/39252/39252.970.png",
    //         ],
    //         memory: [
    //           { name: "256 гб", value: 256, prise: 105900, disbled: true },
    //           { name: "512 гб", value: 512, prise: 122900, disbled: true },
    //           { name: "1 TB", value: 1000, prise: 134900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#eef1f0",
    //         title: "Silver",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/61/04/10461/images/39223/39223.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/61/04/10461/images/39224/39224.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/61/04/10461/images/39225/39225.970.png",
    //         ],
    //         memory: [
    //           { name: "256 гб", value: 256, prise: 105900, disbled: true },
    //           { name: "512 гб", value: 512, prise: 122900, disbled: true },
    //           { name: "1 TB", value: 1000, prise: 134900, disbled: true },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     id: 3,
    //     name: "Iphone 14",
    //     minprise: 77900,
    //     mainImage:
    //       "https://imobile77.ru/wa-data/public/shop/products/69/03/10369/images/38561/38561.970.jpg",
    //     variatons: [
    //       {
    //         color: "#96b3c7",
    //         title: "Blue",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/73/03/10373/images/38619/38619.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/73/03/10373/images/38628/38628.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/73/03/10373/images/38616/38616.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 77900, disbled: true },
    //           { name: "256 гб", value: 256, prise: 81900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#ae0518",
    //         title: "Red",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/72/03/10372/images/38611/38611.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/72/03/10372/images/38613/38613.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/72/03/10372/images/38614/38614.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 77900, disbled: true },
    //           { name: "256 гб", value: 256, prise: 81900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#eadcec",
    //         title: "Purple",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/71/03/10371/images/38621/38621.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/71/03/10371/images/38622/38622.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/71/03/10371/images/38623/38623.970.png",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 77900, disbled: true },
    //           { name: "256 гб", value: 256, prise: 81900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#f9f4f0",
    //         title: "Starlight",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/78/03/10378/images/38668/38668.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/78/03/10378/images/38669/38669.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/78/03/10378/images/38670/38670.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 77900, disbled: true },
    //           { name: "256 гб", value: 256, prise: 81900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#181c25",
    //         title: "Midnight",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/69/03/10369/images/38561/38561.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/69/03/10369/images/38563/38563.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/69/03/10369/images/38564/38564.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 77900, disbled: true },
    //           { name: "256 гб", value: 256, prise: 81900, disbled: true },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     id: 4,
    //     name: "Iphone 14 Plus",
    //     minprise: 79900,
    //     mainImage:
    //       "https://imobile77.ru/wa-data/public/shop/products/29/04/10429/images/38986/38986.970.png",
    //     variatons: [
    //       {
    //         color: "#96b3c7",
    //         title: "Blue",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/27/04/10427/images/38969/38969.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/27/04/10427/images/38970/38970.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/27/04/10427/images/38971/38971.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 79900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#ae0518",
    //         title: "Red",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/26/04/10426/images/38960/38960.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/26/04/10426/images/38961/38961.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/26/04/10426/images/38962/38962.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 79900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#eadcec",
    //         title: "Purple",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/29/04/10429/images/38986/38986.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/29/04/10429/images/38987/38987.970.png",
    //           "https://imobile77.ru/wa-data/public/shop/products/29/04/10429/images/38988/38988.970.png",
    //         ],
    //         memory: [
    //           { name: "256 гб", value: 256, prise: 89900, disbled: false },
    //         ],
    //       },
    //       {
    //         color: "#f9f4f0",
    //         title: "Starlight",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/32/04/10432/images/39011/39011.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/32/04/10432/images/39012/39012.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/32/04/10432/images/39013/39013.970.jpg",
    //         ],
    //         memory: [
    //           { name: "256 гб", value: 256, prise: 89900, disbled: false },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     id: 5,
    //     name: "Iphone 13 Pro Max",
    //     minprise: 95900,
    //     mainImage:
    //       "https://imobile77.ru/wa-data/public/shop/products/94/01/10194/images/37187/37187.970.jpg",
    //     variatons: [
    //       {
    //         color: "#93a7c2",
    //         title: "Sierra Blue",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/94/01/10194/images/37187/37187.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/94/01/10194/images/37188/37188.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/94/01/10194/images/37189/37189.970.jpg",
    //         ],
    //         memory: [
    //           { name: "256 гб", value: 256, prise: 103900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#e8e9e4",
    //         title: "Silver",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/97/01/10197/images/37217/37217.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/97/01/10197/images/37218/37218.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/97/01/10197/images/37219/37219.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 95900, disbled: true },
    //           { name: "512 гб", value: 512, prise: 110900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#515d4f",
    //         title: "Alpine Green",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/27/03/10327/images/38222/38222.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/27/03/10327/images/38223/38223.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/27/03/10327/images/38224/38224.970.jpg",
    //         ],
    //         memory: [
    //           { name: "256 гб", value: 256, prise: 103900, disbled: false },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     id: 6,
    //     name: "Iphone 13 Pro",
    //     minprise: 104900,
    //     mainImage:
    //       "https://imobile77.ru/wa-data/public/shop/products/32/03/10332/images/38247/38247.970.jpg",
    //     variatons: [
    //       {
    //         color: "#465244",
    //         title: "Alpine Green",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/32/03/10332/images/38247/38247.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/32/03/10332/images/38248/38248.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/32/03/10332/images/38249/38249.970.jpg",
    //         ],
    //         memory: [
    //           { name: "512 гб", value: 512, prise: 104900, disbled: false },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     id: 7,
    //     name: "iPhone 13",
    //     minprise: 67900,
    //     mainImage:
    //       "https://imobile77.ru/wa-data/public/shop/products/72/00/10072/images/35952/35952.970.jpg",
    //     variatons: [
    //       {
    //         color: "#215d79",
    //         title: "Blue",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/71/00/10071/images/35947/35947.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/71/00/10071/images/35948/35948.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/71/00/10071/images/35949/35949.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 67900, disbled: false },
    //           { name: "256 гб", value: 256, prise: 73900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#f9f4f0",
    //         title: "Starlight",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/68/00/10068/images/35902/35902.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/68/00/10068/images/35903/35903.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/68/00/10068/images/35904/35904.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 67900, disbled: false },
    //           { name: "256 гб", value: 256, prise: 73900, disbled: true },
    //         ],
    //       },
    //       {
    //         color: "#E3D8E9",
    //         title: "Midnight",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/72/00/10072/images/35952/35952.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/72/00/10072/images/35953/35953.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/72/00/10072/images/35954/35954.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 67900, disbled: false },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     id: 7,
    //     name: "iPhone 11",
    //     minprise: 41900,
    //     mainImage:
    //       "https://imobile77.ru/wa-data/public/shop/products/17/92/9217/images/31106/31106.970.jpg",
    //     variatons: [
    //       {
    //         color: "#1d1d1d",
    //         title: "Черный",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/17/92/9217/images/31106/31106.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/17/92/9217/images/31107/31107.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/17/92/9217/images/31108/31108.970.jpg",
    //         ],
    //         memory: [
    //           { name: "64 гб", value: 64, prise: 41900, disbled: false },
    //           { name: "128 гб", value: 128, prise: 49900, disbled: false },
    //         ],
    //       },
    //       {
    //         color: "#fff",
    //         title: "Белый",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/18/92/9218/images/31111/31111.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/18/92/9218/images/31112/31112.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/18/92/9218/images/31113/31113.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 49900, disbled: false },
    //         ],
    //       },
    //       {
    //         color: "#aadec8",
    //         title: "Зелёный",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/16/92/9216/images/31100/31100.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/16/92/9216/images/31105/31105.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/16/92/9216/images/31099/31099.970.jpg",
    //         ],
    //         memory: [
    //           { name: "64 гб", value: 64, prise: 41900, disbled: false },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     id: 8,
    //     name: "iPhone SE (2022)",
    //     minprise: 42900,
    //     mainImage:
    //       "https://imobile77.ru/wa-data/public/shop/products/35/93/9335/images/31643/31643.970.jpg",
    //     variatons: [
    //       {
    //         color: "#f9f4f0",
    //         title: "Starlight",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/35/93/9335/images/31643/31643.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/35/93/9335/images/31644/31644.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/35/93/9335/images/31645/31645.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 42900, disbled: false },
    //         ],
    //       },
    //       {
    //         color: "#E3D8E9",
    //         title: "Midnight",
    //         images: [
    //           "https://imobile77.ru/wa-data/public/shop/products/78/93/9378/images/31923/31923.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/78/93/9378/images/31925/31925.970.jpg",
    //           "https://imobile77.ru/wa-data/public/shop/products/78/93/9378/images/31926/31926.970.jpg",
    //         ],
    //         memory: [
    //           { name: "128 гб", value: 128, prise: 42900, disbled: false },
    //         ],
    //       },
    //     ],
    //   },
    // ],
    categories: [],

    setCategories: async function () {
      const categoriesP = await fetch("/api/items/createcategory").then(
        async (res) => {
          return await res.json();
        }
      );
      this.categories = categoriesP;
    },
  });
};

export default PhoneStore;
