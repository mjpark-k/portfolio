interface AboutListContentsProps {
  title: string;
  duration: string;
  contents: string;
}

export default function AboutListContents({
  title,
  duration,
  contents,
}: AboutListContentsProps) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-2xl font-bold'>
        <div>{title}</div>
        <div className='text-xs font-normal text-[color:var(--muted)]'>
          {duration}
        </div>
      </div>
      <div>{contents}</div>
    </div>
  );
}
