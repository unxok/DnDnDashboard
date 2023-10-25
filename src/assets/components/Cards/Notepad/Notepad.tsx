export const Notepad = (props: any) => {
  const { children } = props;
  const { text } = props.configs.required;

  console.log("props", props);

  return (
    <div className='absolute flex h-24 flex-col items-center justify-center rounded-md border border-black bg-primary p-1 text-accent'>
      <h1 className='text-2xl'>Notepad</h1>
      <div>{text}</div>
      {children}
    </div>
  );
};
