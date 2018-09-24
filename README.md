# Příklad ke školení Dnešní webová kodéřina

https://www.vzhurudolu.cz/kurzy/webova-koderina

**Autor:** Martin Michálek, martin@vzhurudolu.cz

## Instalace projektu

Nejprve si musíte nainstalovat [Git](https://git-scm.com/downloads) a [Node.js s NPM](https://www.vzhurudolu.cz/prirucka/node-instalace).

Pak instalujte tento konkrétní projekt:

```bash
# naklonování projektu
git clone https://github.com/machal/polaroid-example.git

# skok do adresáře
cd polaroid-example

# instalace závislostí
npm install

# spuštění s pomocí npx - otevře okno prohlížeče s projektem
npx grunt
```

## Závislosti řešíme pomocí NPM

Vývojářské ([Grunt](https://www.vzhurudolu.cz/prirucka/grunt) a [pluginy](https://www.vzhurudolu.cz/prirucka/grunt-pluginy)) i uživatelské závislosti (jQuery a jeho pluginy) spravujeme pomocí [NPM](https://www.npmjs.com/). Viz konfigurák [package.json](./package.json).

## Sestavování pomocí Grunt.js

Důležité úlohy:

- Spustit: `npx grunt` (Spustí vše a nastartuje vývojový server, otevře prohlížeč s nastartovanou synchronizací a pustí hlídání změn.)
- Konfigurace: [Gruntfile.js](./Gruntfile.js)

## Alternativní workflow

Pomocí NPM skriptů:

- Spustit: `npm start`
- Konfigurace: [package.js](./package.js) („scripts“)

Pomocí Gulp.js:

- Spustit: `npx gulp`
- Konfigurace: [gulpfile.js](./gulpfile.js)

## Struktura stylů

* `src/css/index.less` – index stylů
* `src/css/core/` – základy pro CSS: pomocné třídy…
* `src/css/ui/` –  komponenty uživatelského rozhraní
* `src/css/layout/` –  rozložení stránky

Kompilujeme pomocí Grunt.js a PostCSS. Výsledkem je soubor `css/index.css`.


## Javascript

* `js/index.js` – zdroj
* `js/script.min.js` – výsledný Grunt.js kompilát

---

## Zdroje fotek

- https://www.flickr.com/photos/colloidfarl/148800272/sizes/m/in/photostream/
- https://www.flickr.com/photos/26907150@N08/7321463436/sizes/m/in/photostream/
- https://www.flickr.com/photos/byspice/4557787236/sizes/m/in/photostream/
- https://www.flickr.com/photos/neilarmstrong2/5946195915/sizes/m/in/photostream/
- https://www.flickr.com/photos/dcdead/5890591705/sizes/m/in/photostream/
- https://www.flickr.com/photos/35311483@N06/3368553891/
- https://farm1.staticflickr.com/55/148800272_86cffac801.jpg
- https://farm8.staticflickr.com/7236/7321463436_a2e6e2608d.jpg
- https://farm4.staticflickr.com/3101/4557787236_694b445bec.jpg
- https://farm7.staticflickr.com/6024/5946195915_27255e9cbb.jpg
- https://farm6.staticflickr.com/5027/5890591705_b03aea14f2.jpg
- https://farm4.staticflickr.com/3664/3368553891_a97f04ea72.jpg


