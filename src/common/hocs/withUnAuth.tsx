export function withUnAuthentication<T>(Component: React.ComponentType<T>) {
  const HOC = (props: any) => {
    return <Component {...props} />;
  };

  HOC.layout = 'client';

  return HOC;
}
