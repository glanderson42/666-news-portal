# 666 Hírportál
- A  főoldalon  megjelennek  a  legfrissebb  hírek  (cím és  összefoglaló,dátum szerint csökkenő sorrendben, legfeljebb 10), illetve a lap tetején kiemelten a vezető cikk (cím és összefoglaló) képpel (amennyiben több kép tartozik a cikkhez, az első jelenik meg, kicsinyített méretben).

- A címet kiválasztva megjelenik  a  teljes  tartalom(beleértve a szerző nevét, illetve a bevitel, vagy utolsó módosítás dátumát)képpel (ha van kép a cikkhez rendelve).

- A  hírportál  tartalmaz  egy  archívumot,  ahol  dátum  szerint  csökkenő sorrendben listázódnak a hírek (cím és összefoglaló). Egy  oldalon  legfeljebb 20hírt láthatunk, a többiért lapozni kell. Az archívumban lehet keresni is, megadott dátumra, cím(részlet)re, vagy tetszőleges szóra a cikk tartalmából.

- A  program  használatához  először  be  kell  jelentkeznie  a  munkatársnak  a felhasználónév és a jelszó megadásával. Ezt követően válnak elérhetővé a szerkesztési funkciók (illetve a kijelentkezés)

- A főablakban a saját cikkek listázódnak dátum szerint (cím, író, dátum), amelyeket módosíthatunk, illetve törölhetünk is.

- Új cikk felvitelénél meg kell adnunk a címet, az összefoglalót (max.  1000 karakter),  valamint  a  teljes  szöveget.  Ezek  kitöltése  kötelező.  A  cikk beállítható vezető  cikknek,  ekkor  azonban  kötelező  legalább  egy  képet feltölteni hozzá. Ezen felül feltölthetnek tetszőleges számú képet a cikkhez.

- Cikk módosításánál is ugyanezta felületet kapjuk vissza, de már előre kitöltve.

- Cikk törlésénél a program megerősítést kér a felhasználótól.

Az adatbázis az alábbi adatokat tárolja: 
- felhasználó(név, azonosító, jelszó)
- cikkek (cím, szerző, dátum, összefoglaló, tartalom, vezető cikk-e)
- Thumbnailkep (cikk azonosító, kép)
- Kommentek (cikk azonosito, felhasznalonev, tartalom)