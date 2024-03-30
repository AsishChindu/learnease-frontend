interface FeedItemProps {
  title: string;
  post: string;
}

export default function FeedItem({title, post}: FeedItemProps) {
  return (
    <div className="border my-2 bg-white px-6 py-1">
      <p className="text-sm font-medium">
        {title}
      </p>
      <p className="text-sm">
        {post}
      </p>
    </div>
  )
}