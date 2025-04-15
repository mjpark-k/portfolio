import AboutListContents from './AboutListContents';

interface Item {
  title: string;
  duration: string;
  contents: string;
}

interface AboutListProps {
  data: Item[];
}

export default function AboutList({ data }: AboutListProps) {
  return (
    <div className='flex flex-col gap-8'>
      {data.map((data) => (
        <AboutListContents
          key={data.title}
          title={data.title}
          duration={data.duration}
          contents={data.contents}
        />
      ))}
    </div>
  );
}
