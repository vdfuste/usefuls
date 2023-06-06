"use client";

import { createContext, useState } from "react";

const data = {
	en: {
		title: "Next.js 13 Template",
		nav: {
			about: "About Us",
			contact: "Contact",
			faq: "FAQ",
		},
		pages: {
			about: {
				title: "About Us"
			},
			contact: {
				title: "Contact"
			},
			faq: {
				title: "Frequent Answered Questions"
			},
		},
		copyright: "Copyright © 2023 VDFUSTE. All rights reserved.",
	},
	es: {
		title: "Plantilla Next.js 13",
		nav: {
			about: "Sobre Nosotros",
			contact: "Contacta",
			faq: "Preguntas Frecuentes",
		},
		pages: {
			about: {
				title: "Sobre Nosotros"
			},
			contact: {
				title: "Contáctanos"
			},
			faq: {
				title: "Preguntas Frecuentes"
			},
		},
		copyright: "Copyright © 2023 VDFUSTE. Todos los derechos reservados.",
	},
};

export const LANGS = {
	EN: "en",
	ES: "es",
};

export const I18nContext = createContext(null);

export const I18n = ({ children }) => {
	const [lang, setLang] = useState(LANGS.EN);

	return (
		<I18nContext.Provider value={{ i18n: data[lang], setLang }}>
			{children}
		</I18nContext.Provider>
	);
};
