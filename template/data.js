const version_object = {
	id: ``,
	latest: true,
	filename: ``,
	mc_versions: ``,
	release_date: ``
};
const image_array = [`filepath`, `alt text`];


let map_data = new Vue({
	el: `#app`,
	data: {
		map: {
			name: ``,
			description: ``,
			versions: [],
			images: [],
			attributions: []
		},
		page: {
			show: {
				home: true,
				footer: true
			},
			contents: [
				[`Overview`, `./index.html`],
				[`How To Play`, `./how-to-play.html`],
				[`Changelog`, `./changelog.html`],
				[`Attributions`, `./attributions.html`],
				[`Releases`, `./releases.html`]
			],
			footer: [
				[`Overview`, `./index.html`],
				[`All Maps`, `../index.html`]
			]
		}
	},
	computed: {
		latest: function () {
			let latest = [];
			for (var version of this.map.versions) {
				if (version.latest) {
					return version;
				};
			};
			return false;
		}
	}
})