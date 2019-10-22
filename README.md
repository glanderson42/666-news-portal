# 666 Hírportál
## 0.1 Bevezeto
(Vass Mark Benjamin - I8WZ8L, Garai Adam - G21IQ5)
- A  főoldalon  megjelennek  a  legfrissebb  hírek  (cím és  összefoglaló,dátum szerint csökkenő sorrendben, legfeljebb 10), illetve a lap tetején kiemelten a vezető cikk (cím és összefoglaló) képpel (amennyiben több kép tartozik a cikkhez, az első jelenik meg, kicsinyített méretben).

- A címet kiválasztva megjelenik  a  teljes  tartalom(beleértve a szerző nevét, illetve a bevitel, vagy utolsó módosítás dátumát)képpel (ha van kép a cikkhez rendelve).

- A  hírportál  tartalmaz  egy  archívumot,  ahol  dátum  szerint  csökkenő sorrendben listázódnak a hírek (cím és összefoglaló). Egy  oldalon  legfeljebb 20hírt láthatunk, a többiért lapozni kell. Az archívumban lehet keresni is, megadott dátumra, cím(részlet)re, vagy tetszőleges szóra a cikk tartalmából.

- A  program  használatához  először  be  kell  jelentkeznie  a  munkatársnak  a felhasználónév és a jelszó megadásával. Ezt követően válnak elérhetővé a szerkesztési funkciók (illetve a kijelentkezés)

- A főablakban a saját cikkek listázódnak dátum szerint (cím, író, dátum), amelyeket módosíthatunk, illetve törölhetünk is.

- Új cikk felvitelénél meg kell adnunk a címet, az összefoglalót (max.  1000 karakter),  valamint  a  teljes  szöveget.  Ezek  kitöltése  kötelező.  A  cikk beállítható vezető  cikknek,  ekkor  azonban  kötelező  legalább  egy  képet feltölteni hozzá. Ezen felül feltölthetnek tetszőleges számú képet a cikkhez.

- Cikk módosításánál is ugyanezta felületet kapjuk vissza, de már előre kitöltve.

- Cikk törlésénél a program megerősítést kér a felhasználótól.

Az adatbázis az alábbi adatokat tárolja: 
- User(id, username, password, firstName, lastName, lastLogin, role, articles)
- Thumbnail(id, url, article)
- Article(id, name, user, postDate, modifiedDate, summary, content)

## 1. Hasznalt technologia:
Spring boot, JPA, Hibernate, Boot-Security

## 2. Vegpontok leirasa
- GET /api/thumbnails/ -> visszaadja az osszem thumbnail
- POST /api/thumbnails/ -> json formaban betudunk rakni egy thumbnailt az adatbazisba

- GET /api/users/ -> visszaadja az osszes usert
- POST /api/users/login -> bejelentkezteti a usert
- POST /api/users/register -> user registralasa
- GET /api/users/{id} -> visszaadja az id-vel rendelkezo usert
- DELETE /api/users/{id} -> kitorli az adott id-vel rendelkezo usert
- PUT /api/users/{id} -> updateli az adott id-vel rendelkezo usert

- GET /api/article/ -> visszaadja az osszes cikket
- GET /api/article/{id} -> visszaadja az adott id-vel rendelkezo cikket
- POST /api/article/ -> hozzaad egy cikket
- PUT /api/article/{id} -> updateli az adott id-vel rendelkezo usert
- DELETE /api/article/{id} -> torli az adott id-vel rendelkezo usert

## 3.Egy vegpont leirasa
![endpoint](https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/73523635_2664454326927204_2294173183638503424_n.jpg?_nc_cat=108&_nc_oc=AQkNAtrItGP6ZAEuT9MVEm3XX0DUivgeC84avnu0CoJfXI9LZzYNdAFwZDTIHv_VWZghXSx2qSTExdAlPSUIp7Dz&_nc_ht=scontent-vie1-1.xx&oh=81e2818ef7ab9a9d356509b042b98e63&oe=5E629FAE)

## 4. Konyvtarstruktura
```
666-news-portal
└───Backend
    └───src
        ├───main
        │   ├───java
        │   │   └───org
        │   │       └───notfakenews
        │   │           └───Backend
        │   │               ├───controllers
        │   │               ├───entities
        │   │               ├───repositories
        |   |               └───services
        │   └───resources
        └───test
            └───java
                └───org
                    └───notfakenews
                        └───Backend
  
```
## 5. DBDiagram
![db](https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/74607741_955582444801013_7555021896580857856_n.png?_nc_cat=110&_nc_oc=AQljkGkEhgLRRT2efPYLJPb6DHQGGo2GEkE4lK8TmvBIIApU-d3Cay8MiPUTAIqllcvWHOGZWNz70iUFpFhIRZGF&_nc_ht=scontent-vie1-1.xx&oh=873af3ac9f637b93f61f42f88ba6b662&oe=5E18CD7E)

## 6. Usercase diagram
![usercase](https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/74325794_954705488239525_4852537308961832960_n.png?_nc_cat=107&_nc_oc=AQlyZQ59KJ8bDkL4x9YFy8dnoBVv8zjVcONLY-QAFjI8rAv4gI2c_E2e9JS_ud7qFNoKs_HA2F60jRxI28X4OzM6&_nc_ht=scontent-vie1-1.xx&oh=dfbc72d6379956441bef53a5edd66d0f&oe=5E569A33)
