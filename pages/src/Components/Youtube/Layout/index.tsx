export default function Layout({ children }: any) {
  return (
    <div>
      <div>TopBar</div>
      <div>Navbar</div>
      <div>{children}</div>
    </div>
  );
}
