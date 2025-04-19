interface AboutProps {
  title: string;
  children: React.ReactNode;
}

export default function AboutContainer({ title, children }: AboutProps) {
  return (
    <div className='p-5 flex flex-col gap-6 justify-center bg-[color:var(--highlight)] rounded-2xl shadow-lg'>
      <h1 className='text-3xl font-bold text-[color:var(--accent)] md:text-4xl'>{title}</h1>
      {children}
    </div>
  );
}
