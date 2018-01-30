# Příklad ke školení Dnešní webová kodéřina

https://www.vzhurudolu.cz/kurzy/webova-koderina

**Autor:** Martin Michálek, martin@vzhurudolu.cz

## Instalace projektu

Nejprve si musíte nainstalovat [NPM a celý Node.js ekosystém](http://www.vzhurudolu.cz/prirucka/node-instalace).

Pak tento konkrétní projekt:

```bash
# instalace Gruntu (pokud nemáte)
npm install -g grunt-cli

# naklonování projektu
git clone https://github.com/machal/polaroid-example.git

# skok do adresáře
cd polaroid-example

# instalace závislostí
npm install

# spuštění Gruntu - otevře okno prohlížeče s projektem
grunt
```

## Závislosti řešíme pomocí NPM

Vývojářské ([Grunt](http://www.vzhurudolu.cz/prirucka/grunt) a [pluginy](http://www.vzhurudolu.cz/prirucka/grunt-pluginy) i uživatelské závislosti (jQuery a jeho pluginy) spravujeme pomocí [NPM](https://www.npmjs.com/). Viz konfigurák [package.json](./package.json).


## Sestavování pomocí Grunt.js

Důležité úlohy:

* `grunt` - spustí vše a nastartuje vývojový server, otevře prohlížeč s nastartovanou synchronizací a pustí hlídání změn
* Pro jednotlivé typy assetů se může hodit `grunt img`, `grunt css`.

Konfigurace je v [Gruntfile.js](./Gruntfile.js) a složce `grunt/`.


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

- http://www.flickr.com/photos/colloidfarl/148800272/sizes/m/in/photostream/
- http://www.flickr.com/photos/26907150@N08/7321463436/sizes/m/in/photostream/
- http://www.flickr.com/photos/byspice/4557787236/sizes/m/in/photostream/
- http://www.flickr.com/photos/neilarmstrong2/5946195915/sizes/m/in/photostream/
- http://www.flickr.com/photos/dcdead/5890591705/sizes/m/in/photostream/
- http://www.flickr.com/photos/35311483@N06/3368553891/
- http://farm1.staticflickr.com/55/148800272_86cffac801.jpg
- http://farm8.staticflickr.com/7236/7321463436_a2e6e2608d.jpg
- http://farm4.staticflickr.com/3101/4557787236_694b445bec.jpg
- http://farm7.staticflickr.com/6024/5946195915_27255e9cbb.jpg
- http://farm6.staticflickr.com/5027/5890591705_b03aea14f2.jpg
- http://farm4.staticflickr.com/3664/3368553891_a97f04ea72.jpg


