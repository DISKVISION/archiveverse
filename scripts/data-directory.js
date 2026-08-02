// 9-Category Directory Data - From Excel (91 subdirs, 970 items)
var directoryData = {
  "movies": {
    "name": "Global Premium Movie Collection",
    "icon": "🎬",
    "route": "cat-movies",
    "subgroups": [
      {
        "name": "World Rankings",
        "nameCn": "World Authoritative Movie Rankings",
        "items": [
          {"name": "Douban Top 250 Original Disc", "size": "13.83TB", "spec": "Blu-ray ISO"},
          {"name": "IMDb Top 250", "size": "2.09TB", "spec": "Blu-ray"},
          {"name": "Global All-Time Box Office Top 100", "size": "1.66TB", "spec": "Collection Boxset"},
          {"name": "Academy Award Best Picture Collection (96 Seasons)", "size": "16.15TB", "spec": "Blu-ray ISO"},
          {"name": "Cannes Film Festival Palme d'Or Winners (70 Titles)", "size": "3.34TB", "spec": "Blu-ray ISO"},
          {"name": "South Korea All-Time Top 100 Films Collection", "size": "1.58TB", "spec": ""},
          {"name": "100 Essential Films for Lifetime Viewing", "size": "1.28TB", "spec": ""},
          {"name": "Douban High-Score Popular Movie Library (1749 Titles)", "size": "6.26TB", "spec": ""}
        ]
      },
      {
        "name": "Premium DIY Collection",
        "nameCn": "Premium Custom Curated Collection",
        "items": [
          {"name": "SGNB Subtitled 4K UHD Original Disc Collection (563 Titles)", "size": "26.52TB", "spec": "UHD Blu-ray ISO"},
          {"name": "Supreme Master Custom Visual Original Disc Set (452 Titles)", "size": "16.81TB", "spec": "Blu-ray ISO"},
          {"name": "LGNB MKV Encapsulation Collection", "size": "58TB", "spec": "4K"},
          {"name": "LGNB Premium MKV Master Collection", "size": "15TB", "spec": "MKV"},
          {"name": "LGNB IMAX Exclusive Collection", "size": "1.49TB", "spec": "IMAX"},
          {"name": "Athena Custom Curated Library", "size": "2.76TB", "spec": "UHD Blu-ray ISO"},
          {"name": "HDSky ISO Original Disc Archive", "size": "71.93TB", "spec": "Blu-ray ISO"},
          {"name": "Star Collection (HDSky & CHD Releases)", "size": "5.39TB", "spec": ""},
          {"name": "Sunny Custom Subtitle Collection", "size": "7.13TB", "spec": ""},
          {"name": "BHYS Custom Curated Library", "size": "20.64TB", "spec": ""},
          {"name": "BluCook Custom Curated Library", "size": "20.18TB", "spec": ""}
        ]
      },
      {
        "name": "UHD & Blu-ray Originals",
        "nameCn": "UHD / Blu-ray Original Disc Archive",
        "items": [
          {"name": "UHD Blu-ray ISO Master Collection", "size": "171TB", "spec": "UHD Blu-ray ISO"},
          {"name": "UHD Blu-ray ISO Library (2500 Discs)", "size": "144.46TB", "spec": "UHD Blu-ray ISO"},
          {"name": "Scraped UHD Original Disc Library", "size": "138.48TB", "spec": ""},
          {"name": "Scraped Blu-ray Original Disc Library", "size": "430.44TB", "spec": ""},
          {"name": "Blu-ray Original Disc Compilation", "size": "601.97TB", "spec": ""},
          {"name": "Vintage Blu-ray Original Disc Mega Pack", "size": "604TB", "spec": ""},
          {"name": "ISO Original Disc Movie Archive", "size": "660TB", "spec": ""},
          {"name": "Blu-ray Original Disc + Blu-ray Rip Combined Library", "size": "1.62PB", "spec": ""}
        ]
      },
      {
        "name": "REMUX Collection",
        "nameCn": "Lossless REMUX Movie Archive",
        "items": [
          {"name": "REMUX Movie Library (2270+ Titles)", "size": "120TB", "spec": ""},
          {"name": "Premium Lossless REMUX Compilation", "size": "101.32TB", "spec": ""},
          {"name": "4K REMUX Master Set", "size": "40TB", "spec": ""},
          {"name": "Blu-ray REMUX Collection", "size": "28.6TB", "spec": ""},
          {"name": "Media Resource Library - REMUX Section", "size": "28TB", "spec": ""},
          {"name": "AiYing REMUX Archive", "size": "12.12TB", "spec": ""},
          {"name": "LaoK REMUX Movie & TV Collection", "size": "86.85TB", "spec": ""},
          {"name": "2267 Titles 2160P REMUX (FGT Release)", "size": "120TB", "spec": ""}
        ]
      },
      {
        "name": "Chinese Cinema",
        "nameCn": "Chinese Film Archive",
        "items": [
          {"name": "Chinese Cinema Volume 1", "size": "49TB", "spec": ""},
          {"name": "Chinese Cinema Volume 2", "size": "149TB", "spec": ""},
          {"name": "Chinese Films 1927-2023 Complete Archive", "size": "26.12TB", "spec": ""},
          {"name": "ADC Chinese DVD Original Discs (730 Titles)", "size": "3.6TB", "spec": ""},
          {"name": "Hong Kong Cinema Visual Original Discs (669 Titles)", "size": "16TB", "spec": ""},
          {"name": "Cantonese Audio Visual Collection (1242 Titles)", "size": "16TB", "spec": ""},
          {"name": "Vintage Hong Kong Cinema Original Disc Library", "size": "5TB", "spec": ""},
          {"name": "Cantonese Language Film Compilation", "size": "15TB", "spec": ""}
        ]
      },
      {
        "name": "World Cinema",
        "nameCn": "International Film Archive",
        "items": [
          {"name": "Foreign Language Film Mega Collection", "size": "297TB", "spec": ""},
          {"name": "South Korean Blu-ray Original Discs (464 Titles)", "size": "16.57TB", "spec": ""},
          {"name": "Taiwanese Cinema Compilation", "size": "5.43TB", "spec": ""},
          {"name": "Indian Film Collection", "size": "3.9TB", "spec": ""},
          {"name": "Asian 1080P Film Library", "size": "9.33TB", "spec": ""}
        ]
      },
      {
        "name": "Directors & Legends",
        "nameCn": "Director & Iconic Performer Archive",
        "items": [
          {"name": "Jackie Chan Film Complete Works", "size": "1.48TB", "spec": ""},
          {"name": "Jet Li Film Complete Works", "size": "1.32TB", "spec": ""},
          {"name": "Stephen Chow Visual Collection", "size": "1.05TB", "spec": ""},
          {"name": "Ang Lee Film Complete Works", "size": "998GB", "spec": ""},
          {"name": "Takeshi Kitano Film Complete Works", "size": "886GB", "spec": ""},
          {"name": "Jia Zhangke Film Complete Works", "size": "176GB", "spec": ""},
          {"name": "Tony Leung Chiu-wai Film Collection", "size": "1.7TB", "spec": ""},
          {"name": "Andy Lau Film Collection", "size": "426GB", "spec": ""},
          {"name": "Bruce Lee Complete Works", "size": "652GB", "spec": ""},
          {"name": "Lam Ching-ying Complete Works", "size": "847GB", "spec": ""},
          {"name": "Donnie Yen Film Collection", "size": "733GB", "spec": ""},
          {"name": "Tom Hanks Film Collection", "size": "1.28TB", "spec": ""},
          {"name": "Russell Crowe Film Collection", "size": "624GB", "spec": ""},
          {"name": "Scarlett Johansson Film Collection", "size": "441GB", "spec": ""},
          {"name": "David Lynch REMUX Archive", "size": "936GB", "spec": ""},
          {"name": "Johnnie To Film Complete Works", "size": "1.8TB", "spec": ""},
          {"name": "Feng Xiaogang Film Complete Works", "size": "3.6TB", "spec": ""},
          {"name": "Clint Eastwood Film Collection", "size": "2.68TB", "spec": ""},
          {"name": "Anthony Wong Film Collection", "size": "781GB", "spec": ""},
          {"name": "Bruce Willis Film Collection", "size": "1.56TB", "spec": ""},
          {"name": "Mel Gibson Film Collection", "size": "1.32TB", "spec": ""}
        ]
      },
      {
        "name": "Franchise Collection",
        "nameCn": "Movie Franchise Archive",
        "items": [
          {"name": "Marvel Cinematic Universe Complete Collection", "size": "2.79TB", "spec": ""},
          {"name": "DC Extended Universe Complete Collection", "size": "2.22TB", "spec": ""},
          {"name": "007 Full Franchise Collection", "size": "1.2TB", "spec": "Ultra HD Blu-ray ISO"},
          {"name": "Harry Potter Complete Collector's Edition", "size": "628GB", "spec": ""},
          {"name": "Star Wars Saga Collection", "size": "1.46TB", "spec": ""},
          {"name": "Ringu Franchise Complete Set", "size": "216GB", "spec": ""},
          {"name": "Shaw Brothers Studio Film Mega Collection", "size": "8.66TB", "spec": ""},
          {"name": "Shaw Brothers Classic Film Library", "size": "2.61TB", "spec": ""},
          {"name": "Shaw Brothers US & EU Boxset Collection", "size": "2.30TB", "spec": ""}
        ]
      },
      {
        "name": "Special Collection",
        "nameCn": "Thematic Movie Archive",
        "items": [
          {"name": "War Feature Films", "size": "13.09TB", "spec": ""},
          {"name": "Disaster Feature Films", "size": "10.07TB", "spec": ""},
          {"name": "Global Top 30 Disaster Films", "size": "2TB", "spec": ""},
          {"name": "Top 100 Horror Films", "size": "4.72TB", "spec": ""},
          {"name": "Top 100 Zombie Films", "size": "3.91TB", "spec": ""},
          {"name": "Art House Film Compilation", "size": "8.97TB", "spec": ""},
          {"name": "Inspirational & Healing Films", "size": "3.82TB", "spec": ""},
          {"name": "LGBTQ+ Themed Films", "size": "9.38TB", "spec": ""},
          {"name": "Twist Ending Feature Films", "size": "1.13TB", "spec": ""},
          {"name": "Modern Military Feature Films", "size": "1.53TB", "spec": ""}
        ]
      },
      {
        "name": "Annual Selection",
        "nameCn": "Yearly Curated Movie Picks",
        "items": [
          {"name": "2021 Douban Year-End Movie Rankings", "size": "830GB", "spec": ""},
          {"name": "2022 Douban Year-End Movie Rankings", "size": "1.51TB", "spec": ""},
          {"name": "BBC Top 20 Films of 2024", "size": "1.54TB", "spec": ""},
          {"name": "IMDb Top 20 Films of 2024", "size": "2.58TB", "spec": ""},
          {"name": "TIME Top 10 Films of 2024", "size": "563.97GB", "spec": ""},
          {"name": "Film Comment Top 20 Films of 2024", "size": "592.35GB", "spec": ""},
          {"name": "NYT Top 10 Films of 2024", "size": "431GB", "spec": ""},
          {"name": "The Economist Top 15 Films of 2024", "size": "1.38TB", "spec": ""},
          {"name": "Best Feature Films Compilation 2024", "size": "2.91TB", "spec": ""},
          {"name": "2025 New Release Film Collection", "size": "6.49TB", "spec": ""}
        ]
      },
      {
        "name": "Classic Cinema",
        "nameCn": "Vintage Films & Restored Classics",
        "items": [
          {"name": "1100 Vintage Classic Films", "size": "2.14TB", "spec": ""},
          {"name": "1905 Vintage Chinese Film Archive", "size": "992GB", "spec": ""},
          {"name": "Shanghai Dubbed Classic Foreign Films Collection", "size": "754GB", "spec": ""},
          {"name": "CCTV-6 Film Compilation", "size": "3.67TB", "spec": ""},
          {"name": "24 Chinese State Film Studios Complete Archive", "size": "2.31TB", "spec": ""},
          {"name": "Ken Takakura Film Complete Works", "size": "1.03TB", "spec": ""}
        ]
      },
      {
        "name": "Animation & Streaming",
        "nameCn": "Animation & Streaming Original Content",
        "items": [
          {"name": "1000 Animated Feature Films Collection", "size": "9.7TB", "spec": ""},
          {"name": "Netflix Original Content Library", "size": "21.91TB", "spec": ""},
          {"name": "Anime Blu-ray Original Disc Archive", "size": "40.49TB", "spec": ""},
          {"name": "American TV Series Collection (FRDS Release)", "size": "10.32TB", "spec": ""},
          {"name": "TVB GoTV Complete Archive", "size": "28.28TB", "spec": ""},
          {"name": "HD Jade Channel Content Archive", "size": "18.7TB", "spec": ""}
        ]
      },
      {
        "name": "Home Theater Demo",
        "nameCn": "Home Theater Demo & Test Content",
        "items": [
          {"name": "Dolby Vision Tutorial Demo Disc", "size": "645GB", "spec": ""},
          {"name": "4K Test & Demo Reel Compilation", "size": "1.29TB", "spec": ""},
          {"name": "Home Theater Calibration Test Pack", "size": "591GB", "spec": ""},
          {"name": "IMAX Demo Reel Collection", "size": "1.35TB", "spec": ""},
          {"name": "Dolby Vision Feature Film Library", "size": "2.15TB", "spec": ""}
        ]
      },
      {
        "name": "Mega Library",
        "nameCn": "Ultimate Mass Media Archive",
        "items": [
          {"name": "All-in-One Premium Media Resource Library", "size": "2224TB", "spec": ""},
          {"name": "BD-ISO Master Resource Repository", "size": "2.24PB", "spec": ""},
          {"name": "Mass Movie Compilation Pack", "size": "120TB", "spec": ""},
          {"name": "570TB Duplicate-Free Movie Archive", "size": "570TB", "spec": ""},
          {"name": "ISO Original Disc Video & Film Compilation", "size": "134.84TB", "spec": ""},
          {"name": "Consolidated Compilation Volume 14", "size": "1.58TB", "spec": ""},
          {"name": "Beast Series Premium Collection", "size": "4.7TB", "spec": ""}
        ]
      }
    ]
  },
  "tv": {
    "name": "Global Television Series Collection",
    "icon": "📺",
    "route": "cat-tv",
    "subgroups": [
      {
        "name": "Global Classic Rankings",
        "nameCn": "World Acclaimed TV Series Rankings",
        "items": [
          {"name": "Global Top 100 Premium Television Series", "size": "8.72TB", "spec": ""},
          {"name": "Curated Top 100 Chinese Television Series", "size": "6.31TB", "spec": ""},
          {"name": "Netflix Award-Winning Exclusive Series", "size": "5.94TB", "spec": ""},
          {"name": "HBO Prestige Drama Complete Collection", "size": "7.65TB", "spec": ""},
          {"name": "Apple TV+ Premium Original Series", "size": "4.22TB", "spec": ""},
          {"name": "Disney+ Exclusive Original Series Library", "size": "4.05TB", "spec": ""}
        ]
      },
      {
        "name": "Chinese Television Series Collection",
        "nameCn": "Chinese TV Drama Archive",
        "items": [
          {"name": "Organized Scraped Chinese TV Drama Library", "size": "112.79TB", "spec": ""},
          {"name": "Chinese Television Series Mega Compilation", "size": "77.49TB", "spec": ""},
          {"name": "HD Chinese Episodic Dramas (3869 Titles)", "size": "8.43TB", "spec": ""},
          {"name": "iQiyi Mist Theater (4K WEB-DL)", "size": "1.36TB", "spec": ""},
          {"name": "X Platform Exclusive Dramas (4K WEB-DL)", "size": "464GB", "spec": ""},
          {"name": "Chinese Anti-Japanese War Drama Collection", "size": "2.19TB", "spec": ""},
          {"name": "Qiong Yao Romance Drama Complete Works", "size": "4.48TB", "spec": ""}
        ]
      },
      {
        "name": "European & American Television Series",
        "nameCn": "US & European TV Drama Archive",
        "items": [
          {"name": "Scraped Western TV Series Library", "size": "130TB", "spec": ""},
          {"name": "Western TV Series Organized by Release Year", "size": "120TB", "spec": ""},
          {"name": "Western TV Series Blu-ray Original Disc Library", "size": "23.30TB", "spec": ""},
          {"name": "Netflix International Original Series", "size": "5.03TB", "spec": ""},
          {"name": "LeagueNF WEB-DL TV Series Pack", "size": "8.68TB", "spec": ""}
        ]
      },
      {
        "name": "Hong Kong & Taiwan Television Series",
        "nameCn": "Hong Kong & Taiwan TV Drama Archive",
        "items": [
          {"name": "Hong Kong, Japan, South Korea & International TV Series (Blu-ray Original Disc)", "size": "116.47TB", "spec": ""},
          {"name": "TVB Complete Television Series Archive", "size": "73TB", "spec": ""},
          {"name": "GO TV TVB Exclusive Library", "size": "28.28TB", "spec": ""},
          {"name": "HD Jade Channel Program Archive", "size": "18.70TB", "spec": ""},
          {"name": "MYTVSUPER Full Content Library", "size": "33.07TB", "spec": ""},
          {"name": "Mandarin Dubbed Hong Kong Drama Collection", "size": "17.55TB", "spec": ""},
          {"name": "Asia Television Classic Complete Works", "size": "12.86TB", "spec": ""},
          {"name": "i-Cable HD Hong Kong Drama Pack", "size": "2.47TB", "spec": ""}
        ]
      },
      {
        "name": "Japanese & Korean Television Series",
        "nameCn": "Japanese & Korean TV Drama Archive",
        "items": [
          {"name": "South Korean Television Drama Collection", "size": "9.95TB", "spec": ""},
          {"name": "K-Drama Mega Compilation", "size": "63TB", "spec": ""},
          {"name": "K-Drama Resource Archive Pack", "size": "44.73TB", "spec": ""},
          {"name": "UHDTV 4K 60fps Korean Drama Library", "size": "19.91TB", "spec": ""},
          {"name": "K-Drama Compilation Volume 2", "size": "16.92TB", "spec": ""},
          {"name": "Mandarin Dubbed Korean Drama Collection", "size": "11.72TB", "spec": ""},
          {"name": "Consolidated K-Drama Library", "size": "9.21TB", "spec": ""}
        ]
      },
      {
        "name": "Japanese Television Series",
        "nameCn": "Japanese TV Drama Archive",
        "items": [
          {"name": "Japanese Drama Blu-ray Original Disc Library", "size": "8TB", "spec": ""},
          {"name": "Japanese & Korean Combined Drama Archive", "size": "24TB", "spec": ""},
          {"name": "Taiwanese Television Drama Collection", "size": "7.41TB", "spec": ""},
          {"name": "Taiwanese Drama Mega Compilation", "size": "24TB", "spec": ""},
          {"name": "KKTV Complete Program Archive", "size": "11.58TB", "spec": ""}
        ]
      },
      {
        "name": "Thai Television Series",
        "nameCn": "Thai Drama Curated Collection",
        "items": [
          {"name": "Premium Thai Drama Selection", "size": "3.15TB", "spec": ""}
        ]
      },
      {
        "name": "Streaming Platform Original Series",
        "nameCn": "SVOD Platform Exclusive Drama Library",
        "items": [
          {"name": "Netflix Original Series Complete Archive", "size": "22.63TB", "spec": ""},
          {"name": "Disney+ Original Content Library", "size": "12.34TB", "spec": ""},
          {"name": "Apple TV+ Original Series Archive", "size": "9.97TB", "spec": ""},
          {"name": "HBO Original Prestige Drama Library", "size": "14.82TB", "spec": ""},
          {"name": "Our Exclusive Original Series", "size": "1.36TB", "spec": ""},
          {"name": "4K WEB-DL Premium Exclusive Titles", "size": "745GB", "spec": ""}
        ]
      },
      {
        "name": "High Bitrate Premium Releases",
        "nameCn": "High Bitrate Master Quality Content",
        "items": [
          {"name": "High Bitrate TV Drama Compilation", "size": "126TB", "spec": ""},
          {"name": "High Bitrate TV Drama Compilation Volume 2", "size": "27.44TB", "spec": ""},
          {"name": "Master Quality Original Disc Drama Library", "size": "23TB", "spec": ""},
          {"name": "Fully Scraped Television Series Archive", "size": "66TB", "spec": ""},
          {"name": "Packaged Premium TV Drama Library", "size": "31.12TB", "spec": ""}
        ]
      },
      {
        "name": "Tokusatsu & Animation",
        "nameCn": "Tokusatsu & Anime Series",
        "items": [
          {"name": "Ultraman Blu-ray Original Disc Complete Works", "size": "6.93TB", "spec": ""},
          {"name": "Mandarin Dubbed Ultraman Full Collection", "size": "946GB", "spec": ""},
          {"name": "VCB Encoded Anime Series Library", "size": "638GB", "spec": ""}
        ]
      }
    ]
  },
  "anime": {
    "name": "Global Anime Rankings & Curated Collection",
    "icon": "🎌",
    "route": "cat-anime",
    "subgroups": [
      {
        "name": "Essential Anime Library (400TB Total)",
        "nameCn": "Must-Watch Anime Master Archive (400TB)",
        "items": [
          {"name": "All-in-One Anime Resource Repository", "size": "40TB", "spec": ""},
          {"name": "Completed Chinese Animation Collection", "size": "2.93TB", "spec": ""},
          {"name": "Dragon Ball Complete Franchise Collection", "size": "3.5TB", "spec": ""},
          {"name": "Pixar Animated Feature Collection", "size": "1.16TB", "spec": ""},
          {"name": "Pixar & Disney Animated Master Set", "size": "3.72TB", "spec": ""},
          {"name": "Hayao Miyazaki Complete Film Works", "size": "664GB", "spec": ""},
          {"name": "Children's Video & Animation Library", "size": "458GB", "spec": ""}
        ]
      },
      {
        "name": "Japanese Anime Section",
        "nameCn": "Japanese Anime Exclusive Archive",
        "items": [
          {"name": "One Piece (Updated to Episode 1152)", "size": "9.87TB", "spec": ""},
          {"name": "Naruto Complete Collection (TV Series + All Movies)", "size": "11.46TB", "spec": ""},
          {"name": "Crayon Shin-chan Original Japanese Disc (1993-2023)", "size": "1TB", "spec": ""},
          {"name": "Doraemon Theatrical Films (Visual REMUX)", "size": "7.05TB", "spec": ""},
          {"name": "Detective Conan All Theatrical Features", "size": "8.68TB", "spec": ""},
          {"name": "Dragon Ball Full Saga Collection", "size": "4.28TB", "spec": ""},
          {"name": "Attack on Titan (Organized & Scraped Ready)", "size": "826GB", "spec": ""},
          {"name": "Demon Slayer (TV Series + Theatrical Films)", "size": "7.59TB", "spec": ""},
          {"name": "One-Punch Man Complete Series", "size": "4.31TB", "spec": ""},
          {"name": "JoJo's Bizarre Adventure Full Collection", "size": "6.48TB", "spec": ""},
          {"name": "Slam Dunk Complete Works", "size": "5.36TB", "spec": ""},
          {"name": "Gintama Full Series Archive", "size": "8.15TB", "spec": ""},
          {"name": "Neon Genesis Evangelion Complete Series", "size": "6.14TB", "spec": ""},
          {"name": "Rebuild of Evangelion Theatrical Tetralogy", "size": "5.07TB", "spec": ""}
        ]
      },
      {
        "name": "Chinese Animation Section",
        "nameCn": "Chinese Original Animation Archive",
        "items": [
          {"name": "Completed Chinese Animation Mega Collection", "size": "3.3TB", "spec": ""},
          {"name": "Boonie Bears All Animated Films", "size": "1.68TB", "spec": ""},
          {"name": "Boonie Bears Animated Series", "size": "3.39TB", "spec": ""},
          {"name": "Pleasant Goat and Big Big Wolf Complete Works", "size": "4.06TB", "spec": ""},
          {"name": "Legend of the Seven Stars", "size": "34.48GB", "spec": ""},
          {"name": "Nezha Animated Feature Collection", "size": "748GB", "spec": ""},
          {"name": "Havoc in Heaven Restored Version", "size": "326GB", "spec": ""},
          {"name": "Monkey King: Hero Is Back", "size": "892GB", "spec": ""}
        ]
      },
      {
        "name": "Western Animation Section",
        "nameCn": "European & American Animation Archive",
        "items": [
          {"name": "Pixar Animated Feature Collection", "size": "1.16TB", "spec": ""},
          {"name": "Disney Animated Canon Collection", "size": "9.73TB", "spec": ""},
          {"name": "Ice Age Complete Franchise", "size": "3.26TB", "spec": ""},
          {"name": "Monsters, Inc. Complete Collection", "size": "2.38TB", "spec": ""},
          {"name": "Toy Story Full Saga", "size": "4.15TB", "spec": ""},
          {"name": "Zootopia Master Edition", "size": "1.42TB", "spec": ""},
          {"name": "Kung Fu Panda Full Franchise", "size": "2.87TB", "spec": ""},
          {"name": "How to Train Your Dragon Trilogy", "size": "3.16TB", "spec": ""},
          {"name": "Despicable Me Franchise", "size": "2.31TB", "spec": ""},
          {"name": "Minions Complete Collection", "size": "2.08TB", "spec": ""},
          {"name": "Spider-Man: Across the Spider-Verse Collection", "size": "3.84TB", "spec": ""}
        ]
      },
      {
        "name": "Animated Feature Film Section",
        "nameCn": "Animated Motion Picture Archive",
        "items": [
          {"name": "All Animated Feature Film Master Library", "size": "400TB", "spec": ""},
          {"name": "Animated Film Resource Repository", "size": "40TB", "spec": ""},
          {"name": "Animated Feature Mega Compilation", "size": "17.26TB", "spec": ""},
          {"name": "Theatrical Anime Compilation Pack", "size": "12.78TB", "spec": ""},
          {"name": "Blu-ray Rip Animated Collection", "size": "5.49TB", "spec": ""},
          {"name": "UHD Animated Feature Film Library", "size": "22.89TB", "spec": ""}
        ]
      },
      {
        "name": "Iconic IP Archive",
        "nameCn": "Legendary Anime Franchise Library",
        "items": [
          {"name": "One Piece Complete Saga", "size": "9.06TB", "spec": ""},
          {"name": "Naruto Full Collection", "size": "10.28TB", "spec": ""},
          {"name": "Dragon Ball Entire Franchise", "size": "7.35TB", "spec": ""},
          {"name": "Doraemon Complete Works", "size": "6.59TB", "spec": ""},
          {"name": "Crayon Shin-chan Full Archive", "size": "5.48TB", "spec": ""},
          {"name": "Detective Conan Complete Library", "size": "11.76TB", "spec": ""},
          {"name": "Neon Genesis Evangelion Full Works", "size": "7.04TB", "spec": ""},
          {"name": "JoJo's Bizarre Adventure Entire Saga", "size": "7.93TB", "spec": ""},
          {"name": "Demon Slayer Full Collection", "size": "9.58TB", "spec": ""},
          {"name": "Attack on Titan Complete Series", "size": "6.96TB", "spec": ""},
          {"name": "Boonie Bears Full Archive", "size": "4.83TB", "spec": ""},
          {"name": "Pleasant Goat Complete Works", "size": "4.35TB", "spec": ""},
          {"name": "Ultraman All Series Collection", "size": "10.14TB", "spec": ""},
          {"name": "Kamen Rider Complete Franchise", "size": "8.79TB", "spec": ""}
        ]
      },
      {
        "name": "Ongoing Series Update Section",
        "nameCn": "Currently Airing Anime Update Library",
        "items": [
          {"name": "All Ongoing Seasonal Anime Releases", "size": "1.74TB", "spec": ""},
          {"name": "One Piece (Updated to Episode 1152)", "size": "4.82TB", "spec": ""},
          {"name": "The Misfit of Demon King Academy Season 2", "size": "920GB", "spec": ""},
          {"name": "Cat's Eye Complete Series", "size": "760GB", "spec": ""},
          {"name": "Hell's Paradise: Jigokuraku", "size": "1.23TB", "spec": ""},
          {"name": "Rakshasa Street Complete Seasons", "size": "1.68TB", "spec": ""},
          {"name": "Magician Kurupusi", "size": "840GB", "spec": ""},
          {"name": "Fire Bird", "size": "650GB", "spec": ""},
          {"name": "Fire Force Complete Series", "size": "1.92TB", "spec": ""},
          {"name": "Sofia the First", "size": "2.75TB", "spec": ""},
          {"name": "Nai Long Animated Series", "size": "620GB", "spec": ""},
          {"name": "Percy & Pip Animated Shorts", "size": "580GB", "spec": ""},
          {"name": "Rabbit 4K Animated Collection", "size": "1.36TB", "spec": ""},
          {"name": "Homeward Bound Animated Series", "size": "870GB", "spec": ""}
        ]
      },
      {
        "name": "Tokusatsu Exclusive Section",
        "nameCn": "Tokusatsu Live-Action Archive",
        "items": [
          {"name": "Ultraman Entire Franchise Collection", "size": "12.78TB", "spec": ""},
          {"name": "Kamen Rider Complete Series Archive", "size": "9.96TB", "spec": ""},
          {"name": "Super Sentai Full Collection", "size": "3.35TB", "spec": ""},
          {"name": "Godzilla Animated Features", "size": "2.84TB", "spec": ""}
        ]
      },
      {
        "name": "High-Definition Original Disc Section",
        "nameCn": "HD Original Disc Media Library",
        "items": [
          {"name": "Blu-ray Original Disc Anime Pack", "size": "18.72TB", "spec": ""},
          {"name": "Lossless REMUX Anime Collection", "size": "11.95TB", "spec": ""},
          {"name": "Ultra HD Anime Compilation", "size": "15.16TB", "spec": ""},
          {"name": "ISO Original Disc Anime Archive", "size": "12.47TB", "spec": ""},
          {"name": "Trimmed & Scraped Anime Library", "size": "9.94TB", "spec": ""}
        ]
      }
    ]
  },
  "variety": {
    "name": "Global Variety Shows & Short Drama Collection",
    "icon": "🎭",
    "route": "cat-variety",
    "subgroups": [
      {
        "name": "Chinese Art & Variety Section",
        "nameCn": "Chinese Variety & Art Program Archive",
        "items": [
          {"name": "Weekly Updated Variety Mega Compilation", "size": "21.9TB", "spec": ""},
          {"name": "Chinese Variety Show Resource Pack", "size": "8.35TB", "spec": ""},
          {"name": "Variety Show Consolidated Library", "size": "1.12TB", "spec": ""},
          {"name": "Where Are We Going, Dad? Full Seasons", "size": "1.46TB", "spec": ""},
          {"name": "Singer China Full Series Archive", "size": "2.18TB", "spec": ""},
          {"name": "The Treasured Voice (Updated to Season 6)", "size": "1.16TB", "spec": ""},
          {"name": "Shining Days (Updated to Season 4)", "size": "890GB", "spec": ""},
          {"name": "Keep Running 2025 Season", "size": "1.27TB", "spec": ""},
          {"name": "Happy Life Variety Series (2020-Present)", "size": "1.69TB", "spec": ""},
          {"name": "Stand-Up Comedy King Season", "size": "746GB", "spec": ""},
          {"name": "Amazing Comedians (Ongoing Update)", "size": "994GB", "spec": ""},
          {"name": "Amazing Comedians Season 2", "size": "1.07TB", "spec": ""},
          {"name": "Feast of Flavors Culinary Show", "size": "668GB", "spec": ""},
          {"name": "Three-Michelin Star Lunch Show", "size": "572GB", "spec": ""},
          {"name": "Kangsi Coming Full Episodes", "size": "2.29TB", "spec": ""},
          {"name": "A Bite of China Complete Four Seasons", "size": "1.18TB", "spec": ""},
          {"name": "Footage & Guide Videos for All 318 China 5A Scenic Spots + 185 Aerial Footage Clips", "size": "2.71TB", "spec": ""},
          {"name": "Hong Kong & Taiwan Variety Show Archive", "size": "1.78TB", "spec": ""},
          {"name": "Divas Hit the Road (2014-Present)", "size": "1.36TB", "spec": ""},
          {"name": "Asia Super Young 2024 Full Season", "size": "976GB", "spec": ""},
          {"name": "Mars Intelligence Agency (2016-Present)", "size": "1.68TB", "spec": ""}
        ]
      },
      {
        "name": "International Variety Section",
        "nameCn": "Overseas Variety Show Archive",
        "items": [
          {"name": "Netflix High-Score Variety Mega Pack", "size": "26.32TB", "spec": ""},
          {"name": "Single's Inferno Seasons 1-4 Complete", "size": "894GB", "spec": ""},
          {"name": "Love Is Blind: Germany", "size": "446GB", "spec": ""},
          {"name": "Physical: 100 Season 2", "size": "408GB", "spec": ""},
          {"name": "Guo Degang 30th Anniversary Cross-Talk Special (Overseas Edition)", "size": "742GB", "spec": ""}
        ]
      },
      {
        "name": "Gala & Ceremony Section",
        "nameCn": "Annual Galas & Award Ceremonies",
        "items": [
          {"name": "CCTV Spring Festival Gala Complete Collection (1983-2024)", "size": "4.57TB", "spec": ""},
          {"name": "2025 CCTV Spring Festival Gala", "size": "420GB", "spec": ""},
          {"name": "2025 Provincial Satellite TV Spring Festival Galas Compilation", "size": "2.26TB", "spec": ""},
          {"name": "Bilibili New Year's Eve Gala 2025", "size": "1.63TB", "spec": ""}
        ]
      },
      {
        "name": "Live Music Performance Section",
        "nameCn": "Live Concert & Stage Performance Archive",
        "items": [
          {"name": "Singer China Full Series Archive", "size": "2.18TB", "spec": ""},
          {"name": "Guo Degang 30th Anniversary Cross-Talk Live Special", "size": "1.38TB", "spec": ""},
          {"name": "Happy Life Live Concert Footage", "size": "1.19TB", "spec": ""},
          {"name": "Live Concert Resource Library (Continuous Expansion)", "size": "1.12TB", "spec": ""}
        ]
      },
      {
        "name": "Sports Events Section",
        "nameCn": "Professional Sports Event Archive",
        "items": [
          {"name": "NBA Finals Full Game Footage (1991-2020)", "size": "698GB", "spec": ""},
          {"name": "FIFA World Cup Full Match Archive", "size": "576GB", "spec": ""},
          {"name": "Olympic Games Event Footage Archive", "size": "384GB", "spec": ""}
        ]
      },
      {
        "name": "Reality Show Section",
        "nameCn": "Unscripted Reality TV Archive",
        "items": [
          {"name": "Where Are We Going, Dad?", "size": "1.46TB", "spec": ""},
          {"name": "Keep Running", "size": "1.27TB", "spec": ""},
          {"name": "Divas Hit the Road", "size": "1.36TB", "spec": ""},
          {"name": "Asia Super Young", "size": "976GB", "spec": ""},
          {"name": "Mars Intelligence Agency", "size": "1.68TB", "spec": ""},
          {"name": "Happy Life Variety Series", "size": "1.69TB", "spec": ""},
          {"name": "Single's Inferno", "size": "894GB", "spec": ""},
          {"name": "Love Is Blind Global Editions", "size": "645GB", "spec": ""}
        ]
      },
      {
        "name": "Food & Travel Section",
        "nameCn": "Culinary & Travel Documentary Library",
        "items": [
          {"name": "A Bite of China", "size": "1.18TB", "spec": ""},
          {"name": "Footage & Guide Videos for All 318 China 5A Scenic Spots", "size": "2.71TB", "spec": ""},
          {"name": "Kangsi Coming Culinary Episodes Compilation", "size": "816GB", "spec": ""},
          {"name": "Divas Hit the Road Travel Episodes", "size": "1.36TB", "spec": ""}
        ]
      },
      {
        "name": "Short Drama Section",
        "nameCn": "Vertical Short Drama Archive",
        "items": [
          {"name": "73 Engaging Short Dramas Compilation", "size": "654GB", "spec": "4K"},
          {"name": "Short Drama Resource Library (Ongoing Updates)", "size": "612GB", "spec": ""},
          {"name": "1000 Hit Short Dramas Mega Collection", "size": "1.3TB", "spec": ""}
        ]
      },
      {
        "name": "Thematic Premium Collection",
        "nameCn": "Curated Thematic Media Packs",
        "items": [
          {"name": "Engaging Short Drama Mega Library", "size": "5.96TB", "spec": ""},
          {"name": "1000 Viral Short Dramas Compilation", "size": "4.26TB", "spec": ""},
          {"name": "Hong Kong & Taiwan Variety Highlight Compilation", "size": "2.58TB", "spec": ""},
          {"name": "Netflix Premium Variety Selection", "size": "4.37TB", "spec": ""},
          {"name": "Spring Festival Gala Consolidated Library", "size": "2.34TB", "spec": ""},
          {"name": "Live Concert Mega Compilation", "size": "2.89TB", "spec": ""}
        ]
      }
    ]
  },
  "concert": {
    "name": "Global Live Concert Collection",
    "icon": "🎤",
    "route": "cat-concert",
    "subgroups": [
      {
        "name": "Official Concert Original Disc Archive",
        "nameCn": "Authorized Live Blu-ray Original Disc Library",
        "items": [
          {"name": "Live Concert Original Disc Mega Archive", "size": "820TB", "spec": ""},
          {"name": "Consolidated Live Concert Compilation", "size": "7.5TB", "spec": ""},
          {"name": "Live Concert Full Resource Library", "size": "58TB", "spec": ""},
          {"name": "Premium Live Original Disc Collection", "size": "90.9TB", "spec": ""},
          {"name": "Live Concert Blu-ray Original Disc Pack", "size": "9.54TB", "spec": ""},
          {"name": "Chinese Mandarin Pop Live Concert Archive", "size": "13TB", "spec": ""},
          {"name": "Hong Kong & Taiwan Vocalist Live Collection", "size": "2.55TB", "spec": ""},
          {"name": "C AllStar Live Collection 2021", "size": "346GB", "spec": ""},
          {"name": "C AllStar Live Collection 2017", "size": "308GB", "spec": ""}
        ]
      },
      {
        "name": "Chinese Mandarin Pop Concerts",
        "nameCn": "Mandarin Chinese Vocalists Live Archive",
        "items": [
          {"name": "Sorted By Individual Artists:", "size": "136GB", "spec": ""},
          {"name": "Jolin Tsai Live Full Collection", "size": "3.82TB", "spec": ""},
          {"name": "Jacky Cheung Live Complete Works", "size": "6.75TB", "spec": ""},
          {"name": "Jay Chou World Tour Archive", "size": "8.96TB", "spec": ""},
          {"name": "Mayday Full Live Concert Library", "size": "7.43TB", "spec": ""},
          {"name": "Hins Cheung Live Collection", "size": "4.28TB", "spec": ""},
          {"name": "Eason Chan Live Complete Archive", "size": "7.62TB", "spec": ""},
          {"name": "Andy Lau Live Concert Works", "size": "5.36TB", "spec": ""},
          {"name": "Leslie Cheung Live Legacy Collection", "size": "3.75TB", "spec": ""},
          {"name": "Alan Tam Live Full Archive", "size": "4.12TB", "spec": ""},
          {"name": "George Lam Live Concert Library", "size": "2.86TB", "spec": ""},
          {"name": "Anita Mui Live Complete Works", "size": "3.25TB", "spec": ""},
          {"name": "Leon Lai Live Concert Collection", "size": "2.94TB", "spec": ""},
          {"name": "Aaron Kwok Live Archive", "size": "3.18TB", "spec": ""},
          {"name": "Faye Wong Live Concert Complete Works", "size": "5.63TB", "spec": ""},
          {"name": "Karen Mok Live Collection", "size": "2.72TB", "spec": ""},
          {"name": "Joey Yung Live Full Archive", "size": "2.36TB", "spec": ""},
          {"name": "Miriam Yeung Live Concert Works", "size": "2.48TB", "spec": ""},
          {"name": "Leo Ku Live Collection", "size": "1.96TB", "spec": ""},
          {"name": "Hacken Lee Live Archive", "size": "2.27TB", "spec": ""},
          {"name": "Sammi Cheng Live Concert Library", "size": "3.05TB", "spec": ""},
          {"name": "Fish Leong Live Complete Works", "size": "2.61TB", "spec": ""},
          {"name": "G.E.M. Live Concert Archive", "size": "3.42TB", "spec": ""},
          {"name": "JJ Lin World Tour Collection", "size": "4.85TB", "spec": ""},
          {"name": "David Tao Live Concert Works", "size": "2.19TB", "spec": ""},
          {"name": "Sandy Lam Live Full Archive", "size": "2.73TB", "spec": ""},
          {"name": "Jeff Chang Live Concert Library", "size": "2.06TB", "spec": ""},
          {"name": "A-Mei Live Complete Works", "size": "3.28TB", "spec": ""},
          {"name": "Wu Bai Live Concert Archive", "size": "2.65TB", "spec": ""},
          {"name": "Sam Hui Live Legacy Collection", "size": "1.84TB", "spec": ""},
          {"name": "Beyond Live Complete Works", "size": "3.76TB", "spec": ""},
          {"name": "Grasshopper Live Concert Library", "size": "1.62TB", "spec": ""},
          {"name": "The Wynners Live Archive", "size": "1.48TB", "spec": ""}
        ]
      },
      {
        "name": "Japanese & Korean Concerts",
        "nameCn": "J-Pop & K-Pop Live Concert Archive",
        "items": [
          {"name": "Ayumi Hamasaki Full Live Collection", "size": "7.36TB", "spec": ""},
          {"name": "Namie Amuro Live Complete Works", "size": "6.82TB", "spec": ""},
          {"name": "Hikaru Utada Live Archive", "size": "5.47TB", "spec": ""},
          {"name": "Mai Kuraki Live Concert Library", "size": "4.29TB", "spec": ""},
          {"name": "Mika Nakashima Live Collection", "size": "3.86TB", "spec": ""},
          {"name": "Kana Nishino Live Full Works", "size": "3.15TB", "spec": ""},
          {"name": "MISIA Live Concert Archive", "size": "2.94TB", "spec": ""},
          {"name": "LiSA Live Complete Works", "size": "3.68TB", "spec": ""},
          {"name": "Perfume Live Concert Library", "size": "2.72TB", "spec": ""},
          {"name": "BABYMETAL Live Archive", "size": "4.16TB", "spec": ""},
          {"name": "X JAPAN Live Complete Works", "size": "5.83TB", "spec": ""},
          {"name": "L'Arc~en~Ciel Live Concert Collection", "size": "4.65TB", "spec": ""},
          {"name": "B'z Live Full Archive", "size": "8.27TB", "spec": ""},
          {"name": "GLAY Live Concert Library", "size": "3.52TB", "spec": ""},
          {"name": "Mr.Children Live Complete Works", "size": "6.38TB", "spec": ""},
          {"name": "Radwimps Live Archive", "size": "4.75TB", "spec": ""},
          {"name": "ONE OK ROCK Live Concert Collection", "size": "5.26TB", "spec": ""},
          {"name": "AKB48 Group Live Full Archive", "size": "9.63TB", "spec": ""},
          {"name": "SKE48 Live Collection", "size": "4.37TB", "spec": ""},
          {"name": "NMB48 Live Concert Library", "size": "3.92TB", "spec": ""},
          {"name": "Nogizaka46 Live Complete Works", "size": "7.15TB", "spec": ""},
          {"name": "Girls' Generation Live Archive", "size": "6.84TB", "spec": ""},
          {"name": "TWICE World Tour Collection", "size": "8.72TB", "spec": ""},
          {"name": "BLACKPINK Live Full Works", "size": "9.16TB", "spec": ""},
          {"name": "Apink Live Concert Library", "size": "3.28TB", "spec": ""},
          {"name": "T-ARA Live Complete Archive", "size": "4.65TB", "spec": ""},
          {"name": "BIGBANG Live Concert Collection", "size": "7.93TB", "spec": ""},
          {"name": "BTS World Tour Full Archive", "size": "11.25TB", "spec": ""},
          {"name": "IU Live Complete Works", "size": "6.48TB", "spec": ""},
          {"name": "All Content Sorted By Individual Vocalists.", "size": "196GB", "spec": ""},
          {"name": "Example Structure:", "size": "46GB", "spec": ""},
          {"name": "Ayumi Hamasaki", "size": "7.36TB", "spec": ""},
          {"name": "2006 Japan Arena Tour", "size": "46GB", "spec": ""},
          {"name": "2008-2009 Countdown Live", "size": "52GB", "spec": ""},
          {"name": "2009-2010 Countdown Live", "size": "48GB", "spec": ""},
          {"name": "2012 Arena Tour", "size": "55GB", "spec": ""},
          {"name": "2014 Arena Tour", "size": "51GB", "spec": ""},
          {"name": "2015 TA Tour", "size": "63GB", "spec": ""},
          {"name": "2016 Arena Tour", "size": "58GB", "spec": ""},
          {"name": "2019-2020 Nationwide Tour", "size": "72GB", "spec": ""},
          {"name": "Just the Beginning Tour", "size": "45GB", "spec": ""},
          {"name": "Feel the Love Tour", "size": "39GB", "spec": ""},
          {"name": "...", "size": "12GB", "spec": ""},
          {"name": "Subfolder Retention Per Artist", "size": "72GB", "spec": ""},
          {"name": "1080P Blu-ray Original Disc", "size": "2.86TB", "spec": ""},
          {"name": "4K Blu-ray Original Disc", "size": "3.42TB", "spec": ""},
          {"name": "Total Storage Capacity", "size": "246GB", "spec": ""}
        ]
      },
      {
        "name": "Western Pop Concerts",
        "nameCn": "Western Vocalists Live Concert Archive",
        "items": [
          {"name": "Michael Jackson Full Live Legacy Archive", "size": "12.75TB", "spec": ""},
          {"name": "Madonna World Tour Complete Collection", "size": "9.63TB", "spec": ""},
          {"name": "Lady Gaga Live Concert Library", "size": "7.28TB", "spec": ""},
          {"name": "Taylor Swift Eras & World Tour Archive", "size": "16.32TB", "spec": ""},
          {"name": "Coldplay Full Live Concert Works", "size": "11.86TB", "spec": ""},
          {"name": "Phil Collins Live Complete Archive", "size": "4.25TB", "spec": ""},
          {"name": "Kraftwerk Live Concert Collection", "size": "3.76TB", "spec": ""},
          {"name": "Tony Bennett Live Legacy Works", "size": "2.94TB", "spec": ""},
          {"name": "Andrea Bocelli Live Opera & Concert Archive", "size": "5.68TB", "spec": ""},
          {"name": "David Foster Live Piano Concert Library", "size": "3.82TB", "spec": ""},
          {"name": "Hans Zimmer Live Film Score Concerts", "size": "6.27TB", "spec": ""},
          {"name": "Yanni Live Piano Concert Archive", "size": "4.36TB", "spec": ""},
          {"name": "Kenny G Saxophone Live Collection", "size": "3.15TB", "spec": ""},
          {"name": "The Rolling Stones Full Live Archive", "size": "8.72TB", "spec": ""},
          {"name": "Queen Live Concert Complete Works", "size": "10.65TB", "spec": ""},
          {"name": "Pink Floyd Live Legacy Library", "size": "9.28TB", "spec": ""},
          {"name": "Example Entry", "size": "58GB", "spec": ""},
          {"name": "Taylor Swift", "size": "16.32TB", "spec": ""},
          {"name": "1989 World Tour", "size": "1.35TB", "spec": ""},
          {"name": "Reputation Stadium Tour", "size": "1.62TB", "spec": ""},
          {"name": "The Eras Tour", "size": "2.87TB", "spec": ""},
          {"name": "The RED Tour", "size": "1.28TB", "spec": ""},
          {"name": "All Content Fully Preserved:", "size": "138GB", "spec": ""},
          {"name": "4K WEB HDR Rip", "size": "3.25TB", "spec": ""},
          {"name": "1080P Blu-ray Original Disc", "size": "4.68TB", "spec": ""},
          {"name": "Dolby Atmos Audio Track", "size": "2.16TB", "spec": ""},
          {"name": "HDR10 Video Format", "size": "1.92TB", "spec": ""},
          {"name": "DTS-HD Master Audio", "size": "2.35TB", "spec": ""},
          {"name": "Total Occupied Storage", "size": "204GB", "spec": ""}
        ]
      },
      {
        "name": "Symphony & Classical Music Concerts",
        "nameCn": "Symphonic & Classical Orchestral Performances",
        "items": [
          {"name": "Berliner Philharmoniker Complete Archive", "size": "8.62TB", "spec": ""},
          {"name": "Wiener Philharmoniker Live Collection", "size": "9.75TB", "spec": ""},
          {"name": "Royal Concertgebouw Orchestra Performances", "size": "6.38TB", "spec": ""},
          {"name": "Royal Opera House London Stage Works", "size": "7.26TB", "spec": ""},
          {"name": "Wolfgang Amadeus Mozart Orchestral Works", "size": "5.13TB", "spec": ""},
          {"name": "Ludwig van Beethoven Symphonic Complete Works", "size": "5.87TB", "spec": ""},
          {"name": "Richard Wagner Operatic Cycle Archive", "size": "4.62TB", "spec": ""},
          {"name": "Opera Full Stage Performances", "size": "8.35TB", "spec": ""},
          {"name": "Ballet Stage Performances Collection", "size": "7.96TB", "spec": ""},
          {"name": "Musical Theatre Stage Archive", "size": "6.84TB", "spec": ""},
          {"name": "Reference Example:", "size": "36GB", "spec": ""},
          {"name": "Hans Zimmer", "size": "4.26TB", "spec": ""},
          {"name": "John Williams Film Score Concerts", "size": "3.85TB", "spec": ""},
          {"name": "Andrea Bocelli Vocal Concerts", "size": "3.62TB", "spec": ""},
          {"name": "David Foster Piano Concerts", "size": "2.94TB", "spec": ""},
          {"name": "Yanni Instrumental Concerts", "size": "3.28TB", "spec": ""},
          {"name": "Kenny G Saxophone Performances", "size": "2.76TB", "spec": ""}
        ]
      },
      {
        "name": "Music Festivals",
        "nameCn": "Annual Music Festival Performances",
        "items": [
          {"name": "Vienna New Year's Concert Complete Collection", "size": "724GB", "spec": ""},
          {"name": "2002 Edition", "size": "34.5GB", "spec": ""},
          {"name": "2009 Edition", "size": "36.2GB", "spec": ""},
          {"name": "2011 Edition", "size": "33.8GB", "spec": ""},
          {"name": "2012 Edition", "size": "35.1GB", "spec": ""},
          {"name": "2013 Edition", "size": "32.6GB", "spec": ""},
          {"name": "2014 Edition", "size": "37.5GB", "spec": ""},
          {"name": "2015 Edition", "size": "34.9GB", "spec": ""},
          {"name": "2016 Edition", "size": "36.3GB", "spec": ""},
          {"name": "2017 Edition", "size": "35.7GB", "spec": ""},
          {"name": "2018 Edition", "size": "38.2GB", "spec": ""},
          {"name": "2019 Edition", "size": "34.6GB", "spec": ""},
          {"name": "2020 Edition", "size": "39.1GB", "spec": ""},
          {"name": "2021 Edition", "size": "35.3GB", "spec": ""},
          {"name": "2022 Edition", "size": "36.8GB", "spec": ""},
          {"name": "2023 Edition", "size": "33.9GB", "spec": ""},
          {"name": "2024 Edition", "size": "37.2GB", "spec": ""},
          {"name": "All Annual Performances Consolidated", "size": "144GB", "spec": ""}
        ]
      },
      {
        "name": "Geographic Sorted Archive",
        "nameCn": "Live Shows Organized By Venue & Region",
        "items": [
          {"name": "Hong Kong Coliseum Live Performances", "size": "6.82TB", "spec": ""},
          {"name": "Tokyo Dome Live Concerts", "size": "7.36TB", "spec": ""},
          {"name": "Nippon Budokan Live Archive", "size": "5.94TB", "spec": ""},
          {"name": "Taipei Arena Live Collection", "size": "4.86TB", "spec": ""},
          {"name": "Royal Albert Hall London Performances", "size": "6.25TB", "spec": ""},
          {"name": "Musikverein Golden Hall Vienna Concerts", "size": "5.73TB", "spec": ""},
          {"name": "Madison Square Garden New York Live Shows", "size": "6.19TB", "spec": ""},
          {"name": "Structured Layout For Collector Convenience", "size": "108GB", "spec": ""}
        ]
      },
      {
        "name": "Exclusive Collector's Special Archive",
        "nameCn": "Premium Rare Collectible Live Content",
        "items": [
          {"name": "Reference Layout:", "size": "24GB", "spec": ""},
          {"name": "3D Format Live Concerts", "size": "4.26TB", "spec": ""},
          {"name": "4K WEB HDR Live Recordings", "size": "6.85TB", "spec": ""},
          {"name": "4K Blu-ray Original Disc Live Collection", "size": "8.72TB", "spec": ""},
          {"name": "Dolby Atmos Audio Exclusive Versions", "size": "5.36TB", "spec": ""},
          {"name": "Dolby Vision Live Concert Editions", "size": "6.28TB", "spec": ""},
          {"name": "Concert Documentary Footage", "size": "4.63TB", "spec": ""},
          {"name": "Backstage & Behind-The-Scenes Bonus Content", "size": "5.92TB", "spec": ""}
        ]
      }
    ]
  },
  "music": {
    "name": "Global Music Collection",
    "icon": "🎵",
    "route": "cat-music",
    "subgroups": [
      {
        "name": "Global Lossless Music Master Library (Comprehensive Resources)",
        "nameCn": "Global Lossless Music Master Library (Comprehensive Resources)",
        "items": [
          {"name": "Premium Master Collection · All Genres", "size": "3.27TB", "spec": ""},
          {"name": "Global Lossless Music Master Library (220,000 Tracks)", "size": "8.2TB", "spec": ""},
          {"name": "Global Lossless Music Master Library Volume 2", "size": "8.76TB", "spec": ""},
          {"name": "Global Lossless Music Compilation (90,000 Tracks)", "size": "6.35TB", "spec": ""},
          {"name": "Global Music Resource Repository", "size": "8TB", "spec": ""},
          {"name": "Curated Lossless Tracks (37,758 Tracks)", "size": "1.28TB", "spec": ""},
          {"name": "Music Compilation Pack", "size": "1.07TB", "spec": ""}
        ]
      },
      {
        "name": "Chinese Music Archive Collection",
        "nameCn": "Chinese Music Archive Collection",
        "items": [
          {"name": "Chinese Singers / Chinese Albums / Chinese Lossless Audio", "size": "1.92TB", "spec": ""},
          {"name": "Chinese Vocal Artists Catalogue", "size": "3.41TB", "spec": ""},
          {"name": "Chinese Artists CD Disc Library", "size": "4.36TB", "spec": ""},
          {"name": "Chinese Artists Lossless Disc Library (Edition 1)", "size": "6.70TB", "spec": "FLAC/APE｜20,990 Tracks"},
          {"name": "Chinese CD Music Compilation", "size": "2.63TB", "spec": "Capacity Pending"},
          {"name": "Chinese Playlists (Split Track Version)", "size": "690GB", "spec": ""},
          {"name": "Chinese Hi-Res High Fidelity Singles (1,611 Tracks)", "size": "2.04TB", "spec": "Hi-Res"},
          {"name": "Top 100 Mainland China Records (1979-2019) 100-CD Lossless Compilation", "size": "1.61TB", "spec": ""},
          {"name": "Top 200 Taiwanese Records (1975-2005) 200-CD Collection", "size": "2.18TB", "spec": ""}
        ]
      },
      {
        "name": "Hi-Res / Hi-End Audio Zone",
        "nameCn": "Hi-Res / Hi-End Audio Zone",
        "items": [
          {"name": "High Definition Audio", "size": "1.08TB", "spec": "DSD｜SACD"},
          {"name": "Classical Music Hi-Res Compilation", "size": "12.42TB", "spec": ""},
          {"name": "DSD Audio Compilation Library", "size": "7.16TB", "spec": ""},
          {"name": "Hi-Res High Resolution Music Compilation", "size": "8.34TB", "spec": ""},
          {"name": "SACD Audio Compilation Collection", "size": "6.02TB", "spec": ""},
          {"name": "SACD Chinese Music Collection", "size": "545.33GB", "spec": ""},
          {"name": "SONY Classical Music Archive", "size": "3.06TB", "spec": ""},
          {"name": "Audio Brand Original Sound Archive", "size": "1.54TB", "spec": ""},
          {"name": "Apple Music Top 100 Premium Albums", "size": "1.82TB", "spec": ""}
        ]
      },
      {
        "name": "Classical Music Section",
        "nameCn": "Classical Music Section",
        "items": [
          {"name": "High Definition Classical Music", "size": "12.42TB", "spec": ""},
          {"name": "22 Prestigious Premium Classical CD Albums", "size": "2.35TB", "spec": ""},
          {"name": "SONY Classical Music Archive", "size": "3.06TB", "spec": ""}
        ]
      },
      {
        "name": "Audiophile Collection Zone",
        "nameCn": "Audiophile Collection Zone",
        "items": [
          {"name": "Audiophile Premium Collection", "size": "1.24TB", "spec": ""},
          {"name": "Top 10 Chinese Audiophile Music Compilations", "size": "2.91TB", "spec": ""},
          {"name": "Analog Sound Limited Pressing CD Series", "size": "4.14TB", "spec": "104CD｜WAV+CUE"}
        ]
      },
      {
        "name": "KTV / On-Demand Karaoke Resources",
        "nameCn": "KTV / On-Demand Karaoke Resources",
        "items": [
          {"name": "Home KTV Resource Pack", "size": "246GB", "spec": ""},
          {"name": "Karaoke Song Library (20,000 Tracks)", "size": "1TB", "spec": ""}
        ]
      },
      {
        "name": "DTS / Multichannel Surround Sound Music",
        "nameCn": "DTS / Multichannel Surround Sound Music",
        "items": [
          {"name": "Home Theater Audio Collection", "size": "1.63TB", "spec": ""},
          {"name": "Complete DTS-CD Archive", "size": "7.65TB", "spec": "2040 Discs"},
          {"name": "DTS-CD Album Pack A (0001-0700)", "size": "4.52TB", "spec": ""}
        ]
      },
      {
        "name": "Streaming Platform Curated Playlists",
        "nameCn": "Streaming Platform Curated Playlists",
        "items": [
          {"name": "Official Music Charts / Editor's Picks", "size": "712GB", "spec": ""},
          {"name": "Apple Music Top 100 Premium Albums", "size": "1.82TB", "spec": ""}
        ]
      },
      {
        "name": "Audio Format Resource Repository",
        "nameCn": "Audio Format Resource Repository",
        "items": [
          {"name": "FLAC Lossless Audio Archive", "size": "2.73TB", "spec": ""},
          {"name": "APE Lossless Audio Archive", "size": "2.39TB", "spec": ""},
          {"name": "WAV+CUE Disc Image Archive", "size": "8.6TB", "spec": "Full-track Lossless CD Image, Hundreds of Thousands of Original Studio Albums"},
          {"name": "DSD Audio Repository", "size": "4.68TB", "spec": "SACD Digital Source, 2.8MHz/5.6MHz High Bitrate"},
          {"name": "SACD Master Image Archive", "size": "3.41TB", "spec": "Super Audio CD Original Disc Image, Multichannel HiFi Audio Source"},
          {"name": "High Resolution Audio Collection", "size": "10.86TB", "spec": "Hi-Res 24bit/96kHz ~ 192kHz Lossless Compilation"},
          {"name": "Original CD Disc Rip Archive", "size": "13.27TB", "spec": "Original CD Ripped Images, Massive Licensed Album Collection Globally"},
          {"name": "Final Preview Display Layout", "size": "136GB", "spec": ""},
          {"name": "Global Music Collection Overview", "size": "1.45TB", "spec": ""},
          {"name": "├── Global Lossless Music Master Library", "size": "164GB", "spec": ""},
          {"name": "├── Chinese Music Archive Collection", "size": "152GB", "spec": ""},
          {"name": "├── Hi-Res Hi-End Audio Zone", "size": "141GB", "spec": ""},
          {"name": "├── Classical Music Section", "size": "132GB", "spec": ""},
          {"name": "├── Audiophile Collection Zone", "size": "121GB", "spec": ""},
          {"name": "├── KTV Karaoke Library", "size": "96GB", "spec": ""},
          {"name": "├── DTS Multichannel Surround Music", "size": "108GB", "spec": ""},
          {"name": "├── Streaming Platform Curated Playlists", "size": "92GB", "spec": ""},
          {"name": "└── Audio Format Resource Repository", "size": "104GB", "spec": ""}
        ]
      }
    ]
  },
  "books": {
    "name": "Global E-Book Collection",
    "icon": "📚",
    "route": "cat-books",
    "subgroups": [
      {
        "name": "Global Master E-Book Library",
        "nameCn": "Global Master E-Book Library",
        "items": [
          {"name": "Massive Multi-Format E-Book Premium Archive", "size": "32TB", "spec": "PDF/EPUB/MOBI/TXT Full Format Compatible, Tens of Millions of Volumes Collection"},
          {"name": "Complete FreeMBook Site E-Book Archive", "size": "5.1TB", "spec": "Fully Crawled Complete Site E-Book Resources, Continuous Archiving & Updates"},
          {"name": "Partial Indian Digital Library Archive", "size": "12TB", "spec": "Approx 290,000 Volumes"},
          {"name": "Sino-US Million-Volume E-Book Library (660,000 Volumes ZIP Compressed Edition)", "size": "21TB", "spec": "Comprehensive Chinese & Western Academic & Literary Collection, Volume-Split Compressed Package"},
          {"name": "Complete Web Novel Archive from KenShu Website", "size": "234GB", "spec": "220,000 Titles｜Approx 480GB After Decompression"},
          {"name": "96,000 Titles E-Book Compilation", "size": "12GB", "spec": "TXT / PDF Format"},
          {"name": "XiaoShuWu E-Book Repository", "size": "3.67TB", "spec": ""},
          {"name": "Curated Premium E-Book Selections", "size": "25GB", "spec": ""}
        ]
      },
      {
        "name": "Literature & Fiction Library",
        "nameCn": "Literature & Fiction Library",
        "items": [
          {"name": "Fiction · World Classics · Online Literature", "size": "18TB", "spec": ""},
          {"name": "Deduplicated Fiction Compilation Pack", "size": "264.29GB", "spec": ""},
          {"name": "Wuxia / Xianxia / Online Novel Compilation", "size": "13TB", "spec": ""},
          {"name": "20-Year Premium Online Novel Essence Collection (Works of 100+ Top Authors)", "size": "6.9TB", "spec": ""},
          {"name": "Translated World Classics with Audiobook Versions", "size": "4.2TB", "spec": ""},
          {"name": "ManHuaAo (Comic & Novel Resources)", "size": "3.6TB", "spec": ""}
        ]
      },
      {
        "name": "Audiobook Resource Library",
        "nameCn": "Audiobook Resource Library",
        "items": [
          {"name": "Audio Reading · Novels · Storytelling", "size": "14.2TB", "spec": ""},
          {"name": "Comprehensive Audiobook Library", "size": "1.02TB", "spec": ""},
          {"name": "Human-Narrated Audiobook Compilation", "size": "9.7TB", "spec": "100,000 Episodes Full-Genre Human Voice Recording Resources"},
          {"name": "Deduplicated Audiobook Novel Collection", "size": "210GB", "spec": ""},
          {"name": "Audiobook Compilation of Translated World Classics", "size": "3.8TB", "spec": ""},
          {"name": "Complete Shan Tianfang Pingshu Storytelling Collection", "size": "44GB", "spec": ""}
        ]
      },
      {
        "name": "History · Humanities · Chinese Traditional Studies",
        "nameCn": "History · Humanities · Chinese Traditional Studies",
        "items": [
          {"name": "Historical Culture · Chinese Classical Canon Collection", "size": "12.6TB", "spec": ""},
          {"name": "Yongle Encyclopedia", "size": "186GB", "spec": "217 Volumes (Including Domestic & Overseas Lost Editions) High Definition Scanned Facsimile"},
          {"name": "Chinese General History Library", "size": "7.5TB", "spec": ""},
          {"name": "National Chinese History Archive", "size": "6.2TB", "spec": ""},
          {"name": "Encyclopedia Series E-Books", "size": "9.4TB", "spec": ""}
        ]
      },
      {
        "name": "Fine Arts Archive",
        "nameCn": "Fine Arts Archive",
        "items": [
          {"name": "Painting · Photography · Lianhuanhua Comic Strips", "size": "10.8TB", "spec": ""},
          {"name": "High Definition Classic Paintings Compilation", "size": "711GB", "spec": ""},
          {"name": "Vintage Historical Photograph Collection", "size": "3.2TB", "spec": ""},
          {"name": "Lianhuanhua Comic Strip Archive", "size": "286GB", "spec": "326 Sets｜4090 Volumes Complete Nostalgic Comic Collection"},
          {"name": "Premium Vintage Pocket Comic Collection", "size": "76.61GB", "spec": "500 Volumes Curated Nostalgic Comic Layout Archive"}
        ]
      },
      {
        "name": "Traditional Opera & Folk Art Zone",
        "nameCn": "Traditional Opera & Folk Art Zone",
        "items": [
          {"name": "Peking Opera · Huangmei Opera · Crosstalk", "size": "5.7TB", "spec": ""},
          {"name": "Peking Opera Resource Compilation", "size": "2.9TB", "spec": ""},
          {"name": "China Peking Opera Audio Grand Collection", "size": "14GB", "spec": "30CD Original Lossless Ripped Opera Premium Records"},
          {"name": "Star of Peking Opera — Contemporary Master Vocalist Record Series", "size": "12GB", "spec": "30CD"},
          {"name": "Century-Old Vintage Records · Peking Opera Grand Compendium", "size": "9GB", "spec": "26CD"},
          {"name": "Huangmei Opera: Luopa Ji", "size": "1.2GB", "spec": "2CD｜WAV+CUE"},
          {"name": "Crosstalk & Sketch Comedy Compilation", "size": "2.3TB", "spec": ""}
        ]
      },
      {
        "name": "Reading & Personal Growth Zone",
        "nameCn": "Reading & Personal Growth Zone",
        "items": [
          {"name": "Reading Methodology · Curated Premium Book Lists", "size": "2.1TB", "spec": ""},
          {"name": "Fan Deng Reading Club Full Archive", "size": "860GB", "spec": ""},
          {"name": "In-Depth Global Book Reading (Season 3)", "size": "320GB", "spec": ""},
          {"name": "100 Must-Read Global Masterpieces", "size": "180GB", "spec": ""}
        ]
      },
      {
        "name": "Skill Learning & Self-Improvement Zone",
        "nameCn": "Skill Learning & Self-Improvement Zone",
        "items": [
          {"name": "Tutorial Courses · Learning Materials", "size": "7.4TB", "spec": ""},
          {"name": "Complete Zhang Xuefeng Resource Compilation (Most Comprehensive Collection)", "size": "680GB", "spec": ""},
          {"name": "Zhang Zhishun: Eight Segment Golden Kong Fu", "size": "46GB", "spec": "4K Remastered Full Teaching Videos + Original Classic Texts & Documentation"}
        ]
      },
      {
        "name": "Professional Academic Books",
        "nameCn": "Professional Academic Books",
        "items": [
          {"name": "Disciplinary Professional Literature Archive", "size": "15.3TB", "spec": ""},
          {"name": "Classical Music Academic Books (Formal Published Works)", "size": "1.28GB", "spec": "56 Titles Music Theory, Music History, Performing Arts Monographs"},
          {"name": "Final Directory Preview Layout", "size": "110GB", "spec": ""},
          {"name": "Global E-Book Collection Overview", "size": "1.2TB", "spec": ""},
          {"name": "├── Global Master E-Book Library", "size": "140GB", "spec": ""},
          {"name": "├── Literature & Fiction Library", "size": "130GB", "spec": ""},
          {"name": "├── Audiobook Resource Library", "size": "120GB", "spec": ""},
          {"name": "├── History · Humanities · Chinese Traditional Studies", "size": "110GB", "spec": ""},
          {"name": "├── Fine Arts Archive", "size": "100GB", "spec": ""},
          {"name": "├── Traditional Opera · Folk Art Zone", "size": "90GB", "spec": ""},
          {"name": "├── Reading & Personal Growth Zone", "size": "85GB", "spec": ""},
          {"name": "├── Skill Learning & Self-Improvement Zone", "size": "95GB", "spec": ""},
          {"name": "└── Professional Academic Publications", "size": "105GB", "spec": ""}
        ]
      }
    ]
  },
  "documentary": {
    "name": "Global Documentary Collection",
    "icon": "🌍",
    "route": "cat-documentary",
    "subgroups": [
      {
        "name": "Documentary Original Disc Resource Library",
        "nameCn": "Documentary Original Disc Resource Library",
        "items": [
          {"name": "Premium Global Archival Document Resources", "size": "52.6TB", "spec": ""},
          {"name": "Blu-ray Original Disc Documentary Compilation", "size": "28.4TB", "spec": ""},
          {"name": "BBC Documentary Original Disc Archive", "size": "2.52TB", "spec": ""},
          {"name": "IMAX Documentary Collection (46 Titles)", "size": "4.8TB", "spec": ""},
          {"name": "Netflix Documentary Compilation (2023)", "size": "16.7TB", "spec": ""},
          {"name": "The Great Fire", "size": "18GB", "spec": ""}
        ]
      },
      {
        "name": "CCTV",
        "nameCn": "CCTV",
        "items": [
          {"name": "Closed-Circuit Television Monitoring System · CG Assets", "size": "120GB", "spec": ""},
          {"name": "CCTV Wild Wonders", "size": "2.16TB", "spec": "Complete HD Recorded Episodes 2015-2023 Full Edition"},
          {"name": "CCTV Man & Nature", "size": "1.19TB", "spec": "2014-2023 Episodes Archive"},
          {"name": "CCTV Animal World", "size": "690GB", "spec": "2016-2022 Episodes Archive"},
          {"name": "Aerial China", "size": "1.8TB", "spec": ""},
          {"name": "Hexi Corridor", "size": "68GB", "spec": ""},
          {"name": "Mega Projects", "size": "126GB", "spec": ""},
          {"name": "China", "size": "92GB", "spec": ""},
          {"name": "Comprehensive History of China", "size": "218GB", "spec": ""},
          {"name": "Mysteries of China", "size": "74GB", "spec": ""},
          {"name": "Most Scenic Highways Across China", "size": "136GB", "spec": ""},
          {"name": "Poverty Alleviation Chronicle", "size": "48GB", "spec": ""},
          {"name": "China Emergency Medical Services", "size": "62GB", "spec": ""},
          {"name": "The Third Pole", "size": "56GB", "spec": ""},
          {"name": "Land of Deities", "size": "39GB", "spec": ""},
          {"name": "Future Voyage Guide", "size": "73GB", "spec": ""},
          {"name": "Plants That Changed China", "size": "86GB", "spec": ""},
          {"name": "Encounter", "size": "24GB", "spec": ""},
          {"name": "Underwater China", "size": "51GB", "spec": ""},
          {"name": "Beyond Archaeology: My Journey with Sanxingdui", "size": "43GB", "spec": ""},
          {"name": "Dunhuang: Born Legend", "size": "37GB", "spec": ""},
          {"name": "Wang Yangming", "size": "29GB", "spec": ""},
          {"name": "Home", "size": "66GB", "spec": ""},
          {"name": "Medal of Merit", "size": "54GB", "spec": ""},
          {"name": "Life Birth", "size": "18GB", "spec": ""},
          {"name": "Grand Ceremony", "size": "32GB", "spec": ""},
          {"name": "Travel with Literature", "size": "1.4TB", "spec": ""},
          {"name": "Taste of Guangdong Season 1-9", "size": "960GB", "spec": ""},
          {"name": "Once Upon a Bite Season 1-5", "size": "820GB", "spec": ""},
          {"name": "Bite of China Origins", "size": "430GB", "spec": ""},
          {"name": "Breakfast China Season 1-4", "size": "370GB", "spec": ""},
          {"name": "Journey to the Edge of the World Series", "size": "5.47TB", "spec": ""}
        ]
      },
      {
        "name": "BBC / National Geographic Zone",
        "nameCn": "BBC / National Geographic Zone",
        "items": [
          {"name": "British Broadcasting Corporation Archive", "size": "36.8TB", "spec": ""},
          {"name": "Planet Earth Season 1-2", "size": "246GB", "spec": ""},
          {"name": "Blue Planet Season 1-2", "size": "282GB", "spec": ""},
          {"name": "The Green Planet", "size": "138GB", "spec": ""},
          {"name": "Life", "size": "172GB", "spec": ""},
          {"name": "A Perfect Planet", "size": "124GB", "spec": ""},
          {"name": "The Singer", "size": "46GB", "spec": ""},
          {"name": "Seven Worlds One Planet", "size": "156GB", "spec": ""},
          {"name": "Africa", "size": "118GB", "spec": ""},
          {"name": "Wild Isles", "size": "94GB", "spec": ""},
          {"name": "Wild Cities", "size": "87GB", "spec": ""},
          {"name": "Wild Pacific", "size": "106GB", "spec": ""},
          {"name": "Wild Japan", "size": "78GB", "spec": ""},
          {"name": "Big Pacific", "size": "93GB", "spec": ""},
          {"name": "Great Barrier Reef Expedition", "size": "64GB", "spec": ""},
          {"name": "North", "size": "58GB", "spec": ""},
          {"name": "Europe", "size": "122GB", "spec": ""},
          {"name": "Ocean", "size": "89GB", "spec": ""},
          {"name": "Ocean: Our Blue Planet", "size": "104GB", "spec": ""},
          {"name": "Penguins: Spy in the Huddle", "size": "52GB", "spec": ""},
          {"name": "The Mating Game", "size": "76GB", "spec": ""},
          {"name": "Extraordinary Animals", "size": "68GB", "spec": ""},
          {"name": "Animals Uncovered", "size": "97GB", "spec": ""},
          {"name": "Chimpanzee Empire", "size": "63GB", "spec": ""},
          {"name": "Bertie Gregory: Up Close with Wildlife", "size": "82GB", "spec": ""},
          {"name": "Idle Planet", "size": "49GB", "spec": ""}
        ]
      },
      {
        "name": "Nature · Wildlife · Geography",
        "nameCn": "Nature · Wildlife · Geography",
        "items": [
          {"name": "Polar Bears", "size": "36GB", "spec": ""},
          {"name": "Giant Pandas", "size": "42GB", "spec": ""},
          {"name": "Elephant Queen", "size": "28GB", "spec": ""},
          {"name": "Secrets of Elephants", "size": "33GB", "spec": ""},
          {"name": "March of the Penguins 2", "size": "47GB", "spec": ""},
          {"name": "Ms. Turtle's Odyssey", "size": "26GB", "spec": ""},
          {"name": "The Last Lions", "size": "31GB", "spec": ""},
          {"name": "Island of Sea Wolves", "size": "24GB", "spec": ""},
          {"name": "Penguin Town", "size": "38GB", "spec": ""},
          {"name": "Supernatural Wildlife Wonders", "size": "72GB", "spec": ""},
          {"name": "Secret Lives of Animals", "size": "86GB", "spec": ""},
          {"name": "72 Dangerous Animals: Asia", "size": "54GB", "spec": ""},
          {"name": "72 Dangerous Animals: Latin America", "size": "57GB", "spec": ""},
          {"name": "Stunning Wildlife of Botswana", "size": "49GB", "spec": ""},
          {"name": "Borneo: Charm of Asia", "size": "44GB", "spec": ""},
          {"name": "Serengeti National Park", "size": "68GB", "spec": ""},
          {"name": "Namibia: Spirit of Wilderness", "size": "53GB", "spec": ""},
          {"name": "World's Most Stunning National Parks Collection", "size": "126GB", "spec": ""},
          {"name": "Wild Beauty: National Park Adventure", "size": "98GB", "spec": ""}
        ]
      },
      {
        "name": "Cosmos · Science · Space Exploration",
        "nameCn": "Cosmos · Science · Space Exploration",
        "items": [
          {"name": "Cosmos: A Spacetime Odyssey", "size": "86GB", "spec": ""},
          {"name": "How the Universe Works", "size": "72GB", "spec": ""},
          {"name": "International Space Station", "size": "58GB", "spec": ""},
          {"name": "Apollo 11", "size": "46GB", "spec": ""},
          {"name": "Journey to the Moon", "size": "39GB", "spec": ""},
          {"name": "Lunar Landing Mission Archive", "size": "43GB", "spec": ""},
          {"name": "Return to Space", "size": "52GB", "spec": ""},
          {"name": "Space Voyage", "size": "67GB", "spec": ""},
          {"name": "View Earth from Outer Space", "size": "94GB", "spec": ""},
          {"name": "Into the Universe with Stephen Hawking", "size": "36GB", "spec": ""},
          {"name": "Our Vast Universe", "size": "112GB", "spec": ""},
          {"name": "Alien Worlds", "size": "78GB", "spec": ""},
          {"name": "Hubble Space Telescope Deep Field", "size": "41GB", "spec": ""},
          {"name": "Conquest of the Skies", "size": "64GB", "spec": ""}
        ]
      },
      {
        "name": "History · Warfare · Human Civilization",
        "nameCn": "History · Warfare · Human Civilization",
        "items": [
          {"name": "American Civil War", "size": "56GB", "spec": ""},
          {"name": "Memory of Power: War to Resist U.S. Aggression and Aid Korea", "size": "72GB", "spec": ""},
          {"name": "All Military Parades Held in China Throughout History", "size": "98GB", "spec": ""},
          {"name": "Rise of Empires: Ottoman", "size": "66GB", "spec": ""},
          {"name": "D-Day: Normandy 1944", "size": "52GB", "spec": ""},
          {"name": "For All Humanity", "size": "47GB", "spec": ""},
          {"name": "Vietnam: The War That Changed America", "size": "61GB", "spec": ""},
          {"name": "Last Days in Vietnam", "size": "38GB", "spec": ""},
          {"name": "Blood and Dynasty: 400 Years of Royal Turmoil", "size": "54GB", "spec": ""},
          {"name": "The Sinking of the Lisbon Maru", "size": "32GB", "spec": ""},
          {"name": "The Great Journey", "size": "84GB", "spec": ""}
        ]
      },
      {
        "name": "Gourmet · Travel · Urban Exploration",
        "nameCn": "Gourmet · Travel · Urban Exploration",
        "items": [
          {"name": "Once Upon a Bite", "size": "460GB", "spec": ""},
          {"name": "Bite of China Origins", "size": "220GB", "spec": ""},
          {"name": "Breakfast China", "size": "185GB", "spec": ""},
          {"name": "World Leisure Travel Vlogs", "size": "3.2TB", "spec": ""},
          {"name": "Virtual Journey: Hokkaido", "size": "76GB", "spec": ""},
          {"name": "US Route 1 Road Trip", "size": "62GB", "spec": ""},
          {"name": "Authentic Australia", "size": "83GB", "spec": ""},
          {"name": "South Pacific Voyage", "size": "71GB", "spec": ""},
          {"name": "Crossing the Rocky Mountains", "size": "59GB", "spec": ""},
          {"name": "US West Coast Road Trip", "size": "68GB", "spec": ""}
        ]
      },
      {
        "name": "Biography · Art · Music Documentaries",
        "nameCn": "Biography · Art · Music Documentaries",
        "items": [
          {"name": "Ryuichi Sakamoto: Coda", "size": "26GB", "spec": ""},
          {"name": "Taylor Swift: Miss Americana", "size": "32GB", "spec": ""},
          {"name": "Maestro: John Williams", "size": "28GB", "spec": ""},
          {"name": "The Beatles: Get Back", "size": "44GB", "spec": ""},
          {"name": "Eight Days a Week: The Touring Years", "size": "36GB", "spec": ""},
          {"name": "Paul Simon: The Never Ending Dream", "size": "24GB", "spec": ""},
          {"name": "Lou Reed: Berlin", "size": "22GB", "spec": ""},
          {"name": "Maria Callas: For the Love of Opera", "size": "27GB", "spec": ""},
          {"name": "Hayao Miyazaki and the Heron", "size": "34GB", "spec": ""},
          {"name": "David Byrne's American Utopia", "size": "29GB", "spec": ""}
        ]
      },
      {
        "name": "Sports Documentaries",
        "nameCn": "Sports Documentaries",
        "items": [
          {"name": "Formula 1: Drive to Survive Season 1-7", "size": "860GB", "spec": ""},
          {"name": "MotoGP Unlimited", "size": "320GB", "spec": ""},
          {"name": "Messi's World Cup Journey", "size": "46GB", "spec": ""},
          {"name": "All or Nothing: Manchester City", "size": "72GB", "spec": ""},
          {"name": "All or Nothing: Brazil National Team", "size": "68GB", "spec": ""},
          {"name": "All or Nothing: Germany National Team", "size": "64GB", "spec": ""},
          {"name": "All or Nothing: Arsenal", "size": "76GB", "spec": ""},
          {"name": "All or Nothing: Tottenham Hotspur", "size": "71GB", "spec": ""},
          {"name": "Swing for Glory", "size": "38GB", "spec": ""},
          {"name": "Break Point", "size": "42GB", "spec": ""},
          {"name": "Conor McGregor: Notorious", "size": "53GB", "spec": ""},
          {"name": "Free Solo", "size": "22GB", "spec": ""},
          {"name": "Chasing Waves", "size": "47GB", "spec": ""}
        ]
      },
      {
        "name": "Society · Crime · Investigative Journalism",
        "nameCn": "Society · Crime · Investigative Journalism",
        "items": [
          {"name": "MH370: The Plane That Disappeared", "size": "36GB", "spec": ""},
          {"name": "Boston Marathon Bombing: Manhunt", "size": "32GB", "spec": ""},
          {"name": "Night Stalker: The Hunt for a Serial Killer", "size": "28GB", "spec": ""},
          {"name": "Waco: American Apocalypse", "size": "34GB", "spec": ""},
          {"name": "The Pharmacist", "size": "41GB", "spec": ""},
          {"name": "King of Cars: The Hunt for John DeLorean", "size": "37GB", "spec": ""},
          {"name": "Our Father", "size": "33GB", "spec": ""},
          {"name": "I Am a Killer", "size": "29GB", "spec": ""},
          {"name": "Border Murders", "size": "35GB", "spec": ""},
          {"name": "Nomadland", "size": "26GB", "spec": ""},
          {"name": "We Steal Secrets: The Story of WikiLeaks", "size": "38GB", "spec": ""}
        ]
      },
      {
        "name": "Netflix Exclusive Premium Documentaries",
        "nameCn": "Netflix Exclusive Premium Documentaries",
        "items": [
          {"name": "Netflix Original Productions (2018-2025)", "size": "29.7TB", "spec": ""},
          {"name": "Our Planet", "size": "142GB", "spec": ""},
          {"name": "Life on Our Planet", "size": "136GB", "spec": ""},
          {"name": "Earthstorm", "size": "84GB", "spec": ""},
          {"name": "Night on Earth", "size": "128GB", "spec": ""},
          {"name": "Chimp Empire", "size": "61GB", "spec": ""},
          {"name": "Emergency NYC", "size": "92GB", "spec": ""},
          {"name": "How to Get Rich", "size": "56GB", "spec": ""},
          {"name": "Working: What We Do All Day", "size": "48GB", "spec": ""},
          {"name": "Welcome to Earth", "size": "106GB", "spec": ""},
          {"name": "Alien Worlds", "size": "75GB", "spec": ""},
          {"name": "Pinocchio", "size": "42GB", "spec": ""},
          {"name": "Inside the Mind of Cats", "size": "36GB", "spec": ""},
          {"name": "Future Voyage Guide", "size": "71GB", "spec": ""}
        ]
      },
      {
        "name": "Themed Documentary Compilation Archive",
        "nameCn": "Themed Documentary Compilation Archive",
        "items": [
          {"name": "IMAX Documentary Collection (46 Titles)", "size": "4.8TB", "spec": ""},
          {"name": "BBC Documentary Original Disc Archive", "size": "2.52TB", "spec": ""},
          {"name": "Netflix Full Documentary Archive", "size": "32.4TB", "spec": ""},
          {"name": "CCTV Complete Documentary Archive", "size": "26.8TB", "spec": ""},
          {"name": "National Geographic Full Documentary Archive", "size": "38.2TB", "spec": ""},
          {"name": "World Heritage 3D Documentary Series", "size": "7.6TB", "spec": ""},
          {"name": "Global Wildlife Documentary Series", "size": "42.5TB", "spec": ""},
          {"name": "World History Documentary Series", "size": "36.7TB", "spec": ""},
          {"name": "Global Humanities Documentary Series", "size": "31.9TB", "spec": ""},
          {"name": "Final Directory Style Preview", "size": "180GB", "spec": ""},
          {"name": "Global Documentary Collection Overview", "size": "1.6TB", "spec": ""},
          {"name": "├── Documentary Original Disc Resource Library", "size": "190GB", "spec": ""},
          {"name": "├── CCTV / Chinese Documentaries", "size": "170GB", "spec": ""},
          {"name": "├── BBC / National Geographic", "size": "160GB", "spec": ""},
          {"name": "├── Nature · Wildlife · Geography", "size": "150GB", "spec": ""},
          {"name": "├── Cosmos · Science · Space Exploration", "size": "140GB", "spec": ""},
          {"name": "├── History · Warfare · Human Civilization", "size": "130GB", "spec": ""},
          {"name": "├── Gourmet · Travel · Urban Exploration", "size": "120GB", "spec": ""},
          {"name": "├── Biography · Art · Music Documentaries", "size": "110GB", "spec": ""},
          {"name": "├── Sports Documentaries", "size": "100GB", "spec": ""},
          {"name": "├── Society · Crime · Investigative Journalism", "size": "90GB", "spec": ""},
          {"name": "├── Netflix Exclusive Premium Documentaries", "size": "95GB", "spec": ""},
          {"name": "└── Themed Documentary Compilation Archive", "size": "105GB", "spec": ""}
        ]
      }
    ]
  },
 "games": {
    "name": "Global Game Collection",
    "icon": "🎮",
    "route": "cat-games",
    "subgroups": [
      {
        "name": "PC Single Player Game Library",
        "nameCn": "PC Single Player Game Library",
        "items": [
          {"name": "AAA Large-Scale PC Game Collection", "size": "86.4TB", "spec": ""},
          {"name": "PC Single Player Game Mega Collection (Continuously Updated)", "size": "62.7TB", "spec": ""},
          {"name": "Curated Selection of PC Single Player Games", "size": "28.3TB", "spec": ""},
          {"name": "PC Classic Game Compilation", "size": "16.8TB", "spec": ""},
          {"name": "PC Arcade Game Collection (1425 Titles)", "size": "42GB", "spec": ""},
          {"name": "DOS Vintage Game Collection (1810 Titles)", "size": "28GB", "spec": ""},
          {"name": "PC Building Simulator", "size": "12GB", "spec": ""},
          {"name": "Rainblood Series", "size": "8GB", "spec": ""},
          {"name": "Air Force", "size": "6GB", "spec": ""},
          {"name": "Starfleet", "size": "7GB", "spec": ""},
          {"name": "New Blade & Sword", "size": "5GB", "spec": ""},
          {"name": "Chinese Paladin 9", "size": "48GB", "spec": ""},
          {"name": "Fantasy Warfare (New Year Special Edition)", "size": "4GB", "spec": ""},
          {"name": "Half-Life 2 (Chinese Version)", "size": "18GB", "spec": ""},
          {"name": "Command & Conquer: Red Alert 2", "size": "14GB", "spec": ""},
          {"name": "Halo: Spartan Assault", "size": "9GB", "spec": ""}
        ]
      },
      {
        "name": "AAA Action & Adventure Games",
        "nameCn": "AAA Action & Adventure Games",
        "items": [
          {"name": "Grand Theft Auto V", "size": "126GB", "spec": ""},
          {"name": "Watch Dogs", "size": "78GB", "spec": ""},
          {"name": "Crysis", "size": "94GB", "spec": ""},
          {"name": "Far Cry Series", "size": "168GB", "spec": ""},
          {"name": "Assassin's Creed Chronicles: China", "size": "22GB", "spec": ""},
          {"name": "Dragon Age: Inquisition", "size": "66GB", "spec": ""},
          {"name": "Dragon Age: Origins", "size": "48GB", "spec": ""},
          {"name": "Risen 3: Titan Lords", "size": "36GB", "spec": ""},
          {"name": "Devil May Cry 5", "size": "42GB", "spec": ""},
          {"name": "Castlevania: Lords of Shadow", "size": "38GB", "spec": ""},
          {"name": "BioShock Infinite", "size": "32GB", "spec": ""},
          {"name": "Left 4 Dead", "size": "26GB", "spec": ""},
          {"name": "Dead Island", "size": "34GB", "spec": ""},
          {"name": "Dead Purge: Outbreak", "size": "18GB", "spec": ""},
          {"name": "Ghost Recon Wildlands", "size": "82GB", "spec": ""},
          {"name": "Sniper: Ghost Warrior Contracts", "size": "56GB", "spec": ""},
          {"name": "Sniper Elite Series", "size": "74GB", "spec": ""},
          {"name": "Mirror's Edge Catalyst", "size": "24GB", "spec": ""},
          {"name": "Hitman 6", "size": "68GB", "spec": ""},
          {"name": "Just Cause", "size": "96GB", "spec": ""},
          {"name": "Just Cause 4", "size": "52GB", "spec": ""},
          {"name": "Project Wingman", "size": "22GB", "spec": ""},
          {"name": "Ryse: Son of Rome", "size": "28GB", "spec": ""},
          {"name": "Ace Combat 7", "size": "36GB", "spec": ""},
          {"name": "Storm Warfare", "size": "16GB", "spec": ""},
          {"name": "Final Fantasy XV", "size": "98GB", "spec": ""},
          {"name": "World of Final Fantasy", "size": "44GB", "spec": ""},
          {"name": "Final Fantasy XV Pocket Edition", "size": "12GB", "spec": ""}
        ]
      },
      {
        "name": "Shooter & Warfare Games",
        "nameCn": "Shooter & Warfare Games",
        "items": [
          {"name": "Medal of Honor Series", "size": "86GB", "spec": ""},
          {"name": "Battlefield Franchise", "size": "216GB", "spec": ""},
          {"name": "Battlefield Island Master", "size": "24GB", "spec": ""},
          {"name": "Pre-War", "size": "18GB", "spec": ""},
          {"name": "Call of Duty Franchise", "size": "328GB", "spec": ""},
          {"name": "Titanfall 2", "size": "42GB", "spec": ""},
          {"name": "Halo: The Master Chief Collection", "size": "124GB", "spec": ""},
          {"name": "Counter-Strike Series", "size": "32GB", "spec": ""},
          {"name": "Hawx 1-2", "size": "46GB", "spec": ""},
          {"name": "Command & Conquer: Red Alert Series", "size": "28GB", "spec": ""},
          {"name": "Homefront", "size": "36GB", "spec": ""},
          {"name": "Ghost Recon Wildlands", "size": "80GB", "spec": ""},
          {"name": "World War Z", "size": "48GB", "spec": ""},
          {"name": "Storm Warfare", "size": "15GB", "spec": ""}
        ]
      },
      {
        "name": "Racing / Flight / Sports Games",
        "nameCn": "Racing / Flight / Sports Games",
        "items": [
          {"name": "Forza Horizon Series", "size": "186GB", "spec": ""},
          {"name": "Need for Speed Franchise", "size": "242GB", "spec": ""},
          {"name": "Ace Combat 7", "size": "34GB", "spec": ""},
          {"name": "Hawx Series", "size": "44GB", "spec": ""},
          {"name": "Dirt 3", "size": "28GB", "spec": ""},
          {"name": "Kerbal Space Program", "size": "32GB", "spec": ""},
          {"name": "Golf Games Collection", "size": "16GB", "spec": ""},
          {"name": "Tennis Games Collection", "size": "22GB", "spec": ""},
          {"name": "Football Games Compilation", "size": "168GB", "spec": ""},
          {"name": "NBA Basketball Series", "size": "142GB", "spec": ""}
        ]
      },
      {
        "name": "Strategy Games",
        "nameCn": "Strategy Games",
        "items": [
          {"name": "Civilization 6", "size": "46GB", "spec": ""},
          {"name": "Grey Goo", "size": "24GB", "spec": ""},
          {"name": "Star Wars Strategy Titles", "size": "58GB", "spec": ""},
          {"name": "SimCity Franchise", "size": "72GB", "spec": ""},
          {"name": "Sandbox: Strategy & Special Edition (Full Version)", "size": "38GB", "spec": ""},
          {"name": "Train Simulator", "size": "42GB", "spec": ""},
          {"name": "Construction Simulator", "size": "26GB", "spec": ""},
          {"name": "Fantasy Restaurant", "size": "12GB", "spec": ""},
          {"name": "Fantasy Home", "size": "18GB", "spec": ""},
          {"name": "Fantasy Home", "size": "437MB", "spec": ""},
          {"name": "Iron Marines", "size": "228MB", "spec": ""}
        ]
      },
      {
        "name": "Survival / Sandbox / Open World Games",
        "nameCn": "Survival / Sandbox / Open World Games",
        "items": [
          {"name": "Sandbox: Strategy Exclusive Edition", "size": "12.8GB", "spec": ""},
          {"name": "Left 4 Dead Series", "size": "16.5GB", "spec": ""},
          {"name": "World War Z", "size": "35GB", "spec": ""},
          {"name": "Dead Rising 3", "size": "28GB", "spec": ""},
          {"name": "Survival Simulation", "size": "9.2GB", "spec": ""},
          {"name": "Survival Genre Mega Collection", "size": "126GB", "spec": ""},
          {"name": "Sandbox Game Compilation", "size": "158GB", "spec": ""}
        ]
      },
      {
        "name": "Action / RPG / Chinese Wuxia Games",
        "nameCn": "Action / RPG / Chinese Wuxia Games",
        "items": [
          {"name": "Jin Yong's Legends of the Condor Heroes", "size": "185MB", "spec": ""},
          {"name": "Three Kingdoms Franchise", "size": "42GB", "spec": ""},
          {"name": "Romance of the Three Kingdoms Series", "size": "26GB", "spec": ""},
          {"name": "Heroes of the Three Kingdoms", "size": "12GB", "spec": ""},
          {"name": "Chinese Xianxia & Cultivation Action Game Collection", "size": "86GB", "spec": ""},
          {"name": "Noah's Bottle", "size": "142MB", "spec": ""},
          {"name": "Living World", "size": "326MB", "spec": ""},
          {"name": "Chinese Wuxia Game Mega Collection", "size": "78GB", "spec": ""}
        ]
      },
      {
        "name": "Android Game Collection",
        "nameCn": "Android Game Collection",
        "items": [
          {"name": "Categorized Resources", "size": "1.2GB", "spec": ""},
          {"name": "Android Game Mega Collection (Continuously Updated)", "size": "218GB", "spec": ""},
          {"name": "War Genre Titles", "size": "24GB", "spec": ""},
          {"name": "Tower Defense Genre", "size": "16GB", "spec": ""},
          {"name": "Survival Genre", "size": "32GB", "spec": ""},
          {"name": "Simulation Genre", "size": "28GB", "spec": ""},
          {"name": "Three Kingdoms Genre Games", "size": "19GB", "spec": ""},
          {"name": "Sandbox Genre", "size": "36GB", "spec": ""},
          {"name": "Chinese Xianxia & Cultivation Genre", "size": "41GB", "spec": ""},
          {"name": "Premium APK Compilation", "size": "7.8GB", "spec": ""},
          {"name": "Living World (Modded Version)", "size": "330MB", "spec": ""},
          {"name": "Tank: Armored Warfare (All Tanks Unlocked)", "size": "564MB", "spec": ""},
          {"name": "Sandbox: Strategy & Special Edition (Full Version)", "size": "890MB", "spec": ""},
          {"name": "Noah's Bottle (Unlimited Currency Mod)", "size": "145MB", "spec": ""},
          {"name": "Fantasy Restaurant (Modded Version)", "size": "392MB", "spec": ""},
          {"name": "Fantasy Home", "size": "437MB", "spec": ""},
          {"name": "Iron Marines", "size": "230MB", "spec": ""},
          {"name": "Rhythm Master", "size": "186MB", "spec": ""},
          {"name": "Jin Yong's Legends of the Condor Heroes (Unlimited In-Game Currency Mod)", "size": "190MB", "spec": ""},
          {"name": "Train Simulator (Unlimited Currency Mod)", "size": "628MB", "spec": ""}
        ]
      },
      {
        "name": "Nintendo Switch Game Collection",
        "nameCn": "Nintendo Switch Game Collection",
        "items": [
          {"name": "Nintendo First-Party Titles", "size": "426GB", "spec": ""},
          {"name": "The Legend of Zelda Series", "size": "32.6GB", "spec": ""},
          {"name": "Super Mario Series", "size": "48.3GB", "spec": ""},
          {"name": "Mario Kart Series", "size": "12.4GB", "spec": ""},
          {"name": "Mario Tennis", "size": "5.8GB", "spec": ""},
          {"name": "Mario Party Series", "size": "21.7GB", "spec": ""},
          {"name": "Pokémon: Let's Go, Pikachu!", "size": "10.2GB", "spec": ""},
          {"name": "Pokémon: Let's Go, Eevee!", "size": "10.2GB", "spec": ""},
          {"name": "Pokémon Franchise", "size": "186GB", "spec": ""},
          {"name": "Splatoon Series", "size": "16.5GB", "spec": ""},
          {"name": "Animal Crossing: New Horizons", "size": "6.2GB", "spec": ""},
          {"name": "Xenoblade Chronicles 2", "size": "13.2GB", "spec": ""},
          {"name": "Fire Emblem Franchise", "size": "42.8GB", "spec": ""},
          {"name": "Kirby Series", "size": "28.6GB", "spec": ""},
          {"name": "Luigi's Mansion Series", "size": "36.4GB", "spec": ""},
          {"name": "Yoshi Series", "size": "14.7GB", "spec": ""},
          {"name": "Japanese Role-Playing Games", "size": "238GB", "spec": ""},
          {"name": "Final Fantasy Compilation", "size": "9.6GB", "spec": ""},
          {"name": "Final Fantasy XV Pocket Edition", "size": "12.9GB", "spec": ""},
          {"name": "Dragon Quest Franchise", "size": "96GB", "spec": ""},
          {"name": "Octopath Traveler", "size": "11.6GB", "spec": ""},
          {"name": "Bloodstained: Ritual of the Night", "size": "7.3GB", "spec": ""},
          {"name": "Indie Games Collection", "size": "18.6GB", "spec": ""},
          {"name": "Demo Titles", "size": "7.2GB", "spec": ""},
          {"name": "Child of Light", "size": "3.1GB", "spec": ""},
          {"name": "Little Nightmares II", "size": "4.8GB", "spec": ""},
          {"name": "Inside", "size": "2.4GB", "spec": ""},
          {"name": "Limbo", "size": "3.2GB", "spec": ""},
          {"name": "Hollow Knight", "size": "6.7GB", "spec": ""},
          {"name": "Celeste", "size": "1.9GB", "spec": ""},
          {"name": "Dead Cells", "size": "3.6GB", "spec": ""},
          {"name": "Cuphead", "size": "4.2GB", "spec": ""},
          {"name": "Castlevania: Symphony of the Night", "size": "0.8GB", "spec": ""},
          {"name": "Simulation Management Games", "size": "126GB", "spec": ""},
          {"name": "Cities: Skylines", "size": "18.5GB", "spec": ""},
          {"name": "Architect Simulator", "size": "16.2GB", "spec": ""},
          {"name": "Pioneer Simulation", "size": "14.8GB", "spec": ""},
          {"name": "Village Building Master", "size": "13.6GB", "spec": ""},
          {"name": "Simulation Management Mega Collection", "size": "98GB", "spec": ""},
          {"name": "Nintendo Switch Chinese Language Game Compilation", "size": "686GB", "spec": ""},
          {"name": "Nintendo Switch Chinese Version Game Collection", "size": "686GB", "spec": ""},
          {"name": "Nintendo Switch Popular Game Collection", "size": "524GB", "spec": ""},
          {"name": "Nintendo Switch Indie Game Compilation", "size": "216GB", "spec": ""},
          {"name": "Nintendo First-Party Game Compilation", "size": "426GB", "spec": ""}
        ]
      },
      {
        "name": "Arcade / Retro Vintage Games",
        "nameCn": "Arcade / Retro Vintage Games",
        "items": [
          {"name": "Arcade Game Collection (1425 Titles)", "size": "18GB", "spec": ""},
          {"name": "DOS Vintage Game Collection (1810 Titles)", "size": "12GB", "spec": ""},
          {"name": "Famicom Classic Game Compilation", "size": "3.6GB", "spec": ""},
          {"name": "Arcade Emulator Suite", "size": "2.8GB", "spec": ""},
          {"name": "Capcom Play System Arcade Compilation", "size": "7.2GB", "spec": ""},
          {"name": "NeoGeo Arcade Game Collection", "size": "9.5GB", "spec": ""}
        ]
      },
      {
        "name": "Game Platform Zone",
        "nameCn": "Game Platform Zone",
        "items": [
          {"name": "PC Games", "size": "8.6TB", "spec": ""},
          {"name": "Android Games", "size": "422GB", "spec": ""},
          {"name": "Nintendo Switch Games", "size": "4.9TB", "spec": ""},
          {"name": "Arcade Games", "size": "53GB", "spec": ""},
          {"name": "DOS Vintage Games", "size": "12GB", "spec": ""},
          {"name": "Final Directory Preview Assets", "size": "160GB", "spec": ""},
          {"name": "Global Game Collection", "size": "1.3TB", "spec": ""},
          {"name": "├── PC Single Player Game Library", "size": "180GB", "spec": ""},
          {"name": "├── AAA Action & Adventure", "size": "170GB", "spec": ""},
          {"name": "├── Shooter & Warfare Games", "size": "160GB", "spec": ""},
          {"name": "├── Racing · Flight · Sports", "size": "150GB", "spec": ""},
          {"name": "├── Strategy · RTS · Simulation Management", "size": "140GB", "spec": ""},
          {"name": "├── Survival · Sandbox · Open World", "size": "130GB", "spec": ""},
          {"name": "├── Wuxia · RPG · Three Kingdoms", "size": "120GB", "spec": ""},
          {"name": "├── Android Game Collection", "size": "110GB", "spec": ""},
          {"name": "├── Nintendo Switch Game Collection", "size": "100GB", "spec": ""},
          {"name": "├── Arcade · DOS Vintage Games", "size": "90GB", "spec": ""},
          {"name": "└── Game Platform Zone", "size": "98GB", "spec": ""}
        ]
      }
    ]
  }
};