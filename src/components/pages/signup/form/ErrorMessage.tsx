interface ErrorMessageProps {
  error: string | undefined;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    error && (
      <p className="mt-[3px] text-[12px] text-[red] tracking-tighter">
        {error}
      </p>
    )
  );
};

export default ErrorMessage;
