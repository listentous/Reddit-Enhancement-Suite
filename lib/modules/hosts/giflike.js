export default {
	moduleID: 'giflike',
	name: 'giflike',
	domains: ['giflike.com'],
	detect: ({ href }) => (/^https?:\/\/(?:\w+\.)?giflike\.com\/(?:a\/)?(\w{7})(?:\/.*)?/i).exec(href),
	handleLink(href, [, videoId]) {
		return {
			type: 'VIDEO',
			controls: false,
			loop: true, // Loops since it's gif-like, short form.
			muted: true,
			sources: [{
				source: `http://i.giflike.com/${videoId}.webm`,
				type: 'video/webm',
			}, {
				source: `http://i.giflike.com/${videoId}.mp4`,
				type: 'video/mp4',
			}, {
				source: `http://i.giflike.com/${videoId}.gif`,
				type: 'image/gif',
			}],
		};
	},
};
