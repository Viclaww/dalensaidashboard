import headline from '../assets/headline.svg'
import bell from '../assets/bell.svg';
import user from '../assets/user.svg';
const Header = () => {
  return (
    <div className="flex items-center justify-between [box-shadow:2px_3px_4px_black] px-[.9rem] py-[.4rem]">
    <img className='h-[40px] w-[40px]' src={headline} alt="" />
    <div className="flex gap-[1.6rem]">
      <img className='h-[40px] w-[40px]' src={bell} alt="" />
      <img className='h-[40px] w-[40px]' src={user} alt="" />
    </div>
    </div>
  )
}

export default Header