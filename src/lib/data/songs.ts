// Real Tarokiki discography for Wuthering Waves (鸣潮 / 鳴潮 / 명조)
// Sources: Spotify, Apple Music, Bilibili, official Kuro Games OST releases.
// Newest first.

export type Song = {
  slug: string;
  title: {
    zh: string;
    en: string;
    ja: string;
    ko: string;
  };
  released: string; // YYYY-MM
  release: {
    zh: string; // album / OST collection name
    en: string;
    ja: string;
    ko: string;
  };
  game: 'wuwa' | 'pgr' | 'other';
  related: {
    zh: string; // character / scene
    en: string;
    ja: string;
    ko: string;
  };
  collaborators?: string[];
  links?: {
    spotify?: string;
    appleMusic?: string;
    bilibili?: string;
    youtube?: string;
  };
  highlight?: boolean;
};

const wuwa = 'wuwa' as const;

export const songs: Song[] = [
  {
    slug: 'voyaging-stars-farewell',
    title: {
      zh: '远航星的告别',
      en: "Voyaging Star's Farewell",
      ja: '遠航星の別れ',
      ko: '원항성의 작별',
    },
    released: '2026-02',
    release: {
      zh: '《鸣潮》3.1 版本 · 爱弥斯 主题曲',
      en: 'Wuthering Waves 3.1 · Amis Theme',
      ja: '『鳴潮』3.1 · 愛弥斯（Amis）テーマ',
      ko: '《명조》3.1 · 아미스(Amis) 테마',
    },
    game: wuwa,
    related: {
      zh: '爱弥斯 / 飞行雪绒',
      en: 'Amis / Flying Velvet',
      ja: '愛弥斯 / 飛行雪絨',
      ko: '아미스 / 비행 벨벳',
    },
    collaborators: ['Emi Evans'],
    links: {
      spotify: 'https://open.spotify.com/track/3uI2KolgU1Pt41ywffsggr',
      youtube: 'https://www.youtube.com/watch?v=WQ90G6gqycY',
    },
    highlight: true,
  },
  {
    slug: 'anchored-boat',
    title: {
      zh: '停泊的舟',
      en: 'Anchored Boat',
      ja: '停泊する舟',
      ko: '정박한 배',
    },
    released: '2026',
    release: {
      zh: '《鸣潮》3.2 版本 · 爱弥斯隐藏曲',
      en: 'Wuthering Waves 3.2 · Amis Hidden Track',
      ja: '『鳴潮』3.2 · 愛弥斯 隠しトラック',
      ko: '《명조》3.2 · 아미스 히든 트랙',
    },
    game: wuwa,
    related: {
      zh: '爱弥斯 / 飞行雪绒',
      en: 'Amis / Flying Velvet',
      ja: '愛弥斯 / 飛行雪絨',
      ko: '아미스 / 비행 벨벳',
    },
    collaborators: ['飞行雪绒'],
    links: {
      youtube: 'https://www.youtube.com/watch?v=N6e-wg50kfc',
    },
  },
  {
    slug: 'when-blue-falls-into-night',
    title: {
      zh: '当蓝色坠落成夜',
      en: 'When Blue Falls into Night',
      ja: '青が夜へと墜ちるとき',
      ko: '푸름이 밤으로 떨어질 때',
    },
    released: '2025-09',
    release: {
      zh: 'OST《不可度量的独一》黎那汐塔篇 Vol.10',
      en: 'OST · The Immeasurable One, Rinascita Vol.10',
      ja: 'OST『計り知れぬ唯一』リナシタ編 Vol.10',
      ko: 'OST 《측량할 수 없는 유일》 리나시타 편 Vol.10',
    },
    game: wuwa,
    related: {
      zh: '黎那汐塔 · 主线 OST',
      en: 'Rinascita · Main story OST',
      ja: 'リナシタ · メインストーリー OST',
      ko: '리나시타 · 메인 스토리 OST',
    },
  },
  {
    slug: 'ode-to-the-nameless-martyr',
    title: {
      zh: '致以无名的抗争者',
      en: 'Ode to the Nameless Martyr',
      ja: '無名の抵抗者へ捧ぐ',
      ko: '이름 없는 저항자에게',
    },
    released: '2025-07',
    release: {
      zh: '《鸣潮》2.4 版本 · 露帕 剧情终章',
      en: 'Wuthering Waves 2.4 · Lupa Finale',
      ja: '『鳴潮』2.4 · ルパ ストーリー最終章',
      ko: '《명조》2.4 · 루파 스토리 피날레',
    },
    game: wuwa,
    related: {
      zh: '露帕 / Lupa',
      en: 'Lupa',
      ja: 'ルパ',
      ko: '루파',
    },
    collaborators: ['Thena A', 'jixwang', 'VISION SOUND'],
    links: {
      youtube: 'https://www.youtube.com/watch?v=41yjNAOy6sw',
    },
  },
  {
    slug: 'eversinging-song',
    title: {
      zh: '永不结束的歌',
      en: 'Eversinging Song',
      ja: '終わらない歌',
      ko: '끝나지 않는 노래',
    },
    released: '2025-05',
    release: {
      zh: '《鸣潮》一周年主题曲',
      en: 'Wuthering Waves · 1st Anniversary Theme',
      ja: '『鳴潮』一周年テーマ',
      ko: '《명조》 1주년 테마',
    },
    game: wuwa,
    related: {
      zh: '一周年纪念',
      en: 'First anniversary celebration',
      ja: '一周年記念',
      ko: '1주년 기념',
    },
    collaborators: ['xTR33x'],
    links: {
      spotify: 'https://open.spotify.com/track/3sqgTY2pxGWaaYLN1B4B4L',
    },
    highlight: true,
  },
  {
    slug: 'whispered-whims-of-the-wind',
    title: {
      zh: '风语者的即兴舞宴',
      en: 'Whispered Whims of the Wind',
      ja: '風語りの即興舞宴',
      ko: '바람을 듣는 자의 즉흥 무도회',
    },
    released: '2025-05',
    release: {
      zh: '黎那汐塔 风主题 OST《旋律渐叙》',
      en: 'Rinascita Wind OST · Melodic Unfolding',
      ja: 'リナシタ 風テーマ OST『旋律渐叙』',
      ko: '리나시타 바람 테마 OST',
    },
    game: wuwa,
    related: {
      zh: '风主题 / 首支官方曲目',
      en: 'Wind theme · debut',
      ja: '風テーマ・デビュー曲',
      ko: '바람 테마 · 데뷔곡',
    },
    links: {
      spotify: 'https://open.spotify.com/track/4al9NmYiLL74vomyuyVseR',
      appleMusic: 'https://music.apple.com/cn/artist/tarokiki/1811319781',
    },
  },
  {
    slug: 'nights-bright',
    title: {
      zh: '夜之明',
      en: "Night's Bright (feat. Tarokiki)",
      ja: '夜の輝き',
      ko: '밤의 빛',
    },
    released: '2025',
    release: {
      zh: '《战双帕弥什》Where Nightmares Dwell OST',
      en: 'Punishing: Gray Raven · Where Nightmares Dwell OST',
      ja: '『パニシング グレイレイヴン』Where Nightmares Dwell OST',
      ko: '《퍼니싱 그레이 레이븐》Where Nightmares Dwell OST',
    },
    game: 'pgr',
    related: {
      zh: '战双帕弥什跨厂合作',
      en: 'Cross-IP collaboration with PGR',
      ja: 'PGRとのクロスIPコラボ',
      ko: 'PGR 크로스 IP 협업',
    },
    links: {
      appleMusic: 'https://music.apple.com/us/song/nights-bright-feat-tarokiki/1858471141',
    },
  },
];

export const featuredSong = songs.find((s) => s.highlight) ?? songs[0];
