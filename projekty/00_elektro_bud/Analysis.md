## Elektro-Bud – analiza wymagań

## 1. Opis problemu
Hurtownia "Elektro-Bud" prowadzi magazyn ręcznie (papier, Excel), przez co trudno ustalić stany, lokalizację towaru i autora operacji, a można przez przypadek wydać więcej towaru, niż jest w magazynie. 
Klient chce jednego, prostego i szybkiego systemu, na początek w wersji demonstracyjnej z jednym elementem.
___
## 2. Wymagania funkcjonalne
**Produkty:** lista, dodawanie, edycja, usuwanie produktów (EAN, nazwa, kategoria, sektor, regał, półka) oraz wyszukiwanie po EAN lub nazwie. <br>
**Operacje:** przyjęcia i wydania zmieniające stan, bez możliwości wydania ponad ilość w magazynie, z zapisem kto, co i kiedy (historia dla kierownika). <br>
**Dostęp:** własne konta i role (magazynier, kierownik, administrator).

## 3. Wymagania niefunkcjonalne
Odpowiedź systemu w 1–2 sekundy, prosty interfejs, bezpieczne hasła, dostęp przez przeglądarkę, trwałość danych.

## 4. Zakres aplikacji
Zrobione: produkty (lista, dodawanie, edycja, usuwanie, wyszukiwanie) z zapisem w localStorage. 
Poza zakresem: przyjęcia, wydania, historia, konta i role, raporty.