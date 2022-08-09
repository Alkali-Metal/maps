let map_data = new Vue({
	el: `#app`,
	data: {
		map: {
			name: `Platform Power`,
			description: `Platform Power is a team based PVP minigame where the goal is to keep your team from being eliminated and to eliminate the other teams. You can keep your team alive by securing your bed and powering the platforms for your team to gain resources and helpful advantages over the other teams, but if the other teams get them powered first you may be at risk of elimination sooner than wanted. These platforms are used to gain the resources needed to win and to fend off the other teams. This minigame supports between 2-4 teams each with at least 1 player per team. Download at the bottom of this page.`,
			versions: [
				{
					id: `1.6.0`,
					latest: true,
					flagged: {
						show: false,
						colour: ``
					},
					hidden: false,
					download: true,
					filename: `Platform_Power_1.19.1-v1.6.0.zip`,
					mc_versions: `1.19.1`,
					release_date: `2022-08-02`,
					changes: [
						`PATCH: Swapped from armour stands in favour of marker entities`,
						`PATCH: Made it so players can't skip the night at all via sleeping`,
						`FIX: Updated commands to work with 1.19.1 syntax`,
					]
				},
				{
					id: `1.5.4`,
					latest: false,
					flagged: {
						show: false,
						colour: ``
					},
					hidden: false,
					download: true,
					filename: `Platform_Power_1.16.5-v1.5.4.zip`,
					mc_versions: `1.16.5`,
					release_date: `2021-04-29`,
					changes: [
						`FIX: Players that join mid-game are now properly teleported back to the lobby once the game is over.`
					]
				},
				{
					id: `1.5.3`,
					latest: false,
					flagged: {
						show: false,
						colour: ``
					},
					hidden: false,
					download: true,
					filename: `Platform_Power_1.16.5-v1.5.3.zip`,
					mc_versions: `1.16.5`,
					release_date: `2021-04-17`,
					changes: [
						`FEATURE: Change the scoreboard in the sidebar to be how many platforms the other teams have powered instead of how many players are alive for each team.`,
						`FEATURE: Added advancements to help teach players the game`,
						`FEATURE: When wanting to spectate a game, the player gets put into spectator mode immediately instead of just being moved to the upper area of the lobby.`,
						`PATCH: Updated the block tags for the new lobby blocks.`,
						`PATCH: Removed the need for the bad luck effect.`,
						`PATCH: Protected the origin redstone block with obsidian.`,
						`PATCH: Re-added planks to the food/ladder island.`,
						`PATCH: Update pack_format in the datapacks`,
						`PATCH: Update misc island spawning to use a random_chance predicate instead of a loot table`,
						`PATCH: Prevent potentially epileptic-seizure inducing flashing when randomizing teams`,
						`FIX: Misc island actually considers if it is powered or not before attempting to summon items.`,
						`FIX: When enabling an already enabled team that is marked as ready, the barrier no longer gets removed.`,
						`FIX: Reset the powered island count before starting the game to prevent erroneous counts.`
					]
				},
				{
					id: `1.5.3-beta_3`,
					latest: false,
					flagged: {
						show: false,
						colour: ``
					},
					hidden: true,
					download: false,
					filename: `Platform_Power_1.16.5-v1.5.3.b3.zip`,
					mc_versions: `>= 1.16.5`,
					release_date: `2021-04-16`,
					changes: [
						`FEATURE: When wanting to spectate a game, the player gets put into spectator mode immediately instead of just being moved to the upper area of the lobby.`,
						`PATCH: Updated the block tags for the new lobby blocks.`,
						`PATCH: Removed the need for the bad luck effect.`,
						`PATCH: Protected the origin redstone block with obsidian.`,
						`PATCH: Re-added planks to the food/ladder island.`,
						`PATCH: Update pack_format in datapacks`,
						`FIX: Misc island actually considers if it is powered or not before attempting to summon items.`,
						`FIX: When enabling an already enabled team that is marked as ready, the barrier no longer gets removed.`
					]
				},
				{
					id: `1.5.3-beta_2`,
					latest: false,
					flagged: {
						show: false,
						colour: ``
					},
					hidden: true,
					download: false,
					filename: `Platform_Power_1.16.5-v1.5.3.b2.zip`,
					mc_versions: `>= 1.16.5`,
					release_date: `2021-04-05`,
					changes: [
						`PATCH: Update misc island spawning to use a random_chance predicate instead of a loot table`,
						`PATCH: Prevent potentially epileptic-seizure inducing flashing when randomizing teams`,
						`FIX: Reset the powered island count before starting the game to prevent erroneous counts.`
					]
				},
				{
					id: `1.5.3-beta_1`,
					latest: false,
					flagged: {
						show: false,
						colour: ``
					},
					hidden: true,
					download: false,
					filename: `Platform_Power_1.16.2-V1.5.3.b1.zip`,
					mc_versions: `>= 1.16.2`,
					release_date: `N/A`,
					changes: [
						`FEATURE: Change the scoreboard in the sidebar to be how many platforms the other teams have powered instead of how many players are alive for each team.`,
						`FEATURE: Added advancements to help teach players the game`,
						`PATCH: Remove planks from the food platform`,
						`FIX: Misc islands triggering when they shouldn't be triggered. (orange triggered if blue was powered, red triggered if green was powered)`
					]
				},
				{
					id: `1.5.2`,
					latest: false,
					flagged: {
						show: false,
						colour: ``
					},
					hidden: false,
					download: true,
					filename: `Platform_Power_1.16-V1.5.2.zip`,
					mc_versions: `1.16.X`,
					release_date: `2020-06-23`,
					changes: [
						`FEATURE: Add support for 1.16`,
						`FEATURE: Add an error message for when not all of the teams are ready and someone tries to start the game.`,
						`FEATURE: Change from a chat message to a title that the game is starting.`,
						`FEATURE: Add a <code>control</code> menu item for force-starting the game regardless of pre-game checks. This should rarely be used, but can be used if people on teams are being annoying and not ready-ing up after a while.`,
						`FEATURE: Fix preventing the game from occasionally starting due to weird behaviour with the team enable/disable functions.`,
						`FEATURE: Fixes edge case if all players died at the same time (or the game was only started with no one on an actual team) it will no longer hang in a perma-end state.`,
						`FEATURE: Adds a tag to the fireballs that get summoned to prevent them from flickering in and out of existance.`,
						`FEATURE: Unready's a team if the last player on the team decides the spectate the game.`,
						`FEATURE: Adds a scoreboard to keep track of how many times each team has won. This can be reset by using the <code>/function classic:reset_wins</code> command, which will set all teams to 0 wins.`,
						`PATCH: Remove thrown menu prompts from the world.`,
						`PATCH: Updates the tag of blocks to clear to support all the 1.16 blocks.`,
						`FIX: Players being set back to the team settings menu after a game rather than the main menu.`,
						`FIX: Listeners firing for menu events when the control tag is removed from a player.`
					]
				},
				{
					id: `1.5.1`,
					latest: false,
					hidden: false,
					download: false,
					flagged: {
						show: false,
						colour: ``
					},
					filename: `Platform_Power_1.15.2-V1.5.1.zip`,
					mc_versions: `1.15.2`,
					release_date: `2020-06-11`,
					changes: [
						`PATCH: Add the recommended server properties to the archive.`
					]
				},
				{
					id: `1.5.0`,
					latest: false,
					hidden: false,
					download: false,
					flagged: {
						show: false,
						colour: ``
					},
					filename: `Platform_Power_1.15.2-V1.5.0.zip`,
					mc_versions: `1.15.2`,
					release_date: `2020-06-10`,
					changes: [
						`FEATURE: Added support for Minecraft 1.15.2`,
						`FEATURE: Made the game controls much cleaner by using an inventory menu rather than a command book. This prevents players from needing to add the <code>op</code> tag to themselves and allows a more seamless experience for everyone. The menu includes a prompt for the hotbar that displays the keybind the user has the open inventory key set to.`,
						`FEATURE: Added team randomization options.`,
						`FEATURE: Spectator is now not the default team. Unless the game has started, in which case everyone without a team will be put onto the spectator team.`,
						`FEATURE: To restrict menu control to those who are event organizers you can run <code>/tag @s add control</code> as the user who wants control. This tag can be given to as many players as desired. This also exposes an extra setting to remove everyone from all teams.`
					]
				},
				{
					id: `1.4.0`,
					latest: false,
					hidden: false,
					download: false,
					flagged: {
						show: false,
						colour: ``
					},
					filename: `Platform_Power_1.14-V1.4.0.zip`,
					mc_versions: `1.14.X`,
					release_date: `N/A`,
					changes: [
						`PATCH: Changed player detection from team based to effect based. This prevents players leaving in the middle of a game from stopping the game from finishing. This means that everyone in the game will always have the <code> minecraft:unluck</code> effect, this does not impact gameplay at all, it is just a method to be able to see all players in the game for each team.`,
						`PATCH: Updated the list of blocks that the game uses to clear the map, this should prevent any rogue blocks from slipping through the reset system that is in place. The added tags are <code>minecraft:block_list</code> and <code>minecraft:wall_signs</code> (overwritting default)`,
						`FEATURE: After the game you will be teleported back to the zone in the lobby for the team you were on. (Ex: Someone on the green team will be teleported back to the green circle in the lobby). This makes it easier to play with the same teams multiple times in a row if desired.`,
						`FEATURE: Added a debug function, can give you information by running <code>/function classic:debug</code>, this will give you important information for when you are requesting help or reporting a bug.`
					]
				},
				{
					id: `1.3.0`,
					latest: false,
					hidden: false,
					download: false,
					flagged: {
						show: false,
						colour: ``
					},
					filename: `Platform_Power_1.14-V1.3.0.zip`,
					mc_versions: `1.14.X`,
					release_date: `N/A`,
					changes: [
						`FEATURE: Spectators now see blocks`,
						`FIX: Spectators now get put into spectator mode when the game starts rather than survival.`
					]
				},
				{
					id: `1.2.3`,
					latest: false,
					hidden: false,
					download: false,
					flagged: {
						show: false,
						colour: ``
					},
					filename: `Platform_Power_1.14-V1.2.3.zip`,
					mc_versions: `1.14.X`,
					release_date: `N/A`,
					changes: [
						`Unknown`
					]
				},
				{
					id: `1.2.2`,
					latest: false,
					hidden: false,
					download: false,
					flagged: {
						show: false,
						colour: ``
					},
					filename: `Platform_Power_1.14-V1.2.2.zip`,
					mc_versions: `1.14.X`,
					release_date: `N/A`,
					changes: [
						`Unknown`
					]
				},
				{
					id: `1.2.1`,
					latest: false,
					hidden: false,
					download: false,
					flagged: {
						show: false,
						colour: ``
					},
					filename: `Platform_Power_1.14-V1.2.1.zip`,
					mc_versions: `1.14.X`,
					release_date: `N/A`,
					changes: [
						`PATCH: Added a visual indicator of what the button does in the middle of the lobby.`,
						`PATCH: Updates <code>README.txt</code> to include how to get the control book and start the game.`
					]
				},
				{
					id: `1.2.0`,
					latest: false,
					hidden: false,
					download: false,
					flagged: {
						show: false,
						colour: ``
					},
					filename: `Platform_Power_1.14-V1.2.0.zip`,
					mc_versions: `1.14.X`,
					release_date: `N/A`,
					changes: [
						`Unknown`
					]
				},
				{
					id: `1.1.0`,
					latest: false,
					hidden: false,
					download: false,
					flagged: {
						show: false,
						colour: ``
					},
					filename: `Platform_Power_1.14-V1.1.0.zip`,
					mc_versions: `1.14.X`,
					release_date: `N/A`,
					changes: [
						`Unknown`
					]
				},
				{
					id: `1.0.0`,
					latest: false,
					hidden: false,
					flagged: {
						show: false,
						colour: ``
					},
					filename: `Platform_Power_1.14-V1.0.0.zip`,
					mc_versions: `1.14.X`,
					release_date: `N/A`,
					changes: [
						`Initial release`
					]
				}
			],
			images: [
				[`green_1.png`, `A view of the green platforms before a game`],
				[`orange_1.png`, `A view of the orange platforms mid-game`],
				[`orange_2.png`, `A view of the orange platforms in late game`],
				[`lobby_1.png`, `The view of the arena from the lobby with two teams enabled`]
			],
			attributions: [
				{
					name: `Jarren`,
					info: `Jarren is the original designer of Platform Power who was kind enough to allow me to port the map to Minecraft release 1.14+ and release it under the same name.`,
					links: [
						[`Website`, `https://www.thejarren.com/`],
						[`YouTube`, `https://www.youtube.com/user/TheJarrenhorrocks`],
						[`Twitter`, `https://twitter.com/thejarren`]
					]
				},
				{
					name: `Ben Baptist`,
					info: `Ben is the original programmer of the original game, they were the person who wrote all of the commands to make the game come to life.`,
					links: [
						[`Website`, `https://benbaptist.com`],
						[`Twitter`, `https://twitter.com/oha1th3r3`],
						[`GitHub`, `https://github.com/benbaptist`],
						[`Mixer`, `https://mixer.com/benbaptist`]
					]
				},
				{
					name: `Alan`,
					info: `Alan is the one who made some of the textures for the map. The textures contributed are: redstone line, fireball`,
					links: [
						[`Twitter`, `https://twitter.com/CultOfAlan`],
						[`Twitch`, `https://twitch.tv/CultOfAlan`]
					]
				}
			],
			other_downloads: [
				{
					name: `Resource Pack`,
					info: `This is the custom resource pack that can go along with the game. This is completely optional and by no means needed for the map to make sense or look nice.`,
					alt: `Resource Pack Download`,
					filename: `Platform_Power_Remastered_Resource_Pack.zip`
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
			for (var version of this.map.versions) {
				if (version.latest && !version.hidden) {
					return version;
				};
			};
			return false;
		}
	}
})