import Index from 'modules/auth/login';

// const withUnAuthentication = (Component: any): any => {
//   const HOC = (props: any) => {
//     return <Component {...props} />;
//   };

//   return HOC;
// };

// const IndexUnAuthentication = withUnAuthentication(Index);

// IndexUnAuthentication.layout = 'admin';

(Index as any).layout = 'admin';

export default Index;
