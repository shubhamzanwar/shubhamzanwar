<template>
  <Layout :maxWidth="900">
    <div class="title-wrapper">
      <div class="post-title">{{ $page.post.title }}</div>
      <div class="post-profile">
        <!-- <g-image src="~/assets/home.png" class="banner-image" /> -->
        <g-image src="~/assets/profile-picture.png" alt="shubham zanwar's mugshot" class="profile-pic" />
        <div class="profile-meta">
          <div class="author-name"><a href="/blog">Shubham Zanwar</a></div>
          <div class="date">Published on <strong>{{ $page.post.date }}</strong></div>
          <div class="social-wrapper">
            <social-icon iconType="twitter" :link="links.twitter"/>
            <social-icon iconType="github" :link="links.github"/>
            <div class="time-to-read">{{ coffee }} {{ $page.post.timeToRead }} min read</div>
          </div>
        </div>
      </div>
    </div>
    <img :src="$page.post.coverImage" class="cover" alt="" />
    <div class="coverCredit" v-html="$page.post.coverCredit" />
    <div class="post-content">
      <div v-html="$page.post.content" />
    </div>
    <divider />
    <Disqus shortname="shubhamzanwarblog" :identifier="$page.post.title" />
    <divider />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    id
    title
    content
    date (format: "DD MMM YYYY")
    timeToRead
    coverImage
    subTitle
    coverCredit
  }
}
</page-query>

<script>
import Divider from "../components/Divider";
import { getCoffeeCount } from "../utils/getCoffeeCount";
import profileLinks from '../constants/profileLinks.json';
import SocialIcon from '../components/Blog/SocialIcon';

export default {
  components: {
    Divider,
    SocialIcon
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.subTitle
        },
        {
          property: 'og:title',
          content: this.$page.post.title
        },
        {
          property: 'og:description',
          content: this.$page.post.subTitle
        },
        {
          property: 'og:image',
          content: `https://shubhamzanwar.com${this.$page.post.coverImage}`
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          property: 'twitter:site',
          content: '@szanwar22'
        },
        {
          property: 'twitter:title',
          content: this.$page.post.title
        },
        {
          property: 'twitter:description',
          content: this.$page.post.subTitle
        },
        {
          property: 'twitter:image',
          content: `https://shubhamzanwar.com${this.$page.post.coverImage}`
        },
      ]
    }
  },
  computed: {
    coffee() {
      return getCoffeeCount(this.$page.post.timeToRead);
    },
    links() { return profileLinks }
  },
};
</script>

<style>
.title-wrapper {
  /* text-align: center; */
  margin: 3rem 0 0;
}
.post-title {
  font-weight: 500;
  font-size: 2.2rem;
}

.post-sub-title {
  color: #999;
  font-size: 1.5rem;
}

.post-profile {
  margin: 0.75rem 0 1rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
}

.profile-pic {
  height: 64px;
  width: 64px;
  border-radius: 50%;
}

.profile-meta {
  margin-left: 1rem;
}

.author-name {
  font-size: 1.1rem;
  font-weight: bold;
}

.author-name > a {
  color: #000;
  text-decoration: none;
}

.date {
  color: #999;
}

.social-wrapper {
  display: flex;
  align-items: center;
}

.time-to-read {
  color: #999;
  margin-left: 0.3rem;
}

.cover {
  width: 100%;
}

.coverCredit {
  font-size: 1rem;
  text-align: center;
  color: #999;
  margin-top: 0.2rem;
}

.coverCredit > a {
  color: #999;
}

.post-content {
  margin-top: 1rem;
  font-size: 1.2rem;
}

blockquote {
  border-left: 5px solid #999;
  margin-inline-start: 0;
  padding-inline-start: 2.5rem;
  box-sizing: border-box;
}

code {
  background: #f5f2f0;
}

@media (max-width: 768px) {
  .profile-pic {
    height: 50px;
    width: 50px;
  }
  blockquote {
    border-left: 3px solid #999;
  }
}
</style>
