# NK Matija Gubec — projektna pravila

## Projekt

Službena web stranica NK Matija Gubec iz Gornje Stubice.

## Tehnologije

- React
- Vite
- TypeScript
- SCSS Modules
- React Router
- GitHub Pages
- Bez vlastitog backenda
- EmailJS za slanje e-mailova
- Canvas za generiranje zahvalnice

## Vizualni identitet

Boje izvedene iz klupskog grba:

- žuta: #F8D51C
- crvena: #D72D19
- tamna: #25221C
- bijela: #FFFFFF
- svijetla pozadina: #F7F7F4

Crvenu koristiti kao glavnu brand boju.
Žutu koristiti odmjereno za naglaske i CTA elemente.
Ne koristiti veliku jednoličnu žutu pozadinu.

Dizajn mora izgledati kao originalna službena stranica modernog
nogometnog kluba iz 2026. godine.

Koristiti:

- velike hero fotografije
- snažnu sportsku tipografiju
- mnogo praznog prostora
- blage sjene
- umjereno zaobljene rubove
- suptilne animacije
- mobile-first responsive pristup

Ne kopirati dizajn drugih klubova.

## Navigacija

- Početna
- O nama
- Kategorije
- Kontakt
- Donacije

## Kategorije

- Prstići
- Zagići
- Limači
- Mlađi pioniri
- Stariji pioniri
- Veterani
- Kadeti — uskoro
- Juniori — uskoro

## Donacije

Forma sadrži:

- ime
- prezime
- iznos donacije
- broj dresa od 0 do 99
- gumb za nasumičan broj
- zaseban pristanak na objavu zahvalnice na društvenim mrežama

Nakon generiranja QR koda korisnik potvrđuje izjavu da je izvršio
donaciju. To nije bankovna potvrda uplate.

## Zahvalnica

Zahvalnica mora sadržavati poleđinu službenog dresa NK Matija Gubec.

Na poleđini dresa moraju biti:

- inicijali svih osobnih imena
- prezime donatora
- odabrani ili nasumično generirani broj od 0 do 99

Primjeri:

- Luka Postružin → L. Postružin
- Petra Krešimir Šimić → P. K. Šimić

Ime mora biti prikazano iznad broja, kao pravi tisak na nogometnom dresu.

Zahvalnica ne smije sadržavati:

- iznos donacije
- datum
- e-mail
- podatke za plaćanje

Dok službena slika dresa nije dostupna, koristi privremenu ilustraciju poleđine dresa koju je kasnije lako zamijeniti stvarnom slikom.

Iznos se koristi samo za generiranje QR koda i e-mail obavijest klubu.

E-mail se šalje na:

nkmatijagubec1970@gmail.com

E-mail mora jasno navesti je li donator odobrio objavu zahvalnice.

## Kvaliteta koda

- Koristi semantički HTML.
- Komponente moraju biti male i razumljive.
- Ne koristi `any` bez opravdanog razloga.
- Ne dupliciraj podatke i stilove.
- Osiguraj pristupačnost tipkovnicom.
- Sve forme moraju imati validaciju i razumljive poruke pogreške.
- Prije završetka pokreni lint i production build.