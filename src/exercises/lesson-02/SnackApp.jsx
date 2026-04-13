import SnackList from './SnackList';
import SnackHeader from './SnackHeader';
import SnackFooter from './SnackFooter';

export default function SnackApp() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <SnackHeader />
      <SnackList />
      <SnackFooter />
    </div>
  );
}
