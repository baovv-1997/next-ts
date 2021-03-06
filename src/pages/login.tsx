import { withUnAuthentication } from 'common/hocs';
import Index from 'modules/auth/login';

const IndexUnAuthentication = withUnAuthentication<JSX.Element>(Index);

IndexUnAuthentication.layout = 'admin';

export default IndexUnAuthentication;
