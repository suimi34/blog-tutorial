import type { Post as PrismaPost } from "@prisma/client";

import { prisma } from "~/db.server";

interface Post {
  slug: string;
  title: string;
}

export async function getPosts(): Promise<Post[]> {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(
  post: Pick<PrismaPost, "slug" | "title" | "markdown">,
) {
  return prisma.post.create({ data: post });
}
