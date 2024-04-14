export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white fixed z-[400] top-0 left-0 w-full h-full overflow-y-scroll">
      {children}
    </div>
  );
}
