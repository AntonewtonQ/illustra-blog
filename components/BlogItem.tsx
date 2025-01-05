import { BlogProps, formatDate } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";

const BlogItem = ({
  title,
  description,
  category,
  author,
  author_img,
  date,
  id,
  image,
}: BlogProps) => {
  return (
    <div className="mt-4">
      <Link href={`/blogs/${id}`}>
        <Card className="bg-zinc-100 flex flex-col gap-0">
          <CardHeader className="inline-flex justify-between">
            <p className="text-[15px] font-light">{`#${category}`}</p>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{description}</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="flex justify-center items-center gap-2">
              <Image
                src={author_img}
                alt="imageauthor"
                width={38}
                height={38}
              />
              <span className="text-sm lg:text-lg">{author}</span>
            </p>
            <p className="text-zinc-500 text-sm">{formatDate(date)}</p>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default BlogItem;
