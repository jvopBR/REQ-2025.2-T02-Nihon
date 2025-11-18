export const metadata = {
  title: 'Auth',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  // Não renderiza Header/Footer aqui — apenas renderiza o conteúdo da rota /auth e subrotas
  return <>{children}</>;
}
