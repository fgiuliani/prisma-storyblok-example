import React from "react";
import { PrismaClient } from "@prisma/client";
import { fetchAPI } from "../utils/storyblok";

export default function List({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div key={post?.id}>
          <div className="font-bold text-xl my-4">{post?.content.title}</div>
          <p className="text-base text-gray-600">{post?.content.intro}</p>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const articles = await prisma.article.findMany();

  const posts = await Promise.all(
    articles.map(async (article) => {
      const slug = article.slug;

      const data = await fetchAPI(
        `
        query PostBySlug($slug: ID!) {
          PostItem(id: $slug) {
              id
              content {
                title
                intro
              }
          }
        }
      `,
        {
          variables: {
            slug: `blog//${slug}`,
          },
        }
      );

      return data?.PostItem;
    })
  );

  return {
    props: {
      posts: posts,
    },
  };
}
