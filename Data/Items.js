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


const topTrendingItems = [
    {
        id: 1,
        description: "East Line-Women White Embroidered Two Piece Stitched",
        actualPrice: 4400,
        discountPrice: 3000,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082023/hrw07107_1692967758-865801496836.jpg"

    },
    {
        id: 2,
        description: "East Line-Women Purple Solid Two Piece Stitched",
        actualPrice: 2900,
        discountPrice: 2000,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082023/hrw04840_1692961315-879913478986.jpg"

    },
    {
        id: 3,
        description: "East Line-Women Black Two Piece Stitched",
        actualPrice: 2400,
        discountPrice: 2000,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082023/iqra-262_1692868286-865209791961.jpg"

    },
    {
        id: 4,
        description: "East Line-Women Maroon Embroidered Two Piece Stitched",
        actualPrice: 3900,
        discountPrice: 3000,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/31072023/hrw06955_1689684940-652293459496.jpg"

    },
    {
        id: 5,
        description: "East Line-Women Maroon Embroidered Two Piece Stitched",
        actualPrice: 3800,
        discountPrice: 3000,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/05082023/hrw07270_1691216532-624259034996.jpg"

    },
    {
        id: 6,
        description: "East Line-Women Maroon Embroidered Two Piece Stitched",
        actualPrice: 3900,
        discountPrice: 3000,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/05082023/hrw06783_1689686813-1360762546527.jpg"

    },
    {
        id: 7,
        description: "East Line-Women Maroon Embroidered Two Piece Stitched",
        actualPrice: 3000,
        discountPrice: 2800,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/01082023/hrw06877_1689686863-1320087837699.jpg"

    },
    {
        id: 8,
        description: "East Line-Women Maroon Embroidered Two Piece Stitched",
        actualPrice: 3000,
        discountPrice: 2900,
        belongs: "womens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/31072023/hrw06869_1690804628-315408553103.jpg"

    },
    {
        id: 9,
        description: "Men's Long Sleeve Compression Shirt",
        actualPrice: 1479,
        discountPrice: 1390,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25072023/14_1690282545-883789137839.jpg"

    },
    {
        id: 10,
        description: "Men's Long Sleeve Compression Shirt",
        actualPrice: 1700,
        discountPrice: 1390,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25072023/1_1690282719-1036346692221.jpg"

    },
    {
        id: 11,
        description: "Short Sleeve Compression Shirt",
        actualPrice: 1400,
        discountPrice: 1390,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25072023/6-1_1690282873-776030546829.jpg"

    },
    {
        id: 12,
        description: "Short Sleeve Compression Shirt",
        actualPrice: 1590,
        discountPrice: 1340,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25072023/11_1690282478-1280322477300.jpg"

    },
    {
        id: 13,
        description: "Short Sleeve Compression Shirt",
        actualPrice: 1650,
        discountPrice: 1580,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25072023/8_1690282573-958083286639.jpg"

    },
    {
        id: 14,
        description: "West Line Men Skin Tee Shirt",
        actualPrice: 1800,
        discountPrice: 1580,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25072023/3_1690282606-1322750710098.jpg"
    },
    {
        id: 15,
        description: "West Line Men Skin Tee Shirt",
        actualPrice: 1900,
        discountPrice: 1580,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/03052023/ad-bt-02-skin-1_1683097395-533335522532.jpg"
    },
    {
        id: 16,
        description: "West Line Men Skin Tee Shirt",
        actualPrice: 1600,
        discountPrice: 1300,
        belongs: "mens",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/11052023/371_1683528888_64589cb836924_26_1675408874-1612425162120.jpg"
    },
    {
        id: 17,
        description: "Yellow-Bee Girls Dark Blue Denim Pants",
        actualPrice: 800,
        discountPrice: 790,
        belongs: "girls",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12112022/13565_462_1668242044_636f5a7c69cdd-529915238360.jpg"
    },
    {
        id: 18,
        description: "Yellow Bee Girls One Piece Stitched Light Green Garara",
        actualPrice: 1600,
        discountPrice: 1500,
        belongs: "girls",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/22062022/19708_560_1650350882_625e5b2200996-1270211558623.jpg"
    },
    {
        id: 19,
        description: "Yellow Bee Kids Western Summer Dress",
        actualPrice: 1700,
        discountPrice: 1500,
        belongs: "girls",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28072022/16789_177_1648725221_62458ce56530d-430730381514.jpg"
    },
    {
        id: 20,
        description: "Tasche Girls Brown Handbag",
        actualPrice: 1700,
        discountPrice: 1500,
        belongs: "girls",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/26062023/ed043-tsh-brown-1_1687769520-436616395414.jpg"
    },
    {
        id: 21,
        description: "Yellow-Bee Boys Blue Full Sleeve Shir",
        actualPrice: 1700,
        discountPrice: 1500,
        belongs: "boys",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/18042023/hrw02160_1681549924-222080148409.jpg"
    },
    {
        id: 22,
        description: "Yellow-Bee Boys Blue Full Sleeve Shir",
        actualPrice: 1700,
        discountPrice: 1500,
        belongs: "boys",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/18042023/hrw02507_1681549885-570265811600.jpg"
    },
    {
        id: 23,
        description: "Yellow-Bee Boys Blue Full Sleeve Shir",
        actualPrice: 700,
        discountPrice: 600,
        belongs: "boys",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/18042023/hrw01891_1681549866-1166001049530.jpg"
    },
    {
        id: 24,
        description: "Yellow Bee Boys Stitched One Piece Kurta",
        actualPrice: 1200,
        discountPrice: 1000,
        belongs: "boys",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/09052022/12924_268_1650372611_625eb0031983f-99129179406.jpg"
    },
    {
        id: 25,
        description: "Beauty Uk Photo.Ready Foundation No.6 (Tan)",
        actualPrice: 4000,
        discountPrice: 3500,
        belongs: "beauty",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/24082023/screenshot-2023-08-24-120323_1692860652-548151275725.jpg"
    },
    {
        id: 25,
        description: "Beauty Uk Matte Fx Foundation - No-4 (Honey)",
        actualPrice: 5000,
        discountPrice: 3590,
        belongs: "beauty",
        imgurl: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/24082023/screenshot-2023-08-24-122812_1692862103-565694668693.jpg"
    },
]


export { garmentsArray, topTrendingItems };
