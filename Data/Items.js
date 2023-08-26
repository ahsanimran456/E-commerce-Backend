const garmentsArray = [
    {
        id: 1,
        description: "Men's Classic T-shirt",
        actualPrice: 2500,
        discountPrice: 2000,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/11052023/540_1683528888_64589cb8f2d80_94_1676025895-1280202248331.jpg"

    },
    {
        id: 2,
        description: "Women's Floral Dress",
        actualPrice: 4500,
        discountPrice: 3500,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/13042023/hrw01382_1681202022-565313655434.jpg"
    },
    {
        id: 3,
        description: "Kids' Cartoon Print Hoodie",
        actualPrice: 3000,
        discountPrice: 2500,
        belongs: "kids",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230418/3.Tops%20_%20Tees.jpg"
    },
    {
        id: 4,
        description: "Fresh Design Denim Jacket",
        actualPrice: 5000,
        discountPrice: 4000,
        belongs: "fresh_design",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/13042023/hrw01382_1681202022-565313655434.jpg"
    },
    {
        id: 5,
        description: "Men's Casual Shorts",
        actualPrice: 2000,
        discountPrice: 1500,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/19042023/whatsapp-image-2023-04-19-at-65831-am_1681904785-851013337602.jpeg"
    },
    {
        id: 6,
        description: "Women's Summer Skirt",
        actualPrice: 3500,
        discountPrice: 3000,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/13042023/hrw02803_1671708868-543431843308.jpg"
    },
    {
        id: 7,
        description: "Kids' Sports T-shirt",
        actualPrice: 1800,
        discountPrice: 1400,
        belongs: "kids",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/1.Dresses.png"
    },
    {
        id: 8,
        description: "Fresh Design Graphic Tee",
        actualPrice: 2800,
        discountPrice: 2200,
        belongs: "fresh_design",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230418/3.Tops%20_%20Tees.jpg"
    },
    {
        id: 9,
        description: "Men's Formal Shirt",
        actualPrice: 4000,
        discountPrice: 3000,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/07032023/17665_427_1649843891_62569eb3152f6-1228191944214.jpg"
    },
    {
        id: 10,
        description: "Women's Elegant Blouse",
        actualPrice: 5500,
        discountPrice: 4500,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/18042023/hrw01327_1681786647-275889804106.jpg"
    }, {
        id: 11,
        description: "Kids' Colorful Raincoat",
        actualPrice: 2800,
        discountPrice: 2000,
        belongs: "kids",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/2.Bottoms.png"
    },
    {
        id: 12,
        description: "Fresh Design Printed Hoodie",
        actualPrice: 4200,
        discountPrice: 3500,
        belongs: "fresh_design",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/1.Dresses.png"
    },
    {
        id: 13,
        description: "Men's Slim Fit Jeans",
        actualPrice: 3800,
        discountPrice: 3000,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/27062022/17951_864_1653048203_6287838b3a016-676477360412.jpg"
    },
    {
        id: 14,
        description: "Women's Active Leggings",
        actualPrice: 3200,
        discountPrice: 2500,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/04052023/hrw09311_1683029274-1475468830179.jpg"
    },
    {
        id: 15,
        description: "Kids' Animal Pajama Set",
        actualPrice: 2200,
        discountPrice: 1800,
        belongs: "kids",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/4.Festive-Wear.png"
    },
    {
        id: 16,
        description: "Fresh Design Baseball Cap",
        actualPrice: 1800,
        discountPrice: 1500,
        belongs: "fresh_design",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/2.Bottoms.png"
    },
    {
        id: 17,
        description: "Men's Plaid Flannel Shirt",
        actualPrice: 3000,
        discountPrice: 2500,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30012023/hrw06375_1675065260-21358710518.jpg"
    },
    {
        id: 18,
        description: "Women's Knit Sweater",
        actualPrice: 4800,
        discountPrice: 4000,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/04052023/hrw09427_1683029368-619438948404.jpg"
    },
    {
        id: 19,
        description: "Kids' Denim Overall Dress",
        actualPrice: 3600,
        discountPrice: 3000,
        belongs: "kids",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/6.Winter-Wear.png"
    },
    {
        id: 20,
        description: "Fresh Design Embroidered Jacket",
        actualPrice: 6000,
        discountPrice: 5000,
        belongs: "fresh_design",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30012023/hrw06375_1675065260-21358710518.jpg"
    }, {
        id: 21,
        description: "Men's Cargo Shorts",
        actualPrice: 2800,
        discountPrice: 2200,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/03082022/6988_135_1659510695_62ea1fa7bad51-1149598713944.jpg"
    },
    {
        id: 22,
        description: "Women's Boho Maxi Dress",
        actualPrice: 6500,
        discountPrice: 5500,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/04052023/hrw09259_1683029221-1123154044222.jpg"
    },
    {
        id: 23,
        description: "Kids' Colorful Sneakers",
        actualPrice: 2400,
        discountPrice: 1800,
        belongs: "kids",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230418/7.Casual%20Shirts.jpg"
    },
    {
        id: 24,
        description: "Fresh Design Hooded Sweatshirt",
        actualPrice: 3800,
        discountPrice: 3200,
        belongs: "fresh_design",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230418/7.Casual%20Shirts.jpg"
    },
    {
        id: 25,
        description: "Men's Leather Jacket",
        actualPrice: 1200,
        discountPrice: 1000,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30012023/hrw06477_1675065539-1570335361222.jpg"
    },
    {
        id: 26,
        description: "Women's Striped Blazer",
        actualPrice: 5000,
        discountPrice: 4000,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/04052023/hrw09435_1683100537-1182441867890.jpg"
    },
    {
        id: 27,
        description: "Kids' Sparkle Tutu Skirt",
        actualPrice: 2000,
        discountPrice: 1500,
        belongs: "kids",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/8.T-Shirts.png"
    },
    {
        id: 28,
        description: "Fresh Design Camo Pants",
        actualPrice: 4200,
        discountPrice: 3500,
        belongs: "fresh_design",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/03082022/6988_135_1659510695_62ea1fa7bad51-1149598713944.jpg"


    },
    {
        id: 29,
        description: "Men's V-neck Sweater",
        actualPrice: 3600,
        discountPrice: 3000,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25052022/20101_383_1649053770_624a904a610be-1399268996951.jpg"
    },
    {
        id: 30,
        description: "Women's Ruffle Sleeve Top",
        actualPrice: 2800,
        discountPrice: 2200,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/09052023/hrw09823_1683190424-1072115492688.jpg"
    }, {
        id: 31,
        description: "Kids' Dinosaur Print T-shirt",
        actualPrice: 1500,
        discountPrice: 1200,
        belongs: "kids",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/9.Polos.png"
    },
    {
        id: 32,
        description: "Fresh Design Embroidered Denim",
        actualPrice: 5500,
        discountPrice: 4500,
        belongs: "fresh_design",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/8.T-Shirts.png"
    },
    {
        id: 33,
        description: "Men's Polo Shirt",
        actualPrice: 3000,
        discountPrice: 2500,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/27052022/17065_508_1648706710_62454496ad465-1445982213748.jpg"
    },
    {
        id: 34,
        description: "Women's High Waist Jeans",
        actualPrice: 4200,
        discountPrice: 3500,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/03052023/hrw09754_1683100355-1359067497307.jpg"
    },
    {
        id: 35,
        description: "Kids' Printed Rain Boots",
        actualPrice: 2800,
        discountPrice: 2200,
        belongs: "kids",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/12.Winter-Wear.png"
    },
    {
        id: 36,
        description: "Fresh Design Patched Sweater",
        actualPrice: 4800,
        discountPrice: 4000,
        belongs: "fresh_design",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/27052022/17065_508_1648706710_62454496ad465-1445982213748.jpg"

    },
    {
        id: 37,
        description: "Men's Checked Dress Shirt",
        actualPrice: 3200,
        discountPrice: 2800,
        belongs: "mens",
        imgurl: 'https://d30fs77zq6vq2v.cloudfront.net/product/515x772/03082022/6526_853_1659512120_62ea253817258-1602943719135.jpg'
    },
    {
        id: 38,
        description: "Women's Floral Print Romper",
        actualPrice: 3600,
        discountPrice: 3000,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/15052023/392_1683528864_64589ca0196fd_72_1675401828-1441248406324.jpg"
    },
    {
        id: 39,
        description: "Kids' Fleece Lined Jacket",
        actualPrice: 3800,
        discountPrice: 3200,
        belongs: "kids",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/11.Footwear.png"
    },
    {
        id: 40,
        description: "Fresh Design Logo Cap",
        actualPrice: 2000,
        discountPrice: 1500,
        belongs: "fresh_design",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/12.Winter-Wear.png"

    },
];

export default garmentsArray