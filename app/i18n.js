// All website copy lives here in both languages.
// English stays the default; Polish is the second language.
// Live bot reach (guild/user counts) is baked in at build time from stats.json,
// refreshed nightly by the stats workflow (scripts/fetch-stats.mjs).

import liveStats from '../stats.json';

const fmt = (n, locale) => (typeof n === 'number' ? n.toLocaleString(locale) : '–');

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
        { value: '14', label: 'slash commands' },
        { value: fmt(liveStats.guilds, 'en-US'), count: liveStats.guilds, one: 'server', other: 'servers' },
        { value: fmt(liveStats.users, 'en-US'), count: liveStats.users, one: 'user', other: 'users' },
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
        title: 'Fourteen slash commands',
        text: "Type /next f1 — every series is its own subcommand, no options needed.",
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
      { code: 'IMSA', name: 'IMSA', emoji: '🏎️', note: 'North American sports cars & GTP' },
    ],
    features: [
      {
        title: 'DM Reminders',
        text: 'Subscribe to a series and get a private reminder before every session — 15 minutes, 1 hour, 3 hours or a day ahead.',
      },
      {
        title: 'Server channels',
        text: 'Admins route a series to a text channel with /channel add — reminders land there before every session, and top results post automatically after each race.',
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
      ['/next f1', 'Next race weekend & countdown'],
      ['/calendar f1', 'Full season calendar'],
      ['/schedule f1', 'Next weekend hour-by-hour timetable'],
      ['/timezone [zone]', 'Display timezone for race times'],
      ['/result f1', 'Latest session result'],
      ['/standings f1 / endurance', 'Standings, leaders & classes'],
      ['/remindme series [before]', 'DM reminders before sessions'],
      ['/unremindme series', 'Stop reminders'],
      ['/subscriptions', 'Your active subscriptions'],
      ['/channel add', 'Channel reminders & auto results (admins)'],
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
        text: 'Every member runs /remindme with their series and lead time. Reminders land straight in DMs. Admins can also post a series to a shared channel with /channel add.',
      },
    ],
    faq: [
      {
        q: 'Is RacePing free?',
        a: 'Yes. The bot and all its commands are free, built on open racing data sources.',
      },
      {
        q: 'How do I get personal reminders?',
        a: 'Run /remindme with a series and lead time. The bot DMs you before every session. Manage everything with /subscriptions and /unremindme.',
      },
      {
        q: 'Can the bot post to a channel instead of DMs?',
        a: 'Yes. Server admins run /channel add with a series and a text channel. Reminders arrive before every session, and results post automatically after each session unless turned off.',
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
    support: {
      kicker: 'Support',
      title: 'Fuel the pit crew',
      text: 'RacePing is free and always will be. If it ever saved your race weekend, consider buying me a coffee.',
      cta: 'Buy Me a Coffee',
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
      terms: 'Terms',
      privacy: 'Privacy',
    },
  },

  pl: {
    meta: {
      title: 'RacePing — bot motorsportowy na Discorda',
      description:
        'Terminarze, wyniki na żywo, klasyfikacje i prywatne powiadomienia przed sesjami F1, WEC, ELMS, Asian Le Mans, Le Mans Cup i IMSA na Twoim Discordzie.',
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
      title1: 'Już nigdy nie przegap ',
      title2: 'wyścigu',
      subtitle:
        'Harmonogramy, wyniki, klasyfikacje i prywatne przypomnienia przed sesjami Formuły 1 oraz pięciu serii endurance — na Twoim Discordzie, po polsku i angielsku.',
      ctaPrimary: 'Dodaj na serwer',
      ctaSecondary: 'Zobacz komendy',
      stats: [
        { value: '6', label: 'serii w jednym bocie' },
        { value: '14', label: 'komend slash' },
        { value: fmt(liveStats.guilds, 'pl-PL'), count: liveStats.guilds, one: 'serwer', few: 'serwery', many: 'serwerów' },
        { value: fmt(liveStats.users, 'pl-PL'), count: liveStats.users, one: 'użytkownik', few: 'użytkownicy', many: 'użytkowników' },
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
        title: 'Czternaście komend slash',
        text: 'Wpisz /next f1 — każda seria to osobna subkomenda, bez wypełniania opcji.',
      },
      setup: {
        kicker: 'Konfiguracja',
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
      { code: 'IMSA', name: 'IMSA', emoji: '🏎️', note: 'Amerykańska seria aut sportowych i GTP' },
    ],
    features: [
      {
        title: 'Prywatne powiadomienia (DM)',
        text: 'Zasubskrybuj serię i odbieraj prywatne przypomnienia przed każdą sesją — 15 minut, 1 godzinę, 3 godziny lub dzień wcześniej.',
      },
      {
        title: 'Kanały serwera',
        text: 'Admini kierują serię na kanał tekstowy przez /channel add — remindery lądują tam przed każdą sesją, a po każdym wyścigu automatycznie top wyników.',
      },
      {
        title: 'Tylko komendy slash',
        text: 'Nowoczesne komendy Discorda z autouzupełnianiem. Żadnych prefiksów do zapamiętywania, żadnego spamu na kanałach.',
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
      ['/next f1', 'Następny weekend wyścigowy'],
      ['/calendar f1', 'Pełny kalendarz sezonu'],
      ['/schedule f1', 'Plan godzinowy najbliższego weekendu'],
      ['/timezone [zone]', 'Strefa czasowa godzin wyścigów'],
      ['/result f1', 'Wynik ostatniej sesji'],
      ['/standings f1 / endurance', 'Klasyfikacja, liderzy i klasy'],
      ['/remindme series [before]', 'Remindery PW przed sesjami'],
      ['/unremindme series', 'Wyłącz remindery'],
      ['/subscriptions', 'Twoje subskrypcje'],
      ['/channel add', 'Remindery i wyniki na kanale (admini)'],
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
        text: 'Admin wywołuje /setup albo /language raz. Cała reszta dostosowuje się do języka każdego użytkownika Discorda.',
      },
      {
        n: '3',
        title: 'Subskrybuj',
        text: 'Każdy użytkownik odpala /remindme z wybraną serią i wyprzedzeniem. Remindery przychodzą prosto na PW. Admini mogą też skierować serię na wspólny kanał przez /channel add.',
      },
    ],
    faq: [
      {
        q: 'Czy RacePing jest darmowy?',
        a: 'Tak. Bot i wszystkie jego komendy są darmowe, oparte na otwartych źródłach danych wyścigowych.',
      },
      {
        q: 'Jak dostać prywatne remindery?',
        a: 'Odpal /remindme z serią i wyprzedzeniem. Bot napisze na PW przed każdą sesją. Wszystkim zarządzisz przez /subscriptions i /unremindme.',
      },
      {
        q: 'Czy bot może pisać na kanał zamiast na PW?',
        a: 'Tak. Admin serwera odpala /channel add z serią i kanałem tekstowym. Remindery przychodzą przed każdą sesją, a wyniki same po każdej sesji, chyba że je wyłączysz.',
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
      title: 'Światła gasną — oglądasz?',
      text: 'Dodaj RacePing na swój serwer i pierwszy reminder dotrze przed następną sesją.',
      cta: 'Dodaj na serwer',
    },
    support: {
      kicker: 'Wsparcie',
      title: 'Zasponsoruj pit stop',
      text: 'RacePing jest darmowy i zawsze będzie. Jeśli kiedyś uratował Ci weekend wyścigowy, postaw mi kawę.',
      cta: 'Postaw kawę',
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
      terms: 'Regulamin',
      privacy: 'Prywatność',
    },
  },
};
