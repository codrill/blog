---
path: "przywracanie-wczesniejszej-wersji-brancha-poziom-hard"
date: "2019-07-16"
title: "Przywracanie wersji brancha - poziom 'hard'"
categories: ['git', 'organizacja pracy']
difficulty: "średni"
excerpt: "O tym jak przywrócić dane z konkretnego commita wraz ze zmianą historii gita."
---

Dzisiaj weźmiemy na tapetę przykład z życia i to całkiem świeży - okazało się, że na branchu 
`master` mamy nie to co powinniśmy mieć.. I to od jakiegoś czasu.  

Krótka anegdotka, czyli historia o tym jak się nam posypał `master` branch:

Robiliśmy mały projekcik i chcieliśmy go opublikować na github pages a proces deploymentu zautomatyzować za pomocą bibliotek
`gh-pages`. Wszystko ładnie, pięknie, gdyby nie to, że prawie na samym początku, w konfiguracji mieliśmy omyłkowo 
ustawionego deploya na branch `master`.

Sprawa wyszła na jaw dopiero po kilku kolejnych commitach do `develop`a - gdy chcieliśmy zrobić kolejnego deploya.
Oczywiście nie mogliśmy dograć najnowszego `develop`a do `master`a, ponieważ `develop` powinien najpierw dociągnąć 
najnowszą wersję z głównego brancha.. Ale tego nie chcieliśmy, bo `master` miał tylko pliki produkcyjne i nic więcej. 

Pojawiło się pytanie: 

Jak sprawić, aby branch `master` wrócił do stanu użyteczności, a przy okazji nie mieszać za bardzo w gitowej historii?

Istnieje coś takiego jak `git revert <commit_id>` - jednak ta komenda sprawia, że powstaje nowy commit ze 'starymi' zmianami. 
Może nie zawsze jest to złe rozwiązanie, jednak już kiedyś musiałem robić reverta do reverta i takie commity słabo wyglądają w historii gita.

Z pomocą przychodzą dwa polecenia, ściśle ze sobą powiązane: 

`git reset --hard <commit_id>` - spowoduje przywracenie naszego lokalny branch do stanu z commita, którego ID mu przekażemy

`git push origin <branch_name> -f` - wypushuje nasze lokalne zmiany do brancha, nadpisując jednocześnie jego historie. 

Oczywiście polecenia wywołujemy będąc na skopanym branchu (w naszym przypadku był to `master`).

Po tym zabiegu, mogliśmy już normalnie zrobić Pull Requesta, z z brancha `develop` do brancha `master`. Wszystkie zmiany były 
pięknie wyświetlone, a historia brancha `master` pozostała niezbrukana.

Z tego też powodu, dobrze mieć brancha `develop` - do którego mergujemy feature branche i który powinien 
(w większym lub mniejszym stopniu) także być stabilny, a nie ładować każdy nowy feature bezpośrednio do mastera. 


*_Powyższe rozwiązanie **nie jest** zalecane do notorycznego używania w codziennej pracy z GITem. 
Ponieważ w ten sposób manipulujemy historią GITa, a nie o to chodzi w systemie kontroli wersji. 
Traktujcie je raczej jako sposób radzenia sobie z sytuacją, gdy coś nieoczekiwanie, pójdzie bardzo źle - przykładowo
wszystkie źródła zastąpicie plikami produkcyjnymi ;)_