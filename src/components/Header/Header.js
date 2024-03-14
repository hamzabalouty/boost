import React, {useState} from 'react';
import './Header.css';
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
                <li><a href='#' className='header-link'>Home</a></li>
                <li class="header-link active-link">Pages <IoIosArrowDown className='b-arrow-icon'/>
                <div class="pages-list">
                    <li>
                        <a href='#' className='header-link'>About Us</a>
                    </li>
                    <li>
                        <a href='#' className='header-link'>Team</a>
                    </li>
                    <li>
                        <a href='#' className='header-link'>Testimonials</a>
                    </li>
                    <li>
                        <a href='#' className='header-link'>Pricing Plan</a>
                    </li>
                    <li>
                        <a href='#' className='header-link'>FAQs</a>
                    </li>
                </div>
                </li>
                <li><a href='#' className='header-link'>Services</a></li>
                <li><a href='#' className='header-link'>Blog</a></li>
                <li><a href='#' className='header-link'>Contact</a></li>
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
                <li><a href='#' className='header-link'>Home</a></li>
                <li>
                    <a href='#' className='header-link'>About Us</a>
                </li>
                <li>
                    <a href='#' className='header-link'>Team</a>
                </li>
                <li>
                    <a href='#' className='header-link'>Testimonials</a>
                </li>
                <li>
                    <a href='#' className='header-link'>Pricing Plan</a>
                </li>
                <li>
                    <a href='#' className='header-link'>FAQs</a>
                </li>
                <li>
                    <a href='#' className='header-link'>Services</a>
                </li>
                <li>
                    <a href='#' className='header-link'>Blog</a>
                </li>
                <li>
                    <a href='#' className='header-link'>Contact</a>
                </li>
              </ul>
            </div>
          </Modal>
        </div>
    </div>
  )
}

export default Header;