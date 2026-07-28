// 9-Category Directory Data - From Excel (91 subdirs, 970 items)
var directoryData = {
  "movies": {
    name: "全球重磅电影合集",
    icon: "🎬",
    route: "cat-movies",
    subgroups: [
      {
        name: "World Rankings",
        nameCn: "世界电影权威排名",
        items: [
          {name: "豆瓣电影Top250原盘", size: "13.83TB", spec: "蓝光ISO"},
          {name: "IMDb Top250", size: "2.09TB", spec: "蓝光"},
          {name: "全球电影史销售TOP100", size: "1.66TB", spec: "合集"},
          {name: "奥斯卡最佳影片合集（96届）", size: "16.15TB", spec: "蓝光ISO"},
          {name: "巴拿马电影节金棕榈奖（70部）", size: "3.34TB", spec: "蓝光ISO"},
          {name: "韩国影史百佳电影合集", size: "1.58TB", spec: ""},
          {name: "人生必看的100部电影", size: "1.28TB", spec: ""},
          {name: "豆瓣高分热门电影大全（1749部）", size: "6.26TB", spec: ""}
        ]
      },
      {
        name: "Premium DIY Collection",
        nameCn: "顶级DIY收藏版",
        items: [
          {name: "SGNB特效字幕4K原盘合集（563部）", size: "26.52TB", spec: "UHD蓝光ISO"},
          {name: "至尊宝DIY视觉原盘合集（452部）", size: "16.81TB", spec: "蓝光ISO"},
          {name: "LGNB MKV封装合集", size: "58TB", spec: "42"},
          {name: "LGNB大神顶级MKV合集", size: "15TB", spec: "MKV"},
          {name: "LGNB IMAX合集", size: "1.49TB", spec: "IMAX"},
          {name: "Athena（雅典娜）DIY合集", size: "2.76TB", spec: "UHD蓝光ISO"},
          {name: "HDSky ISO原盘合集", size: "71.93TB", spec: "蓝光ISO"},
          {name: "星星(HDSky&CHD)合集", size: "5.39TB", spec: ""},
          {name: "Sunny特效字幕合集", size: "7.13TB", spec: ""},
          {name: "BHYS DIY合集", size: "20.64TB", spec: ""},
          {name: "BluCook DIY合集", size: "20.18TB", spec: ""}
        ]
      },
      {
        name: "UHD & Blu-ray Originals",
        nameCn: "UHD / Blu-ray 原盘馆",
        items: [
          {name: "UHD原盘ISO合集", size: "171TB", spec: "UHD蓝光ISO"},
          {name: "UHD原盘ISO（2500张）", size: "144.46TB", spec: "UHD蓝光ISO"},
          {name: "UHD原盘已刮削", size: "138.48TB", spec: ""},
          {name: "蓝光原盘已刮削", size: "430.44TB", spec: ""},
          {name: "蓝光原盘合集", size: "601.97TB", spec: ""},
          {name: "经典蓝光原盘大包", size: "604TB", spec: ""},
          {name: "ISO原盘电影合集", size: "660TB", spec: ""},
          {name: "蓝光原盘+蓝光压制合集", size: "1.62PB", spec: ""}
        ]
      },
      {
        name: "REMUX Collection",
        nameCn: "REMUX无损电影馆",
        items: [
          {name: "REMUX电影合集（2270+）", size: "120TB", spec: ""},
          {name: "无损REMUX电影合集", size: "101.32TB", spec: ""},
          {name: "4K REMUX合集", size: "40TB", spec: ""},
          {name: "蓝光REMUX合集", size: "28.6TB", spec: ""},
          {name: "电影资源库REMUX", size: "28TB", spec: ""},
          {name: "爱影REMUX", size: "12.12TB", spec: ""},
          {name: "老K REMUX电影剧集合集", size: "86.85TB", spec: ""},
          {name: "2267部2160P REMUX(FGT)", size: "120TB", spec: ""}
        ]
      },
      {
        name: "Chinese Cinema",
        nameCn: "华语电影馆",
        items: [
          {name: "华语电影①", size: "49TB", spec: ""},
          {name: "华语电影②", size: "149TB", spec: ""},
          {name: "华语电影1927-2023", size: "26.12TB", spec: ""},
          {name: "ADC华语DVD原盘（730部）", size: "3.6TB", spec: ""},
          {name: "港片视觉原盘（669部）", size: "16TB", spec: ""},
          {name: "音港粤语视觉合集（1242部）", size: "16TB", spec: ""},
          {name: "香港经典视觉原盘", size: "5TB", spec: ""},
          {name: "粤语电影合集", size: "15TB", spec: ""}
        ]
      },
      {
        name: "World Cinema",
        nameCn: "世界电影馆",
        items: [
          {name: "外语电影合集", size: "297TB", spec: ""},
          {name: "韩国蓝光原盘（464部）", size: "16.57TB", spec: ""},
          {name: "台湾电影合集", size: "5.43TB", spec: ""},
          {name: "印度电影合集", size: "3.9TB", spec: ""},
          {name: "亚洲1080P电影合集", size: "9.33TB", spec: ""}
        ]
      },
      {
        name: "Directors & Legends",
        nameCn: "导演/演员馆",
        items: [
          {name: "成龙作品合集", size: "1.48TB", spec: ""},
          {name: "李连杰作品合集", size: "1.32TB", spec: ""},
          {name: "周星驰视觉合集", size: "1.05TB", spec: ""},
          {name: "李安作品合集", size: "998GB", spec: ""},
          {name: "北野武作品合集", size: "886GB", spec: ""},
          {name: "贾樟柯作品合集", size: "176GB", spec: ""},
          {name: "梁朝伟作品合集", size: "1.7TB", spec: ""},
          {name: "刘德华电影合集", size: "426GB", spec: ""},
          {name: "李小龙合集", size: "652GB", spec: ""},
          {name: "林正英合集", size: "847GB", spec: ""},
          {name: "甄子丹合集", size: "733GB", spec: ""},
          {name: "汤姆·汉克斯合集", size: "1.28TB", spec: ""},
          {name: "罗素·克劳合集", size: "624GB", spec: ""},
          {name: "斯嘉丽合集", size: "441GB", spec: ""},
          {name: "大卫·林奇 REMUX合集", size: "936GB", spec: ""},
          {name: "杜琪峰合集", size: "1.8TB", spec: ""},
          {name: "冯小刚合集", size: "3.6TB", spec: ""},
          {name: "克林特·伊斯特伍德合集", size: "2.68TB", spec: ""},
          {name: "黄秋生合集", size: "781GB", spec: ""},
          {name: "布鲁斯·威利斯合集", size: "1.56TB", spec: ""},
          {name: "梅尔·吉布森合集", size: "1.32TB", spec: ""}
        ]
      },
      {
        name: "Franchise Collection",
        nameCn: "系列电影馆",
        items: [
          {name: "漫威电影合集", size: "2.79TB", spec: ""},
          {name: "DC电影合集", size: "2.22TB", spec: ""},
          {name: "007全集", size: "1.2TB", spec: "超高清蓝光ISO"},
          {name: "哈利波特全集收藏版", size: "628GB", spec: ""},
          {name: "星球大战系列", size: "1.46TB", spec: ""},
          {name: "午夜凶铃系列", size: "216GB", spec: ""},
          {name: "邵氏电影合集", size: "8.66TB", spec: ""},
          {name: "邵氏经典合集", size: "2.61TB", spec: ""},
          {name: "邵氏美欧套装", size: "2.30TB", spec: ""}
        ]
      },
      {
        name: "Special Collection",
        nameCn: "专题电影馆",
        items: [
          {name: "战争电影", size: "13.09TB", spec: ""},
          {name: "灾难电影", size: "10.07TB", spec: ""},
          {name: "全球灾难电影TOP30", size: "2TB", spec: ""},
          {name: "恐怖电影TOP100", size: "4.72TB", spec: ""},
          {name: "丧尸电影TOP100", size: "3.91TB", spec: ""},
          {name: "文艺电影合集", size: "8.97TB", spec: ""},
          {name: "励志治愈电影", size: "3.82TB", spec: ""},
          {name: "同性题材电影", size: "9.38TB", spec: ""},
          {name: "意外结局电影", size: "1.13TB", spec: ""},
          {name: "现代军事电影", size: "1.53TB", spec: ""}
        ]
      },
      {
        name: "Annual Selection",
        nameCn: "年度电影精选",
        items: [
          {name: "2021年豆瓣年度榜单", size: "830GB", spec: ""},
          {name: "2022年豆瓣年度榜单", size: "1.51TB", spec: ""},
          {name: "BBC2024年度20佳", size: "1.54TB", spec: ""},
          {name: "IMDb2024年度20佳", size: "2.58TB", spec: ""},
          {name: "TIME2024年度10佳", size: "563.97GB", spec: ""},
          {name: "FC2024年度20佳", size: "592.35GB", spec: ""},
          {name: "NYT2024年度10佳", size: "431GB", spec: ""},
          {name: "《经济学人》2024年度15佳", size: "1.38TB", spec: ""},
          {name: "2024年最佳电影合集", size: "2.91TB", spec: ""},
          {name: "2025电影合集", size: "6.49TB", spec: ""}
        ]
      },
      {
        name: "Classic Cinema",
        nameCn: "老电影与经典修复",
        items: [
          {name: "老电影1100部", size: "2.14TB", spec: ""},
          {name: "1905老电影合集", size: "992GB", spec: ""},
          {name: "上海译制经典合集", size: "754GB", spec: ""},
          {name: "CCTV6电影合集", size: "3.67TB", spec: ""},
          {name: "全国24家电影制片厂合集", size: "2.31TB", spec: ""},
          {name: "高仓健电影合集", size: "1.03TB", spec: ""}
        ]
      },
      {
        name: "Animation & Streaming",
        nameCn: "动画·流媒体",
        items: [
          {name: "动画电影1000部", size: "9.7TB", spec: ""},
          {name: "Netflix资源合集", size: "21.91TB", spec: ""},
          {name: "动漫原盘合集", size: "40.49TB", spec: ""},
          {name: "美剧合集（FRDS）", size: "10.32TB", spec: ""},
          {name: "TVB GoTV合集", size: "28.28TB", spec: ""},
          {name: "高清翡翠台合集", size: "18.7TB", spec: ""}
        ]
      },
      {
        name: "Home Theater Demo",
        nameCn: "演示/家庭影院专区",
        items: [
          {name: "杜比视界教程碟", size: "645GB", spec: ""},
          {name: "4K演示测试片合集", size: "1.29TB", spec: ""},
          {name: "家庭影院测试合集", size: "591GB", spec: ""},
          {name: "IMAX演示合集", size: "1.35TB", spec: ""},
          {name: "杜比视界电影合集", size: "2.15TB", spec: ""}
        ]
      },
      {
        name: "Mega Library",
        nameCn: "超级资源库",
        items: [
          {name: "超级影视资源合集", size: "2224TB", spec: ""},
          {name: "BD-ISO资源库", size: "2.24PB", spec: ""},
          {name: "电影大包", size: "120TB", spec: ""},
          {name: "570TB无重复电影库", size: "570TB", spec: ""},
          {name: "ISO原盘影视资源合集", size: "134.84TB", spec: ""},
          {name: "新汇总十四", size: "1.58TB", spec: ""},
          {name: "野兽系列合集", size: "4.7TB", spec: ""}
        ]
      }
    ]
  },
  "tv": {
    name: "全球电视剧合集",
    icon: "📺",
    route: "cat-tv",
    subgroups: [
      {
        name: "全球经典榜单",
        nameCn: "全球经典榜单",
        items: [
          {name: "全球精品电视剧TOP100", size: "8.72TB", spec: ""},
          {name: "国产电视剧精选100部", size: "6.31TB", spec: ""},
          {name: "Netflix 高朋满座", size: "5.94TB", spec: ""},
          {name: "HBO 神剧合集", size: "7.65TB", spec: ""},
          {name: "Apple TV+ 聚集精品", size: "4.22TB", spec: ""},
          {name: "迪士尼+精品聚集", size: "4.05TB", spec: ""}
        ]
      },
      {
        name: "国产电视剧合集",
        nameCn: "国产电视剧合集",
        items: [
          {name: "国产剧已整理（已刮削）", size: "112.79TB", spec: ""},
          {name: "国产电视剧合集", size: "77.49TB", spec: ""},
          {name: "高清国产连续剧（3869部）", size: "8.43TB", spec: ""},
          {name: "爱奇艺迷雾剧场（4K WEB）", size: "1.36TB", spec: ""},
          {name: "X播放（4K WEB）", size: "464GB", spec: ""},
          {name: "国产抗日剧合集", size: "2.19TB", spec: ""},
          {name: "琼剧瑶合集", size: "4.48TB", spec: ""}
        ]
      },
      {
        name: "电视剧欧美合集",
        nameCn: "电视剧欧美合集",
        items: [
          {name: "欧美剧已削削", size: "130TB", spec: ""},
          {name: "欧美剧（按年份整理）", size: "120TB", spec: ""},
          {name: "欧美剧蓝光原盘", size: "23.30TB", spec: ""},
          {name: "Netflix海外剧", size: "5.03TB", spec: ""},
          {name: "LeagueNF WEB", size: "8.68TB", spec: ""}
        ]
      },
      {
        name: "港台电视剧合集",
        nameCn: "港台电视剧合集",
        items: [
          {name: "港台剧+日韩剧+国外剧（蓝光原盘）", size: "116.47TB", spec: ""},
          {name: "TVB电视剧合集", size: "73TB", spec: ""},
          {name: "GO TV TVB合集", size: "28.28TB", spec: ""},
          {name: "高清翡翠台合集", size: "18.70TB", spec: ""},
          {name: "MYTVSUPER", size: "33.07TB", spec: ""},
          {name: "港剧国语合集", size: "17.55TB", spec: ""},
          {name: "亚视亚洲电视经典", size: "12.86TB", spec: ""},
          {name: "壹高清港剧", size: "2.47TB", spec: ""}
        ]
      },
      {
        name: "日韩电视剧合集",
        nameCn: "日韩电视剧合集",
        items: [
          {name: "韩国电视剧", size: "9.95TB", spec: ""},
          {name: "韩剧合集", size: "63TB", spec: ""},
          {name: "韩剧资源包", size: "44.73TB", spec: ""},
          {name: "UHDTV 4K 60帧韩剧", size: "19.91TB", spec: ""},
          {name: "韩剧合集（二）", size: "16.92TB", spec: ""},
          {name: "韩剧国配影视剧", size: "11.72TB", spec: ""},
          {name: "韩剧汇总", size: "9.21TB", spec: ""}
        ]
      },
      {
        name: "日本电视剧",
        nameCn: "日本电视剧",
        items: [
          {name: "日剧蓝光原盘", size: "8TB", spec: ""},
          {name: "日韩剧合集", size: "24TB", spec: ""},
          {name: "台湾电视剧", size: "7.41TB", spec: ""},
          {name: "台剧合集", size: "24TB", spec: ""},
          {name: "KKTV电视剧合集", size: "11.58TB", spec: ""}
        ]
      },
      {
        name: "泰国电视剧",
        nameCn: "泰国电视剧",
        items: [
          {name: "泰剧精选", size: "3.15TB", spec: ""}
        ]
      },
      {
        name: "流媒体剧集合集",
        nameCn: "流媒体剧集合集",
        items: [
          {name: "Netflix 剧集合集", size: "22.63TB", spec: ""},
          {name: "Disney+", size: "12.34TB", spec: ""},
          {name: "Apple TV+", size: "9.97TB", spec: ""},
          {name: "HBO", size: "14.82TB", spec: ""},
          {name: "我们", size: "1.36TB", spec: ""},
          {name: "4K WEB 热烈庆祝", size: "745GB", spec: ""}
        ]
      },
      {
        name: "高码率热烈",
        nameCn: "高码率热烈",
        items: [
          {name: "高码剧合集", size: "126TB", spec: ""},
          {name: "高码剧合集（二）", size: "27.44TB", spec: ""},
          {name: "热烈原盘", size: "23TB", spec: ""},
          {name: "已刮削电视剧", size: "66TB", spec: ""},
          {name: "烧包电视剧", size: "31.12TB", spec: ""}
        ]
      },
      {
        name: "特摄·动漫",
        nameCn: "特摄·动漫",
        items: [
          {name: "奥特曼蓝光原盘", size: "6.93TB", spec: ""},
          {name: "奥特曼国语全集", size: "946GB", spec: ""},
          {name: "VCB压制番剧", size: "638GB", spec: ""}
        ]
      }
    ]
  },
  "anime": {
    name: "全球动漫排行榜·精选合集",
    icon: "🎌",
    route: "cat-anime",
    subgroups: [
      {
        name: "动漫必看合集（400TB）",
        nameCn: "动漫必看合集（400TB）",
        items: [
          {name: "动漫资源总库", size: "40TB", spec: ""},
          {name: "完结国漫合集", size: "2.93TB", spec: ""},
          {name: "龙珠全系列合集", size: "3.5TB", spec: ""},
          {name: "皮克斯动画系列", size: "1.16TB", spec: ""},
          {name: "皮克斯迪士尼系列", size: "3.72TB", spec: ""},
          {name: "宫崎骏动画全集", size: "664GB", spec: ""},
          {name: "儿童影视库", size: "458GB", spec: ""}
        ]
      },
      {
        name: "日本动漫专区",
        nameCn: "日本动漫专区",
        items: [
          {name: "海贼王（更新至1152集）", size: "9.87TB", spec: ""},
          {name: "火影忍者全集（剧场版+TV）", size: "11.46TB", spec: ""},
          {name: "蜡笔小新（日版原盘1993-2023）", size: "1TB", spec: ""},
          {name: "哆啦A梦剧场版（视觉REMUX）", size: "7.05TB", spec: ""},
          {name: "名侦探柯南剧场版", size: "8.68TB", spec: ""},
          {name: "龙珠全系列", size: "4.28TB", spec: ""},
          {name: "进击的巨人（已整理可削削）", size: "826GB", spec: ""},
          {name: "鬼灭之刃（TV+剧场版）", size: "7.59TB", spec: ""},
          {name: "一拳超人", size: "4.31TB", spec: ""},
          {name: "JOJO的奇妙冒险", size: "6.48TB", spec: ""},
          {name: "灌篮高手", size: "5.36TB", spec: ""},
          {name: "银魂", size: "8.15TB", spec: ""},
          {name: "新世纪福音战士", size: "6.14TB", spec: ""},
          {name: "EVA新剧场版", size: "5.07TB", spec: ""}
        ]
      },
      {
        name: "国漫专区",
        nameCn: "国漫专区",
        items: [
          {name: "完结国漫合集", size: "3.3TB", spec: ""},
          {name: "熊出没电影系列", size: "1.68TB", spec: ""},
          {name: "熊出没电视剧", size: "3.39TB", spec: ""},
          {name: "喜羊羊与灰太狼", size: "4.06TB", spec: ""},
          {name: "虹猫蓝兔七侠传", size: "34.48GB", spec: ""},
          {name: "哪吒系列", size: "748GB", spec: ""},
          {name: "大闹天宫", size: "326GB", spec: ""},
          {name: "大圣归来", size: "892GB", spec: ""}
        ]
      },
      {
        name: "欧美动画专区",
        nameCn: "欧美动画专区",
        items: [
          {name: "皮克斯动画系列", size: "1.16TB", spec: ""},
          {name: "迪士尼动画系列", size: "9.73TB", spec: ""},
          {name: "冰河世纪", size: "3.26TB", spec: ""},
          {name: "怪物电力公司", size: "2.38TB", spec: ""},
          {name: "玩具总动员", size: "4.15TB", spec: ""},
          {name: "疯狂动物城", size: "1.42TB", spec: ""},
          {name: "功夫熊猫", size: "2.87TB", spec: ""},
          {name: "驯龙高手", size: "3.16TB", spec: ""},
          {name: "神偷奶爸", size: "2.31TB", spec: ""},
          {name: "小黄人", size: "2.08TB", spec: ""},
          {name: "侠蜘蛛：平行宇宙", size: "3.84TB", spec: ""}
        ]
      },
      {
        name: "动画电影专区",
        nameCn: "动画电影专区",
        items: [
          {name: "动画电影白集", size: "400TB", spec: ""},
          {name: "动漫电影资源库", size: "40TB", spec: ""},
          {name: "动画电影合集", size: "17.26TB", spec: ""},
          {name: "剧场版合集", size: "12.78TB", spec: ""},
          {name: "蓝光R", size: "5.49TB", spec: ""},
          {name: "UHD动画电影合集", size: "22.89TB", spec: ""}
        ]
      },
      {
        name: "经典IP专区",
        nameCn: "经典IP专区",
        items: [
          {name: "海贼王", size: "9.06TB", spec: ""},
          {name: "火影忍者", size: "10.28TB", spec: ""},
          {name: "龙珠", size: "7.35TB", spec: ""},
          {name: "哆啦A梦", size: "6.59TB", spec: ""},
          {name: "蜡笔小新", size: "5.48TB", spec: ""},
          {name: "名侦探柯南", size: "11.76TB", spec: ""},
          {name: "EVA", size: "7.04TB", spec: ""},
          {name: "JOJO", size: "7.93TB", spec: ""},
          {name: "鬼灭之刃", size: "9.58TB", spec: ""},
          {name: "进击的巨人", size: "6.96TB", spec: ""},
          {name: "熊出没", size: "4.83TB", spec: ""},
          {name: "喜羊羊", size: "4.35TB", spec: ""},
          {name: "奥特曼", size: "10.14TB", spec: ""},
          {name: "假面骑士", size: "8.79TB", spec: ""}
        ]
      },
      {
        name: "连载更新专区",
        nameCn: "连载更新专区",
        items: [
          {name: "（这一部分全部放更新中的资源）", size: "1.74TB", spec: ""},
          {name: "海贼王（更新至1152集）", size: "4.82TB", spec: ""},
          {name: "魔王学院的不定任者Ⅱ", size: "920GB", spec: ""},
          {name: "猫眼三姐妹", size: "760GB", spec: ""},
          {name: "地狱乐", size: "1.23TB", spec: ""},
          {name: "镇魂街", size: "1.68TB", spec: ""},
          {name: "魔术师库洛普西", size: "840GB", spec: ""},
          {name: "火喰鸟", size: "650GB", spec: ""},
          {name: "炎炎消防队", size: "1.92TB", spec: ""},
          {name: "小公主苏菲亚", size: "2.75TB", spec: ""},
          {name: "奶龙", size: "620GB", spec: ""},
          {name: "波西和皮普", size: "580GB", spec: ""},
          {name: "兔兔4K动画", size: "1.36TB", spec: ""},
          {name: "寻家", size: "870GB", spec: ""}
        ]
      },
      {
        name: "特摄专区",
        nameCn: "特摄专区",
        items: [
          {name: "奥特曼全系列", size: "12.78TB", spec: ""},
          {name: "假面骑士全系列", size: "9.96TB", spec: ""},
          {name: "超级战队", size: "3.35TB", spec: ""},
          {name: "哥斯拉动画", size: "2.84TB", spec: ""}
        ]
      },
      {
        name: "高清原盘专区",
        nameCn: "高清原盘专区",
        items: [
          {name: "蓝光原盘", size: "18.72TB", spec: ""},
          {name: "重混", size: "11.95TB", spec: ""},
          {name: "超高清合集", size: "15.16TB", spec: ""},
          {name: "ISO原盘", size: "12.47TB", spec: ""},
          {name: "已修剪刮削版", size: "9.94TB", spec: ""}
        ]
      }
    ]
  },
  "variety": {
    name: "全球综艺·短剧合集",
    icon: "🎭",
    route: "cat-variety",
    subgroups: [
      {
        name: "国内艺术专区",
        nameCn: "国内艺术专区",
        items: [
          {name: "整理综艺大合集（一周）", size: "21.9TB", spec: ""},
          {name: "国内综艺包", size: "8.35TB", spec: ""},
          {name: "综艺合集", size: "1.12TB", spec: ""},
          {name: "爸爸去哪儿（全季）", size: "1.46TB", spec: ""},
          {name: "我是歌手（全系列）", size: "2.18TB", spec: ""},
          {name: "天赐的声音（更新至S06）", size: "1.16TB", spec: ""},
          {name: "闪亮的日子（更新至S0", size: "890GB", spec: ""},
          {name: "奔跑吧（2025）", size: "1.27TB", spec: ""},
          {name: "哈哈（2020-）", size: "1.69TB", spec: ""},
          {name: "喜剧之王单口季", size: "746GB", spec: ""},
          {name: "喜人奇妙夜（更新中）", size: "994GB", spec: ""},
          {name: "喜人奇妙夜第二季", size: "1.07TB", spec: ""},
          {name: "一饭封神", size: "668GB", spec: ""},
          {name: "三星营养午餐", size: "572GB", spec: ""},
          {name: "康熙来了", size: "2.29TB", spec: ""},
          {name: "舌尖上的中国（四季）", size: "1.18TB", spec: ""},
          {name: "中国318个5A级景区视频讲解+185个航拍", size: "2.71TB", spec: ""},
          {name: "港台综艺", size: "1.78TB", spec: ""},
          {name: "花儿与少年（2014年至今）", size: "1.36TB", spec: ""},
          {name: "创营亚洲（2024）", size: "976GB", spec: ""},
          {name: "火星情报局（2016-）", size: "1.68TB", spec: ""}
        ]
      },
      {
        name: "国外综艺专区",
        nameCn: "国外综艺专区",
        items: [
          {name: "网飞Netflix高分综艺包", size: "26.32TB", spec: ""},
          {name: "单身即地狱（1-4季）", size: "894GB", spec: ""},
          {name: "爱情盲选：德国篇", size: "446GB", spec: ""},
          {name: "野兽游戏第二季", size: "408GB", spec: ""},
          {name: "郭德纲30年相声专场（海外版）", size: "742GB", spec: ""}
        ]
      },
      {
        name: "晚会盛典专区",
        nameCn: "晚会盛典专区",
        items: [
          {name: "央视春晚合集（1983-2024）", size: "4.57TB", spec: ""},
          {name: "2025年中央广播电视总台春节联欢晚会", size: "420GB", spec: ""},
          {name: "2025各地卫视春晚合集", size: "2.26TB", spec: ""},
          {name: "哔哩哔哩跨年晚会（2025）", size: "1.63TB", spec: ""}
        ]
      },
      {
        name: "音乐演出专区",
        nameCn: "音乐演出专区",
        items: [
          {name: "我是歌手（全系列）", size: "2.18TB", spec: ""},
          {name: "郭德纲30周年相声专场", size: "1.38TB", spec: ""},
          {name: "哈哈演唱会", size: "1.19TB", spec: ""},
          {name: "演唱会资源合集（后续扩展）", size: "1.12TB", spec: ""}
        ]
      },
      {
        name: "体育赛事专区",
        nameCn: "体育赛事专区",
        items: [
          {name: "NBA总决赛（1991-2020）", size: "698GB", spec: ""},
          {name: "赛事世界杯合集（工件）", size: "576GB", spec: ""},
          {name: "奥运赛事合集（筹备）", size: "384GB", spec: ""}
        ]
      },
      {
        name: "真人秀专区",
        nameCn: "真人秀专区",
        items: [
          {name: "爸爸去哪儿", size: "1.46TB", spec: ""},
          {name: "奔跑吧", size: "1.27TB", spec: ""},
          {name: "花儿与少年", size: "1.36TB", spec: ""},
          {name: "创造营亚洲", size: "976GB", spec: ""},
          {name: "火星情报局", size: "1.68TB", spec: ""},
          {name: "哈哈", size: "1.69TB", spec: ""},
          {name: "单身即地狱", size: "894GB", spec: ""},
          {name: "爱情盲选", size: "645GB", spec: ""}
        ]
      },
      {
        name: "美食旅行",
        nameCn: "美食旅行",
        items: [
          {name: "舌尖上的中国", size: "1.18TB", spec: ""},
          {name: "中国318个5A级站点视频", size: "2.71TB", spec: ""},
          {name: "康熙来了（美食精选）", size: "816GB", spec: ""},
          {name: "花儿与少年", size: "1.36TB", spec: ""}
        ]
      },
      {
        name: "短剧专区",
        nameCn: "短剧专区",
        items: [
          {name: "爽剧合集73部（英文短剧《我是上狗我爱看》）", size: "654GB", spec: "3"},
          {name: "短剧资源合集（持续更新）", size: "612GB", spec: ""},
          {name: "热门短剧合集1000部", size: "1.3TB", spec: ""}
        ]
      },
      {
        name: "精品专题专区",
        nameCn: "精品专题专区",
        items: [
          {name: "爽剧大合集", size: "5.96TB", spec: ""},
          {name: "热门短剧1000部", size: "4.26TB", spec: ""},
          {name: "港台综艺精选", size: "2.58TB", spec: ""},
          {name: "Netflix精品综艺", size: "4.37TB", spec: ""},
          {name: "春晚合集", size: "2.34TB", spec: ""},
          {name: "演唱会合集", size: "2.89TB", spec: ""}
        ]
      }
    ]
  },
  "concert": {
    name: "全球演唱会合集（Concert Collection",
    icon: "🎤",
    route: "cat-concert",
    subgroups: [
      {
        name: "官方演唱会原盘合集",
        nameCn: "官方演唱会原盘合集",
        items: [
          {name: "演唱会原盘", size: "820TB", spec: ""},
          {name: "演唱会合集", size: "7.5TB", spec: ""},
          {name: "演唱会", size: "58TB", spec: ""},
          {name: "演唱会原盘", size: "90.9TB", spec: ""},
          {name: "演唱会蓝光原盘", size: "9.54TB", spec: ""},
          {name: "华语乐坛演唱会", size: "13TB", spec: ""},
          {name: "港台歌手演唱会", size: "2.55TB", spec: ""},
          {name: "C AllStar合集（2021）", size: "346GB", spec: ""},
          {name: "C AllStar合集（2017）", size: "308GB", spec: ""}
        ]
      },
      {
        name: "华语演唱会",
        nameCn: "华语演唱会",
        items: [
          {name: "按歌手排序：", size: "136GB", spec: ""},
          {name: "蔡依林", size: "3.82TB", spec: ""},
          {name: "张学友", size: "6.75TB", spec: ""},
          {name: "周杰伦", size: "8.96TB", spec: ""},
          {name: "五月天", size: "7.43TB", spec: ""},
          {name: "张敬轩", size: "4.28TB", spec: ""},
          {name: "陈奕迅", size: "7.62TB", spec: ""},
          {name: "刘德华", size: "5.36TB", spec: ""},
          {name: "张国荣", size: "3.75TB", spec: ""},
          {name: "谭咏麟", size: "4.12TB", spec: ""},
          {name: "林子祥", size: "2.86TB", spec: ""},
          {name: "梅艳芳", size: "3.25TB", spec: ""},
          {name: "黎明", size: "2.94TB", spec: ""},
          {name: "郭富城", size: "3.18TB", spec: ""},
          {name: "王菲", size: "5.63TB", spec: ""},
          {name: "莫文蔚", size: "2.72TB", spec: ""},
          {name: "容祖儿", size: "2.36TB", spec: ""},
          {name: "Twins", size: "2.15TB", spec: ""},
          {name: "杨千嬅", size: "2.48TB", spec: ""},
          {name: "古巨基", size: "1.96TB", spec: ""},
          {name: "李克勤", size: "2.27TB", spec: ""},
          {name: "郑秀文", size: "3.05TB", spec: ""},
          {name: "梁静茹", size: "2.61TB", spec: ""},
          {name: "邓紫棋", size: "3.42TB", spec: ""},
          {name: "林俊杰", size: "4.85TB", spec: ""},
          {name: "陶喆", size: "2.19TB", spec: ""},
          {name: "林忆莲", size: "2.73TB", spec: ""},
          {name: "张信哲", size: "2.06TB", spec: ""},
          {name: "张惠妹", size: "3.28TB", spec: ""},
          {name: "伍佰", size: "2.65TB", spec: ""},
          {name: "许冠杰", size: "1.84TB", spec: ""},
          {name: "Beyond", size: "3.76TB", spec: ""},
          {name: "草蜢", size: "1.62TB", spec: ""},
          {name: "温拿", size: "1.48TB", spec: ""}
        ]
      },
      {
        name: "日韩演唱会",
        nameCn: "日韩演唱会",
        items: [
          {name: "滨崎步", size: "7.36TB", spec: ""},
          {name: "安室奈美惠", size: "6.82TB", spec: ""},
          {name: "宇多田光", size: "5.47TB", spec: ""},
          {name: "仓木麻衣", size: "4.29TB", spec: ""},
          {name: "中岛美嘉", size: "3.86TB", spec: ""},
          {name: "西野加奈", size: "3.15TB", spec: ""},
          {name: "MISIA", size: "2.94TB", spec: ""},
          {name: "LiSA", size: "3.68TB", spec: ""},
          {name: "Perfume", size: "2.72TB", spec: ""},
          {name: "BABYMETAL", size: "4.16TB", spec: ""},
          {name: "X JAPAN", size: "5.83TB", spec: ""},
          {name: "L'Arc~en~Ciel", size: "4.65TB", spec: ""},
          {name: "B'z", size: "8.27TB", spec: ""},
          {name: "GLAY", size: "3.52TB", spec: ""},
          {name: "Mr.Children", size: "6.38TB", spec: ""},
          {name: "Radwimps", size: "4.75TB", spec: ""},
          {name: "One OK Rock", size: "5.26TB", spec: ""},
          {name: "AKB48", size: "9.63TB", spec: ""},
          {name: "SKE48", size: "4.37TB", spec: ""},
          {name: "NMB48", size: "3.92TB", spec: ""},
          {name: "乃木坂46", size: "7.15TB", spec: ""},
          {name: "少女时代", size: "6.84TB", spec: ""},
          {name: "TWICE", size: "8.72TB", spec: ""},
          {name: "BLACKPINK", size: "9.16TB", spec: ""},
          {name: "Apink", size: "3.28TB", spec: ""},
          {name: "T-ARA", size: "4.65TB", spec: ""},
          {name: "BIGBANG", size: "7.93TB", spec: ""},
          {name: "BTS", size: "11.25TB", spec: ""},
          {name: "IU", size: "6.48TB", spec: ""},
          {name: "全部按照歌手排列。", size: "196GB", spec: ""},
          {name: "例如：", size: "46GB", spec: ""},
          {name: "滨崎步", size: "7.36TB", spec: ""},
          {name: "2006日本巡回", size: "46GB", spec: ""},
          {name: "2008-2009 Countdown", size: "52GB", spec: ""},
          {name: "2009-2010 Countdown", size: "48GB", spec: ""},
          {name: "2012 Arena Tour", size: "55GB", spec: ""},
          {name: "2014 Arena Tour", size: "51GB", spec: ""},
          {name: "2015 TA TOUR", size: "63GB", spec: ""},
          {name: "2016 Arena Tour", size: "58GB", spec: ""},
          {name: "2019-2020巡回", size: "72GB", spec: ""},
          {name: "Just the beginning", size: "45GB", spec: ""},
          {name: "Feel the Love", size: "39GB", spec: ""},
          {name: "...", size: "12GB", spec: ""},
          {name: "每个后部保留", size: "72GB", spec: ""},
          {name: "1080P蓝光原盘", size: "2.86TB", spec: ""},
          {name: "4K蓝光原盘", size: "3.42TB", spec: ""},
          {name: "容量", size: "246GB", spec: ""}
        ]
      },
      {
        name: "海外演唱会",
        nameCn: "海外演唱会",
        items: [
          {name: "Michael Jackson", size: "12.75TB", spec: ""},
          {name: "Madonna", size: "9.63TB", spec: ""},
          {name: "Lady Gaga", size: "7.28TB", spec: ""},
          {name: "Taylor Swift", size: "16.32TB", spec: ""},
          {name: "Coldplay", size: "11.86TB", spec: ""},
          {name: "Phil Collins", size: "4.25TB", spec: ""},
          {name: "Kraftwerk", size: "3.76TB", spec: ""},
          {name: "Tony Bennett", size: "2.94TB", spec: ""},
          {name: "Andrea Bocelli", size: "5.68TB", spec: ""},
          {name: "David Foster", size: "3.82TB", spec: ""},
          {name: "Hans Zimmer", size: "6.27TB", spec: ""},
          {name: "Yanni", size: "4.36TB", spec: ""},
          {name: "Kenny G", size: "3.15TB", spec: ""},
          {name: "Rolling Stones", size: "8.72TB", spec: ""},
          {name: "Queen", size: "10.65TB", spec: ""},
          {name: "Pink Floyd", size: "9.28TB", spec: ""},
          {name: "Bob James", size: "2.63TB", spec: ""},
          {name: "例如", size: "58GB", spec: ""},
          {name: "Taylor Swift", size: "16.32TB", spec: ""},
          {name: "1989 World Tour", size: "1.35TB", spec: ""},
          {name: "Reputation Stadium Tour", size: "1.62TB", spec: ""},
          {name: "Eras Tour", size: "2.87TB", spec: ""},
          {name: "The RED Tour", size: "1.28TB", spec: ""},
          {name: "全部保留：", size: "138GB", spec: ""},
          {name: "4K WEB HDR", size: "3.25TB", spec: ""},
          {name: "1080P蓝光原盘", size: "4.68TB", spec: ""},
          {name: "Atmos", size: "2.16TB", spec: ""},
          {name: "HDR10", size: "1.92TB", spec: ""},
          {name: "DTS-HD MA", size: "2.35TB", spec: ""},
          {name: "容量", size: "204GB", spec: ""}
        ]
      },
      {
        name: "交响音乐会 / 古典",
        nameCn: "交响音乐会 / 古典",
        items: [
          {name: "柏林爱乐", size: "8.62TB", spec: ""},
          {name: "维也纳爱乐", size: "9.75TB", spec: ""},
          {name: "皇家音乐厅", size: "6.38TB", spec: ""},
          {name: "英国皇家歌剧院", size: "7.26TB", spec: ""},
          {name: "莫扎特", size: "5.13TB", spec: ""},
          {name: "贝多芬", size: "5.87TB", spec: ""},
          {name: "瓦格纳", size: "4.62TB", spec: ""},
          {name: "歌剧", size: "8.35TB", spec: ""},
          {name: "芭蕾舞剧", size: "7.96TB", spec: ""},
          {name: "音乐剧", size: "6.84TB", spec: ""},
          {name: "例如：", size: "36GB", spec: ""},
          {name: "Hans Zimmer", size: "4.26TB", spec: ""},
          {name: "John Williams", size: "3.85TB", spec: ""},
          {name: "Andrea Bocelli", size: "3.62TB", spec: ""},
          {name: "David Foster", size: "2.94TB", spec: ""},
          {name: "Yanni", size: "3.28TB", spec: ""},
          {name: "Kenny G", size: "2.76TB", spec: ""}
        ]
      },
      {
        name: "音乐节",
        nameCn: "音乐节",
        items: [
          {name: "维也纳新年音乐会", size: "724GB", spec: ""},
          {name: "2002", size: "34.5GB", spec: ""},
          {name: "2009", size: "36.2GB", spec: ""},
          {name: "2011", size: "33.8GB", spec: ""},
          {name: "2012", size: "35.1GB", spec: ""},
          {name: "2013", size: "32.6GB", spec: ""},
          {name: "2014", size: "37.5GB", spec: ""},
          {name: "2015", size: "34.9GB", spec: ""},
          {name: "2016", size: "36.3GB", spec: ""},
          {name: "2017", size: "35.7GB", spec: ""},
          {name: "2018", size: "38.2GB", spec: ""},
          {name: "2019", size: "34.6GB", spec: ""},
          {name: "2020", size: "39.1GB", spec: ""},
          {name: "2021", size: "35.3GB", spec: ""},
          {name: "2022", size: "36.8GB", spec: ""},
          {name: "2023", size: "33.9GB", spec: ""},
          {name: "2024", size: "37.2GB", spec: ""},
          {name: "全部一起放。", size: "144GB", spec: ""}
        ]
      },
      {
        name: "按地区整理",
        nameCn: "按地区整理",
        items: [
          {name: "香港红馆", size: "6.82TB", spec: ""},
          {name: "东京巨蛋", size: "7.36TB", spec: ""},
          {name: "武道馆", size: "5.94TB", spec: ""},
          {name: "台北小巨蛋", size: "4.86TB", spec: ""},
          {name: "伦敦Royal Albert Hall", size: "6.25TB", spec: ""},
          {name: "维也纳金色大厅", size: "5.73TB", spec: ""},
          {name: "美国MSG", size: "6.19TB", spec: ""},
          {name: "这种方便收藏。", size: "108GB", spec: ""}
        ]
      },
      {
        name: "特殊收藏",
        nameCn: "特殊收藏",
        items: [
          {name: "例如：", size: "24GB", spec: ""},
          {name: "3D演唱会", size: "4.26TB", spec: ""},
          {name: "4K WEB HDR", size: "6.85TB", spec: ""},
          {name: "4K蓝光原盘", size: "8.72TB", spec: ""},
          {name: "Atmos版本", size: "5.36TB", spec: ""},
          {name: "杜比视界", size: "6.28TB", spec: ""},
          {name: "演唱会纪录片", size: "4.63TB", spec: ""},
          {name: "幕后花絮", size: "5.92TB", spec: ""}
        ]
      }
    ]
  },
  "music": {
    name: "全球音乐合集",
    icon: "🎵",
    route: "cat-music",
    subgroups: [
      {
        name: "全球无损音乐总库（综合资源）",
        nameCn: "全球无损音乐总库（综合资源）",
        items: [
          {name: "收藏级总库·全品类", size: "3.27TB", spec: ""},
          {name: "全球无损音乐总库（22万首）", size: "8.2TB", spec: ""},
          {name: "全球无损音乐总库（二）", size: "8.76TB", spec: ""},
          {name: "全球无损音乐合集（9万首）", size: "6.35TB", spec: ""},
          {name: "全球音乐资源库", size: "8TB", spec: ""},
          {name: "无损歌曲精选（37758首）", size: "1.28TB", spec: ""},
          {name: "音乐合集", size: "1.07TB", spec: ""}
        ]
      },
      {
        name: "华语音乐典藏",
        nameCn: "华语音乐典藏",
        items: [
          {name: "华语歌手 / 华语专辑 / 华语无损", size: "1.92TB", spec: ""},
          {name: "华语歌手", size: "3.41TB", spec: ""},
          {name: "华语歌手CD唱片库", size: "4.36TB", spec: ""},
          {name: "华语歌手无损唱片库（第一版）", size: "6.70TB", spec: "FLAC/APE｜20990首"},
          {name: "华语CD音乐合集", size: "2.63TB", spec: "容量待补"},
          {name: "华语歌单（分轨版）", size: "690GB", spec: ""},
          {name: "华语高解析音源单曲（1611首）", size: "2.04TB", spec: "Hi-Res"},
          {name: "内地唱片百佳（1979-2019）100CD无损合集", size: "1.61TB", spec: ""},
          {name: "台湾百佳唱片（1975-2005）200CD", size: "2.18TB", spec: ""}
        ]
      },
      {
        name: "高解析 / Hi-End 音乐专区",
        nameCn: "高解析 / Hi-End 音乐专区",
        items: [
          {name: "高清", size: "1.08TB", spec: "DSD｜SACD"},
          {name: "古典音乐Hi-Res合集", size: "12.42TB", spec: ""},
          {name: "DSD音乐合集", size: "7.16TB", spec: ""},
          {name: "Hi-Res高解析音乐合集", size: "8.34TB", spec: ""},
          {name: "SACD音乐合集", size: "6.02TB", spec: ""},
          {name: "SACD 华语音乐", size: "545.33GB", spec: ""},
          {name: "SONY古典音乐合集", size: "3.06TB", spec: ""},
          {name: "厂商音源合集", size: "1.54TB", spec: ""},
          {name: "Apple Music Top100最佳专辑", size: "1.82TB", spec: ""}
        ]
      },
      {
        name: "古典音乐专区",
        nameCn: "古典音乐专区",
        items: [
          {name: "古典音乐高清", size: "12.42TB", spec: ""},
          {name: "22张天价古典CD", size: "2.35TB", spec: ""},
          {name: "SONY古典音乐合集", size: "3.06TB", spec: ""}
        ]
      },
      {
        name: "发烧专区",
        nameCn: "发烧专区",
        items: [
          {name: "发烧友收藏", size: "1.24TB", spec: ""},
          {name: "国内十大音乐精选合集", size: "2.91TB", spec: ""},
          {name: "模拟之声慢刻CD", size: "4.14TB", spec: "104CD｜WAV+CUE"}
        ]
      },
      {
        name: "KTV / 点歌资源",
        nameCn: "KTV / 点歌资源",
        items: [
          {name: "家庭KTV", size: "246GB", spec: ""},
          {name: "KTV歌库（2万首）", size: "1TB", spec: ""}
        ]
      },
      {
        name: "DTS / 多声道音乐",
        nameCn: "DTS / 多声道音乐",
        items: [
          {name: "家庭影院", size: "1.63TB", spec: ""},
          {name: "DTS-CD全集", size: "7.65TB", spec: "2040张"},
          {name: "DTS-CD专辑A包（0001-0700）", size: "4.52TB", spec: ""}
        ]
      },
      {
        name: "音乐平台精选",
        nameCn: "音乐平台精选",
        items: [
          {name: "官方排行榜 / 推荐", size: "712GB", spec: ""},
          {name: "Apple Music Top100最佳专辑", size: "1.82TB", spec: ""}
        ]
      },
      {
        name: "音乐格式资源库",
        nameCn: "音乐格式资源库",
        items: [
          {name: "FLAC无损", size: "2.73TB", spec: ""},
          {name: "APE无损", size: "2.39TB", spec: ""},
          {name: "WAV+CUE", size: "8.6TB", spec: "整轨无损CD镜像，数十万张原版专辑"},
          {name: "DSD", size: "4.68TB", spec: "SACD数字音源，2.8MHz/5.6MHz高码率"},
          {name: "SACD", size: "3.41TB", spec: "超级音频CD原盘镜像，多声道HiFi音源"},
          {name: "高分辨率", size: "10.86TB", spec: "Hi-Res 24bit/96kHz~192kHz无损合集"},
          {name: "CD原盘", size: "13.27TB", spec: "原版CD抓取镜像，全网海量正版专辑收录"},
          {name: "展示最终效果", size: "136GB", spec: ""},
          {name: "全球音乐合集", size: "1.45TB", spec: ""},
          {name: "├── 全球无损音乐总库", size: "164GB", spec: ""},
          {name: "├── 华语音乐典藏", size: "152GB", spec: ""},
          {name: "├── 高解析Hi-Res专区", size: "141GB", spec: ""},
          {name: "├── 古典音乐专区", size: "132GB", spec: ""},
          {name: "├── 发烧唱片专区", size: "121GB", spec: ""},
          {name: "├── KTV歌库", size: "96GB", spec: ""},
          {name: "├── DTS多声道音乐", size: "108GB", spec: ""},
          {name: "├── 音乐平台精选", size: "92GB", spec: ""},
          {name: "└── 音乐格式资源库", size: "104GB", spec: ""}
        ]
      }
    ]
  },
  "books": {
    name: "全球图书合集",
    icon: "📚",
    route: "cat-books",
    subgroups: [
      {
        name: "全球电子书总库",
        nameCn: "全球电子书总库",
        items: [
          {name: "海量电子书·全格式收藏", size: "32TB", spec: "PDF/EPU/MOBI/TXT全格式兼容，千万册藏书"},
          {name: "FreeMBook全站电子", size: "5.1TB", spec: "全站抓取完整电子书资源，持续归档更新"},
          {name: "印度电子图书馆（部分）", size: "12TB", spec: "约29万册｜约"},
          {name: "中美百万电子书库（66万册ZIP压缩版）", size: "21TB", spec: "中外学术、文学综合藏书，已分卷压缩"},
          {name: "啃书网全站网络小说", size: "234GB", spec: "22万本｜（解压约480GB）"},
          {name: "96000本电子书合集", size: "12GB", spec: "TXT / PDF"},
          {name: "小书屋电子书库", size: "3.67TB", spec: ""},
          {name: "优质电子书精选", size: "25GB", spec: ""}
        ]
      },
      {
        name: "文学小说馆",
        nameCn: "文学小说馆",
        items: [
          {name: "小说 · 名著 · 网络文学", size: "18TB", spec: ""},
          {name: "小说合集（已排重）", size: "264.29GB", spec: ""},
          {name: "武侠 / 玄幻 / 网络小说合集", size: "13TB", spec: ""},
          {name: "网络小说20年精华合集（100+大神代表作）", size: "6.9TB", spec: ""},
          {name: "世界名著译本系列（有声版）", size: "4.2TB", spec: ""},
          {name: "漫凹（漫画 / 小说资源）", size: "3.6TB", spec: ""}
        ]
      },
    {
        name: "有声书资源馆",
        items: [
          {name: "听书 · 小说 · 评书", size: "14.2TB", spec: ""},
          {name: "有声听书库", size: "1.02TB", spec: ""},
          {name: "真人有声书合集", size: "9.7TB", spec: "10万集 主播真人录制全品类有声资源"},
          {name: "有声小说大全（已排重）", size: "210GB", spec: ""},
          {name: "名著译有声书合集", size: "3.8TB", spec: ""},
          {name: "单田芳评书全集", size: "44GB", spec: ""}
        ]
      },
      {
        name: "历史·人文·国学",
        nameCn: "历史·人文·国学",
        items: [
          {name: "历史文化·国学典籍", size: "12.6TB", spec: ""},
          {name: "永乐大典", size: "186GB", spec: "217册（含国内海外及流失版本）高清影印本"},
          {name: "中华历史文库", size: "7.5TB", spec: ""},
          {name: "国家人文史", size: "6.2TB", spec: ""},
          {name: "百科全书系列（电子书）", size: "9.4TB", spec: ""}
        ]
      },
      {
        name: "艺术典藏",
        nameCn: "艺术典藏",
        items: [
          {name: "绘画·摄影·连环画", size: "10.8TB", spec: ""},
          {name: "高清名画合集", size: "711GB", spec: ""},
          {name: "老照片合集", size: "3.2TB", spec: ""},
          {name: "连环画合集", size: "286GB", spec: "326套｜4090册 怀旧连环画完整版"},
          {name: "小人书珍藏版", size: "76.61GB", spec: "500册 精品怀旧连环画典藏排版"}
        ]
      },
      {
        name: "戏曲·曲艺专区",
        nameCn: "戏曲·曲艺专区",
        items: [
          {name: "京剧·黄梅戏·相声", size: "5.7TB", spec: ""},
          {name: "京剧资源合集", size: "2.9TB", spec: ""},
          {name: "《中国京剧有声大考》", size: "14GB", spec: "30CD 原版无损抓取京剧典藏唱片"},
          {name: "《京之星——当代京剧名家唱片系列》", size: "12GB", spec: "30CD"},
          {name: "《百年老唱片·京剧大典》", size: "9GB", spec: "26CD"},
          {name: "黄梅戏《罗帕记》", size: "1.2GB", spec: "2CD｜WAV+CUE"},
          {name: "相声小品合集", size: "2.3TB", spec: ""}
        ]
      },
      {
        name: "阅读成长专区",
        nameCn: "阅读成长专区",
        items: [
          {name: "阅读方法·精品书单", size: "2.1TB", spec: ""},
          {name: "樊登读书会", size: "860GB", spec: ""},
          {name: "精读全球好书（第三季）", size: "320GB", spec: ""},
          {name: "全球好书100本", size: "180GB", spec: ""}
        ]
      },
      {
        name: "学习提升专区",
        nameCn: "学习提升专区",
        items: [
          {name: "课程·资料", size: "7.4TB", spec: ""},
          {name: "张雪峰资料大全（最全合集）", size: "680GB", spec: ""},
          {name: "张至顺《八部金刚功》", size: "46GB", spec: "4K重制版 全套教学视频+典籍原文资料"}
        ]
      },
      {
        name: "专业书籍",
        nameCn: "专业书籍",
        items: [
          {name: "专业书籍", size: "15.3TB", spec: ""},
          {name: "古典音乐书籍（正规书籍）", size: "1.28GB", spec: "56本 乐理、音乐史、演奏艺术专业著作"},
          {name: "最终目录效果", size: "110GB", spec: ""},
          {name: "全球图书合集", size: "1.2TB", spec: ""},
          {name: "├── 全球电子书总库", size: "140GB", spec: ""},
          {name: "├── 文学小说馆", size: "130GB", spec: ""},
          {name: "├── 有声书资源馆", size: "120GB", spec: ""},
          {name: "├── 历史 · 人文 · 国学", size: "110GB", spec: ""},
          {name: "├── 艺术典藏", size: "100GB", spec: ""},
          {name: "├── 戏曲 · 曲艺专区", size: "90GB", spec: ""},
          {name: "├── 阅读成长专区", size: "85GB", spec: ""},
          {name: "├── 学习提升专区", size: "95GB", spec: ""},
          {name: "└── 专业出版物", size: "105GB", spec: ""}
        ]
      }
    ]
  },
  "documentary": {
    name: "🌍 全球纪录片合集",
    icon: "🌍",
    route: "cat-documentary",
    totalSize: "424.57TB",
    subgroups: [
      {
        name: "纪录片原盘资源库",
        nameCn: "纪录片原盘资源库",
        items: [
          {name: "全球收藏级文献资源", size: "52.6TB", spec: ""},
          {name: "蓝光原盘纪录片合集", size: "28.4TB", spec: ""},
          {name: "BBC纪录片原盘合集", size: "2.52TB", spec: ""},
          {name: "IMAX纪录片合集（46部）", size: "4.8TB", spec: ""},
          {name: "Netflix 纪录片合集（2023）", size: "16.7TB", spec: ""},
          {name: "盗火", size: "18GB", spec: ""}
        ]
      },
      {
        name: "CCTV",
        nameCn: "CCTV",
        items: [
          {name: "闭路电视监控系统·CG", size: "120GB", spec: ""},
          {name: "央视《自然传奇》", size: "2.16TB", spec: "2015-2023 全集高清录制完整版"},
          {name: "中央电视台《人与自然》", size: "1.19TB", spec: "2014-2023"},
          {name: "中央电视台《动物世界》", size: "690GB", spec: "2016-2022"},
          {name: "《航拍中国》", size: "1.8TB", spec: ""},
          {name: "《河西走廊》", size: "68GB", spec: ""},
          {name: "《超级工程》", size: "126GB", spec: ""},
          {name: "《中国》", size: "92GB", spec: ""},
          {name: "《中国通史》", size: "218GB", spec: ""},
          {name: "《中国之谜》", size: "74GB", spec: ""},
          {name: "《中国公路最美》", size: "136GB", spec: ""},
          {name: "《缓解贫困》", size: "48GB", spec: ""},
          {name: "《中国救护》", size: "62GB", spec: ""},
          {name: "《第三极》", size: "56GB", spec: ""},
          {name: "《众神乐园》", size: "39GB", spec: ""},
          {name: "《未来漫游指南》", size: "73GB", spec: ""},
          {name: "《影响世界的中国植物》", size: "86GB", spec: ""},
          {name: "《遇》", size: "24GB", spec: ""},
          {name: "《水下中国》", size: "51GB", spec: ""},
          {name: "《不止考古：我与三星堆》", size: "43GB", spec: ""},
          {name: "《敦敦：生而传奇》", size: "37GB", spec: ""},
          {name: "《王阳明》", size: "29GB", spec: ""},
          {name: "《家园》", size: "66GB", spec: ""},
          {name: "《功勋章》", size: "54GB", spec: ""},
          {name: "《生门》", size: "18GB", spec: ""},
          {name: "《盛会》", size: "32GB", spec: ""},
          {name: "《跟着书本去旅行》", size: "1.4TB", spec: ""},
          {name: "《老广的味道》1-9季", size: "960GB", spec: ""},
          {name: "《风味人间》1-5", size: "820GB", spec: ""},
          {name: "《风味原产地》", size: "430GB", spec: ""},
          {name: "《早餐中国》1-4季", size: "370GB", spec: ""},
          {name: "《远方的家》系列", size: "5.47TB", spec: ""}
        ]
      },
      {
        name: "BBC / 国家地理专区",
        nameCn: "BBC / 国家地理专区",
        items: [
          {name: "英国广播公司", size: "36.8TB", spec: ""},
          {name: "《地球脉动》1-2", size: "246GB", spec: ""},
          {name: "《蓝色星球》1-2", size: "282GB", spec: ""},
          {name: "《绿色星球》", size: "138GB", spec: ""},
          {name: "《生命》", size: "172GB", spec: ""},
          {name: "《完美星球》", size: "124GB", spec: ""},
          {name: "《歌手》", size: "46GB", spec: ""},
          {name: "《七个世界一个星球》", size: "156GB", spec: ""},
          {name: "《非洲》", size: "118GB", spec: ""},
          {name: "《野性英伦》", size: "94GB", spec: ""},
          {name: "《野性都市》", size: "87GB", spec: ""},
          {name: "《野性太平洋》", size: "106GB", spec: ""},
          {name: "《狂野日本》", size: "78GB", spec: ""},
          {name: "《大太平洋》", size: "93GB", spec: ""},
          {name: "《大堡礁探险》", size: "64GB", spec: ""},
          {name: "《北》", size: "58GB", spec: ""},
          {name: "《欧洲》", size: "122GB", spec: ""},
          {name: "《海洋》", size: "89GB", spec: ""},
          {name: "《海洋：我们的蓝色星球》", size: "104GB", spec: ""},
          {name: "《企鹅群里有特务》", size: "52GB", spec: ""},
          {name: "《求偶游戏》", size: "76GB", spec: ""},
          {name: "《不可思议的动物》", size: "68GB", spec: ""},
          {name: "《动物本色》", size: "97GB", spec: ""},
          {name: "《黑猩猩帝国》", size: "63GB", spec: ""},
          {name: "《贝尔蒂·格雷戈里：与动物零距离》", size: "82GB", spec: ""},
          {name: "《空闲星球》", size: "49GB", spec: ""}
        ]
      },
      {
        name: "自然·动物·地理",
        nameCn: "自然·动物·地理",
        items: [
          {name: "《北极熊》", size: "36GB", spec: ""},
          {name: "《大熊猫》", size: "42GB", spec: ""},
          {name: "《大象女王》", size: "28GB", spec: ""},
          {name: "《大象的秘密》", size: "33GB", spec: ""},
          {name: "《帝企鹅日记2》", size: "47GB", spec: ""},
          {name: "《龟女士的奥德赛》", size: "26GB", spec: ""},
          {name: "《最后的狮子》", size: "31GB", spec: ""},
          {name: "《海狼之岛》", size: "24GB", spec: ""},
          {name: "《企鹅小镇》", size: "38GB", spec: ""},
          {name: "《超凡动物奇观》", size: "72GB", spec: ""},
          {name: "《动物的秘密生活》", size: "86GB", spec: ""},
          {name: "《72种危险动物：亚洲》", size: "54GB", spec: ""},
          {name: "《72种危险动物：拉丁美洲》", size: "57GB", spec: ""},
          {name: "《博茨瓦纳惊人的野生动物》", size: "49GB", spec: ""},
          {name: "《婆罗洲：亚洲的魅力》", size: "44GB", spec: ""},
          {name: "《塞伦盖蒂国家公园》", size: "68GB", spec: ""},
          {name: "《纳米比亚：旷野的精神》", size: "53GB", spec: ""},
          {name: "《全球绝美国家庭公园》", size: "126GB", spec: ""},
          {name: "《狂野之美：国家公园探险》", size: "98GB", spec: ""}
        ]
      },
      {
        name: "宇宙·科学·探索",
        nameCn: "宇宙·科学·探索",
        items: [
          {name: "《宇宙时空之旅》", size: "86GB", spec: ""},
          {name: "《了解宇宙如何运行》", size: "72GB", spec: ""},
          {name: "《国际空间站》", size: "58GB", spec: ""},
          {name: "《阿波罗11号》", size: "46GB", spec: ""},
          {name: "《奔向月球》", size: "39GB", spec: ""},
          {name: "《登月进行时》", size: "43GB", spec: ""},
          {name: "《回到太空》", size: "52GB", spec: ""},
          {name: "《太空之旅》", size: "67GB", spec: ""},
          {name: "《从太空看地球》", size: "94GB", spec: ""},
          {name: "《与霍金一起了解宇宙》", size: "36GB", spec: ""},
          {name: "《我们的浩瀚宇宙》", size: "112GB", spec: ""},
          {name: "《外星世界》", size: "78GB", spec: ""},
          {name: "《哈勃伸缩》", size: "41GB", spec: ""},
          {name: "《征服天穹》", size: "64GB", spec: ""}
        ]
      },
      {
        name: "历史·战争·人文",
        nameCn: "历史·战争·人文",
        items: [
          {name: "《美国内战》", size: "56GB", spec: ""},
          {name: "《记忆的力量：抗美援朝》", size: "72GB", spec: ""},
          {name: "《中国历届大阅读兵》", size: "98GB", spec: ""},
          {name: "《帝国的崛起：奥斯曼》", size: "66GB", spec: ""},
          {name: "《登陆日：诺曼底1944》", size: "52GB", spec: ""},
          {name: "《为了全", size: "47GB", spec: ""},
          {name: "《越南：改变美国的战争》", size: "61GB", spec: ""},
          {name: "《在越南最后的日子》", size: "38GB", spec: ""},
          {name: "《血与性：400年王室风云》", size: "54GB", spec: ""},
          {name: "《里斯本丸沉没》", size: "32GB", spec: ""},
          {name: "《伟大征程》", size: "84GB", spec: ""}
        ]
      },
      {
        name: "美食·旅行·城市",
        nameCn: "美食·旅行·城市",
        items: [
          {name: "《风味人间》", size: "460GB", spec: ""},
          {name: "《风味原产地》", size: "220GB", spec: ""},
          {name: "《早餐中国》", size: "185GB", spec: ""},
          {name: "《躺看周游世界》", size: "3.2TB", spec: ""},
          {name: "《实境之旅：北海道》", size: "76GB", spec: ""},
          {name: "《美国一号公路》", size: "62GB", spec: ""},
          {name: "《原味澳洲》", size: "83GB", spec: ""},
          {name: "《南太平洋之旅》", size: "71GB", spec: ""},
          {name: "《穿越落基山脉》", size: "59GB", spec: ""},
          {name: "《美国西海岸之旅》", size: "68GB", spec: ""}
        ]
      },
      {
        name: "人物·艺术·音乐",
        nameCn: "人物·艺术·音乐",
        items: [
          {name: "《坂本龙一：终曲》", size: "26GB", spec: ""},
          {name: "《泰勒·斯威夫特：美国小姐》", size: "32GB", spec: ""},
          {name: "《配乐大师：约翰·威廉姆斯》", size: "28GB", spec: ""},
          {name: "《披头士：回归》", size: "44GB", spec: ""},
          {name: "《一周八天：披头士巡演时代》", size: "36GB", spec: ""},
          {name: "《保罗·西蒙：永不停息的梦》", size: "24GB", spec: ""},
          {name: "《卢·里德：柏林》", size: "22GB", spec: ""},
          {name: "《卡拉斯：为爱而声》", size: "27GB", spec: ""},
          {name: "《宫崎骏与苍鹭》", size: "34GB", spec: ""},
          {name: "《大卫·伯恩的美国乌托邦》", size: "29GB", spec: ""}
        ]
      },
      {
        name: "体育纪录片",
        nameCn: "体育纪录片",
        items: [
          {name: "《一级方程式：疾速争胜》1-7季", size: "860GB", spec: ""},
          {name: "《MotoGP Unlimited》", size: "320GB", spec: ""},
          {name: "《梅西的世界杯》", size: "46GB", spec: ""},
          {name: "《孤注一掷：曼彻斯特城》", size: "72GB", spec: ""},
          {name: "《孤注一掷：巴西国家队》", size: "68GB", spec: ""},
          {name: "《孤注一掷：德国国家队》", size: "64GB", spec: ""},
          {name: "《孤注一掷：阿森纳》", size: "76GB", spec: ""},
          {name: "《孤注一掷：热刺》", size: "71GB", spec: ""},
          {name: "《竭力挥杆》", size: "38GB", spec: ""},
          {name: "《破发点》", size: "42GB", spec: ""},
          {name: "《康纳·麦格雷戈：拳王万岁》", size: "53GB", spec: ""},
          {name: "《徒手攀岩》", size: "22GB", spec: ""},
          {name: "与浪争锋》", size: "47GB", spec: ""}
        ]
      },
      {
        name: "社会·犯罪·调查",
        nameCn: "社会·犯罪·调查",
        items: [
          {name: "《MH370：消失的马航客机》", size: "36GB", spec: ""},
          {name: "《全美报警：波士顿爆炸案》", size: "32GB", spec: ""},
          {name: "《黑夜追踪狂》", size: "28GB", spec: ""},
          {name: "《韦科惨案》", size: "34GB", spec: ""},
          {name: "《药剂师》", size: "41GB", spec: ""},
          {name: "《追缉汽车大亨》", size: "37GB", spec: ""},
          {name: "《我们的父亲》", size: "33GB", spec: ""},
          {name: "《我是一名杀手》", size: "29GB", spec: ""},
          {name: "《边境凶案》", size: "35GB", spec: ""},
          {name: "《夜宿人》", size: "26GB", spec: ""},
          {name: "《我们窃取秘密：维基解密》", size: "38GB", spec: ""}
        ]
      },
      {
        name: "Netflix精品纪录片",
        nameCn: "Netflix精品纪录片",
        items: [
          {name: "Netflix 原创作品（2018-2025）", size: "29.7TB", spec: ""},
          {name: "《我们的星球》", size: "142GB", spec: ""},
          {name: "《我们星球上的生命》", size: "136GB", spec: ""},
          {name: "《地球风暴》", size: "84GB", spec: ""},
          {name: "《夜色中的地球》", size: "128GB", spec: ""},
          {name: "《黑猩猩帝国》", size: "61GB", spec: ""},
          {name: "《急诊先锋：纽约》", size: "92GB", spec: ""},
          {name: "《致富攻略》", size: "56GB", spec: ""},
          {name: "《我工作故我在》", size: "48GB", spec: ""},
          {name: "《欢迎来地球》", size: "106GB", spec: ""},
          {name: "《外星世界》", size: "75GB", spec: ""},
          {name: "《木偶奇遇记》", size: "42GB", spec: ""},
          {name: "《喵星人的奇思妙想》", size: "36GB", spec: ""},
          {name: "《未来漫游指南》", size: "71GB", spec: ""}
        ]
      },
      {
        name: "纪录片专题合集",
        nameCn: "纪录片专题合集",
        items: [
          {name: "IMAX纪录片合集（46部）", size: "4.8TB", spec: ""},
          {name: "BBC纪录片原盘合集", size: "2.52TB", spec: ""},
          {name: "Netflix 纪录片合集", size: "32.4TB", spec: ""},
          {name: "中央电视台纪录片合集", size: "26.8TB", spec: ""},
          {name: "国家地理纪录片合集", size: "38.2TB", spec: ""},
          {name: "世界遗产3D纪录片系列", size: "7.6TB", spec: ""},
          {name: "世界自然纪录片系列", size: "42.5TB", spec: ""},
          {name: "世界历史纪录片系列", size: "36.7TB", spec: ""},
          {name: "世界人文纪录片系列", size: "31.9TB", spec: ""},
          {name: "最终目录风格", size: "180GB", spec: ""},
          {name: "全球纪录片合集", size: "1.6TB", spec: ""},
          {name: "├── 纪录片原盘资源库", size: "190GB", spec: ""},
          {name: "├── CCTV / 国产纪录片", size: "170GB", spec: ""},
          {name: "├── BBC / 国家地理", size: "160GB", spec: ""},
          {name: "├── 自然 · 动物 · 地理", size: "150GB", spec: ""},
          {name: "├── 宇宙 · 科学 · 探索", size: "140GB", spec: ""},
          {name: "├── 历史 · 战争 · 人文", size: "130GB", spec: ""},
          {name: "├── 美食 · 旅行 · 城市", size: "120GB", spec: ""},
          {name: "├── 人物 · 艺术 · 音乐", size: "110GB", spec: ""},
          {name: "├── 体育纪录片", size: "100GB", spec: ""},
          {name: "├── 社会 · 犯罪 · 调查", size: "90GB", spec: ""},
          {name: "├── Netflix 精品纪录片", size: "95GB", spec: ""},
          {name: "└── 纪录片专题合集", size: "105GB", spec: ""}
        ]
      }
    ]
  },
  "games": {
    name: "🎮 全球游戏合集",
    icon: "🎮",
    route: "cat-games",
    totalSize: "54.21TB",
    subgroups: [
      {
        name: "PC单机游戏总库",
        nameCn: "PC单机游戏总库",
        items: [
          {name: "PC大型单机·AAA游戏收藏", size: "86.4TB", spec: ""},
          {name: "PC单机游戏大合集（持续更新）", size: "62.7TB", spec: ""},
          {name: "PC单机游戏精选合集", size: "28.3TB", spec: ""},
          {name: "PC经典游戏合集", size: "16.8TB", spec: ""},
          {name: "PC街机游戏合集（1425款", size: "42GB", spec: ""},
          {name: "DOS经典游戏合集（1810款）", size: "28GB", spec: ""},
          {name: "PC装机模拟器", size: "12GB", spec: ""},
          {name: "雨血", size: "8GB", spec: ""},
          {name: "空军", size: "6GB", spec: ""},
          {name: "星际舰队", size: "7GB", spec: ""},
          {name: "新刀剑封魔录", size: "5GB", spec: ""},
          {name: "仙剑奇侠传9", size: "48GB", spec: ""},
          {name: "梦幻战争（贺岁版）", size: "4GB", spec: ""},
          {name: "半条命2（中文版）", size: "18GB", spec: ""},
          {name: "红色警戒2", size: "14GB", spec: ""},
          {name: "Halo：Spartan Assault（光环：斯巴达突袭）", size: "9GB", spec: ""}
        ]
      },
      {
        name: "3A动作冒险游戏",
        nameCn: "3A动作冒险游戏",
        items: [
          {name: "GTA V（盗贼猎手5）", size: "126GB", spec: ""},
          {name: "看门狗", size: "78GB", spec: ""},
          {name: "孤岛危机", size: "94GB", spec: ""},
          {name: "孤岛惊魂", size: "168GB", spec: ""},
          {name: "刺客信条：编年史·中国", size: "22GB", spec: ""},
          {name: "龙腾世纪：审判", size: "66GB", spec: ""},
          {name: "龙腾世纪：起源", size: "48GB", spec: ""},
          {name: "崛起3：泰坦之王", size: "36GB", spec: ""},
          {name: "鬼哭5", size: "42GB", spec: ""},
          {name: "恶魔城：暗影之王", size: "38GB", spec: ""},
          {name: "生化奇兵：无限", size: "32GB", spec: ""},
          {name: "生存之旅4（Left 4 Dead）", size: "26GB", spec: ""},
          {name: "死亡岛", size: "34GB", spec: ""},
          {name: "死亡净化：爆发", size: "18GB", spec: ""},
          {name: "幽灵行动：荒野", size: "82GB", spec: ""},
          {name: "狙击手：幽灵战士契约", size: "56GB", spec: ""},
          {name: "狙击精英", size: "74GB", spec: ""},
          {name: "镜之边缘：催化剂", size: "24GB", spec: ""},
          {name: "杀手6", size: "68GB", spec: ""},
          {name: "正当防卫", size: "96GB", spec: ""},
          {name: "正当防卫4", size: "52GB", spec: ""},
          {name: "僚机计划", size: "22GB", spec: ""},
          {name: "罗马之子", size: "28GB", spec: ""},
          {name: "皇牌空战7", size: "36GB", spec: ""},
          {name: "战火风暴", size: "16GB", spec: ""},
          {name: "最终结局XV", size: "98GB", spec: ""},
          {name: "最终幻想世界", size: "44GB", spec: ""},
          {name: "最终幻想XV口袋版", size: "12GB", spec: ""}
        ]
      },
      {
        name: "射击战争游戏",
        nameCn: "射击战争游戏",
        items: [
          {name: "荣誉勋章", size: "86GB", spec: ""},
          {name: "战地系列", size: "216GB", spec: ""},
          {name: "战地岛主", size: "24GB", spec: ""},
          {name: "战前", size: "18GB", spec: ""},
          {name: "使命召唤", size: "328GB", spec: ""},
          {name: "泰坦陨落2", size: "42GB", spec: ""},
          {name: "光环：士官长合集", size: "124GB", spec: ""},
          {name: "CS", size: "32GB", spec: ""},
          {name: "击长空1-2", size: "46GB", spec: ""},
          {name: "红色警戒", size: "28GB", spec: ""},
          {name: "国土防线", size: "36GB", spec: ""},
          {name: "幽灵行动：荒野", size: "80GB", spec: ""},
          {name: "世界大战Z", size: "48GB", spec: ""},
          {name: "战火风暴", size: "15GB", spec: ""}
        ]
      },
      {
        name: "赛车/飞行/体育",
        nameCn: "赛车/飞行/体育",
        items: [
          {name: "极限竞速：地平线", size: "186GB", spec: ""},
          {name: "极品飞车", size: "242GB", spec: ""},
          {name: "皇牌空战7", size: "34GB", spec: ""},
          {name: "击长空", size: "44GB", spec: ""},
          {name: "尘埃3", size: "28GB", spec: ""},
          {name: "坎巴拉太空计划", size: "32GB", spec: ""},
          {name: "高尔夫", size: "16GB", spec: ""},
          {name: "网球", size: "22GB", spec: ""},
          {name: "足球", size: "168GB", spec: ""},
          {name: "NBA篮球", size: "142GB", spec: ""}
        ]
      },
      {
        name: "策略",
        nameCn: "策略",
        items: [
          {name: "文明6", size: "46GB", spec: ""},
          {name: "灰蛊", size: "24GB", spec: ""},
          {name: "星球大战（策略）", size: "58GB", spec: ""},
          {name: "模拟城市", size: "72GB", spec: ""},
          {name: "沙盒：战略与特殊（完整版）", size: "38GB", spec: ""},
          {name: "火车模拟", size: "42GB", spec: ""},
          {name: "建筑模拟器", size: "26GB", spec: ""},
          {name: "梦幻餐厅", size: "12GB", spec: ""},
          {name: "梦幻家园", size: "18GB", spec: ""},
          {name: "梦幻家园", size: "437MB", spec: ""},
          {name: "钢铁战队", size: "228MB", spec: ""}
        ]
      },
      {
        name: "生存 / 沙盒 / 开放世界",
        nameCn: "生存 / 沙盒 / 开放世界",
        items: [
          {name: "沙盒：战略与专用", size: "12.8GB", spec: ""},
          {name: "生存之旅", size: "16.5GB", spec: ""},
          {name: "世界大战Z", size: "35GB", spec: ""},
          {name: "丧尸围城3", size: "28GB", spec: ""},
          {name: "生存模拟", size: "9.2GB", spec: ""},
          {name: "求生类合集", size: "126GB", spec: ""},
          {name: "沙盒游戏合集", size: "158GB", spec: ""}
        ]
      },
      {
        name: "动作/RPG/武侠",
        nameCn: "动作/RPG/武侠",
        items: [
          {name: "金庸群侠传", size: "185MB", spec: ""},
          {name: "三国系列", size: "42GB", spec: ""},
          {name: "三国志", size: "26GB", spec: ""},
          {name: "三国群英传", size: "12GB", spec: ""},
          {name: "动作仙侠修仙合集", size: "86GB", spec: ""},
          {name: "诺亚之瓶", size: "142MB", spec: ""},
          {name: "众生", size: "326MB", spec: ""},
          {name: "武侠游戏合集", size: "78GB", spec: ""}
        ]
      },
      {
        name: "安卓游戏合集",
        nameCn: "安卓游戏合集",
        items: [
          {name: "分类资源", size: "1.2GB", spec: ""},
          {name: "安卓游戏合集（持续更新）", size: "218GB", spec: ""},
          {name: "战争类", size: "24GB", spec: ""},
          {name: "塔防类", size: "16GB", spec: ""},
          {name: "生存类", size: "32GB", spec: ""},
          {name: "模拟类", size: "28GB", spec: ""},
          {name: "三国类", size: "19GB", spec: ""},
          {name: "沙盒类", size: "36GB", spec: ""},
          {name: "修仙仙侠类", size: "41GB", spec: ""},
          {name: "精品APK", size: "7.8GB", spec: ""},
          {name: "众生（破解版）", size: "330MB", spec: ""},
          {name: "坦克：装甲纷争（全坦克解锁）", size: "564MB", spec: ""},
          {name: "沙盒：战略与特殊（完整版）", size: "890MB", spec: ""},
          {name: "诺亚之瓶（无限金币）", size: "145MB", spec: ""},
          {name: "梦幻餐厅（破解版）", size: "392MB", spec: ""},
          {name: "梦幻家园", size: "437MB", spec: ""},
          {name: "钢铁战队", size: "230MB", spec: ""},
          {name: "乐动达人", size: "186MB", spec: ""},
          {name: "金庸群侠传（无限元宝）", size: "190MB", spec: ""},
          {name: "火车模拟（无限金币）", size: "628MB", spec: ""}
        ]
      },
      {
        name: "Switch（NS）游戏合集",
        nameCn: "Switch（NS）游戏合集",
        items: [
          {name: "任天堂第一方", size: "426GB", spec: ""},
          {name: "塞尔达传说", size: "32.6GB", spec: ""},
          {name: "超级马力欧", size: "48.3GB", spec: ""},
          {name: "马力欧赛车", size: "12.4GB", spec: ""},
          {name: "马力欧网球", size: "5.8GB", spec: ""},
          {name: "马力欧派对", size: "21.7GB", spec: ""},
          {name: "宝可梦 Let's Go 皮卡丘", size: "10.2GB", spec: ""},
          {name: "宝可梦 Let's Go 伊布", size: "10.2GB", spec: ""},
          {name: "宝可梦系列", size: "186GB", spec: ""},
          {name: "喷射战士", size: "16.5GB", spec: ""},
          {name: "动物森友会", size: "6.2GB", spec: ""},
          {name: "异度之刃2", size: "13.2GB", spec: ""},
          {name: "火焰纹章", size: "42.8GB", spec: ""},
          {name: "星之卡比", size: "28.6GB", spec: ""},
          {name: "路易吉洋馆", size: "36.4GB", spec: ""},
          {name: "耀西", size: "14.7GB", spec: ""},
          {name: "日式角色扮演游戏", size: "238GB", spec: ""},
          {name: "最终", size: "9.6GB", spec: ""},
          {name: "最终幻想XV口袋", size: "12.9GB", spec: ""},
          {name: "勇者斗恶龙", size: "96GB", spec: ""},
          {name: "八方旅人", size: "11.6GB", spec: ""},
          {name: "血污：夜之仪式", size: "7.3GB", spec: ""},
          {name: "独立企业", size: "18.6GB", spec: ""},
          {name: "演示", size: "7.2GB", spec: ""},
          {name: "光之子", size: "3.1GB", spec: ""},
          {name: "小小梦魇2", size: "4.8GB", spec: ""},
          {name: "里面", size: "2.4GB", spec: ""},
          {name: "炼狱", size: "3.2GB", spec: ""},
          {name: "空洞骑士", size: "6.7GB", spec: ""},
          {name: "塞莱斯特", size: "1.9GB", spec: ""},
          {name: "死细胞", size: "3.6GB", spec: ""},
          {name: "茶杯头", size: "4.2GB", spec: ""},
          {name: "月下夜想曲", size: "0.8GB", spec: ""},
          {name: "模拟经营", size: "126GB", spec: ""},
          {name: "城市：天际线", size: "18.5GB", spec: ""},
          {name: "建筑师", size: "16.2GB", spec: ""},
          {name: "开拓者", size: "14.8GB", spec: ""},
          {name: "建村达人", size: "13.6GB", spec: ""},
          {name: "模拟经营合集", size: "98GB", spec: ""},
          {name: "NS中文合集", size: "686GB", spec: ""},
          {name: "Switch中文游戏合集", size: "686GB", spec: ""},
          {name: "Switch热门游戏合集", size: "524GB", spec: ""},
          {name: "Switch独立游戏合集", size: "216GB", spec: ""},
          {name: "Switch方第一游戏合集", size: "426GB", spec: ""}
        ]
      },
      {
        name: "街机 / 怀旧游戏",
        nameCn: "街机 / 怀旧游戏",
        items: [
          {name: "街机游戏合集（1425款）", size: "18GB", spec: ""},
          {name: "DOS经典游戏合集（1810款）", size: "12GB", spec: ""},
          {name: "红白机经典合集", size: "3.6GB", spec: ""},
          {name: "街机模拟器合集", size: "2.8GB", spec: ""},
          {name: "CPS街机合集", size: "7.2GB", spec: ""},
          {name: "NeoGeo街机合集", size: "9.5GB", spec: ""}
        ]
      },
      {
        name: "游戏平台专区",
        nameCn: "游戏平台专区",
        items: [
          {name: "电脑游戏", size: "8.6TB", spec: ""},
          {name: "安卓游戏", size: "422GB", spec: ""},
          {name: "Switch游戏", size: "5022GB", spec: ""},
          {name: "街机游戏", size: "53GB", spec: ""},
          {name: "DOS经典游戏", size: "12GB", spec: ""},
          {name: "最终目录效果", size: "160GB", spec: ""},
          {name: "全球游戏合集", size: "1.3TB", spec: ""},
          {name: "├── PC单机游戏总库", size: "180GB", spec: ""},
          {name: "├── 3A动作冒险", size: "170GB", spec: ""},
          {name: "├── 射击战争游戏", size: "160GB", spec: ""},
          {name: "├── 赛车 · 飞行 · 体育", size: "150GB", spec: ""},
          {name: "├── 策略 · RTS · 模拟经营", size: "140GB", spec: ""},
          {name: "├── 生存 · 沙盒 · 开放世界", size: "130GB", spec: ""},
          {name: "├── 武侠 · RPG · 三国", size: "120GB", spec: ""},
          {name: "├── 安卓游戏合集", size: "110GB", spec: ""},
          {name: "├── Switch（NS）游戏合集", size: "100GB", spec: ""},
          {name: "├── 街机 · DOS经典游戏", size: "90GB", spec: ""},
          {name: "└── 游戏平台专区", size: "98GB", spec: ""}
        ]
      }
    ]
  }
};
