const theme = require('tailwindcss/defaultTheme');
const twtype = require('@tailwindcss/typography');
const twforms = require('@tailwindcss/forms');
const twaspect = require('@tailwindcss/aspect-ratio');


const round = (num) => num.toFixed(7).replace(/(\.[0-9]+?)0+$/, '$1').replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const px = (px) => `${px}px`;

module.exports = {
	theme: {
		extend: {
		  colors: {
			'skyblue': '#55a7ff',
			'irsred': '#c72038',
			'lgray': '#f2f2f2'
		  },


		  backgroundImage: theme => ({
				'home-mast': "url('/images/masthead-home.jpg')"
		  })
		}
	  },
	important: true, 
	experimental: {
		applyComplexClasses: true
	},
	purge: {
		enabled: process.env.HUGO_ENVIRONMENT === 'production',
		content: [ './hugo_stats.json' ],
		mode: 'all',
		options: {
			defaultExtractor: (content) => {
				let els = JSON.parse(content).htmlElements;
				els = els.tags.concat(els.classes, els.ids);
				return els;
			}
		}
	},
	plugins: [ twtype, twforms, twaspect ]
};