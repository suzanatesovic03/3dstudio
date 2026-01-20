# 3D Studio Website

Ovo je moderna Web aplikacija izgrađena pomoću **React**-a i **Material UI**-a. Projekat uključuje navigaciju kroz više stranica, kontakt formu sa validacijom i interaktivne elemente.

## Tehnologije

* **React 18** - Frontend biblioteka
* **Material UI (MUI)** - Komponente i dizajn sistem
* **React Router DOM** - Navigacija kroz aplikaciju
* **JavaScript (ES6+)** - Logika aplikacije

## Funkcionalnosti

* **Smooth Scroll:** Navigacija unutar početne stranice.
* **Kontakt Forma:** Funkcionalna forma sa `onChange` handlerom i `Snackbar` obaveštenjima o uspehu.
* **Responsive Design:** Sajt je prilagođen svim veličinama ekrana (Mobile, Tablet, Desktop) koristeći MUI Grid sistem.
* **Custom Theme:** Personalizovane boje i tipografija (Anta i Lato fontovi).

## Instalacija i Pokretanje

Da biste pokrenuli projekat lokalno, pratite ove korake:

1.  **Klonirajte repozitorijum:**
    ```bash
    git clone https://github.com/suzanatesovic03/3dstudio.git
    ```

2.  **Uđite u folder projekta:**
    ```bash
    cd 3dstudio
    ```

3.  **Instalirajte zavisnosti (dependencies):**
    ```bash
    npm install
    ```

4.  **Pokrenite razvojni server:**
    ```bash
    npm run dev
    ```

Aplikacija će biti dostupna na adresi `http://localhost:5173`.

## Struktura projekta

- `src/pages` - Sadrži komponente stranica (Home, Contact).
- `src/App.js` - Glavna ruta i struktura aplikacije.
- `src/main.jsx` - Konfiguracija teme i Router-a.
