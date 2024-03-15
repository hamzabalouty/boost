import React, {useState} from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import Img from '../../assets/Boost-Logo-1.png';
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

function Header() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='header'>
        <div className='header-container'>
            <div className='header-logo'>
                <img src={Img} alt='image'/>
            </div>
            <ul className='header-nav'>
                <li><Link to='/' className='header-link'>Home</Link></li>
                <li class="header-link active-link">Pages <IoIosArrowDown className='b-arrow-icon'/>
                <div class="pages-list">
                    <li>
                        <Link to='/about' className='header-link'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/team' className='header-link'>Team</Link>
                    </li>
                    <li>
                        <Link to='/testimonials' className='header-link'>Testimonials</Link>
                    </li>
                    <li>
                        <Link to='/pricingplan' className='header-link'>Pricing Plan</Link>
                    </li>
                    <li>
                        <Link to='/faqs' className='header-link'>FAQs</Link>
                    </li>
                </div>
                </li>
                <li><Link to='/services' className='header-link'>Services</Link></li>
                <li><Link to='/blog' className='header-link'>Blog</Link></li>
                <li><Link to='/contact' className='header-link'>Contact</Link></li>
            </ul>
            <CiMenuBurger onClick={() => setModalIsOpen(true)} className='menu-icon' />
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)}
                className='header-modal'
            >
            <div>
              <IoMdClose onClick={() => setModalIsOpen(false)} className='close-icon-modal'/>
              <ul className='header-nav-modal'>
                <li><Link to='/' className='header-link'>Home</Link></li>
                <li>
                    <Link to='/about' className='header-link'>About Us</Link>
                </li>
                <li>
                    <Link to='/team' className='header-link'>Team</Link>
                </li>
                <li>
                    <Link to='/testimonials' className='header-link'>Testimonials</Link>
                </li>
                <li>
                    <Link to='/pricingplan' className='header-link'>Pricing Plan</Link>
                </li>
                <li>
                    <Link to='/faqs' className='header-link'>FAQs</Link>
                </li>
                <li>
                    <Link to='/services' className='header-link'>Services</Link>
                </li>
                <li>
                    <Link to='/blog' className='header-link'>Blog</Link>
                </li>
                <li>
                    <Link to='/contact' className='header-link'>Contact</Link>
                </li>
              </ul>
            </div>
          </Modal>
        </div>
    </div>
  )
}

export default Header;