import { formatDate } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { BlogProps } from "@/models/BlogProps";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PostItem = ({
  title,
  description,
  category,
  author,
  author_img,
  date,
  id,
  image,
}: BlogProps) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  return (
    <div className="mt-4">
      <Link href={`/blogs/${id}`}>
        <Card className="bg-zinc-100 flex flex-col gap-0">
          <CardHeader className="inline-flex justify-between">
            <CardTitle>{truncateText(title, 50)}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml={false}>
                {truncateText(description, 100)}
              </ReactMarkdown>
            </CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm">{author}</span>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-zinc-500 text-sm">{formatDate(date)}</p>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default PostItem;
