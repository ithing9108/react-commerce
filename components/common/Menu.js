const Menu = ({ children }) => {
  console.log('children = ', children);
  return (
    <nav>
      {children}
    </nav>
  )
}

export default Menu;