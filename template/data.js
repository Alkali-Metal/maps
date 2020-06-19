const version_object = {
	id: ``,
	latest: true,
	filename: ``,
	mc_versions: ``,
	release_date: ``,
	changes: []
};
const attribution_object = {
	name: ``,
	info: ``,
	links: [
		[`link name`, `link`]
	]
};
const other_download = {
	name: ``,
	filename: ``,
	info: ``,
	alt: ``
};
const image_array = [`filepath`, `alt text`];


let map_data = new Vue({
	el: `#app`,
	data: {
		map: {
			name: `MAP NAME`,
			description: ``,
			versions: [],
			images: [],
			attributions: [],
			other_downloads: []
		},
		page: {
			show: layout,
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