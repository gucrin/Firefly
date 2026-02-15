import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 显示列数：2列或3列
	columns: 2,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "Porter Robinson",
		imgurl: "http://p1.music.126.net/iwSiQWb1Z9JPViaA-uorWg==/109951170126854022.jpg",
		desc: `MY THIRD ALBUM "SMILE! :D" is out now !!`,
		siteurl: "porterrobinson.com",
		tags: ["牢颇"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Madeon",
		imgurl: "http://p1.music.126.net/s6EDl2nQt8aWYAIYHDwOgQ==/109951167383218365.jpg",
		desc: "NEW ERA: VICTORY",
		siteurl: "https://madeon.net/",
		tags: ["雨果"],
		weight: 9,
		enabled: true,
	},
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
	return friendsConfig
		.filter((friend) => friend.enabled)
		.sort((a, b) => b.weight - a.weight);
};
