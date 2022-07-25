import useLogic from './useLogic';
import LoginComponent from './components';

const Index = () => {
  const { auth, onSubmit } = useLogic();
  return <LoginComponent auth={auth} onSubmit={onSubmit} />;
};

export default Index;
