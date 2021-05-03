import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import French from "../lang/fr.json";
import Serbian from "../lang/sr.json";
import English from "../lang/en.json";
import German from "../lang/de.json";

export const Context = React.createContext();

const local = navigator.language;

let lang;

switch (local) {
  case local === "en":
    lang = English;
    break;
  case local === "fr":
    lang = French;
    break;
  case local === "de":
    lang = English;
    break;

  default:
    lang = Serbian;
    break;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);

  const [messages, setMessages] = useState(lang);

  function selectLanguage(e, data) {
    // const newLocale = e.target.value;
    const newLocale = data.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
    } else {
      if (newLocale === "fr") {
        setMessages(French);
      }
      if (newLocale === "de") {
        setMessages(German);
      } else {
        setMessages(Serbian);
      }
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
