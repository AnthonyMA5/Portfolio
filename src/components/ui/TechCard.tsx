import ThemedIcon from "./ThemeIcon";

type Props = {
  name: string;
  lightSrc: string;
  darkSrc: string;
};

export default function TechCard({ name, lightSrc, darkSrc }: Props) {
  return (
    <div className="w-full color-transition bg-light-50 dark:bg-dark-200 hover:bg-light-100 dark:hover:bg-dark-100 py-4 flex flex-col items-center justify-center rounded-2xl shadow-lg">
  <div className="w-9 h-9 flex items-center justify-center">
    <ThemedIcon
      lightSrc={lightSrc}
      darkSrc={darkSrc}
      alt={name}
      width={36}
      height={36}
    />
  </div>
  <p className="text-caption2 mt-3">{name}</p>
</div>
  );
}