// What we can verify publicly about Tarokiki.
// "Unconfirmed" fields are intentionally left blank — do not fabricate.

export const profile = {
  stageName: 'Tarokiki',
  altNames: {
    zh: '塔罗琪琪',
    ja: 'タロキキ',
    ko: '타로키키',
  },
  selfDescription: 'Singer, songwriter, sometimes a jazz cat.', // Instagram bio
  basedIn: {
    zh: '日本东京',
    en: 'Tokyo, Japan',
    ja: '日本・東京',
    ko: '일본 도쿄',
  },
  education: {
    zh: '洗足学園音楽大学 · 爵士声乐研究科',
    en: 'Senzoku Gakuen College of Music · Jazz Voice (Graduate)',
    ja: '洗足学園音楽大学・ジャズ声楽 大学院',
    ko: '센조쿠가쿠엔 음악대학 · 재즈 보컬 대학원',
  },
  affiliation: {
    zh: '库洛游戏 (Kuro Games) 合作歌手',
    en: 'Collaborating vocalist with Kuro Games',
    ja: 'Kuro Gamesとのコラボレーション・ボーカリスト',
    ko: 'Kuro Games 협업 보컬리스트',
  },
  links: {
    bilibili: 'https://space.bilibili.com/16497690',
    instagram: 'https://www.instagram.com/tarokiki_/',
    spotify: 'https://open.spotify.com/artist/23Okc89aKfHUSw9UwRkVuJ',
    appleMusic: 'https://music.apple.com/cn/artist/tarokiki/1811319781',
    youtube: 'https://www.youtube.com/channel/UCc3Fj3jBe1B6YN1JKmPK-7A',
    vgmdb: 'https://vgmdb.net/artist/73474',
  },
  email: 'hello@tarokiki.com', // placeholder — replace with real contact
} as const;

export type ProfileLocale = keyof typeof profile.altNames | 'en';

export const bio = {
  zh: [
    'Tarokiki，常驻东京的独立歌手与词曲创作者，日本洗足学園音楽大学爵士声乐研究科在读。',
    '自 2025 年起以歌唱身份参与库洛游戏《鸣潮 (Wuthering Waves)》原声音乐的演绎 —— 从黎那汐塔风主题《风语者的即兴舞宴》开始，到一周年主题曲《永不结束的歌》、2.4 版本露帕剧情终曲《致以无名的抗争者》，再到 3.1 版本与 Emi Evans 共唱的爱弥斯主题《远航星的告别》，她的声音被一段段主线、一个个角色记住。',
    '声线清亮、叙事性强；曲风介于流行抒情与爵士叙事之间。她说自己"是个歌手、词曲创作者，偶尔也是一只爵士猫"。',
  ],
  en: [
    'Tarokiki is a Tokyo-based independent vocalist and songwriter, currently a graduate student of Jazz Voice at Senzoku Gakuen College of Music.',
    'Since 2025 she has lent her voice to the original soundtrack of Wuthering Waves (鸣潮) by Kuro Games — from the Rinascita wind theme "Whispered Whims of the Wind", to the first-anniversary theme "Eversinging Song", the 2.4 Lupa finale "Ode to the Nameless Martyr", and most recently the 3.1 Amis theme "Voyaging Star\'s Farewell" sung in duet with Emi Evans. Her voice is the one that storylines and characters tend to remember at once.',
    'A clear, narrative timbre, sitting somewhere between pop balladry and jazz storytelling. She describes herself as: "Singer, songwriter, sometimes a jazz cat."',
  ],
  ja: [
    'Tarokiki（タロキキ）は東京を拠点に活動する独立系ボーカリスト／ソングライター。洗足学園音楽大学・ジャズ声楽の大学院に在籍。',
    '2025年以降、Kuro Gamesのオープンワールド ARPG『鳴潮 (Wuthering Waves)』のサウンドトラックに参加 —— リナシタの風テーマ『風語りの即興舞宴』に始まり、一周年テーマ『終わらない歌』、2.4 ルパ最終章テーマ『無名の抵抗者へ捧ぐ』、そして 3.1 でEmi Evansとデュエットした愛弥斯（Amis）テーマ『遠航星の別れ』まで、彼女の声はストーリーとキャラクターの両方に記憶されてきた。',
    '澄んで物語性のある音色。ポップ・バラードとジャズ・ナラティブの中間。本人いわく「歌い手で、ソングライターで、たまにジャズ猫」。',
  ],
  ko: [
    'Tarokiki는 도쿄를 거점으로 활동하는 인디 보컬리스트이자 싱어송라이터로, 일본 센조쿠가쿠엔 음악대학 재즈 보컬 대학원에 재학 중이다.',
    '2025년부터 Kuro Games의 오픈월드 ARPG 《명조 (Wuthering Waves)》 사운드트랙에 목소리를 더해왔다 —— 리나시타 바람 테마 〈바람을 듣는 자의 즉흥 무도회〉를 시작으로, 1주년 테마 〈끝나지 않는 노래〉, 2.4 루파 스토리 피날레 〈이름 없는 저항자에게〉, 그리고 3.1 버전에서 Emi Evans와 듀엣으로 부른 아미스(Amis) 테마 〈원항성의 작별〉까지 —— 그녀의 목소리는 이야기와 캐릭터 모두에게 동시에 기억된다.',
    '맑고 서사적인 음색, 팝 발라드와 재즈 내러티브 사이. 본인 말로는 "가수, 싱어송라이터, 가끔은 재즈 고양이".',
  ],
} as const;

export const timeline = [
  {
    year: '2025.05',
    title: {
      zh: '首支官方 OST · 风语者的即兴舞宴',
      en: 'Debut official OST · Whispered Whims of the Wind',
      ja: '初の公式 OST『風語りの即興舞宴』',
      ko: '데뷔 공식 OST · 바람을 듣는 자의 즉흥 무도회',
    },
  },
  {
    year: '2025.05',
    title: {
      zh: '《鸣潮》一周年主题曲 · 永不结束的歌',
      en: 'Wuthering Waves 1st-Anniversary theme · Eversinging Song',
      ja: '『鳴潮』一周年テーマ『終わらない歌』',
      ko: '《명조》 1주년 테마 · 끝나지 않는 노래',
    },
  },
  {
    year: '2025.07',
    title: {
      zh: '2.4 版本露帕剧情终曲 · 致以无名的抗争者',
      en: '2.4 Lupa storyline finale · Ode to the Nameless Martyr',
      ja: '2.4 ルパ最終章『無名の抵抗者へ捧ぐ』',
      ko: '2.4 루파 스토리 피날레 · 이름 없는 저항자에게',
    },
  },
  {
    year: '2025',
    title: {
      zh: '跨厂合作 · 战双帕弥什 Night\'s Bright',
      en: "Cross-IP collab · Punishing: Gray Raven Night's Bright",
      ja: 'IPコラボ・パニシング グレイレイヴン Night\'s Bright',
      ko: '크로스 IP 협업 · 퍼니싱 그레이 레이븐 Night\'s Bright',
    },
  },
  {
    year: '2026.02',
    title: {
      zh: '3.1 版本爱弥斯主题 · 远航星的告别（与 Emi Evans 合唱）',
      en: '3.1 Amis theme · Voyaging Star\'s Farewell (duet with Emi Evans)',
      ja: '3.1 愛弥斯テーマ『遠航星の別れ』（Emi Evansとデュエット）',
      ko: '3.1 아미스 테마 · 원항성의 작별 (Emi Evans와 듀엣)',
    },
  },
] as const;
