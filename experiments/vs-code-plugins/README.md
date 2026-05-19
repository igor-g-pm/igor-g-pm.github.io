# Porównanie Pluginów VS Code

Na codzień większość czasu spędzam z otwartym VS Code. Jeżeli miałbym gdzies szukać usprawnień to właśnie tutaj dlatego chciałbym porównac dostępne pluginy, oraz to co dostarczają.

| Claude | Codex | Copilot | Antigravity |
|---|---|---|---|
| ✅ | ✅ | ✅✅ | 🙋 |

Copilot jest wbudowany w VS Code, co jest logiczne w końcu oba produkty należą do Microsoftu. Antigravity to fork VS Code'a i nie posiada osobnego pluginu, który moglibyśmy załadować do "czystego" VS Code.

---

## Porównanie featerów

| | Claude | Codex | Copilot | Antigravity |
|---|---|---|---|---|
| MCP | ✅ | ✅ | ✅ | ✅ |
| Skille | ✅ | ✅ | ✅ | ✅ |
| Hooks | ✅ | ✅ | ✅ | 🙋 |
| Undo | ✅ | ✅ | ✅ | ❓ |
| STT | ✅ | ❌ | ✅ | ❓ |

## Notes

Zacznę od Antigravity bo to raczej "notatki z pamięci", gdyż ostatnio nie miałem okazji pracować w tym narzędziu. Gdy z niego korzystałem updaty były rzadkie, nawet jak były jakieś poważniejsze problemy. Ma specyficzny design gdyż ma "agent menadżera" gdzie możemy podglądać zadania oraz czy agent skończył nad nimi pracować czy nadal jest w trakcie. Narzędzia CLi mają podobne podglądy(claude agents czy komenda /agents dla codexa) ale tutaj skupiamy się i porównujemy pluginy do VS Code'a a one ich nie mają, więc Antigravity - zreztą jak samo jego założenie - jest bardziej "agent friendly" na starcie i z jednego miejsca można kierować kilkoma projektami. Nie wiem czy coś się zmieniło ale w Antigravity nie było hookóœ, tylko workflowy, nie jestem pewien jaka dokłądnie jest różnica.

Wszystkie rozwiązania posiadają podstawowe narzędzia AI: możliwość korzystania z MCP  serwerów, Skillsów, hooków(prócz Antigravity).

Claude, Codex i Copilot pozwalają na przywrócenie stanu repo do danego punktu w historii, a Claude i Codex również na fork konwersacji w dowolnym momencie.

Największym zdziwieniem było brak ikonki "mikrofonu" w Codexie - w końcu to oni są twórcami "Whispera". Claude i Copilot mają tę funkcję.

W zadaniach programistycznych z wyżej wymioenionych, Claude i Codex(narzędzia, nie modele), działają najlepiej. W moim obecnym projekcie zrezygnowaliśmy z copilota ze względu na problem z kontekstem i zastąpiliśmy to rozwiązanie: Kilo Code + Copilot (subskrypcja). W takiej konfiguracji dla mnie Cluade, Codex, Kilo Code, OpenCode (jako narzędzia) żaden z nich nie ma znacznej przewagi nad innymi rozwiązaniami.

Copilot ma za to duży plus nie jako narzędzie ale jako subskrypcja/plan, bo możemy z niego korzystać w innych narzędziach jak wyżej wymienione Kilo Code czy OpenCode.

# Podsumowanie

Mimo iż według tabelki zwycięzcami są Claude i Copilot, to osobiście powiedziałbym, że co do NARZĘDZI to kwestia wyłącznie gustu i wybór zależy, w którym narzędziu nam się najlepiej pracuje.
Jeżeli wybierzemy Copilota to on najsłabiej sobie radzi z kontekstem ale jednocześnie można wykorzystać jego plan/subskrypcję w innych narzędziach.
Za to Claude i Codex to jednoznaczne zamknięcie się w pojedynczym ekosystemie.

