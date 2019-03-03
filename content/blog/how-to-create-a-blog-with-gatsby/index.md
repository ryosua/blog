---
title: How to Create a Blog With Gatsby for Front-End Developers
date: '2019-01-19'
---

## Moving from Ghost to Gatsby

When I first created this blog I used a platform called Ghost and chose to host it on the official Ghost hosting service. I chose Ghost because it was open source, written in JavaScript, I liked the design of the templates, and you could write your blog posts in markdown. I originally planned to use a cheaper hosting solution than the official one or to try hosting it using a Raspberry Pi, but I decided to save myself the time and payed for the hosting service.

Overall I have been pretty happy with Ghost, but as this blog is more of a hobby and not generating any real income, paying over \$300 dollars a year seemed like too much.

Recently I have heard about [GatsbyJS](https://www.gatsbyjs.org/) which is a static CMS that uses JavaScript, React, GraphQL, and Markdown to generate websites and blogs. I wanted to try it out knowing that hosting a static site is super easy and essentially free other than the cost of a domain name.

## Migrating my Blog

I decided to give Gatsby a try. I do not consider myself a designer and wanted an out of the box solution with a basic template, where I could copy and paste my markdown files. Luckily Gatsby has something called "starters" which are Github repos that you can use as a starting point for your blog. It is sort of like create react app, but it comes with a basic design and a few example blog posts.

I found one that I liked, gatsby-starter-blog, and was able to initialize the blog with a simple command:

`gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog`

From there you can just cd into the directory and run a command to host it locally:

```
cd blog
yarn
gatsby develop
```

And that's all it took to get the blog up and running on my computer. I replaced the example blog posts with the markdown from the Ghost admin pages, changed the bio page, and my blog was ready to publish.

## Hosting My Blog

For hosting, recently switched from Surge to Netlify for hosting. The free level lets you host unlimited static sites, lets you use your own custom site, and sets up SSL with Lets Encrypt automatically. When adding a site it will ask you to connect to Github and pick a repo, ask you what command to use to build (`gatsby build`) and what directory to publish (`public/`). Then all you have to do is enter the DNS settings that they give you into your domain name manager. You can also buy and manage domain names directly from Netlify if you don't have an exsiting one.

## Summary

I was really impressed with Gatsby. It only took me about 2-3 hours to get a decent looking blog up, and when I finally make the switch it will save me a few hundred dollars per year. I feel like I haven't even scratched the surface of Gatsby either. You can totally customize the site using React, and even pull data from other sources and combine it with your static files using GraphQL. Gatsby is a great solution to quickly create a blog or content driven website for virtually free. I was surprised to find that the React docs also use Gatsby. I am looking forward to blogging on Gatsby and digging deeper by writing some custom components with React.
