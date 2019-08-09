# Landing example

>https://landingexample02.netlify.com/

L'applicazione è fatta con React.js, partendo da `create-react-app`.

## Struttura del codice e scelte tecniche.

Il codice è organizzato nel seguente modo: 
Nella folder `public` sono presenti le risorse "statiche"
Nella folder `src` sono presenti i file *JavaScript*, *CSS* e le immagini. Il codice è raggruppato per funzionalità. 
Nella folder `src/features` sono presenti le parti dell'applicazione. Le ho divise in ordine "grafico": `header` e `body`. 

Non sono presenti frameqwork di gestione di *stato globale* come Redux o Mobx, perchè ho ritenuto che non ce ne fosse bisogno. 
Non sono presenti *Classi*, ma i componenti React sono stati sviluppati utilzzando gli Hooks di React.

Ho usato il framework `material-ui` che mi ha abbastanza "costretto" ad usare i "CSS in JS".

## Notifiche push

Mi sarebbe piaciuto implementare le notifiche push in maniera completa, cioè con un service worker, un server, chiavi pubbliche, private e tutti i crismi. Da un lato mi sembrava di fare *overkill*, dall'altro mi ci sarebbe voluto un po' più tempo. Quindi quanto implementato sono solo notifiche (senza push). 

Quando si accetta di ricevere notifiche, appare un box di "debug" in alto a destra. cliccando sul box si può inviare una notifica.

Non è gestito in maniera ottimale, a livello di UIX, quando l'utente decide di non abilitare il browser a ricevere notifiche. Il pulsante rimane cliccabile, ma non viene detto niente all'utente e se si ri-clicca il pulsante non succede niente.

## Issues

- [ ] I box di *Newsletter* e *Push Notifications* nella versione mobile non sono raggruppati in tab, ma sono uno sotto l'altro.

- [ ] Nella versione mobile con schermo "landscape" si spacca l'header.

## Test

Non sono presenti test ☠, ma appena trovo del tempo li metto.
