// /src/app/[slug]/page.tsx
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug: params.slug });

  const postImageUrl = post.image ? urlFor(post.image)?.width(550).height(310).url() : null;

  return (
    <main className="container mx-auto max-w-3xl p-8">
      <Link href="/" className="hover:underline">← Back to posts</Link>

      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          width="550"
          height="310"
          className="aspect-video rounded-xl my-4"
        />
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        Published: {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      <div className="prose dark:prose-invert">
        <PortableText value={post.body} />
      </div>
    </main>
  );
}
