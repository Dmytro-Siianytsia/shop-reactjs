import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => (
	<header className='header'>
		<Link className='Logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>link</Link>
			<Link className='option' to='/shop'>link</Link>
		</div>
	</header>
)

export default Header
