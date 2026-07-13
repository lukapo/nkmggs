export interface CtaLink {
  label: string
  path: string
}

export const site = {
  club: {
    name: 'NK Matija Gubec',
    location: 'Gornja Stubica',
    fullName: 'NK Matija Gubec — Gornja Stubica',
    tagline: 'Nogomet, zajednica i ponos Gornje Stubice',
    description:
      'Nogometni klub iz Gornje Stubice koji od 1970. godine okuplja mlade i odrasle igrače, njeguje lokalnu zajednicu i gradi budućnost kroz rad s djecom i mladežima.',
    foundedYear: 1970,
    aboutIntro:
      'NK Matija Gubec okuplja generacije igrača, roditelja i volontera koji zajedno grade nogometnu priču Gornje Stubice. Kroz treninže, natjecanja i zajedničke događaje klub njeguje sportski duh i ponos lokalne zajednice.',
  },

  assets: {
    logoPath: `${import.meta.env.BASE_URL}images/logo-nk-matija-gubec.png`,
    heroImagePath: `${import.meta.env.BASE_URL}images/hero-placeholder.jpg`,
  },

  contact: {
    email: 'nkmatijagubec1970@gmail.com',
  },

  social: {
    facebook: null,
    instagram: null,
  },

  home: {
    hero: {
      titleLines: ['Nogomet.', 'Zajedništvo.', 'Gornja Stubica.'] as const,
      primaryCta: { label: 'Podrži klub', path: '/donacije' },
      secondaryCta: { label: 'Upoznaj klub', path: '/o-nama' },
    },

    clubIntro: {
      eyebrow: 'O klubu',
      title: 'Mjesto gdje raste nogometna zajednica',
      sinceLabel: 'Od',
      additionalParagraph:
        'Već više od pet decenija klub okuplja djecu, mlade i odrasle igrače, roditelje i volontere koji zajedno grade nogometnu priču Gornje Stubice.',
      cta: { label: 'Više o klubu', path: '/o-nama' },
    },

    categories: {
      eyebrow: 'Kategorije',
      title: 'Od prvih koraka do veterana',
      description:
        'Naš klub okuplja igrače svih uzrasta — od najmlađih do odraslih. Svaka kategorija gradi temelje za sljedeći korak u nogometnom razvoju.',
      cta: { label: 'Sve kategorije', path: '/kategorije' },
    },

    donationCta: {
      eyebrow: 'Podrži klub',
      title: 'Tvoja podrška gradi budućnost mladih igrača',
      text:
        'Donacije pomažu svakodnevni rad s djecom, nabavu opreme i održavanje terena. Svaki doprinos ide u razvoj nogometne škole i jačanje zajednice u Gornjoj Stubici.',
      note:
        'Svaka donacija pomaže razvoju mladih igrača, opreme i svakodnevnog rada kluba. Uskoro ćete moći podržati klub jednostavnom online donacijom.',
      cta: { label: 'Doniraj klubu', path: '/donacije' },
    },

    finalCta: {
      title: 'Postani dio naše priče',
      description:
        'Imate pitanje o treninzima, članstvu ili suradnji? Javite nam se — rado ćemo odgovoriti.',
      primaryCta: { label: 'Kontaktiraj nas', path: '/kontakt' },
      secondaryCta: { label: 'Pregledaj kategorije', path: '/kategorije' },
    },
  },

  pages: {
    about: {
      title: 'O nama',
      storyHeading: 'Naša priča',
      storyText:
        'NK Matija Gubec djeluje od {foundedYear}. godine u Gornjoj Stubici. Kroz desetljeća rada klub je postao mjesto okupljanja mladih igrača, roditelja i volontera koji zajedno grade nogometnu budućnost lokalne zajednice.',
      missionHeading: 'Misija i vizija',
      missionText:
        'Naša misija je razvijati nogometnu kulturu, fair play i odgovornost kroz rad s djecom i mladima. Vizija kluba je sustavno ulaganje u mlade igrače i jačanje zajednice u Gornjoj Stubici.',
      note: 'Sadržaj ove stranice bit će dopunjen u sljedećoj fazi projekta.',
    },

    categories: {
      title: 'Kategorije',
      intro: 'Pregled klupskih kategorija bit će dostupan u sljedećoj fazi projekta.',
    },

    contact: {
      title: 'Kontakt',
      intro: 'Kontakt forma i detalji bit će dostupni u sljedećoj fazi projekta.',
    },

    donations: {
      title: 'Donacije',
      intro: 'Donacijska forma i zahvalnica bit će dostupne u sljedećoj fazi projekta.',
    },
  },
} as const

export type Site = typeof site
