// All website copy lives here in both languages.
// English stays the default; Polish is the second language.

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'pl', label: 'Polski' },
];

export const translations = {
  en: {
    meta: {
      title: 'RacePing — Multi-Series Motorsport Discord Bot',
      description:
        'Schedules, live results, standings and DM reminders for F1, WEC, ELMS, Asian Le Mans, Le Mans Cup and IMSA, right inside Discord.',
    },
    nav: {
      series: 'Series',
      features: 'Features',
      commands: 'Commands',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Add to Discord',
      langLabel: 'Language',
    },
    hero: {
      badge: 'Discord motorsport bot',
      title1: 'Never miss a race ',
      title2: 'again',
      subtitle:
        'Schedules, results, standings and DM reminders for Formula 1 and five endurance series — right inside Discord, in English and Polish.',
      ctaPrimary: 'Add to Server',
      ctaSecondary: 'See commands',
      stats: [
        { value: '6', label: 'series covered' },
        { value: '11', label: 'slash commands' },
        { value: '2', label: 'languages' },
      ],
    },
    sections: {
      series: {
        kicker: 'Coverage',
        title: 'Six series, one bot',
        text: 'From Formula 1 Sundays to 24-hour endurance classics.',
      },
      features: {
        kicker: 'Features',
        title: 'Everything a race fan needs',
        text: 'Set it up once. The bot does the watching for you.',
      },
      commands: {
        kicker: 'Commands',
        title: 'Eleven slash commands',
        text: "Type / in any channel and pick what you need.",
      },
      setup: {
        kicker: 'Setup',
        title: 'Running in under a minute',
      },
      faq: {
        kicker: 'FAQ',
        title: 'Questions, answered',
      },
    },
    series: [
      { code: 'F1', name: 'Formula 1', emoji: '🏎️', note: 'Schedules, results, standings' },
      { code: 'WEC', name: 'FIA WEC', emoji: '⏱️', note: 'Endurance world championship' },
      { code: 'ELMS', name: 'European LMS', emoji: '🏁', note: 'European endurance' },
      { code: 'ALMS', name: 'Asian LMS', emoji: '🏁', note: 'Asian endurance' },
      { code: 'LMC', name: 'Le Mans Cup', emoji: '🏆', note: 'Feeder endurance' },
      { code: 'IMSA', name: 'IMSA', emoji: '🏎️', note: 'US sports cars' },
    ],
    features: [
      {
        title: 'DM Reminders',
        text: 'Subscribe to a series and get a private reminder before every session — 15 minutes, 1 hour, 3 hours or a day ahead.',
      },
      {
        title: 'Slash Commands Only',
        text: "Modern Discord commands with autocomplete. No prefixes to memorize, no clutter in your channels.",
      },
      {
        title: 'Schedules & Results',
        text: 'Upcoming calendars, latest session results and championship tables, always in clean embeds.',
      },
      {
        title: 'Six Series',
        text: 'Formula 1 plus five endurance series — WEC, ELMS, Asian Le Mans, Le Mans Cup and IMSA.',
      },
      {
        title: 'English & Polish',
        text: 'Full interface in two languages. Pick per server, or let the bot follow your Discord client.',
      },
      {
        title: 'Free & Open Data',
        text: 'Powered by open racing data (Jolpica, OpenWEC, Blacktop). No paywalls, no accounts.',
      },
    ],
    commands: [
      ['/next [series]', 'Next race weekend'],
      ['/schedule [series]', 'Season calendar'],
      ['/result [series]', 'Latest session result'],
      ['/standings f1 / endurance', 'Standings & leaders'],
      ['/subscribe series', 'DM reminders before sessions'],
      ['/unsubscribe series', 'Stop reminders'],
      ['/subscriptions', 'Your subscriptions'],
      ['/language', 'Server language (admins)'],
      ['/setup', 'Server settings (admins)'],
      ['/ping', 'Bot latency check'],
      ['/help', 'Command list'],
    ],
    steps: [
      {
        n: '1',
        title: 'Add the bot',
        text: 'Invite RacePing to your server with the button below. It only asks for the permissions it needs.',
      },
      {
        n: '2',
        title: 'Pick a language',
        text: 'Admins run /setup or /language once. Everything else follows each member’s own Discord language.',
      },
      {
        n: '3',
        title: 'Subscribe',
        text: 'Every member runs /subscribe with their series and lead time. Reminders land straight in DMs.',
      },
    ],
    faq: [
      {
        q: 'Is RacePing free?',
        a: 'Yes. The bot and all its commands are free, built on open racing data sources.',
      },
      {
        q: 'Why do I need open DMs?',
        a: 'Reminders are sent as private messages so server channels stay clean. Allow DMs from server members in your privacy settings and they will arrive.',
      },
      {
        q: 'Which series are supported?',
        a: 'Formula 1, FIA WEC, European Le Mans Series, Asian Le Mans Series, Le Mans Cup and IMSA.',
      },
      {
        q: 'Where does the data come from?',
        a: 'F1 data comes from Jolpica, endurance data from OpenWEC, gap-filled by Blacktop. Race weekends update automatically.',
      },
      {
        q: 'English or Polish?',
        a: 'Both. Servers set a default language; in DMs the bot follows your own Discord client language.',
      },
    ],
    final: {
      title: 'Lights out — are you watching?',
      text: 'Add RacePing to your server and get your first reminder before the next session.',
      cta: 'Add to Server',
    },
    contact: {
      kicker: 'Contact',
      title: 'Talk racing with me',
      text: 'Running a league, spotted wrong data, or want a feature? Message me directly.',
      discordLabel: 'Discord',
      discordNote: 'Fastest way to reach me',
      emailLabel: 'Email',
      emailNote: 'For longer stuff',
    },
    footer: {
      rights: '© 2026 RacePing. Data: Jolpica, OpenWEC, Blacktop.',
      disclaimer: 'Not affiliated with FIA, Formula 1 or ACO.',
    },
  },

  pl: {
    meta: {
      title: 'RacePing — bot motorsportowy na Discorda',
      description:
        'Terminarze, wyniki, klasyfikacje i remindery PW dla F1, WEC, ELMS, Asian Le Mans, Le Mans Cup i IMSA, wprost na Discordzie.',
    },
    nav: {
      series: 'Serie',
      features: 'Funkcje',
      commands: 'Komendy',
      faq: 'FAQ',
      contact: 'Kontakt',
      cta: 'Dodaj do Discorda',
      langLabel: 'Język',
    },
    hero: {
      badge: 'Bot motorsportowy na Discorda',
      title1: 'Nie przegap wyścigu ',
      title2: 'nigdy',
      subtitle:
        'Terminarze, wyniki, klasyfikacje i remindery PW dla Formuły 1 i pięciu serii endurance — na Twoim Discordzie, po polsku i angielsku.',
      ctaPrimary: 'Dodaj na serwer',
      ctaSecondary: 'Zobacz komendy',
      stats: [
        { value: '6', label: 'serii w jednym bocie' },
        { value: '11', label: 'komend slash' },
        { value: '2', label: 'języki' },
      ],
    },
    sections: {
      series: {
        kicker: 'Zakres',
        title: 'Sześć serii, jeden bot',
        text: 'Od niedzielnych wyścigów F1 po 24-godzinne klasyki endurance.',
      },
      features: {
        kicker: 'Funkcje',
        title: 'Wszystko, czego potrzebuje fan wyścigów',
        text: 'Skonfiguruj raz. Reszta dzieje się sama.',
      },
      commands: {
        kicker: 'Komendy',
        title: 'Jedenaście komend slash',
        text: 'Wpisz / w dowolnym kanale i wybierz, czego potrzebujesz.',
      },
      setup: {
        kicker: 'Setup',
        title: 'Działa w mniej niż minutę',
      },
      faq: {
        kicker: 'FAQ',
        title: 'Częste pytania',
      },
    },
    series: [
      { code: 'F1', name: 'Formuła 1', emoji: '🏎️', note: 'Terminarze, wyniki, klasyfikacje' },
      { code: 'WEC', name: 'FIA WEC', emoji: '⏱️', note: 'Mistrzostwa świata endurance' },
      { code: 'ELMS', name: 'European LMS', emoji: '🏁', note: 'Endurance europejski' },
      { code: 'ALMS', name: 'Asian LMS', emoji: '🏁', note: 'Endurance azjatycki' },
      { code: 'LMC', name: 'Le Mans Cup', emoji: '🏆', note: 'Puchar Le Mans' },
      { code: 'IMSA', name: 'IMSA', emoji: '🏎️', note: 'US sports cars' },
    ],
    features: [
      {
        title: 'Remindery PW',
        text: 'Zasubskrybuj serię i dostanaj prywatne remindery przed każdą sesją — 15 minut, 1 godzinę, 3 godziny lub dzień wcześniej.',
      },
      {
        title: 'Tylko komendy slash',
        text: 'Nowoczesne komendy Discorda z autouzupełnianiem. Żadnych prefiksów do zapamiętywania, żadnego śmieci na kanałach.',
      },
      {
        title: 'Terminarze i wyniki',
        text: 'Nadchodzące kalendarze, wyniki ostatnich sesji i tabele mistrzostw, zawsze w schludnych embedach.',
      },
      {
        title: 'Sześć serii',
        text: 'Formuła 1 plus pięć serii endurance — WEC, ELMS, Asian Le Mans, Le Mans Cup i IMSA.',
      },
      {
        title: 'Angielski i polski',
        text: 'Pełny interfejs w dwóch językach. Wybierz na serwerze albo pozwól botowi użyć języka Twojego klienta Discorda.',
      },
      {
        title: 'Darmowe i otwarte źródła',
        text: 'Oparte na otwartych danych wyścigowych (Jolpica, OpenWEC, Blacktop). Bez opłat, bez kont.',
      },
    ],
    commands: [
      ['/next [series]', 'Następny weekend wyścigowy'],
      ['/schedule [series]', 'Kalendarz sezonu'],
      ['/result [series]', 'Wynik ostatniej sesji'],
      ['/standings f1 / endurance', 'Klasyfikacja i liderzy'],
      ['/subscribe series', 'Remindery PW przed sesjami'],
      ['/unsubscribe series', 'Wyłącz remindery'],
      ['/subscriptions', 'Twoje subskrypcje'],
      ['/language', 'Język serwera (dla adminów)'],
      ['/setup', 'Ustawienia serwera (dla adminów)'],
      ['/ping', 'Sprawdzenie opóźnienia'],
      ['/help', 'Lista komend'],
    ],
    steps: [
      {
        n: '1',
        title: 'Dodaj bota',
        text: 'Zaproś RacePing na swój serwer przyciskiem poniżej. Bot prosi tylko o potrzebne uprawnienia.',
      },
      {
        n: '2',
        title: 'Wybierz język',
        text: 'Admin wywołuje /setup albo /language raz. Wszystko reszta dostosowuje się do języka każdego użytkownika Discorda.',
      },
      {
        n: '3',
        title: 'Subskrybuj',
        text: 'Każdy użytkownik odpala /subscribe z wybraną serią i wyprzedzeniem. Remindery przychodzą prosto na PW.',
      },
    ],
    faq: [
      {
        q: 'Czy RacePing jest darmowy?',
        a: 'Tak. Bot i wszystkie jego komendy są darmowe, oparte na otwartych źródłach danych wyścigowych.',
      },
      {
        q: 'Po co mi otwarte PW?',
        a: 'Remindery przychodzą jako prywatne wiadomości, żeby nie zaśmiecać kanałów serwera. Włącz odbieranie PW od członków serwera w ustawieniach prywatności i będą działać.',
      },
      {
          q: 'Które serie są obsługiwane?',
        a: 'Formuła 1, FIA WEC, European Le Mans Series, Asian Le Mans Series, Le Mans Cup i IMSA.',
      },
      {
        q: 'Skąd pochodzą dane?',
        a: 'Dane F1 pochodzą z Jolpica, dane endurance z OpenWEC, a luki uzupełnia Blacktop. Weekendy wyścigowe aktualizują się samoczynnie.',
      },
      {
        q: 'Po polsku czy po angielsku?',
        a: 'Oba języki. Serwer ustawia język domyślny, a na PW bot używa języka Twojego klienta Discorda.',
      },
    ],
    final: {
      title: 'Gaśnie światło — oglądasz?',
      text: 'Dodaj RacePing na swój serwer i pierwszy reminder dotrze przed następną sesją.',
      cta: 'Dodaj na serwer',
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Pogadajmy o wyścigach',
      text: 'Prowadzisz ligę, znalazłeś błąd w danych albo chcesz nową funkcję? Napisz do mnie.',
      discordLabel: 'Discord',
      discordNote: 'Najszybszy kontakt',
      emailLabel: 'Email',
      emailNote: 'Do dłuższych spraw',
    },
    footer: {
      rights: '© 2026 RacePing. Dane: Jolpica, OpenWEC, Blacktop.',
      disclaimer: 'Niepowiązane z FIA, Formułą 1 i ACO.',
    },
  },
};
