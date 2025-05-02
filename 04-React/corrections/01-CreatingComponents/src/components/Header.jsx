import Navigation from './Navigation';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
  };
  return (
    <header
      style={headerStyle}
    >
      <h1>Hello</h1>
      <Navigation />
    </header>
  );
};
export default Header;
