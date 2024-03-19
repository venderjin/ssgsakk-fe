export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white fixed top-0 left-0 w-full h-full overflow-y-scroll z-50">
      {children}
    </div>
  );
}
