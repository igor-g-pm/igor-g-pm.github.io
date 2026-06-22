# Rekomendacje

_Data utworzenia: 2026-06-22_

_Data ostatniej modyfikacji: 2026-06-22_

Moje osobiste rekomendacje i zalecenia dot. AI i LLM — jak pracować, co wybierać i kiedy.

## Harness, IDE, Agenci etc.

Większość obecnych "uprzęży" radzi sobie całkiem nieźle, nie widzę sensu rekomendacji pojedynczych narzędzi, bo zarówno Claude Code jak i Codex radzą sobie dobrze. To bardziej zależy od preferencji i w jaki sposób chcemy pracować. Obecnie widzę 3 rozwiązania:

- IDE lub plugin w IDE, np. Claude Code w VS Code, Codex w VS Code, Copilot, Kilo Code w VS Code, Cursor. Dawniej Copilot nie radził sobie tak dobrze z kontekstem, nie wiem jak jest teraz, ale zawsze można skorzystać z planu Copilota w innych pluginach w VS Code (wystarczy w ustawieniach pluginu podać jako providera GitHub Copilot — działa w Kilo Code, Roo Code),
- narzędzia TUI (terminal UI), Claude CLI, Codex CLi, Opencode, Pi, Grok Build,
- "Platformy orkiestracji agentów"? Nie wiem, czy można tak to nazwać, ale przykładem jest Antigravity 2.0 (lub Agent Manager mode z Antigravity 1.x). Aplikacje desktopowe jak Codex czy Claude — ograniczone funkcjonalności edytora tekstu (nie tak dobre jak w czystym IDE), praca polega bardziej na zarządzaniu agentami

Często dane narzędzie ma coś, czego nie mają inne, ale pod spodem to jakiś skill lub serwer MCP, który można zainstalować w każdym innym narzędziu... Tutaj wspomniałbym o zasadzie Pareta — 80% czasu korzystamy z 20% featurów, 20% czasu z 80% featurów (jest wiele featurów, które są "wow", ale nie korzystamy z nich wcale lub rzadko). Dlatego większość narzędzi radzi sobie wystarczająco dobrze z większością zadań programistycznych i polecam eksperymentować z nimi, żeby sprawdzić, które najbardziej nam pasuje.
Jeżeli ktoś rekomenduje narzędzie, a nie model, to w większości przypadków jest to błąd!

Jeżeli nadal nie jesteśmy zadowoleni z tego, jak działają te rozwiązania, zawsze możemy zbudować własne narzędzie. Wystarczy poszukać "Agents SDK" (przykład: https://developers.openai.com/api/docs/guides/agents)

## Modele

Modele powinniśmy dobierać w zależności od zadania. Poniżej podaję moje rekomendacje. Nie polecam korzystać z modeli przeznaczonych do prostszych zadań w trudniejszych zadaniach, natomiast korzystanie z mądrzejszych modeli w prostszych zadaniach jest ok — trzeba jedynie pamiętać, że to często może wiązać się z wyższym kosztem. Krótko mówiąc — nie ma co przepłacać w prostych zadaniach za mocniejsze modele.

Często możemy wybrać też, jak dużo model ma myśleć (effort level). Startuj z medium i staraj się nie wybierać niczego więcej ponad High (zobacz wykres DeepSWE, gdzie widać, że xhigh często kosztuje znacznie więcej, a wynik jest tylko trochę lepszy). Do większości zadań to powinno wystarczyć, ale jak to nie działa, to zawsze możesz spróbować, czy "xhigh" czy "max" pomogło

### Programowanie - zmiany w wielu plikach

#### Wskazane gdy dostępne

- ~~Claude Fable 5 (Do najtrudniejszych zadań)~~(niedostępny),
- GPT-5.5 (Według mnie najlepszy model, wygrywa w DeepSWE pod względem inteligencji, ilości tokenów, które potrzebuje, żeby rozwiązać zadanie, oraz kosztu per zadanie),
- Claude Opus 4.8 (Bardzo mocny model, porównywalny pod względem inteligencji z GPT-5.5, zazwyczaj potrzebuje więcej tokenów i kosztuje więcej per zadanie według benchmarków, dlatego jest umieszczony niżej),

#### Zapasowe

- Composer 2.5 (Czarny koń: testuję go ostatnio w Grok Build, radzi sobie nieźle przy tworzeniu aplikacji od podstaw i ewentualnych prośbach o nowe featury, jednocześnie jest bardzo tani — 0.5$/M Input, 2.5$/M Output; model jest fine-tunowany w celach programistycznych i wyłącznie do tego powinien być wykorzystywany),
- GPT-5.4, GPT-5.3-Codex,
- Claude Opus 4.7,

### Zmiany wewnątrz jednego pliku

W tej kategorii nadal korzystałbym z powyższych modeli, ewentualnie dołożyłbym kilka, ale korzystał z nich tylko, gdy miałbym problem z powyższymi (gdyż tamte są bardziej inteligentne, a jednocześnie stosunkowo tanie per zadanie)

- Claude Sonnet 4.6,
- Gemini 3.5-flash (ogólnie odradzam, gdyż produkuje bardzo dużo tokenów per zadanie, ale jeżeli nie mamy wyjścia, bo np. Gemini jest wyborem klienta, to potrafię zrozumieć taki wybór),


## Tokenmaxxing

- [ponytail](https://github.com/DietrichGebert/ponytail) — plugin, który skłania agenta do pisania minimalnej, niezbędnej ilości kodu zamiast over-engineeringu (deklaruje ~54% mniej kodu); działa z Claude Code, Codex, Copilot CLI i innymi.
- [headroom](https://github.com/headroomlabs-ai/headroom) — kompresuje kontekst (wyjścia narzędzi, logi, fragmenty RAG) redukując liczbę tokenów o 60–95% bez utraty jakości; jako biblioteka, proxy lub MCP.
- [codegraph](https://github.com/colbymchenry/codegraph) — wstępnie zindeksowany graf wiedzy o kodzie, który synchronizuje się z repozytorium i daje agentom semantyczną nawigację po kodzie lokalnie, ograniczając zużycie tokenów i liczbę wywołań narzędzi.
- [caveman](https://github.com/JuliusBrussee/caveman) — skill kompresujący wyjście agenta (~65–75%) przez zwięzły, „jaskiniowy” styl wypowiedzi, zachowując poprawność techniczną; różne poziomy (lite/full/ultra) i wsparcie dla 30+ narzędzi.

## Baza wiedzy o kodzie

> ⚠️ **Uwaga:** To nie jest to samo co Tokenmaxxing! To narzędzia tworzące bazę wiedzy, która może się przydać, gdy czegoś szukamy lub mamy zrobić zmianę w aplikacji, w której pracujemy pierwszy raz i najpierw chcemy ją poznać (onboarding)

- [graphify](https://github.com/safishamsi/graphify) — zamienia folder z kodem, dokumentacją, PDF-ami, obrazami czy wideo w odpytywalny graf wiedzy zintegrowany z Claude Code, Cursor i Gemini CLI.
- [Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) — przekształca kod w interaktywny graf wiedzy, który można przeszukiwać i eksplorować przez wizualny dashboard; działa jako plugin w Claude Code, Cursor, Copilot.
- [GitNexus](https://github.com/abhigyanpatwari/GitNexus) — buduje przeszukiwalny graf wiedzy o repozytorium, pomagając agentom zrozumieć zależności, łańcuchy wywołań i relacje architektoniczne.
- [repomix](https://github.com/yamadashy/repomix) — pakuje całe repozytorium w jeden, przyjazny dla LLM plik, gotowy do wrzucenia do Claude, ChatGPT i innych asystentów.


## Benchmarki

- [DeepSWE](https://deepswe.datacurve.ai/) — benchmark inżynierii oprogramowania o długim horyzoncie, testujący modele na oryginalnych, wolnych od kontaminacji zadaniach w wielu repozytoriach i językach.
- [Artificial Analysis](https://artificialanalysis.ai/) — niezależna platforma porównująca modele AI i dostawców API pod kątem inteligencji, szybkości i kosztu.

## Meta prompting

Wstęp historyczny.

Gdy modele wchodziły na rynek, nie były tak inteligentne jak obecnie. W tamtym okresie powstał hack, żeby dodawać do prompta frazę "think deeply" lub "think step by step", co symulowało złożone myślenie i poprawiało jakość odpowiedzi. Po tej sytuacji modele domyślnie dodawały ukryte "thought tokens", które wymuszały myślenie na modelach — nazywamy to "Chain of Thought".
To przykład iteracji, gdzie prompt engineering usprawniał jakość generowanych odpowiedzi na tyle, że zdecydowano się na domyślne wykorzystywanie tego podejścia w późniejszych modelach. Podobnie jest z "uprzężami" jak Codex czy Claude Code — gdy pojawia się coś, co poprawia jakość generowanego kodu, często taka funkcjonalność jest przenoszona do innych pluginów.

Wydaje mi się, że podobnie sprawa ma się z meta promptingiem. Na początku mieliśmy wiele frameworków, które usystematyzowały naszą pracę, wprowadzały pewne ramy, pewne procesy — jak tworzony był plan oraz to, jak AI go wykonuje (krok po kroku). Natomiast mam też wrażenie, że podobna obsługa została dodana do narzędzi i modeli, z których korzystamy, i teraz często otrzymujemy podobne wyniki, jednocześnie bez potrzeby generowania planu z wykorzystaniem frameworków do meta promptingu.
Jeżeli nadal chcemy mieć ładnie rozpisany plan lub chcemy pracować jak w dużym korpo, gdzie wszystko ma swój proces, przez który trzeba przejść, to nadal możemy skorzystać z tych frameworków — jednak pytanie, czy narzut czasu oraz koszt przekłada się na jakość?

Obecnie narzędzia i modele są na tyle zaawansowane, że nie polecam korzystania z frameworków do meta promptingu, jednakże pewnie są zadania, w których może być pomocny, dlatego nie skreślam ich całkowicie. No i oczywiście zawsze można potestować raz na jakiś czas, żeby sprawdzić, czy są jakieś zmiany :)

Informacyjnie lista popularnych narzędzi z tej kategorii:
- [get-shit-done](https://github.com/gsd-build/get-shit-done)
- [Superpowers](https://github.com/obra/Superpowers)
- [spec-kit](https://github.com/github/spec-kit)
- [openspec](https://github.com/Fission-AI/openspec)
- [bmad-method](https://github.com/bmad-code-org/bmad-method)