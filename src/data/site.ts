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
      'Nogometni klub iz Gornje Stubice koji od 1970. godine okuplja mlade i odrasle igrače, njeguje lokalnu zajednicu i gradi budućnost kroz rad s djecom i mladeži.',
    foundedYear: 1970,
    aboutIntro:
      'NK Matija Gubec okuplja generacije igrača, roditelja i volontera koji zajedno grade nogometnu priču Gornje Stubice. Kroz treninže, natjecanja i zajedničke događaje klub njeguje sportski duh i ponos lokalne zajednice.',
  },

  assets: {
    logoPath: `${import.meta.env.BASE_URL}images/logo-nk-matija-gubec.png`,
    heroImagePath: `${import.meta.env.BASE_URL}images/hero-placeholder.jpg`,
    aboutImagePath: `${import.meta.env.BASE_URL}images/about-placeholder.jpg`,
    categoriesImagePath: `${import.meta.env.BASE_URL}images/categories-placeholder.jpg`,
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

      pageHeader: {
        eyebrow: 'NK Matija Gubec · Gornja Stubica',
        visualCaption: 'Fotografija kluba — uskoro',
      },

      story: {
        eyebrow: 'Povijest',
        title: 'Naša priča',
        paragraphs: [
          'NK Matija Gubec djeluje od {foundedYear}. godine u Gornjoj Stubici. Od prvih dana klub je bio mjesto susreta lokalne zajednice — roditelja, volontera i igrača koji su zajedno gradili nogometnu kulturu u svojoj sredini.',
          'Kroz desetljeća rada klub je postao središte okupljanja djece i mladih. Treninzi, prijateljske utakmice i zajednički događaji oblikovali su klupski identitet utemeljen na suradnji, uključenosti i ljubavi prema nogometu.',
          'Danas NK Matija Gubec nastavlja tu tradiciju — razvija mlade igrače, njeguje fair play i jača povezanost stanovnika Gornje Stubice s vlastitim klubom.',
        ],
      },

      values: {
        eyebrow: 'Vrijednosti',
        title: 'Naše vrijednosti',
        description: 'Načela koja nas vode u svakodnevnom radu s igračima, roditeljima i zajednicom.',
        items: [
          {
            title: 'Zajedništvo',
            description:
              'Klub je mjesto okupljanja — igrača, obitelji i volontera koji zajedno stvaraju sigurno i podržavajuće okruženje za sve generacije.',
          },
          {
            title: 'Razvoj mladih',
            description:
              'Svaki trening i svaka utakmica prilika su za učenje, napredak i izgradnju samopouzdanja kroz nogometnu školu prilagođenu uzrastu.',
          },
          {
            title: 'Sportski duh',
            description:
              'Poštovanje pravila, protivnika i suca temelj je našeg rada. Nogomet nas uči timskom radu, odgovornosti i poštenju.',
          },
          {
            title: 'Lokalni ponos',
            description:
              'Ponosno predstavljamo Gornju Stubicu — njegujemo povezanost s lokalnom zajednicom i doprinosimo njenom sportskom životu.',
          },
        ],
      },

      clubToday: {
        eyebrow: 'Danas',
        title: 'Klub danas',
        description:
          'Naš klub okuplja kategorije za sve uzraste — od najmlađih igrača do veterana. Svaka kategorija dio je iste zajednice koja diše nogomet i lokalni ponos.',
        cta: { label: 'Pregledaj sve kategorije', path: '/kategorije' },
      },

      finalCta: {
        title: 'Postani dio kluba',
        description:
          'Bilo da tražiš informacije o treninzima, članstvu ili suradnji — tu smo za tebe. Javi nam se ili upoznaj naše kategorije.',
        primaryCta: { label: 'Kontaktiraj nas', path: '/kontakt' },
        secondaryCta: { label: 'Pregledaj kategorije', path: '/kategorije' },
      },
    },

    categories: {
      title: 'Kategorije',

      pageHeader: {
        eyebrow: 'NK Matija Gubec · Nogometna škola',
        intro:
          'Naš klub okuplja kategorije za djecu, mlade i odrasle igrače. Od prvih koraka na terenu do veterana — svatko može pronaći svoje mjesto u zajednici NK Matija Gubec.',
        visualCaption: 'Fotografija treninga — uskoro',
      },

      grid: {
        eyebrow: 'Pregled',
        title: 'Sve kategorije kluba',
        description:
          'Pregledaj kategorije i saznaj više o uzrastu, opisu i statusu svake ekipe. Točna godišta bit će objavljena čim budu potvrđena.',
      },

      coachPendingLabel: 'Uskoro',
      photoPlaceholderLabel: 'Fotografija — uskoro',

      statusLabels: {
        active: 'Aktivno',
        'coming-soon': 'Uskoro',
      },

      finalCta: {
        title: 'Pronađi svoje mjesto u klubu',
        description:
          'Roditelji, djeca i igrači — imate pitanja o kategoriji, treninzima ili članstvu? Javite nam se ili upoznajte klub iz prve ruke.',
        primaryCta: { label: 'Kontaktiraj nas', path: '/kontakt' },
        secondaryCta: { label: 'O klubu', path: '/o-nama' },
      },
    },

    contact: {
      title: 'Kontakt',
      intro: 'Kontakt forma i detalji bit će dostupni u sljedećoj fazi projekta.',
    },

    donations: {
      title: 'Podrži NK Matija Gubec',

      pageHeader: {
        eyebrow: 'Donacije',
        intro:
          'Vaša podrška izravno pomaže svakodnevnom radu NK Matija Gubec. Donacije omogućuju nabavu sportske opreme, kontinuirani rad s djecom i mladima, hranu, piće i zajednička druženja, održavanje terena i klupskih prostora te ulaganje u izgradnju i poboljšanje infrastrukture — sve s ciljem budućeg razvoja našeg kluba.',
        highlight: 'Svaka donacija, bez obzira na iznos, pomaže radu i razvoju kluba.',
      },

      stepper: {
        steps: ['Podaci', 'Plaćanje', 'Potvrda', 'Zahvalnica'] as const,
      },

      form: {
        firstNameLabel: 'Ime',
        lastNameLabel: 'Prezime',
        jerseyNumberLabel: 'Odaberite broj na dresu',
        amountLabel: 'Iznos donacije (EUR)',
        jerseyHint:
          'Ako ne odaberete broj, aplikacija će automatski odabrati nasumičan broj od 0 do 99.',
        randomButtonLabel: 'Nasumičan broj',
        submitLabel: 'Generiraj kod za plaćanje',
        errors: {
          firstNameRequired: 'Ime je obavezno.',
          firstNameMinLength: 'Ime mora imati najmanje 2 znaka.',
          lastNameRequired: 'Prezime je obavezno.',
          lastNameMinLength: 'Prezime mora imati najmanje 2 znaka.',
          jerseyNumberInvalid: 'Broj na dresu mora biti cijeli broj od 0 do 99.',
          amountRequired: 'Iznos donacije je obavezan.',
          amountInvalid: 'Iznos mora biti broj veći od 0.',
        },
      },

      payment: {
        title: 'Kod za plaćanje',
        qrPlaceholder: 'PDF417 kod — uskoro',
        explanation:
          'Kod možete skenirati svojom mobilnom bankovnom aplikacijom ili ručno unijeti podatke za plaćanje.',
        backLabel: 'Natrag na podatke',
        continueLabel: 'Nastavi na potvrdu',
        details: {
          recipient: 'NK Matija Gubec Gornja Stubica',
          iban: 'HR4423600001102535916',
          bic: 'ZABAHR2X',
          bank: 'Zagrebačka banka',
          currency: 'EUR',
          description: 'Donacija - Luka Postružin',
          model: 'HR00',
          reference: '13072026',
          amount: '30,00 EUR',
        },
      },

      thankYouLocked: {
        message: 'Personalizirana zahvalnica bit će generirana nakon potvrde donacije.',
      },

      processPreview: {
        title: 'Tvoja donacija pomaže',
        intro:
          'Svaki doprinos ide izravno u rad kluba i budućnost naših mladih igrača. Zahvaljujemo na svakoj podršci.',
        items: [
          'Rad s djecom i mladima',
          'Nabava sportske opreme',
          'Održavanje igrališta i klupskih prostora',
          'Razvoj infrastrukture i kluba',
        ],
      },

      confirmationSummary: {
        title: 'Sažetak postupka',
        description:
          'Provjerite jeste li izvršili uplatu na prikazani račun. Potvrdom donacije nastavljate na generiranje zahvalnice.',
        items: [
          'Uplata se izvršava putem vaše bankovne aplikacije',
          'Stranica ne provjerava stvarno izvršenje transakcije',
          'Zahvalnica se generira tek nakon vaše potvrde',
        ],
      },

      confirmation: {
        title: 'Potvrda donacije',
        importantTitle: 'Važno',
        importantText:
          'Web stranica ne može automatski provjeriti bankovnu uplatu. Molimo potvrdite donaciju samo ako ste zaista izvršili uplatu.',
        statement:
          'Izjavljujem da sam prema vlastitoj savjesti izvršio donaciju NK Matija Gubec na prikazani račun. Razumijem da web-stranica ne provjerava niti može potvrditi stvarno izvršenje bankovne transakcije.',
        socialConsent:
          'Dopuštam NK Matija Gubec da moju personaliziranu zahvalnicu objavi na svojim društvenim mrežama.',
        backToPaymentLabel: 'Natrag na plaćanje',
        confirmLabel: 'Potvrdi donaciju',
        errors: {
          paymentDeclaredRequired:
            'Za nastavak morate potvrditi da ste izvršili donaciju.',
        },
      },

      thankYou: {
        title: 'Hvala na donaciji!',
        placeholderExplanation:
          'Personalizirana zahvalnica bit će prikazana u sljedećoj fazi implementacije.',
        explanation:
          'Vaša personalizirana zahvalnica spremna je za preuzimanje i dijeljenje.',
        exampleLabel: 'Primjer izgleda — UI faza',
        futureHint:
          'Kasnije će se dinamički prikazivati inicijali svih osobnih imena, prezime donatora i odabrani ili nasumično generirani broj dresa.',
        previewName: 'I. PREZIME',
        previewNumber: '27',
      },

      actions: {
        title: 'Nakon završetka',
        downloadLabel: 'Preuzmi zahvalnicu',
        shareLabel: 'Podijeli zahvalnicu',
        finishLabel: 'Završi proces',
        soonLabel: 'Uskoro',
        notes: [
          'Zahvalnicu ćete uvijek moći preuzeti na svoj uređaj.',
          'Dijeljenje će biti omogućeno kada vaš uređaj i preglednik to podržavaju.',
          'Završetak procesa resetirat će formu i vratiti stranicu na početno stanje.',
        ],
      },
    },
  },
} as const

export type Site = typeof site
