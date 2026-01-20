import styels from "./tag.module.css";

type Tag = {
  id: string;
  name: string;
};

type Props = {
  tag: Tag;
};

export default function Tag({
  tag,
}: Props) {
  return (
    <div className={styels.tag}>
      <p>{tag.name}</p>
    </div>
  );
}
