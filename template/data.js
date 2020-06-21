let map_data = new Vue({
	el: `#app`,
	data: {
		map: {
			name: `Platform Power`,
			description: `Platform Power is a team based PVP minigame where the goal is to keep your team from being eliminated and to eliminate the other teams. You can keep your team alive by securing your bed and powering the platforms for your team to gain resources and helpful advantages over the other teams, but if the other teams get them powered first you may be at risk of elimination sooner than wanted. These platforms are used to gain the resources needed to win and to fend off the other teams. This minigame supports between 2-4 teams each with at least 1 player per team. Download at the bottom of this page.`,
			versions: [],
			images: [],
			attributions: [
				{
					name: `Jarren`,
					info: ``,
					links: []
				},
				{
					name: `Ben Baptist`,
					info: ``,
					links: []
				},
				{
					name: `Alan`,
					info: ``,
					links: []
				}
			],
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
				if (version.latest && !version.hidden) {
					return version;
				};
			};
			return false;
		}
	}
})