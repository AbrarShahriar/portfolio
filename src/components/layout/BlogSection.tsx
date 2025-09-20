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
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
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
    <div className={`  ${data.length > 0 && "mb-24 mt-12 mx-auto py-8"}`}>
      {data.length > 0 && (
        <h1 className="pb-1.5 mt-0 mb-12 ml-auto mr-auto text-5xl font-extrabold text-center border-b-2 border-solid border-dark w-fit text-dark md:text-3xl">
          Recent Writings
        </h1>
      )}
      <div className="w-[80%] m-auto flex items-start justify-center gap-16 md:flex-col md:items-center">
        {data
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .slice(0, 2)
          .map((blog, i) => (
            <div key={i} className="flex flex-col gap-2 max-w-[350px]">
              <div className="rounded-lg mb-2  flex items-center justify-center overflow-hidden">
                <Image
                  className=" object-cover  h-[200px] w-[350px]"
                  alt="cover"
                  src={`https://blog.abrarshahriar.com/_next/image?url=${blog.image
                    .split("/")
                    .join("%2F")}&w=3840&q=75`}
                  width={350}
                  height={200}
                />
              </div>
              <Link
                href={`https://blog.abrarshahriar.com/blog/${blog.slug}`}
                target="_blank"
                className="text-lg text-center text-dark font-bold"
              >
                {blog.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
