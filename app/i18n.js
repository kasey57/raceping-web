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
        'Schedules, live results, standings and DM reminders for Formula 1, FIA WEC, European Le Mans Series, Asian Le Mans Series, Le Mans Cup and IMSA, right inside Discord.',
    },
    nav: {
      series: 'Series',
      features: 'Features',
      commands: 'Commands',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Add to Server',
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
      statsNote: '* Sum of server member counts, including bots and memberships on multiple servers; refreshed periodically.',
      demo: { label: 'Example preview', detail: 'Sun 11:00 JST · Fuji Speedway · countdown & race reminder', qualifying: 'Qualifying Sat', race: 'Race Sun' },
      stats: [
        { value: '6', label: 'series covered' },
        { value: '14', label: 'slash commands' },
        { value: fmt(liveStats.guilds, 'en-US'), count: liveStats.guilds, one: 'server', other: 'servers' },
        { value: fmt(liveStats.users, 'en-US'), count: liveStats.users, one: 'server membership*', other: 'server memberships*' },
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
        text: 'Set it up once. It tracks every calendar, with reminders before races.',
      },
      commands: {
        kicker: 'Commands',
        title: '14 top-level slash commands',
        text: 'Type / in any channel and pick what you need.',
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
      { code: 'ELMS', name: 'European Le Mans Series', emoji: '🏁', note: 'European endurance championship' },
      { code: 'ALMS', name: 'Asian Le Mans Series', emoji: '🏁', note: 'Asian endurance championship' },
      { code: 'LMC', name: 'Le Mans Cup', emoji: '🏆', note: 'Sprint endurance cup' },
      { code: 'IMSA', name: 'IMSA', emoji: '🏎️', note: 'North American sports cars & GTP' },
    ],
    features: [
      {
        title: 'DM Reminders',
        text: 'Subscribe to a series and get a private reminder before every race — 15 minutes, 1 hour, 3 hours or a day ahead.',
      },
      {
        title: 'Server channels',
        text: 'Admins route a series to a text channel with /channel add — reminders land there before every race, and the full paginated results are posted automatically after each race.',
      },
      {
        title: 'Slash Commands Only',
        text: "Modern Discord commands with autocomplete. No prefixes to memorize, no clutter in your channels.",
      },
      {
        title: 'Schedules & Results',
        text: 'Upcoming calendars, latest session results and championship tables, always in clean Discord messages.',
      },
      {
        title: 'Six Series',
        text: 'Formula 1 plus five endurance series — WEC, ELMS, Asian Le Mans, Le Mans Cup and IMSA.',
      },
      {
        title: 'English & Polish',
        text: 'Full interface in two languages. Admins pick the server language; personal commands follow your Discord client language.',
      },
      {
        title: 'Free & Open Data',
        text: 'Powered by racing APIs and official championship tables. No paywalls, no accounts.',
      },
    ],
    commands: [
      ['/next [series]', 'Next race weekend & countdown'],
      ['/calendar [series]', 'Full season calendar'],
      ['/schedule [series]', 'Next weekend hour-by-hour timetable'],
      ['/timezone [zone]', 'Display timezone for race times'],
      ['/result [series]', 'Latest session result'],
      ['/standings f1 / endurance', 'Championship points & classes'],
      ['/remindme series [before]', 'DM reminders before races'],
      ['/unremindme series', 'Stop reminders'],
      ['/subscriptions', 'Your active subscriptions'],
      ['/channel add', 'Channel reminders & auto results (admins)'],
      ['/language', 'Server language (admins)'],
      ['/setup', 'Server settings (admins)'],
      ['/ping', 'Bot latency check'],
      ['/help', 'Command list'],
    ],
    commandsMore: 'Full reference with every series and option →',
    commandPage: {
      kicker: 'Reference',
      title: 'Every command, every option',
      text: 'Pick a series — f1, wec, elms, alms, lmc, imsa — and the bot handles the rest. Anything in [brackets] is optional. /standings and /channel come in variants: f1/endurance and add/remove/list.',
    },
    fullCommands: [
      { cmd: '/next [series]', desc: 'Next race weekend: countdown, round, circuit and a reminder shortcut.', args: 'series: f1 (default), wec, elms, alms, lmc, imsa' },
      { cmd: '/calendar [series]', desc: 'Full season calendar, from the next round to the finale.', args: 'series: f1 (default), wec, elms, alms, lmc, imsa' },
      { cmd: '/schedule [series]', desc: 'Hour-by-hour timetable of the next race weekend.', args: 'series: f1 (default), wec, elms, alms, lmc, imsa' },
      { cmd: '/result [series] [class] [session]', desc: 'Latest qualifying or race result with paginated classification. Team classes appear when the provider supplies them.', args: 'class: Hypercar, LMP2 (+Pro/Am), LMP3 (+Pro/Am), LMGT3, GT, GT3, GTD, GTD PRO, GTP, P3 · session: last, race, qualifying' },
      { cmd: '/standings f1 [type]', desc: 'Formula 1 championship tables.', args: 'type: drivers (default), constructors' },
      { cmd: '/standings endurance series [class]', desc: 'Published teams and manufacturers championship points by class for WEC, ELMS, Asian Le Mans Series, Le Mans Cup and IMSA. Complete tables are paginated. Unavailable points are reported instead of replaced with race wins.', args: 'series: wec, elms, alms, lmc, imsa · class: as above' },
      { cmd: '/remindme series [before]', desc: 'Private DM reminder before every race of a series.', args: 'before: 15m, 1h (default), 3h, 24h' },
      { cmd: '/unremindme series', desc: 'Stop DM reminders for a series.', args: 'series: f1, wec, elms, alms, lmc, imsa' },
      { cmd: '/subscriptions', desc: 'List your active DM subscriptions.', args: '—' },
      { cmd: '/channel add series channel [before] [results]', desc: 'Post series reminders to a server channel; full paginated results follow automatically after each race (admins only).', args: 'before: 15m, 1h (default), 3h, 24h · results: true (default), false' },
      { cmd: '/channel remove series', desc: 'Stop posting a series to the channel (admins only).', args: '—' },
      { cmd: '/channel list', desc: 'Show channel subscriptions on this server (admins only).', args: '—' },
      { cmd: '/timezone [zone]', desc: 'Display timezone for race times — server-wide, or personal in DMs.', args: 'zone: any IANA name, e.g. Europe/Warsaw' },
      { cmd: '/language [language]', desc: 'Server language (admins only).', args: 'language: en, pl' },
      { cmd: '/setup [language]', desc: 'Server settings (admins only).', args: '—' },
      { cmd: '/ping', desc: 'Bot latency check.', args: '—' },
      { cmd: '/help', desc: 'Command list inside Discord.', args: '—' },
    ],
    steps: [
      {
        n: '1',
        title: 'Add the bot',
        text: 'Invite RacePing to your server with the button below to get started.',
      },
      {
        n: '2',
        title: 'Pick a language',
        text: 'Admins set a default server language with /setup or /language. In DMs, personal commands follow your Discord client language.',
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
        a: 'Run /remindme with a series and lead time. The bot DMs you before every race. Manage everything with /subscriptions and /unremindme.',
      },
      {
        q: 'Can the bot post to a channel instead of DMs?',
        a: 'Yes. Server admins run /channel add with a series and a text channel. Reminders arrive before every race, and full paginated results post automatically after each race unless turned off.',
      },
      {
        q: 'Why do I need to allow direct messages from server members?',
        a: 'Reminders are sent as private messages so server channels stay clean. In your Discord privacy settings, allow direct messages from members of that server — otherwise the bot cannot deliver them.',
      },
      {
        q: 'Which series are supported?',
        a: 'Formula 1, FIA WEC, European Le Mans Series, Asian Le Mans Series, Le Mans Cup and IMSA.',
      },
      {
        q: 'Where does the data come from?',
        a: 'F1 data comes from Jolpica. Endurance schedules and results use OpenWEC, with Blacktop filling WEC coverage gaps. Championship points come from the official WEC, ELMS, ALMS and Le Mans Cup websites and IMSA’s official Al Kamel tables. Data is refreshed periodically; points tables are cached for ten minutes. Missing rounds may use an approximate fallback calendar, marked in bot messages.',
      },
      {
        q: 'English or Polish?',
        a: 'Both. Admins set a default server language. In DMs, personal commands follow your Discord client language.',
      },
    ],
    final: {
      title: 'Lights out — are you watching?',
      text: 'Add RacePing to your server and get your first reminder before the next race.',
      cta: 'Add to Server',
    },
    support: {
      kicker: 'Support',
      title: 'Support RacePing',
      text: 'If you enjoy using RacePing, you can support its continued development on Suppi.',
      cta: 'Support on Suppi',
    },
    contact: {
      kicker: 'Contact',
      title: 'Talk racing with me',
      text: 'Running a league, spotted wrong data, or want a feature? Message me directly.',
      discordLabel: 'Discord',
      discordNote: 'Fastest way to reach me',
      emailLabel: 'Email',
      emailNote: 'For anything longer',
    },
    footer: {
      rights: '© 2026 RacePing. Data: Jolpica, OpenWEC, Blacktop and series organisers.',
      disclaimer: 'Not affiliated with FIA, Formula 1 or ACO.',
      commands: 'Commands',
      terms: 'Terms',
      privacy: 'Privacy',
    },
  },

  pl: {
    meta: {
      title: 'RacePing — bot motorsportowy na Discorda',
      description:
        'Terminarze, wyniki na żywo, klasyfikacje i prywatne powiadomienia przed wyścigami F1, WEC, ELMS, Asian Le Mans, Le Mans Cup i IMSA na Twoim Discordzie.',
    },
    nav: {
      series: 'Serie',
      features: 'Funkcje',
      commands: 'Komendy',
      faq: 'FAQ',
      contact: 'Kontakt',
      cta: 'Dodaj na serwer',
      langLabel: 'Język',
    },
    hero: {
      badge: 'Bot motorsportowy na Discorda',
      title1: 'Już nigdy nie przegap ',
      title2: 'wyścigu',
      subtitle:
        'Harmonogramy, wyniki, klasyfikacje i prywatne przypomnienia przed wyścigami Formuły 1 oraz pięciu serii endurance — na Twoim Discordzie, po polsku i angielsku.',
      ctaPrimary: 'Dodaj na serwer',
      ctaSecondary: 'Zobacz komendy',
      statsNote: '* Suma członków serwerów, obejmująca boty i członkostwa na kilku serwerach; odświeżana okresowo.',
      demo: { label: 'Przykładowy podgląd', detail: 'Niedz. 11:00 JST · Fuji Speedway · odliczanie i przypomnienie o wyścigu', qualifying: 'Kwalifikacje: sobota', race: 'Wyścig: niedziela' },
      stats: [
        { value: '6', label: 'serii w jednym bocie' },
        { value: '14', label: 'komend slash' },
        { value: fmt(liveStats.guilds, 'pl-PL'), count: liveStats.guilds, one: 'serwer', few: 'serwery', many: 'serwerów' },
        { value: fmt(liveStats.users, 'pl-PL'), count: liveStats.users, one: 'członkostwo na serwerze*', few: 'członkostwa na serwerach*', many: 'członkostw na serwerach*' },
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
        title: '14 głównych komend slash',
        text: 'Wpisz / w dowolnym kanale i wybierz, czego potrzebujesz.',
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
      { code: 'ELMS', name: 'European Le Mans Series', emoji: '🏁', note: 'Europejskie mistrzostwa endurance' },
      { code: 'ALMS', name: 'Asian Le Mans Series', emoji: '🏁', note: 'Azjatyckie mistrzostwa endurance' },
      { code: 'LMC', name: 'Le Mans Cup', emoji: '🏆', note: 'Sprinterski puchar endurance' },
      { code: 'IMSA', name: 'IMSA', emoji: '🏎️', note: 'Amerykańska seria aut sportowych i GTP' },
    ],
    features: [
      {
        title: 'Prywatne powiadomienia (DM)',
        text: 'Użyj komendy /remindme, aby odbierać prywatne przypomnienia przed każdym wyścigiem — 15 minut, godzinę, 3 godziny lub dzień wcześniej.',
      },
      {
        title: 'Kanały serwera',
        text: 'Administratorzy kierują serię na kanał tekstowy przez /channel add — przypomnienia lądują tam przed każdym wyścigiem, a po każdym wyścigu automatycznie trafiają tam pełne wyniki z paginacją.',
      },
      {
        title: 'Tylko komendy slash',
        text: 'Nowoczesne komendy Discorda z autouzupełnianiem. Żadnych prefiksów do zapamiętywania, żadnego spamu na kanałach.',
      },
      {
        title: 'Terminarze i wyniki',
        text: 'Kalendarz nadchodzących sesji, wyniki ostatnich sesji i tabele mistrzostw w czytelnych wiadomościach Discorda.',
      },
      {
        title: 'Sześć serii',
        text: 'Formuła 1 plus pięć serii endurance — WEC, ELMS, Asian Le Mans, Le Mans Cup i IMSA.',
      },
      {
        title: 'Angielski i polski',
        text: 'Pełny interfejs w dwóch językach. Administrator wybiera język serwera, a komendy osobiste podążają za językiem Twojego klienta Discorda.',
      },
      {
        title: 'Darmowe i otwarte źródła',
        text: 'Oparte na API wyścigowych i oficjalnych tabelach mistrzostw. Bez opłat, bez kont.',
      },
    ],
    commands: [
      ['/next [series]', 'Następny weekend wyścigowy'],
      ['/calendar [series]', 'Pełny kalendarz sezonu'],
      ['/schedule [series]', 'Plan godzinowy najbliższego weekendu'],
      ['/timezone [zone]', 'Strefa czasowa godzin wyścigów'],
      ['/result [series]', 'Wynik ostatniej sesji'],
      ['/standings f1 / endurance', 'Punktowe klasyfikacje i klasy'],
      ['/remindme series [before]', 'Prywatne przypomnienia przed wyścigami'],
      ['/unremindme series', 'Wyłącz przypomnienia'],
      ['/subscriptions', 'Twoje subskrypcje przypomnień'],
      ['/channel add', 'Przypomnienia i wyniki na kanale (administratorzy)'],
      ['/language', 'Język serwera (dla administratorów)'],
      ['/setup', 'Ustawienia serwera (dla administratorów)'],
      ['/ping', 'Sprawdzenie opóźnienia'],
      ['/help', 'Lista komend'],
    ],
    commandsMore: 'Pełna lista z seriami i opcjami →',
    commandPage: {
      kicker: 'Lista komend',
      title: 'Każda komenda, każda opcja',
      text: 'Wybierz serię — f1, wec, elms, alms, lmc, imsa — resztą zajmie się bot. Wszystko w [nawiasach] jest opcjonalne. Komendy /standings i /channel mają warianty: f1/endurance oraz add/remove/list.',
    },
    fullCommands: [
      { cmd: '/next [series]', desc: 'Następny weekend wyścigowy z odliczaniem, rundą i torem.', args: 'series: f1 (domyślnie), wec, elms, alms, lmc, imsa' },
      { cmd: '/calendar [series]', desc: 'Pełny kalendarz sezonu, od następnej rundy do finału.', args: 'series: f1 (domyślnie), wec, elms, alms, lmc, imsa' },
      { cmd: '/schedule [series]', desc: 'Plan godzinowy najbliższego weekendu wyścigowego.', args: 'series: f1 (domyślnie), wec, elms, alms, lmc, imsa' },
      { cmd: '/result [series] [class] [session]', desc: 'Wynik ostatnich kwalifikacji lub wyścigu z paginacją. Klasy zespołów pokazujemy, jeśli są dostępne w danych.', args: 'class: Hypercar, LMP2 (+Pro/Am), LMP3 (+Pro/Am), LMGT3, GT, GT3, GTD, GTD PRO, GTP, P3 · session: last, race, qualifying' },
      { cmd: '/standings f1 [type]', desc: 'Tabele mistrzostw Formuły 1.', args: 'type: drivers (domyślnie), constructors' },
      { cmd: '/standings endurance series [class]', desc: 'Punktowe klasyfikacje zespołów i producentów w klasach WEC, ELMS, Asian Le Mans Series, Le Mans Cup i IMSA. Pełne tabele mają paginację. Bot informuje o braku punktów, zamiast zastępować je liczbą zwycięstw.', args: 'series: wec, elms, alms, lmc, imsa · class: jak wyżej' },
      { cmd: '/remindme series [before]', desc: 'Prywatne przypomnienie w wiadomości prywatnej przed każdym wyścigiem danej serii.', args: 'before: 15m, 1h (domyślnie), 3h, 24h' },
      { cmd: '/unremindme series', desc: 'Wyłącz przypomnienia dla serii.', args: 'series: f1, wec, elms, alms, lmc, imsa' },
      { cmd: '/subscriptions', desc: 'Lista Twoich subskrypcji przypomnień.', args: '—' },
      { cmd: '/channel add series channel [before] [results]', desc: 'Przypomnienia serii na kanał serwera; pełne wyniki z paginacją same po każdym wyścigu (tylko administratorzy).', args: 'before: 15m, 1h (domyślnie), 3h, 24h · results: true (domyślnie), false' },
      { cmd: '/channel remove series', desc: 'Wyłącz posty serii na kanał (tylko administratorzy).', args: '—' },
      { cmd: '/channel list', desc: 'Subskrypcje kanałowe na tym serwerze (tylko administratorzy).', args: '—' },
      { cmd: '/timezone [zone]', desc: 'Strefa czasowa godzin — dla serwera albo prywatnie dla Ciebie.', args: 'zone: nazwa IANA, np. Europe/Warsaw' },
      { cmd: '/language [language]', desc: 'Język serwera (tylko administratorzy).', args: 'language: en, pl' },
      { cmd: '/setup [language]', desc: 'Ustawienia serwera (tylko administratorzy).', args: '—' },
      { cmd: '/ping', desc: 'Sprawdzenie opóźnienia bota.', args: '—' },
      { cmd: '/help', desc: 'Lista komend na Discordzie.', args: '—' },
    ],
    steps: [
      {
        n: '1',
        title: 'Dodaj bota',
        text: 'Zaproś RacePing na swój serwer przyciskiem poniżej.',
      },
      {
        n: '2',
        title: 'Wybierz język',
        text: 'Administrator ustawia domyślny język serwera komendą /setup albo /language. Komendy osobiste w wiadomościach prywatnych podążają za językiem Twojego klienta Discorda.',
      },
      {
        n: '3',
        title: 'Subskrybuj',
        text: 'Każdy użytkownik używa komendy /remindme z wybraną serią i wyprzedzeniem. Przypomnienia o wyścigu przychodzą prosto w wiadomościach prywatnych. Administratorzy mogą też skierować serię na wspólny kanał przez /channel add.',
      },
    ],
    faq: [
      {
        q: 'Czy RacePing jest darmowy?',
        a: 'Tak. Bot i wszystkie jego komendy są darmowe, oparte na otwartych źródłach danych wyścigowych.',
      },
      {
        q: 'Jak dostać prywatne przypomnienia?',
        a: 'Użyj komendy /remindme z serią i wyprzedzeniem. Bot napisze wiadomość prywatną przed każdym wyścigiem. Wszystkim zarządzisz przez /subscriptions i /unremindme.',
      },
      {
        q: 'Czy bot może pisać na kanał zamiast w wiadomości prywatnej?',
        a: 'Tak. Administrator serwera używa komendy /channel add z serią i kanałem tekstowym. Przypomnienia przychodzą przed każdym wyścigiem, a pełne wyniki z paginacją pojawiają się po wyścigu. Automatyczne wyniki można wyłączyć opcją results: false.',
      },
      {
        q: 'Dlaczego muszę zezwolić na wiadomości prywatne od członków serwera?',
        a: 'Przypomnienia to wiadomości prywatne, żeby nie zaśmiecać kanałów serwera. W ustawieniach prywatności serwera włącz odbieranie wiadomości prywatnych od jego członków — inaczej bot nie będzie mógł ich wysłać.',
      },
      {
          q: 'Które serie są obsługiwane?',
        a: 'Formuła 1, FIA WEC, European Le Mans Series, Asian Le Mans Series, Le Mans Cup i IMSA.',
      },
      {
        q: 'Skąd pochodzą dane?',
        a: 'Dane F1 pochodzą z Jolpica. Kalendarze i wyniki endurance korzystają z OpenWEC, a luki WEC uzupełnia Blacktop. Punkty mistrzostw pochodzą z oficjalnych stron WEC, ELMS, ALMS i Le Mans Cup oraz tabel IMSA w Al Kamel. Dane odświeżają się okresowo; tabele punktowe są przechowywane w pamięci przez dziesięć minut. Brakujące rundy mogą korzystać z przybliżonego kalendarza, oznaczonego w wiadomościach bota.',
      },
      {
        q: 'Po polsku czy po angielsku?',
        a: 'Oba języki. Administrator ustawia domyślny język serwera. W wiadomościach prywatnych komendy osobiste mogą używać języka Twojego klienta Discorda.',
      },
    ],
    final: {
      title: 'Światła gasną — oglądasz?',
      text: 'Dodaj RacePing na swój serwer i pierwsze przypomnienie dotrze przed następnym wyścigiem.',
      cta: 'Dodaj na serwer',
    },
    support: {
      kicker: 'Wsparcie',
      title: 'Wesprzyj rozwój RacePing',
      text: 'Jeśli RacePing ułatwia Ci śledzenie wyścigów, możesz wesprzeć jego dalszy rozwój na Suppi.',
      cta: 'Wesprzyj na Suppi',
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
      rights: '© 2026 RacePing. Dane: Jolpica, OpenWEC, Blacktop i organizatorzy serii.',
      disclaimer: 'Niepowiązane z FIA, Formułą 1 i ACO.',
      commands: 'Komendy',
      terms: 'Regulamin',
      privacy: 'Prywatność',
    },
  },
};
