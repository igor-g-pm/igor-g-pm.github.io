# Peoplemore website revamp

Źle podszedłem do tego zadania zacząłem skupiać się za bardzo na modelach i outpucie, a nie na narzędziach to też nauczka dla mnie, żeby skupiać się na odpowednich metrykach. Jednak szkoda, żeby tyle materiału się zmarnowało, więc oprócz czystego feedbacku zostawiam również to co narzędzia i modele wygenerowały. To co znajdziecie w sekcji "Single-file page generation" to właśnie rzultat testów modeli, a nie narzędzi - wydaje mi się nie potrzebny do naszych testów ewentaulnie może być ciekawy w przyszłości jakbyśmy chcieli porównywać modele.

---

Celem testu było porównanie jak narzędzia wspierają naszą pracę w zadaniach frontendowych. Najpierw zastanówmy się czy rozwiązania jakie testujemy dostarczają jakies narzędzia w celu ułątwienia pracy w tym temacie?

| Google | Anthropic | OpenAI |
|---|---|---|
| [Stitch](https://stitch.withgoogle.com/) | [Claude Design](https://claude.ai/design) | brak |

# Google Stitch
Jest znany dłuższy czas, pewien czas temu przeszedł lifting. Można szybko zaprojektować aplikację webową i mobilną, a nastepnie taki projekt wyeksprotować w celu zamienienia "makiet" w pełno prawny produkt.
Google stworzyło [DESIGN.md](https://github.com/google-labs-code/design.md), które staje się standardem i jest wykorzystywany również w "Stitchu". 

# Claude Design
Jest znacznie młodszym rozwiązaniem, zamknięte (nie korzysta z DESIGN.md). Służy do projektowania stron ale również do tworzenia prezentacji we wcześniej stworzonym "design systemie" co pozwala zachować spójność. Generuje więcej plików dotyczących "design systemu" niż pojedyńczy plik w wypadku Stitcha

# Wygenerowane przykłady

**[Compare variants side-by-side →](compare.html)**

## Multi-page variants

- [vanilla-claude](vanilla-claude/index.html) — built with Claude
- [vanilla-codex](vanilla-codex/index.html) — built with Codex
- [claude-impeccable](claude-impeccable/index.html) — built with Claude (impeccable)
- [codex-impeccable](codex-impeccable/index.html) — built with Codex (impeccable)

## Single-file page generation

- [claude-design](claude-design/index.html) — built with Claude (design)
- [claude-opus-4-7-variant1](single-file-page-generation/claude-opus-4-7-variant1.html)
- [claude-opus-4-7-variant2](single-file-page-generation/claude-opus-4-7-variant2.html)
- [claude-opus-4-7-variant3](single-file-page-generation/claude-opus-4-7-variant3.html)
- [claude-sonnet-4-6-variant-1](single-file-page-generation/claude-sonnet-4-6-variant-1.html)
- [claude-sonnet-4-6-variant-2](single-file-page-generation/claude-sonnet-4-6-variant-2.html)
- [claude-sonnet-4-6-variant-3](single-file-page-generation/claude-sonnet-4-6-variant-3.html)
- [codex-5-3-variant-1](single-file-page-generation/codex-5-3-variant-1.html)
- [codex-5-3-variant-2](single-file-page-generation/codex-5-3-variant-2.html)
- [codex-5-3-variant-3](single-file-page-generation/codex-5-3-variant-3.html)
- [gpt-5-5-variant-enterprise-edge](single-file-page-generation/gpt-5-5-variant-enterprise-edge.html)
- [gpt-5-5-variant-human-first](single-file-page-generation/gpt-5-5-variant-human-first.html)
- [gpt-5-5-variant-team-spark](single-file-page-generation/gpt-5-5-variant-team-spark.html)

# Inne rozwiązania/narzędzia

Pomijając oczywistości jak szeroko dostępne skille, pomagające nam uzyskać lepszej jakości wyniki, chciałbym się skupić na tych rozwiązaniach:
- [DESIGN.md](https://github.com/google-labs-code/design.md), który pozwala zdefiniować nasz własny design system w formacie przyjaznym dla AI,
- [Awesome DESIGN.md](https://github.com/VoltAgent/awesome-design-md) zbiór plików DESIGN.md znanych marek,
- [Impeccable](https://github.com/pbakaus/impeccable) framework prowadzący Cię za ręke, tworzy PRODUCT.md, DESIGN.md, a następnie pomoże stworzyć stronę,
- [Open-design](https://github.com/nexu-io/open-design) lokalna alternatywa dla Claude Design
- [huashu-design](https://github.com/alchaincyf/huashu-design/) lokalna alternatywa dla Claude Design bez interfejsu graficznego 

# Podsumowanie

Sam przez dłuższy czas korzystałem z Google Stitcha, ale ostatnio przesiadłem się na Impeccable - podoba mi się proces jaki trzeba przejść, gdzie jestem prowadzony za rękę, odpytywany o rzeczy, którę są ważne żeby poznać produkt/marke, zanim zaczniemy tworzyć stronę. Błędem byłoby jednak powiedzieć, że rozwiązania Google czy Anthropica są złe. Zakładam, że dla ludzi którzy wcześniej pracowali z figmą, będą lepsze, ja jako programista większą cześć spędziłem patrząc na kod, a nie na projekty graficzne, dlatego mam większą przyjemność korzystania z innych rozwiązań, które wymieniłem powyżej.

Zarówno Google Stitch jak i Claude Design przyśpieszą nasza pracę, jednak nie dają nam wystarczającej ilości korzyści aby zdecydować się na zamknięcie w danym ekosystemie. Inne rozwiązania, które wymieniłem są równie dobre, pozwalają commitować kod do repozyteriów, więc również w tym wypadku wiele osób może pracować nad danym projektem oraz przede wszystkim można z nich korzystać z dowolnym modelem. Dlatego nie odbieram braku narzędzia od OpenAI jako minus, gdyż nie wydaje mi się, że jest to obecnie "must-have" mając dostęp do wyżej wymienionych innych narzędzi.
Choć zarzekałem się, że powinniśmy omijać ocenę modeli, muszę nadmienić, że zarówno OpenAI jaki i Google mają u siebie bardzo dobre modele do generowania zdjęć (pomocne podczas projketowania). Jednak

# Ocena 

Polecam wszystkie narzędzia wyżej wymienione, ale jeszcze raz zaznaczam nic nie przekonało mnie na tyle aby wybrać tylko jedno rozwiązanie. Polecam wybranie każdemu tego, w którym najlepiej się mu pracuje. Mimo, że mam swojego faworyta, z którym pracuje to starając się być obiektywnym powiedziałbym, że jest remis.
