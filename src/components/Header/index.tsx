import { useEffect, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import { useCart } from '../../hooks/useCart';
import { Cart, Container } from './styles';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    const products = cart.map((product) => product.id);
    const set = new Set(products);
    setCartSize(set.size);
  }, [cart]);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
