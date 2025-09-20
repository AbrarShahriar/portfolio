"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BlogPost } from "../../../types";

export default function BlogSection() {
  const [data, setData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://blog.abrarshahriar.com/api/blogdata");
        const data = await res.json();
        if (res.ok) {
          setData(data.blogs);
        } else {
          setData([]);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`w-[80%] ${data.length > 0 && "mb-48 mt-12 mx-auto"}`}>
      {data.length > 0 && (
        <h1 className="pb-1.5 mt-0 mb-12 ml-auto mr-auto text-5xl font-extrabold text-center border-b-2 border-solid w-fit border-dark">
          Recent Writings
        </h1>
      )}
      <div className="flex items-start gap-8">
        {data
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .slice(0, 2)
          .map((blog, i) => (
            <div key={i}>
              <Image
                className="rounded-lg object-contain mb-2"
                alt="cover"
                src={`https://blog.abrarshahriar.com/_next/image?url=${blog.image
                  .split("/")
                  .join("%2F")}&w=3840&q=75`}
                width={1280}
                height={720}
              />
              <Link
                href={`https://blog.abrarshahriar.com/blog/${blog.slug}`}
                target="_blank"
                className="text-xl text-blue-900 font-bold"
              >
                {blog.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
