import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
	NAME: "Red Kurti",
	EMAIL: "contact@kurti.red",
	NUM_POSTS_ON_HOMEPAGE: 2,
	NUM_WORKS_ON_HOMEPAGE: 3,
	NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
	TITLE: "Home",
	DESCRIPTION:
		"Personal site of Red Kurti, software engineer with years of experience building startups and products.",
};

export const BLOG: Metadata = {
	TITLE: "Blog",
	DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
	TITLE: "Work",
	DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
	TITLE: "Projects",
	DESCRIPTION:
		"A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
	{
		NAME: "twitter-x",
		HREF: "https://twitter.com/redikurti_",
	},
	{
		NAME: "github",
		HREF: "https://github.com/redegade",
	},
	{
		NAME: "linkedin",
		HREF: "https://www.linkedin.com/in/redikurti",
	},
];
