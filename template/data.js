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
			versions: [
				{
					id: `0.1.0`,
					latest: true,
					filename: ``,
					mc_versions: `1.14.2 - 1.16rc1`,
					release_date: `2020-06-18`,
					changes: [
						`Add support for 1.16rc1`,
						`Fixes a bug`,
						`Fixes another bug`,
						`Fixes a third bug`
					]
				},
				{
					id: `0.0.1`,
					latest: false,
					filename: ``,
					mc_versions: `1.14.2`,
					release_date: `2018-05-01`,
					changes: [
						`Add support for 1.14.2`
					]
				}
			],
			images: [],
			attributions: [],
			other_downloads: [
				{
					name: `Custom Texture Pack`,
					filename: ``,
					info: ``
				}
			]
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